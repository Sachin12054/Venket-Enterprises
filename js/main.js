// ===== MAIN APPLICATION =====
class VenkatEnterprisesApp {
    constructor() {
        this.products = [];
        this.filteredProducts = [];
        this.productsPerPage = 12;
        this.currentPage = 1;
        this.isLoading = false;
        this.darkMode = localStorage.getItem('darkMode') === 'true';
        
        this.init();
    }

    async init() {
        await this.loadProducts();
        this.initTheme();
        this.initEventListeners();
        this.initAnimations();
        this.hidePreloader();
    }

    // ===== PRELOADER =====
    hidePreloader() {
        const preloader = document.getElementById('preloader');
        setTimeout(() => {
            preloader.classList.add('hidden');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1500);
    }

    // ===== THEME MANAGEMENT =====
    initTheme() {
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        
        // Apply saved theme
        if (this.darkMode) {
            body.classList.add('dark-theme');
            this.updateThemeIcon(true);
        }

        // Theme toggle event listener
        themeToggle?.addEventListener('click', () => {
            this.toggleTheme();
        });
    }

    toggleTheme() {
        const body = document.body;
        this.darkMode = !this.darkMode;
        
        if (this.darkMode) {
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
        }
        
        localStorage.setItem('darkMode', this.darkMode);
        this.updateThemeIcon(this.darkMode);
        
        // Add smooth transition effect
        body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            body.style.transition = '';
        }, 300);
    }

    updateThemeIcon(isDark) {
        const themeIcon = document.querySelector('#themeToggle i');
        if (themeIcon) {
            themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    // ===== PRODUCTS DATA LOADING =====
    async loadProducts() {
        try {
            this.showLoadingState();
            
            // Try to load from data.json
            const response = await fetch('data.json');
            if (!response.ok) {
                throw new Error('Failed to load products data');
            }
            
            const data = await response.json();
            this.products = data.products || [];
            this.categories = data.categories || [];
            
        } catch (error) {
            console.warn('Could not load data.json, using fallback data:', error);
            // Fallback to embedded data if data.json is not available
            this.products = this.getFallbackProducts();
            this.categories = this.getFallbackCategories();
        } finally {
            this.hideLoadingState();
            this.filteredProducts = [...this.products];
            this.renderProducts();
        }
    }

    showLoadingState() {
        const productsGrid = document.getElementById('productsGrid');
        if (productsGrid) {
            productsGrid.innerHTML = `
                <div class="loading-state">
                    <div class="spinner"></div>
                    <p>Loading products...</p>
                </div>
            `;
        }
    }

    hideLoadingState() {
        const loadingState = document.querySelector('.loading-state');
        if (loadingState) {
            loadingState.remove();
        }
    }

    getFallbackProducts() {
        return [
            {
                id: 1,
                name: 'Digital Auto Level',
                category: 'Survey',
                price: 18500,
                description: 'High precision digital auto level with automatic horizontal circle reading for accurate surveying.',
                image: 'https://tse3.mm.bing.net/th/id/OIP.do58eFQ21lUgNHeZ3TUP1QHaF-?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
                featured: true,
                inStock: true
            },
            {
                id: 2,
                name: 'Total Station',
                category: 'Survey',
                price: 525000,
                description: 'Advanced electronic total station with EDM for precise angle and distance measurements.',
                image: 'https://tse3.mm.bing.net/th/id/OIP.9xh1hmCL1UoHNNFIFPJ_tgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
                featured: true,
                inStock: true
            },
            {
                id: 6,
                name: 'Compression Testing Machine',
                category: 'Civil QC Lab',
                price: 125000,
                description: 'Digital compression testing machine for concrete cube and cylinder strength testing.',
                image: 'https://civillabequipmentmanufacturer.com/wp-content/uploads/2023/12/compression-testing-machine-pillar-type-load-frame-hand-operated.png',
                featured: true,
                inStock: true
            },
            {
                id: 11,
                name: 'Concrete Mixer',
                category: 'Construction',
                price: 55000,
                description: 'Portable concrete mixer with 100L capacity for small to medium construction projects.',
                image: 'https://tse1.mm.bing.net/th/id/OIP.roFKIZh3KzVhP2QGT3jiFgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
                featured: true,
                inStock: true
            },
            {
                id: 16,
                name: 'ISI Safety Helmet',
                category: 'Safety',
                price: 650,
                description: 'ISI marked safety helmet with adjustable headband for construction site protection.',
                image: 'https://m.media-amazon.com/images/I/51M9AqXi45L.jpg',
                inStock: true
            },
            {
                id: 21,
                name: 'Cordless Drill Set',
                category: 'Power Tools',
                price: 5500,
                description: 'Professional cordless drill with 18V battery and complete accessory set.',
                image: 'https://i5.walmartimages.com/seo/AIRXPRO-Cordless-Drill-21V-Power-Drill-Set-25-1-Position-Adjustable-Torque-Electric-2-Speed-Transmission-For-Screwdriving-And-Drilling-Black_403503c1-d664-4771-becf-cbf6b4c568cd.2e73f817631b3beb0b55358875e1ce38.jpeg',
                featured: true,
                inStock: true
            }
        ];
    }

    getFallbackCategories() {
        return [
            { name: 'Survey', displayName: 'Survey Equipment', icon: 'fas fa-compass' },
            { name: 'Civil QC Lab', displayName: 'Civil QC Lab', icon: 'fas fa-flask' },
            { name: 'Construction', displayName: 'Construction', icon: 'fas fa-hard-hat' },
            { name: 'Safety', displayName: 'Safety Equipment', icon: 'fas fa-shield-alt' },
            { name: 'Power Tools', displayName: 'Power Tools', icon: 'fas fa-tools' }
        ];
    }

    // ===== EVENT LISTENERS =====
    initEventListeners() {
        // Navigation
        this.initNavigation();
        
        // Mobile menu toggle
        this.initMobileMenu();
        
        // Back to top button
        this.initBackToTop();
        
        // Product filters
        this.initProductFilters();

        // Product catalog: View Details event delegation
        const productsGrid = document.getElementById('productsGrid');
        if (productsGrid) {
            productsGrid.addEventListener('click', (e) => {
                const btn = e.target.closest('.view-details-btn');
                if (btn && btn.dataset.id) {
                    const productId = parseInt(btn.dataset.id, 10);
                    const product = this.products.find(p => p.id === productId);
                    if (product) {
                        this.showProductModal(product);
                    }
                }
            });
        }
        
        // Header scroll effect
        this.initHeaderScroll();
        
        // Smooth scrolling
        this.initSmoothScrolling();
        
        // Hero scroll indicator
        this.initHeroScroll();

        // Window resize handler
        window.addEventListener('resize', this.debounce(() => {
            this.handleResize();
        }, 250));
    }

    // ===== MOBILE MENU =====
    initMobileMenu() {
        const menuToggle = document.getElementById('menuToggle');
        const navList = document.querySelector('.nav-list');
        
        menuToggle?.addEventListener('click', () => {
            navList.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navList.contains(e.target)) {
                navList.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });

        // Close menu when clicking on nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // ===== NAVIGATION =====
    initNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                    
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        window.addEventListener('scroll', this.throttle(this.updateActiveNav.bind(this), 100));
    }

    updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // ===== HERO SCROLL INDICATOR =====
    initHeroScroll() {
        const heroScroll = document.getElementById('heroScroll');
        heroScroll?.addEventListener('click', () => {
            const aboutSection = document.getElementById('solutions');
            if (aboutSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = aboutSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    // ===== BACK TO TOP BUTTON =====
    initBackToTop() {
        const backToTopBtn = document.getElementById('backToTop');
        
        window.addEventListener('scroll', this.throttle(() => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }, 100));

        backToTopBtn?.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===== HEADER SCROLL EFFECT =====
    initHeaderScroll() {
        const header = document.querySelector('.header');
        
        window.addEventListener('scroll', this.throttle(() => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, 100));
    }

    // ===== PRODUCT FILTERS =====
    initProductFilters() {
        const searchInput = document.getElementById('searchInput');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const loadMoreBtn = document.getElementById('loadMore');

        searchInput?.addEventListener('input', this.debounce((e) => {
            this.filterProducts(e.target.value.toLowerCase());
        }, 300));

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const category = btn.getAttribute('data-filter');
                this.filterByCategory(category);
            });
        });

        loadMoreBtn?.addEventListener('click', () => {
            this.loadMoreProducts();
        });
    }

    filterProducts(searchTerm) {
        this.filteredProducts = this.products.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
        this.currentPage = 1;
        this.renderProducts();
    }

    filterByCategory(category) {
        if (category === 'all') {
            this.filteredProducts = [...this.products];
        } else {
            this.filteredProducts = this.products.filter(product => 
                product.category === category
            );
        }
        this.currentPage = 1;
        this.renderProducts();
    }

    loadMoreProducts() {
        const loadMoreBtn = document.getElementById('loadMore');
        loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        loadMoreBtn.disabled = true;

        setTimeout(() => {
            this.currentPage++;
            this.renderProducts(false);
            loadMoreBtn.innerHTML = 'Load More Products';
            loadMoreBtn.disabled = false;
        }, 800);
    }

    renderProducts(clearContainer = true) {
        const productsGrid = document.getElementById('productsGrid');
        const loadMoreBtn = document.getElementById('loadMore');
        
        if (!productsGrid) return;

        if (clearContainer) {
            productsGrid.innerHTML = '';
        }

        const startIndex = clearContainer ? 0 : (this.currentPage - 1) * this.productsPerPage;
        const endIndex = this.currentPage * this.productsPerPage;
        const productsToShow = this.filteredProducts.slice(startIndex, endIndex);

        if (productsToShow.length === 0 && clearContainer) {
            productsGrid.innerHTML = `
                <div class="no-products">
                    <i class="fas fa-search"></i>
                    <h3>No products found</h3>
                    <p>Try adjusting your search or filter criteria.</p>
                    <button class="btn btn-primary" onclick="venkatApp.resetFilters()">
                        <i class="fas fa-refresh"></i>
                        Reset Filters
                    </button>
                </div>
            `;
            loadMoreBtn?.style.setProperty('display', 'none');
            return;
        }

        productsToShow.forEach((product, index) => {
            const productCard = this.createProductCard(product);
            productCard.style.animationDelay = `${index * 0.1}s`;
            productsGrid.appendChild(productCard);
        });

        if (endIndex >= this.filteredProducts.length) {
            loadMoreBtn?.style.setProperty('display', 'none');
        } else {
            loadMoreBtn?.style.setProperty('display', 'block');
        }

        this.triggerProductAnimations();
        this.updateProductCount();
    }

    createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card fade-in';
        
        const stockStatus = product.inStock ? 
            '<span class="stock-status in-stock"><i class="fas fa-check"></i> In Stock</span>' : 
            '<span class="stock-status out-of-stock"><i class="fas fa-times"></i> Out of Stock</span>';
        


        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/500x250?text=Image+Not+Found'">
                <div class="product-overlay">
                    <button class="btn btn-primary" onclick="venkatApp.viewProduct(${product.id})">
                        <i class="fas fa-eye"></i>
                        View Details
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h4>${product.name}</h4>
                <div class="product-price">₹${product.price.toLocaleString()}</div>
                <p>${product.description}</p>
                ${stockStatus}
            </div>
        `;
        return card;
    }

    viewProduct(productId) {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            this.showProductModal(product);
        }
    }

    showProductModal(product) {
            try {
                // Create modal HTML
                const modalHTML = `
                    <div class="product-modal-overlay" id="productModal">
                        <div class="product-modal">
                            <div class="modal-header">
                                <h3>${product.name}</h3>
                                <button class="modal-close" onclick="venkatApp.closeProductModal()">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                            <div class="modal-content">
                                <div class="modal-image">
                                    <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/500x300?text=Image+Not+Found'">
                                    ${product.featured ? '<span class="modal-badge"><i class="fas fa-star"></i> Featured</span>' : ''}
                                </div>
                                <div class="modal-details">
                                    <div class="product-category">${product.category}</div>
                                    <div class="product-price">₹${product.price.toLocaleString()}</div>
                                    <p class="product-description">${product.description}</p>
                                    ${product.specifications ? this.renderSpecifications(product.specifications) : ''}
                                    <div class="modal-actions">
                                        <button class="btn btn-primary" onclick="venkatApp.contactForQuote('${product.name}')">
                                            <i class="fas fa-phone"></i>
                                            Get Quote
                                        </button>
                                        <button class="btn btn-outline" onclick="venkatApp.addToWishlist(${product.id})">
                                            <i class="fas fa-heart"></i>
                                            Add to Wishlist
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                // Add modal to DOM
                document.body.insertAdjacentHTML('beforeend', modalHTML);
            
                // Prevent body scroll
                document.body.style.overflow = 'hidden';
            
                // Close modal on overlay click
                document.getElementById('productModal').addEventListener('click', (e) => {
                    if (e.target.classList.contains('product-modal-overlay')) {
                        this.closeProductModal();
                    }
                });

                // Add Escape key support to close modal
                document.addEventListener('keydown', this._escModalHandler = (e) => {
                    if (e.key === 'Escape') {
                        this.closeProductModal();
                    }
                });
            } catch (err) {
                console.error('Error in showProductModal:', err);
                alert('An error occurred while displaying the product details. Please try again.');
            }
    }

    renderSpecifications(specs) {
        let specsHTML = '<div class="product-specifications"><h4>Specifications</h4><ul>';
        for (const [key, value] of Object.entries(specs)) {
            const formattedKey = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
            specsHTML += `<li><strong>${formattedKey}:</strong> ${value}</li>`;
        }
        specsHTML += '</ul></div>';
        return specsHTML;
    }

    closeProductModal() {
            const modal = document.getElementById('productModal');
            if (modal) {
                modal.remove();
                document.body.style.overflow = '';
            }
            // Remove Escape key event listener if present
            if (this._escModalHandler) {
                document.removeEventListener('keydown', this._escModalHandler);
                this._escModalHandler = null;
            }
    }

    contactForQuote(productName) {
        // In a real application, this would open a contact form or redirect to WhatsApp/email
        const message = `Hi, I'm interested in getting a quote for ${productName}. Please provide more details.`;
        const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }

    addToWishlist(productId) {
        let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        if (!wishlist.includes(productId)) {
            wishlist.push(productId);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            this.showNotification('Product added to wishlist!', 'success');
        } else {
            this.showNotification('Product already in wishlist!', 'info');
        }
    }

    resetFilters() {
        const searchInput = document.getElementById('searchInput');
        const filterBtns = document.querySelectorAll('.filter-btn');
        
        if (searchInput) searchInput.value = '';
        
        filterBtns.forEach(btn => btn.classList.remove('active'));
        filterBtns[0]?.classList.add('active'); // Activate "All Products"
        
        this.filteredProducts = [...this.products];
        this.currentPage = 1;
        this.renderProducts();
    }

    updateProductCount() {
        const countElement = document.getElementById('productCount');
        if (countElement) {
            countElement.textContent = `Showing ${Math.min(this.currentPage * this.productsPerPage, this.filteredProducts.length)} of ${this.filteredProducts.length} products`;
        }
    }

    triggerProductAnimations() {
        const productCards = document.querySelectorAll('.product-card:not(.visible)');
        productCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 100);
        });
    }

    // ===== SMOOTH SCROLLING =====
    initSmoothScrolling() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (link && link.getAttribute('href') !== '#') {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }

    // ===== NOTIFICATIONS =====
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.remove()" class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;

        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }

    // ===== RESPONSIVE HANDLER =====
    handleResize() {
        // Recalculate any responsive elements if needed
        this.updateActiveNav();
    }

    // ===== ANIMATIONS =====
    initAnimations() {
        // Add intersection observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements that should animate on scroll
        document.querySelectorAll('.solution-card, .service-card, .testimonial-card').forEach(el => {
            observer.observe(el);
        });

        // Add CSS for animations and theme
        this.injectStyles();
    }

    injectStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* Dark Theme Styles */
            .dark-theme {
                --text-dark: #f8f9fa;
                --text-medium: #adb5bd;
                --text-light: #6c757d;
                --bg-white: #212529;
                --bg-light: #343a40;
                --bg-dark: #1a1d23;
            }

            .dark-theme .header {
                background: rgba(33, 37, 41, 0.95);
                border-bottom-color: rgba(255, 255, 255, 0.1);
            }

            .dark-theme .header.scrolled {
                background: rgba(33, 37, 41, 0.98);
            }

            .dark-theme .search-box input {
                background: var(--bg-light);
                border-color: var(--text-light);
                color: var(--text-dark);
            }

            .dark-theme .filter-btn {
                background: var(--bg-light);
                border-color: var(--text-light);
                color: var(--text-medium);
            }

            /* Theme Toggle Button */
            .theme-toggle {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: none;
                background: var(--bg-light);
                color: var(--text-dark);
                cursor: pointer;
                transition: var(--transition);
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .theme-toggle:hover {
                background: var(--primary-color);
                color: var(--text-white);
                transform: scale(1.1);
            }

            /* Mobile Menu Styles */
            .menu-toggle span {
                transition: var(--transition);
            }

            .menu-toggle.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }

            .menu-toggle.active span:nth-child(2) {
                opacity: 0;
            }

            .menu-toggle.active span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -6px);
            }

            /* Product Modal Styles */
            .product-modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                opacity: 0;
                animation: fadeIn 0.3s ease-out forwards;
            }

            .product-modal {
                background: var(--bg-white);
                border-radius: var(--border-radius-large);
                max-width: 800px;
                width: 90%;
                max-height: 90vh;
                overflow-y: auto;
                box-shadow: var(--shadow-heavy);
                transform: scale(0.9);
                animation: modalSlideIn 0.3s ease-out 0.1s forwards;
            }

            @keyframes modalSlideIn {
                to {
                    transform: scale(1);
                }
            }

            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px 30px;
                border-bottom: 1px solid #eee;
            }

            .modal-header h3 {
                margin: 0;
                color: var(--text-dark);
            }

            .modal-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                color: var(--text-medium);
                cursor: pointer;
                transition: var(--transition);
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .modal-close:hover {
                background: var(--bg-light);
                color: var(--text-dark);
            }

            .modal-content {
                padding: 30px;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 30px;
            }

            .modal-image {
                position: relative;
            }

            .modal-image img {
                width: 100%;
                height: 300px;
                object-fit: cover;
                border-radius: var(--border-radius);
            }

            .modal-badge {
                position: absolute;
                top: 15px;
                right: 15px;
                background: var(--primary-color);
                color: white;
                padding: 8px 12px;
                border-radius: 20px;
                font-size: 0.85rem;
                font-weight: 500;
            }

            .modal-details .product-category {
                font-size: 0.9rem;
                color: var(--primary-color);
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 10px;
            }

            .modal-details .product-price {
                font-size: 2rem;
                font-weight: 700;
                color: var(--primary-color);
                margin-bottom: 20px;
            }

            .product-description {
                color: var(--text-medium);
                line-height: 1.7;
                margin-bottom: 25px;
            }

            .product-specifications h4 {
                color: var(--text-dark);
                margin-bottom: 15px;
                font-size: 1.2rem;
            }

            .product-specifications ul {
                list-style: none;
                padding: 0;
            }

            .product-specifications li {
                padding: 8px 0;
                border-bottom: 1px solid #f0f0f0;
                color: var(--text-medium);
            }

            .modal-actions {
                margin-top: 30px;
                display: flex;
                gap: 15px;
            }

            /* Loading State */
            .loading-state {
                grid-column: 1 / -1;
                text-align: center;
                padding: 80px 20px;
                color: var(--text-medium);
            }

            .loading-state .spinner {
                margin: 0 auto 20px;
            }

            /* No Products State */
            .no-products {
                grid-column: 1 / -1;
                text-align: center;
                padding: 80px 20px;
                color: var(--text-medium);
            }

            .no-products i {
                font-size: 4rem;
                margin-bottom: 20px;
                opacity: 0.5;
            }

            .no-products h3 {
                margin-bottom: 10px;
                color: var(--text-dark);
            }

            /* Stock Status */
            .stock-status {
                display: inline-flex;
                align-items: center;
                gap: 5px;
                padding: 4px 8px;
                border-radius: 15px;
                font-size: 0.8rem;
                font-weight: 500;
                margin-top: 10px;
            }

            .stock-status.in-stock {
                background: rgba(39, 174, 96, 0.1);
                color: var(--success-color);
            }

            .stock-status.out-of-stock {
                background: rgba(231, 76, 60, 0.1);
                color: var(--error-color);
            }

            /* Notifications */
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--bg-white);
                color: var(--text-dark);
                padding: 15px 20px;
                border-radius: var(--border-radius);
                box-shadow: var(--shadow-medium);
                display: flex;
                align-items: center;
                gap: 10px;
                z-index: 10001;
                max-width: 350px;
                animation: slideInRight 0.3s ease-out;
            }

            .notification-success {
                border-left: 4px solid var(--success-color);
            }

            .notification-error {
                border-left: 4px solid var(--error-color);
            }

            .notification-info {
                border-left: 4px solid var(--accent-color);
            }

            .notification-close {
                background: none;
                border: none;
                color: var(--text-medium);
                cursor: pointer;
                margin-left: auto;
            }

            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }

            /* Responsive Modal */
            @media (max-width: 768px) {
                .modal-content {
                    grid-template-columns: 1fr;
                    gap: 20px;
                }

                .modal-actions {
                    flex-direction: column;
                }

                .product-modal {
                    width: 95%;
                    margin: 20px;
                }

                .modal-header,
                .modal-content {
                    padding: 20px;
                }
            }

            /* Animation Classes */
            .animate-in {
                animation: slideInUp 0.6s ease-out;
            }

            @keyframes slideInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ===== UTILITY FUNCTIONS =====
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // ===== PUBLIC API METHODS =====
    getProducts() {
        return this.products;
    }

    getProductById(id) {
        return this.products.find(product => product.id === id);
    }

    searchProducts(query) {
        return this.products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
        );
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    const app = new VenkatEnterprisesApp();
    window.venkatApp = app;

    // Add global error handler
    window.addEventListener('error', (e) => {
        console.error('Application error:', e.error);
    });

    // Add performance monitoring
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`Page loaded in ${Math.round(loadTime)}ms`);
    });
});