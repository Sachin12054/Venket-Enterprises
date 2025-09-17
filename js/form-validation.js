/**
 * ======================================
 * UNIVERSAL FORM VALIDATION SYSTEM
 * Enhanced validation for all forms
 * ======================================
 */

class UniversalFormValidator {
    constructor(formId, config = {}) {
        this.form = document.getElementById(formId);
        this.formId = formId;
        this.config = {
            showSuccessMessages: config.showSuccessMessages || false,
            realTimeValidation: config.realTimeValidation !== false,
            submitUrl: config.submitUrl || null,
            onSuccess: config.onSuccess || null,
            onError: config.onError || null,
            ...config
        };
        
        this.fields = {};
        this.isSubmitting = false;
        this.validationRules = this.getValidationRules();
        
        if (this.form) {
            this.init();
        }
    }

    init() {
        this.setupFields();
        this.setupEventListeners();
        this.setupSubmitButton();
    }

    getValidationRules() {
        return {
            email: {
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address'
            },
            phone: {
                pattern: /^[\+]?[0-9\s\-\(\)]{10,}$/,
                message: 'Please enter a valid phone number (at least 10 digits)'
            },
            name: {
                pattern: /^[a-zA-Z\s\-\.\']{2,}$/,
                message: 'Name must contain only letters, spaces, hyphens, dots, and apostrophes (min 2 characters)'
            },
            serialNumber: {
                pattern: /^[A-Z0-9\-]{3,}$/i,
                message: 'Serial number must contain at least 3 alphanumeric characters'
            },
            required: {
                message: 'This field is required'
            },
            minLength: {
                message: 'Field must be at least {min} characters long'
            },
            maxLength: {
                message: 'Field must be no more than {max} characters long'
            },
            date: {
                message: 'Please enter a valid date'
            },
            futureDate: {
                message: 'Date cannot be in the future'
            },
            pastDate: {
                message: 'Date cannot be in the past'
            }
        };
    }

    setupFields() {
        const inputs = this.form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            const fieldName = input.name || input.id;
            if (!fieldName) return;

            this.fields[fieldName] = {
                element: input,
                errorElement: this.form.querySelector(`#${fieldName}Error`),
                successElement: this.form.querySelector(`#${fieldName}Success`),
                validationIcon: input.parentElement.querySelector('.validation-icon'),
                rules: this.extractValidationRules(input),
                isValid: false
            };
        });
    }

    extractValidationRules(input) {
        const rules = [];
        
        // Required validation
        if (input.hasAttribute('required')) {
            rules.push('required');
        }

        // Type-based validation
        const type = input.type;
        if (type === 'email') {
            rules.push('email');
        } else if (type === 'tel') {
            rules.push('phone');
        } else if (type === 'date') {
            rules.push('date');
            
            // Check for date constraints
            if (input.classList.contains('no-future')) {
                rules.push('futureDate');
            }
            if (input.classList.contains('no-past')) {
                rules.push('pastDate');
            }
        }

        // Name field validation
        if (input.name && input.name.toLowerCase().includes('name')) {
            rules.push('name');
        }

        // Serial number validation
        if (input.name && (input.name.includes('serial') || input.name.includes('Serial'))) {
            rules.push('serialNumber');
        }

        // Length validation
        const minLength = input.getAttribute('minlength');
        const maxLength = input.getAttribute('maxlength');
        
        if (minLength) {
            rules.push(`minLength:${minLength}`);
        }
        if (maxLength) {
            rules.push(`maxLength:${maxLength}`);
        }

        return rules;
    }

    setupEventListeners() {
        Object.keys(this.fields).forEach(fieldName => {
            const field = this.fields[fieldName];
            
            if (this.config.realTimeValidation) {
                // Real-time validation on input
                field.element.addEventListener('input', () => {
                    this.validateField(fieldName);
                    this.updateSubmitButton();
                });

                // Validation on blur
                field.element.addEventListener('blur', () => {
                    this.validateField(fieldName);
                    this.updateSubmitButton();
                });
            }

            // Clear validation on focus
            field.element.addEventListener('focus', () => {
                this.clearFieldValidation(fieldName);
            });
        });

        // Form submission
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }

    validateField(fieldName) {
        const field = this.fields[fieldName];
        if (!field) return false;

        const value = field.element.value.trim();
        const rules = field.rules;

        // Check each rule
        for (const rule of rules) {
            const validation = this.applyValidationRule(rule, value, field.element);
            if (!validation.isValid) {
                this.displayValidationResult(fieldName, false, validation.message);
                field.isValid = false;
                return false;
            }
        }

        // All validations passed
        this.displayValidationResult(fieldName, true);
        field.isValid = true;
        return true;
    }

    applyValidationRule(rule, value, element) {
        const [ruleName, ruleValue] = rule.split(':');

        switch (ruleName) {
            case 'required':
                return {
                    isValid: value.length > 0,
                    message: this.validationRules.required.message
                };

            case 'email':
                return {
                    isValid: value.length === 0 || this.validationRules.email.pattern.test(value),
                    message: this.validationRules.email.message
                };

            case 'phone':
                if (value.length === 0 && !element.hasAttribute('required')) {
                    return { isValid: true, message: '' };
                }
                return {
                    isValid: this.validationRules.phone.pattern.test(value.replace(/\s/g, '')),
                    message: this.validationRules.phone.message
                };

            case 'name':
                return {
                    isValid: value.length === 0 || this.validationRules.name.pattern.test(value),
                    message: this.validationRules.name.message
                };

            case 'serialNumber':
                return {
                    isValid: value.length === 0 || this.validationRules.serialNumber.pattern.test(value),
                    message: this.validationRules.serialNumber.message
                };

            case 'minLength':
                return {
                    isValid: value.length >= parseInt(ruleValue) || value.length === 0,
                    message: this.validationRules.minLength.message.replace('{min}', ruleValue)
                };

            case 'maxLength':
                return {
                    isValid: value.length <= parseInt(ruleValue),
                    message: this.validationRules.maxLength.message.replace('{max}', ruleValue)
                };

            case 'date':
                if (value.length === 0) return { isValid: true, message: '' };
                const date = new Date(value);
                return {
                    isValid: !isNaN(date.getTime()),
                    message: this.validationRules.date.message
                };

            case 'futureDate':
                if (value.length === 0) return { isValid: true, message: '' };
                const inputDate = new Date(value);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return {
                    isValid: inputDate <= today,
                    message: this.validationRules.futureDate.message
                };

            case 'pastDate':
                if (value.length === 0) return { isValid: true, message: '' };
                const inputDatePast = new Date(value);
                const todayPast = new Date();
                todayPast.setHours(0, 0, 0, 0);
                return {
                    isValid: inputDatePast >= todayPast,
                    message: this.validationRules.pastDate.message
                };

            default:
                return { isValid: true, message: '' };
        }
    }

    displayValidationResult(fieldName, isValid, errorMessage = '') {
        const field = this.fields[fieldName];
        if (!field) return;

        const { element, errorElement, successElement, validationIcon } = field;

        // Clear previous states
        element.classList.remove('valid', 'invalid');
        if (validationIcon) {
            validationIcon.classList.remove('valid', 'invalid');
        }
        
        if (errorElement) {
            errorElement.classList.remove('show');
            errorElement.textContent = '';
        }
        
        if (successElement) {
            successElement.classList.remove('show');
            successElement.textContent = '';
        }

        // Apply new state
        if (element.value.trim().length > 0) {
            if (isValid) {
                element.classList.add('valid');
                if (validationIcon) {
                    validationIcon.classList.add('valid');
                }

                // Show success message for optional fields when filled correctly
                if (this.config.showSuccessMessages && successElement && !element.hasAttribute('required')) {
                    successElement.textContent = this.getFieldLabel(fieldName) + ' looks good!';
                    successElement.classList.add('show');
                }
            } else {
                element.classList.add('invalid');
                if (validationIcon) {
                    validationIcon.classList.add('invalid');
                }

                if (errorElement) {
                    errorElement.textContent = errorMessage;
                    errorElement.classList.add('show');
                }
            }
        }
    }

    clearFieldValidation(fieldName) {
        const field = this.fields[fieldName];
        if (!field) return;

        const { element, errorElement, successElement, validationIcon } = field;

        // Only clear if field is invalid (keep valid state)
        if (element.classList.contains('invalid')) {
            element.classList.remove('invalid');
            if (validationIcon) {
                validationIcon.classList.remove('invalid');
            }
            if (errorElement) {
                errorElement.classList.remove('show');
            }
        }
    }

    getFieldLabel(fieldName) {
        const field = this.fields[fieldName];
        if (!field) return fieldName;

        const label = this.form.querySelector(`label[for="${fieldName}"]`);
        if (label) {
            return label.textContent.replace('*', '').trim();
        }

        // Fallback to field name formatting
        return fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace(/([A-Z])/g, ' $1');
    }

    validateForm() {
        let isFormValid = true;
        const invalidFields = [];

        Object.keys(this.fields).forEach(fieldName => {
            const isFieldValid = this.validateField(fieldName);
            if (!isFieldValid) {
                isFormValid = false;
                invalidFields.push(fieldName);
            }
        });

        return { isValid: isFormValid, invalidFields };
    }

    setupSubmitButton() {
        this.submitBtn = this.form.querySelector('button[type="submit"]');
        if (this.submitBtn) {
            this.updateSubmitButton();
        }
    }

    updateSubmitButton() {
        if (!this.submitBtn) return;

        const requiredFields = Object.keys(this.fields).filter(fieldName => 
            this.fields[fieldName].element.hasAttribute('required')
        );

        const hasRequiredFields = requiredFields.every(fieldName => 
            this.fields[fieldName].element.value.trim().length > 0
        );

        const allValidFields = Object.keys(this.fields).every(fieldName => {
            const field = this.fields[fieldName];
            const value = field.element.value.trim();
            
            // If field is empty and not required, it's valid
            if (value.length === 0 && !field.element.hasAttribute('required')) {
                return true;
            }
            
            // If field has value, check if it's marked as valid
            return value.length === 0 || field.isValid;
        });

        this.submitBtn.disabled = !(hasRequiredFields && allValidFields) || this.isSubmitting;
    }

    async handleSubmit() {
        if (this.isSubmitting) return;

        const validation = this.validateForm();
        if (!validation.isValid) {
            this.showFormStatus('Please correct the errors above before submitting.', 'error');
            
            // Focus on first invalid field
            if (validation.invalidFields.length > 0) {
                const firstInvalidField = this.fields[validation.invalidFields[0]];
                if (firstInvalidField) {
                    firstInvalidField.element.focus();
                }
            }
            return;
        }

        this.isSubmitting = true;
        this.submitBtn.disabled = true;
        this.addLoadingState();

        try {
            // If custom submit handler is provided
            if (this.config.onSuccess) {
                await this.config.onSuccess(this.getFormData());
            } else {
                // Default submission simulation
                await this.defaultSubmission();
            }

            this.showSuccessState();
            
        } catch (error) {
            console.error('Form submission error:', error);
            
            if (this.config.onError) {
                this.config.onError(error);
            } else {
                this.showFormStatus('Sorry, there was an error submitting the form. Please try again.', 'error');
            }
        } finally {
            this.removeLoadingState();
            this.isSubmitting = false;
            this.updateSubmitButton();
        }
    }

    addLoadingState() {
        this.submitBtn.classList.add('loading');
        this.originalButtonText = this.submitBtn.textContent;
        this.submitBtn.textContent = '';
    }

    removeLoadingState() {
        this.submitBtn.classList.remove('loading');
        if (this.originalButtonText) {
            this.submitBtn.textContent = this.originalButtonText;
        }
    }

    showSuccessState() {
        this.submitBtn.classList.add('success-animation');
        this.showFormStatus('✓ Form submitted successfully! We\'ll get back to you soon.', 'success');
        
        // Reset form
        this.form.reset();
        this.clearAllValidations();
        
        // Reset button after animation
        setTimeout(() => {
            this.submitBtn.classList.remove('success-animation');
            this.hideFormStatus();
        }, 3000);
    }

    async defaultSubmission() {
        // Simulate API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate 95% success rate
                if (Math.random() > 0.05) {
                    resolve();
                } else {
                    reject(new Error('Network error'));
                }
            }, 1500);
        });
    }

    getFormData() {
        const formData = {};
        Object.keys(this.fields).forEach(fieldName => {
            formData[fieldName] = this.fields[fieldName].element.value.trim();
        });
        return formData;
    }

    clearAllValidations() {
        Object.keys(this.fields).forEach(fieldName => {
            const field = this.fields[fieldName];
            const { element, errorElement, successElement, validationIcon } = field;

            element.classList.remove('valid', 'invalid');
            if (validationIcon) {
                validationIcon.classList.remove('valid', 'invalid');
            }
            if (errorElement) {
                errorElement.classList.remove('show');
                errorElement.textContent = '';
            }
            if (successElement) {
                successElement.classList.remove('show');
                successElement.textContent = '';
            }
            
            field.isValid = false;
        });
    }

    showFormStatus(message, type) {
        const statusElement = this.form.parentElement.querySelector('#formStatus');
        if (statusElement) {
            statusElement.textContent = message;
            statusElement.className = `show ${type}`;
            statusElement.style.display = 'block';
        }
    }

    hideFormStatus() {
        const statusElement = this.form.parentElement.querySelector('#formStatus');
        if (statusElement) {
            statusElement.classList.remove('show', 'success', 'error');
            setTimeout(() => {
                statusElement.style.display = 'none';
            }, 300);
        }
    }
}

// Auto-initialize forms when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Quote Form
    if (document.getElementById('quoteForm')) {
        window.quoteValidator = new UniversalFormValidator('quoteForm', {
            showSuccessMessages: true,
            onSuccess: async (formData) => {
                // Custom quote form handling
                console.log('Quote form submitted:', formData);
                
                // You can add custom logic here like sending to API
                // For now, just simulate success
                return Promise.resolve();
            }
        });
    }

    // Initialize Warranty Form
    if (document.getElementById('warrantyForm')) {
        // Add no-future class to purchase date for validation
        const purchaseDate = document.getElementById('purchaseDate');
        if (purchaseDate) {
            purchaseDate.classList.add('no-future');
        }

        window.warrantyValidator = new UniversalFormValidator('warrantyForm', {
            showSuccessMessages: true,
            onSuccess: async (formData) => {
                // Custom warranty form handling
                console.log('Warranty form submitted:', formData);
                
                // You can add custom logic here like sending to API
                return Promise.resolve();
            }
        });
    }
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UniversalFormValidator;
}