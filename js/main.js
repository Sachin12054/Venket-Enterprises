// ===== MAIN APPLICATION =====
class VenkatEnterprisesApp {
    constructor() {
        this.products = [];
        this.filteredProducts = [];
        this.productsPerPage = 12;
        this.currentPage = 1;
        this.isLoading = false;
        
        this.init();
    }

    init() {
        this.initProducts();
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

    // ===== PRODUCTS DATA =====
    initProducts() {
        this.products = [
            // Survey Equipment
            {
                id: 1,
                name: 'Digital Auto Level',
                category: 'Survey',
                price: 18500,
                description: 'High precision digital auto level with automatic horizontal circle reading for accurate surveying.',
                image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                featured: true
            },
            {
                id: 2,
                name: 'Total Station',
                category: 'Survey',
                price: 525000,
                description: 'Advanced electronic total station with EDM for precise angle and distance measurements.',
                image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                featured: true
            },
            {
                id: 3,
                name: 'Digital Theodolite',
                category: 'Survey',
                price: 22000,
                description: 'Professional digital theodolite with LCD display for accurate horizontal and vertical angle measurements.',
                image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 4,
                name: 'Handheld GPS',
                category: 'Survey',
                price: 35000,
                description: 'Rugged handheld GPS unit with high-sensitivity receiver for field surveying applications.',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 5,
                name: 'Laser Distance Meter',
                category: 'Survey',
                price: 8500,
                description: 'Compact laser distance meter for quick and accurate distance measurements up to 100m.',
                image: 'https://images.unsplash.com/photo-1581092335878-4b1d70b6b1b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
            },
            // Civil QC Lab Equipment
            {
                id: 6,
                name: 'Compression Testing Machine',
                category: 'Civil QC Lab',
                price: 125000,
                description: 'Digital compression testing machine for concrete cube and cylinder strength testing.',
                image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                featured: true
            },
            {
                id: 7,
                name: 'Electric Sieve Shaker',
                category: 'Civil QC Lab',
                price: 28000,
                description: 'Automatic electric sieve shaker for particle size analysis of aggregates and soil.',
                image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 8,
                name: 'Vicat Apparatus',
                category: 'Civil QC Lab',
                price: 5500,
                description: 'Manual Vicat apparatus for determining initial and final setting time of cement.',
                image: 'https://images.unsplash.com/photo-1581092918484-8ae9b4c24e18?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 9,
                name: 'Slump Test Cone',
                category: 'Civil QC Lab',
                price: 2200,
                description: 'Standard slump cone for testing workability of fresh concrete as per IS specifications.',
                image: 'https://images.unsplash.com/photo-1581092918791-1c1b1b1b1b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 10,
                name: 'CBR Test Apparatus',
                category: 'Civil QC Lab',
                price: 45000,
                description: 'Complete CBR test setup for determining bearing strength of soil subgrade.',
                image: 'https://images.unsplash.com/photo-1581092919265-1c1b1b1b1b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
            },
            // Construction Equipment
            {
                id: 11,
                name: 'Concrete Mixer',
                category: 'Construction',
                price: 55000,
                description: 'Portable concrete mixer with 100L capacity for small to medium construction projects.',
                image: 'https://images.unsplash.com/photo-1581092919784-1c1b1b1b1b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                featured: true
            },
            {
                id: 12,
                name: 'Needle Vibrator',
                category: 'Construction',
                price: 12000,
                description: 'Electric needle vibrator for efficient concrete compaction in construction work.',
                image: 'https://images.unsplash.com/photo-1581092920296-1c1b1b1b1b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
            },
            // Safety Equipment
            {
                id: 16,
                name: 'ISI Safety Helmet',
                category: 'Safety',
                price: 650,
                description: 'ISI marked safety helmet with adjustable headband for construction site protection.',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 17,
                name: 'Safety Hand Gloves',
                category: 'Safety',
                price: 250,
                description: 'Cut-resistant safety gloves with excellent grip for construction workers.',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc98?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
            },
            // Power Tools
            {
                id: 21,
                name: 'Cordless Drill Set',
                category: 'Power Tools',
                price: 5500,
                description: 'Professional cordless drill with 18V battery and complete accessory set.',
                image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                featured: true
            },
            {
                id: 22,
                name: 'Angle Grinder',
                category: 'Power Tools',
                price: 3200,
                description: '4-inch angle grinder with variable speed control for cutting and grinding applications.',
                image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2408?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
            }
        ];

        this.filteredProducts = [...this.products];
        this.renderProducts();
    }

    // ===== EVENT LISTENERS =====
    initEventListeners() {
        // Navigation
        this.initNavigation();
        
        // Back to top button
        this.initBackToTop();
        
        // Product filters
        this.initProductFilters();
        
        // Header scroll effect
        this.initHeaderScroll();
        
        // Smooth scrolling
        this.initSmoothScrolling();
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
                    
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                } else if (targetId === 'aboutus.html' || targetId === 'contact.html') {
                    window.location.href = targetId;
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
        this.currentPage++;
        this.renderProducts(false);
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
    }

    createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card fade-in';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="product-info">
                <h4>${product.name}</h4>
                <div class="product-price">₹${product.price.toLocaleString()}</div>
                <p>${product.description}</p>
                ${product.featured ? '<span class="product-badge">Featured</span>' : ''}
            </div>
        `;
        return card;
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

    // ===== ANIMATIONS =====
    initAnimations() {
        const style = document.createElement('style');
        style.textContent = `
            .no-products {
                grid-column: 1 / -1;
                text-align: center;
                padding: 60px 20px;
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
            
            .product-badge {
                position: absolute;
                top: 15px;
                right: 15px;
                background: var(--primary-color);
                color: white;
                padding: 5px 10px;
border-radius: 15px;
font-size: 0.8rem;
font-weight: 500;
}
.product-card {
position: relative;
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
}// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
const app = new VenkatEnterprisesApp();
window.venkatApp = app;
});