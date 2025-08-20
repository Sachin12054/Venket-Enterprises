// ===== MAIN APPLICATION =====
class VenkatEnterprisesApp {
    constructor() {
        this.products = [];
        this.filteredProducts = [];
        this.productsPerPage = 12;
        this.currentPage = 1;
        this.isLoading = false;
        this.darkMode = localStorage.getItem('darkMode') === 'true';
        
        // This will store the function reference to remove the event listener later
        this._escModalHandler = null;

        this.init();
    }

    async init() {
        this.initTheme();
        this.initEventListeners();
        await this.loadProducts(); // Load products after listeners are ready
        this.initAnimations();
        this.hidePreloader();
    }

    // ===== PRELOADER =====
    hidePreloader() {
        const preloader = document.getElementById('preloader');
        if (!preloader) return;
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
        
        if (this.darkMode) {
            body.classList.add('dark-theme');
            this.updateThemeIcon(true);
        }

        themeToggle?.addEventListener('click', () => {
            this.toggleTheme();
        });
    }

    toggleTheme() {
        const body = document.body;
        this.darkMode = !this.darkMode;
        
        body.classList.toggle('dark-theme', this.darkMode);
        
        localStorage.setItem('darkMode', this.darkMode);
        this.updateThemeIcon(this.darkMode);
        
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
            
            const response = await fetch('data.json');
            if (!response.ok) {
                throw new Error('Failed to load products from data.json');
            }
            
            const data = await response.json();
            this.products = data.products || [];
            this.categories = data.categories || [];
            
        } catch (error) {
            console.warn('Could not load data.json, using fallback data:', error);
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
        loadingState?.remove();
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
                specifications: {
                  accuracy: "±1.5mm/km",
                  magnification: "32x",
                  minimumFocusing: "0.3m",
                  compensatorRange: "±15'"
                },
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
                specifications: {
                   angleAccuracy: "±2\"",
                   distanceAccuracy: "±(2mm + 2ppm)",
                   range: "5000m",
                   batteryLife: "24 hours"
                 },
                inStock: true
            },

            {
               id: 3,
               name: "Digital Theodolite",
               category: "Survey",
               price: 22000,
               description: "Professional digital theodolite with LCD display for accurate horizontal and vertical angle measurements.",
               image: "https://5.imimg.com/data5/SELLER/Default/2023/12/366168850/DA/TM/BX/39543078/geomax-zipp02-digital-theodolite-1-500x500.webp",
               specifications: {
                  accuracy: "±2\"",
                  magnification: "30x",
                  minimumReading: "1\" / 5\"",
                  display: "Dual LCD"
                },               
               inStock: true
            },

            {
               id: 4,
               name: "Handheld GPS",
               category: "Survey",
               price: 35000,
               description: "Rugged handheld GPS unit with high-sensitivity receiver for field surveying applications.",
               extra:"heloosdsdsdd",
               image: "https://m.media-amazon.com/images/I/61LfDX97GjL.jpg",
               specifications: {
                accuracy: "3-5 meters",
                channels: "12 channel",
                batteryLife: "22 hours",
                waterRating: "IPX7"
            },                          
               inStock: true
            },

            {
                id: 5,
                name: "Laser Distance Meter",
                category: "Survey",
                price: 8500,
                description: "Compact laser distance meter for quick and accurate distance measurements up to 100m.",
                image: "https://www.electronicscomp.com/image/cache/catalog/bosch-glm-150-c-laser-distance-measuring-instrument-800x800.jpg",
                specifications: {
                   range: "0.05-100m",
                   accuracy: "±1.5mm",
                   laserClass: "Class II",
                   batteryLife: "5000 measurements"
                },                 
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
                specifications: {
                   capacity: "2000 kN",
                   accuracy: "±1%",
                   cubeSize: "150mm x 150mm",
                   cylinderSize: "150mm dia x 300mm"
                },           
                inStock: true
            },
            {
              id: 7,
              name: "Electric Sieve Shaker",
              category: "Civil QC Lab",
              price: 28000,
              description: "Automatic electric sieve shaker for particle size analysis of aggregates and soil.",
              image: "https://zaxco.com.my/wp-content/uploads/2022/08/material-test-sieve-shaker.jpg",
              specifications: {
                 sieveSize: "200mm & 300mm",
                 timer: "0-99 minutes",
                 amplitude: "Variable",
                 power: "0.25 HP motor"
            },         
              inStock: true
            },

            {
              id: 8,
              name: "Vicat Apparatus",
              category: "Civil QC Lab",
              price: 5500,
              description: "Manual Vicat apparatus for determining initial and final setting time of cement.",
              image: "https://tse2.mm.bing.net/th/id/OIP.1hT854fCn3Azw1KNPkLiTAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
              specifications: {
                needleWeight: "300g",
                plungerWeight: "300g",
                mould: "Conical, hard rubber",
                standard: "IS 4031 Part 5"
               },
              inStock: true
            },

            {
               id: 9,
               name: "Slump Test Cone",
               category: "Civil QC Lab",
               price: 2200,
               description: "Standard slump cone for testing workability of fresh concrete as per IS specifications.",
               image: "https://amvscientific.com/wp-content/uploads/2023/12/slump-test-apparatus.jpg",
               specifications: {
                topDiameter: "100mm",
                bottomDiameter: "200mm",
                height: "300mm",
                material: "16 gauge steel"
            },          
               
               inStock: true
            },

            {
                id: 10,
                name: "CBR Test Apparatus",
                category: "Civil QC Lab",
                price: 45000,
                description: "Complete CBR test setup for determining bearing strength of soil subgrade.",
                image: "https://tse1.mm.bing.net/th/id/OIP.OhsZUc50bnPJ7Rzn3N8SigAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
                specifications: {
                   loadCapacity: "50kN",
                   penetrationRate: "1.25mm/min",
                   pistonDia: "49.63mm",
                   mouldDia: "152.4mm"
                 },                 
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
                specifications: {
                   loadCapacity: "50kN",
                   penetrationRate: "1.25mm/min",
                   pistonDia: "49.63mm",
                   mouldDia: "152.4mm"
                 },
                inStock: true
            },

             {
                id: 12,
                name: "Needle Vibrator",
                category: "Construction",
                price: 12000,
                description: "Electric needle vibrator for efficient concrete compaction in construction work.",
                image: "https://5.imimg.com/data5/SELLER/Default/2022/2/OJ/ON/JK/79354682/25mm-concrete-needle-vibrator-1000x1000.png",
                specifications: {
                   power: "1.5 HP motor",
                   frequency: "12000 VPM",
                   needleDia: "35mm",
                   hoseLength: "6 meters"
                 },           
                    
                inStock: true
            },

            {
              id: 13,
              name: "Plate Compactor",
              category: "Construction",
              price: 32000,
              description: "Heavy-duty plate compactor for soil and asphalt compaction work.",
              image: "https://tse4.mm.bing.net/th/id/OIP.es5BeAV_uFvM3_ubYdL0CAHaHz?r=0&pid=ImgDet&w=178&h=187&c=7&dpr=1.3&o=7&rm=3", 
              specifications: {
                 plateSize: "450mm x 350mm",
                 weight: "85 kg",
                 engine: "Honda GX160",
                 compactionForce: "16kN"
               },             
              inStock: true
            },

            {
              id: 14,
              name: "Cut-off Machine",
              category: "Construction",
              price: 18500,
              description: "Portable concrete cut-off machine for precise cutting of concrete and masonry.",
              image: "https://th.bing.com/th/id/R.f939f6d4c08e281697a221be4b45dd18?rik=TjcKb8pv%2bBKxJw&riu=http%3a%2f%2fwww.ingco.co.za%2fwp-content%2fuploads%2f2020%2f07%2fCOS35568E.jpg&ehk=KnIYrtpV%2fjJJSPZfTcLnS%2bd1JfDhqJmAjcbEkTQtoBc%3d&risl=&pid=ImgRaw&r=0",
              specifications: {
                  bladeDia: "350mm (14 inch)",
                  engine: "2-stroke petrol",
                  cuttingDepth: "125mm",
                  weight: "9.5 kg"
                },               
              inStock: true
            },

            {
              id: 15,
              name: "Rebar Cutter",
              category: "Construction",
              price: 25000,
              description: "Electric rebar cutter for cutting reinforcement bars up to 32mm diameter.",
              image: "https://rebartyingsystems.co.uk/wp-content/uploads/102998-KSS-16mm-Rod-Cutter.jpg",
              specifications: {
                  cuttingCapacity: "32mm rebar",
                  power: "2.2 kW motor",
                  cuttingSpeed: "3 sec per cut",
                  weight: "45 kg"
                },            
              inStock: true
            },

            {
                id: 16,
                name: 'ISI Safety Helmet',
                category: 'Safety',
                price: 650,
                description: 'ISI marked safety helmet with adjustable headband for construction site protection.',
                image: 'https://m.media-amazon.com/images/I/51M9AqXi45L.jpg',
                specifications: {
                  material: "HDPE shell",
                  standard: "IS 2925",
                  colors: "White, Yellow, Red, Blue",
                  chinStrap: "Included"
                 },
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
                specifications: {
                   voltage: "18V Li-ion",
                   chuckSize: "13mm keyless",
                   torque: "50 Nm",
                   batteryLife: "2-3 hours"
                 },
                inStock: true
            },
            
            {
                id: 24,
                name: "Circular Saw",
                category: "Power Tools",
                price: 6800,
                description: "Professional circular saw with laser guide for precise wood cutting.",
                image:"https://hupshenghardware.com/wp-content/uploads/2019/01/Bosch-Circular-Saw-GKS600-1.jpg",
                specifications: {
                   bladeSize: "190mm (7.5 inch)",
                   power: "1400W",
                   cuttingDepth: "68mm at 90°",
                   laserGuide: "Included"
                  },   
                inStock: true
              },
            {
                id: 22,
                name: "Angle Grinder",
                category: "Power Tools",
                price: 3200,
                description: "4-inch angle grinder with variable speed control for cutting and grinding applications.",
                image: "https://image.made-in-china.com/2f0j00veBaSQtWqcYT/Angle-Grinder-Angle-Grinder-K6230026-1-.jpg",
                specifications: {
                   discSize: "100mm (4 inch)",
                   power: "850W",
                   noLoadSpeed: "11000 RPM",
                   weight: "1.8 kg"
                },           
                inStock: true
              },

            {
                id: 23,
                name: "Impact Driver",
                category: "Power Tools",
                price: 4200,
                description: "High-torque impact driver for heavy-duty fastening applications.",
                image: "https://www.fishertools.com/images/products/10/10998/238028064932a2855b6a7616274ca26d_1000.jpg",
                specifications: {
                    torque: "180 Nm",
                    impactsPerMinute: "3600 IPM",
                    battery: "18V Li-ion",
                    chuckSize: "1/4 inch hex"
                  },
                inStock: true
              },
            {
                id: 25,
                name: "Oscillating Multi-Tool",
                category: "Power Tools",
                price: 3800,
                description: "Versatile oscillating tool with multiple attachments for cutting, sanding, and scraping.",
                image: "https://rhgaudion.com/wp-content/uploads/2020/09/DCS355-700x700.jpg",
                specifications: {
                   oscillations: "22000 OPM",
                   power: "300W",
                   attachments: "35 piece kit",
                   toolFree: "Quick change system"
                 },
                inStock: true
            },
             {
                id: 26,
                name: "High Pressure Washer",
                category: "Power Tools",
                price: 13800,
                description: "The Bosch Universal Aquatak 130 high-pressure washer is the quick and effortless solution for a range of outside cleaning tasks.",
                image: "https://toolz4industry.com/wp-content/uploads/2018/02/bosch-aquatak-130-1-500x500.jpg",
                specifications: {
                   Power: "1700 watts",
                   OperatingVoltage: "220 - 240 volts",
                   HandleHeight : "0.87 m",
                   Pressure : "6 m high-pressure hose"
               },
                inStock: true
              },
            {
              id: 17,
              name: "Safety Hand Gloves",
              category: "Safety",
              price: 250,
              description: "Cut-resistant safety gloves with excellent grip for construction workers.",
              image: "https://tse3.mm.bing.net/th/id/OIP.GSahesbNwrnoasw1nejf7wHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
              specifications: {
                 material: "Nitrile coated",
                 cutLevel: "Level 5",
                 sizes: "S, M, L, XL",
                 grip: "Palm and finger coating"
               },
              inStock: true
            }, 
            {
               id: 18,
               name: "Safety Harness",
               category: "Safety",
               price: 3500,
               description: "Full body safety harness for working at height protection.",
               image: "https://www.uviraj.com/images/FBH-EN/U221FBH.jpg",
               specifications: {
                  type: "Full body harness",
                  material: "Polyester webbing",
                  buckles: "Auto-locking",
                  capacity: "140 kg"
                },          
               inStock: true
             },

             {
               id: 19,
               name: "Safety Goggles",
               category: "Safety",
               price: 450,
               description: "Anti-fog safety goggles with UV protection for eye safety.",
               image: "https://th.bing.com/th/id/OIP.B-6wNhxaeq95PpMePz7SmAHaEt?w=297&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
               specifications: {
                  lens: "Polycarbonate",
                  coating: "Anti-fog, anti-scratch",
                  uvProtection: "99.9%",
                  frame: "Flexible TPR"
                },          
               inStock: true
             },
             {
               id: 20,
               name: "Safety Shoes",
               category: "Safety",
               price: 2200,
               description: "Steel toe safety shoes with slip-resistant sole for workplace protection.",
               image: "https://www.fischerbell.com/wp-content/uploads/2022/11/FT-SHOE_SAFETYJOGGER_10803SJ1401XX-2.jpg", 
               specifications: {
                  toeCap: "Steel toe",
                  sole: "PU dual density",
                  upper: "Buffalo leather",
                  sizes: "6-11 UK"
                },  
               inStock: true
             },
             {
                 id: 27,
                 name: "Safety Reflective Jackect",
                 category: "Safety",
                 price: 640,
                 description: "uniformer Safety Jacket for Men and Women | Reflective High Visibility.",
                 image: "https://5.imimg.com/data5/DT/DP/MY-1027393/reflective-jacket.jpg",
                 specifications: {
                  Material: "Polyester",
                  NeckStyle: "V Neck",
                  
                },  
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
        this.initNavigation();
        this.initMobileMenu();
        this.initBackToTop();
        this.initProductFilters();
        this.initHeaderScroll();
        this.initSmoothScrolling();
        this.initHeroScroll();

        window.addEventListener('resize', this.debounce(() => this.handleResize(), 250));
    }

    // ===== MOBILE MENU =====
    initMobileMenu() {
        const menuToggle = document.getElementById('menuToggle');
        const navList = document.querySelector('.nav-list');
        
        menuToggle?.addEventListener('click', () => {
            navList.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navList.contains(e.target)) {
                navList.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // ===== NAVIGATION =====
    initNavigation() {
        window.addEventListener('scroll', this.throttle(() => this.updateActiveNav(), 100));
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
        document.getElementById('heroScroll')?.addEventListener('click', () => {
            const aboutSection = document.getElementById('solutions');
            if (aboutSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = aboutSection.offsetTop - headerHeight;
                
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
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
            window.scrollTo({ top: 0, behavior: 'smooth' });
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

    // ===== PRODUCT FILTERS & INTERACTIONS =====
    initProductFilters() {
        // Search input
        document.getElementById('searchInput')?.addEventListener('input', this.debounce((e) => {
            this.filterProducts(e.target.value.toLowerCase());
        }, 300));

        // Category filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.filterByCategory(btn.getAttribute('data-filter'));
            });
        });

        // Load more button
        document.getElementById('loadMore')?.addEventListener('click', () => {
            this.loadMoreProducts();
        });

        // REFACTOR: Use event delegation for all product card clicks
        document.getElementById('productsGrid')?.addEventListener('click', (e) => {
            const viewDetailsBtn = e.target.closest('.view-details-btn');
            if (viewDetailsBtn) {
                const productId = parseInt(viewDetailsBtn.dataset.id, 10);
                const product = this.products.find(p => p.id === productId);
                if (product) {
                    this.showProductModal(product);
                }
            }
        });
        
        // Reset filters button (listens on the document for clicks on the dynamic button)
        document.addEventListener('click', (e) => {
            if (e.target.closest('.reset-filters-btn')) {
                this.resetFilters();
            }
        });
    }

    filterProducts(searchTerm) {
        const activeCategory = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
        let productsToFilter = this.products;

        if (activeCategory !== 'all') {
            productsToFilter = this.products.filter(p => p.category === activeCategory);
        }

        this.filteredProducts = productsToFilter.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
        this.currentPage = 1;
        this.renderProducts();
    }

    filterByCategory(category) {
        document.getElementById('searchInput').value = ''; // Clear search on category change
        if (category === 'all') {
            this.filteredProducts = [...this.products];
        } else {
            this.filteredProducts = this.products.filter(product => product.category === category);
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
            this.renderProducts(false); // false means append, not clear
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

        const startIndex = 0; // Always start from 0
        const endIndex = this.currentPage * this.productsPerPage;
        const productsToShow = this.filteredProducts.slice(startIndex, endIndex);

        if (productsToShow.length === 0 && clearContainer) {
            productsGrid.innerHTML = `
                <div class="no-products">
                    <i class="fas fa-search"></i>
                    <h3>No products found</h3>
                    <p>Try adjusting your search or filter criteria.</p>
                    <button class="btn btn-primary reset-filters-btn">
                        <i class="fas fa-sync-alt"></i>
                        Reset Filters
                    </button>
                </div>
            `;
            loadMoreBtn?.style.setProperty('display', 'none');
            return;
        }
        
        // REFACTOR: Efficiently render only new products when loading more
        if (clearContainer) {
            productsGrid.innerHTML = ''; // Clear only if it's a new render
        }
        
        const currentlyRenderedCount = productsGrid.children.length;
        const newProducts = this.filteredProducts.slice(currentlyRenderedCount, endIndex);

        newProducts.forEach((product, index) => {
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
        
        const stockStatus = product.inStock 
            ? '<span class="stock-status in-stock"><i class="fas fa-check"></i> In Stock</span>' 
            : '<span class="stock-status out-of-stock"><i class="fas fa-times"></i> Out of Stock</span>';
        
        // REFACTOR: Removed onclick. Now uses a data-id attribute for event delegation.
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/500x250?text=Image+Not+Found'">
                <div class="product-overlay">
                    <button class="btn btn-primary view-details-btn" data-id="${product.id}">
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

    showProductModal(product) {
        try {
            const modalHTML = `
                <div class="product-modal-overlay" id="productModal">
                    <div class="product-modal">
                        <div class="modal-header">
                            <h3>${product.name}</h3>
                            <button class="modal-close">
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
                                <p class="product-description">${product.extra}</p>
                                ${product.specifications ? this.renderSpecifications(product.specifications) : ''}
                                <div class="modal-actions">
                                    <button class="btn btn-primary get-quote-btn" data-product-name="${product.name}">
                                        <i class="fas fa-phone"></i>
                                        Get Quote
                                    </button>
                                    <button class="btn btn-outline add-wishlist-btn" data-id="${product.id}">
                                        <i class="fas fa-heart"></i>
                                        Add to Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            document.body.insertAdjacentHTML('beforeend', modalHTML);
            document.body.style.overflow = 'hidden';
        
            const modalOverlay = document.getElementById('productModal');
            
            // REFACTOR: Add event listeners programmatically
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay || e.target.closest('.modal-close')) {
                    this.closeProductModal();
                }
                if (e.target.closest('.get-quote-btn')) {
                    const productName = e.target.closest('.get-quote-btn').dataset.productName;
                    this.contactForQuote(productName);
                }
                if (e.target.closest('.add-wishlist-btn')) {
                    const productId = parseInt(e.target.closest('.add-wishlist-btn').dataset.id, 10);
                    this.addToWishlist(productId);
                }
            });

            // Add Escape key support
            this._escModalHandler = (e) => {
                if (e.key === 'Escape') {
                    this.closeProductModal();
                }
            };
            document.addEventListener('keydown', this._escModalHandler);

        } catch (err) {
            console.error('Error in showProductModal:', err);
            // REFACTOR: Replaced alert with a better notification
            this.showNotification('Error displaying product details.', 'error');
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
        if (this._escModalHandler) {
            document.removeEventListener('keydown', this._escModalHandler);
            this._escModalHandler = null;
        }
    }

    contactForQuote(productName) {
        const message = `Hi, I'm interested in getting a quote for "${productName}". Please provide more details.`;
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
        if (searchInput) searchInput.value = '';
        
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector('.filter-btn[data-filter="all"]')?.classList.add('active');
        
        this.filteredProducts = [...this.products];
        this.currentPage = 1;
        this.renderProducts();
    }

    updateProductCount() {
        const countElement = document.getElementById('productCount');
        if (countElement) {
            const renderedCount = document.getElementById('productsGrid').children.length;
            countElement.textContent = `Showing ${renderedCount} of ${this.filteredProducts.length} products`;
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
                    
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
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
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;

        document.body.appendChild(notification);
        
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.remove();
        });

        setTimeout(() => notification.remove(), 5000);
    }

    // ===== RESPONSIVE HANDLER =====
    handleResize() {
        this.updateActiveNav();
    }

    // ===== ANIMATIONS =====
    initAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target); // Animate only once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.solution-card, .service-card, .testimonial-card').forEach(el => {
            observer.observe(el);
        });

        this.injectStyles();
    }

    injectStyles() {
        if (document.getElementById('venkat-app-styles')) return; // Prevent duplicate styles
        const style = document.createElement('style');
        style.id = 'venkat-app-styles';
        style.textContent = `
            /* Dark Theme Styles */
            .dark-theme {
                --text-dark: #f8f9fa; --text-medium: #adb5bd; --text-light: #6c757d;
                --bg-white: #212529; --bg-light: #3d464fff; --bg-dark: #1a1d23;
            }
            .dark-theme .header { background: rgba(33, 37, 41, 0.95); border-bottom-color: rgba(255, 255, 255, 0.1); }
            .dark-theme .header.scrolled { background: rgba(33, 37, 41, 0.98); }
            .dark-theme .search-box input { background: var(--bg-light); border-color: var(--text-light); color: var(--text-dark); }
            .dark-theme .filter-btn { background: var(--bg-light); border-color: var(--text-light); color: var(--text-medium); }
            .dark-theme .product-specifications li { border-bottom-color: #495057; }

            /* Theme Toggle Button */
            .theme-toggle { width: 40px; height: 40px; border-radius: 50%; border: none; background: var(--bg-light); color: var(--text-dark); cursor: pointer; transition: var(--transition); display: flex; align-items: center; justify-content: center; }
            .theme-toggle:hover { background: var(--primary-color); color: var(--text-white); transform: scale(1.1); }

            /* Mobile Menu Styles */
            .menu-toggle span { transition: var(--transition); }
            .menu-toggle.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
            .menu-toggle.active span:nth-child(2) { opacity: 0; }
            .menu-toggle.active span:nth-child(3) { transform: rotate(-45deg) translate(7px, -6px); }

            /* Product Modal Styles */
            .product-modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.8); display: flex; align-items: center; justify-content: center; z-index: 10000; opacity: 0; animation: fadeIn 0.3s ease-out forwards; }
            .product-modal { background: var(--bg-white); border-radius: var(--border-radius-large); max-width: 800px; width: 90%; max-height: 90vh; overflow-y: auto; box-shadow: var(--shadow-heavy); transform: scale(0.9); animation: modalSlideIn 0.3s ease-out 0.1s forwards; }
            @keyframes modalSlideIn { to { transform: scale(1); } }
            .modal-header { display: flex; justify-content: space-between; align-items: center; padding: 20px 30px; border-bottom: 2px solid var(--bg-light); letter-spacing: 1px; }
            .modal-header h3 { margin: 0; color: var(--text-dark); }
            .modal-close { background: none; border: none; font-size: 1.5rem; color: var(--text-medium); cursor: pointer; transition: var(--transition); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
            .modal-close:hover { background: var(--bg-light); color: var(--text-dark); }
            .modal-content { padding: 30px; display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
            .modal-image { position: relative; }
            .modal-image img { width: 100%; height: 400px; border-radius: var(--border-radius); }
            .modal-badge { position: absolute; top: 15px; right: 15px; background: var(--primary-color); color: white; padding: 8px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: 500; }
            .modal-details .product-category { font-size: 0.9rem; color: var(--text-dark); font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; }
            .modal-details .product-price { font-size: 2rem; font-weight: 700; color: var(--primary-color); margin-bottom: 20px; }
            .product-description { color: var(--text-medium); line-height: 1.7; margin-bottom: 25px; }
            .product-specifications h4 { color: var(--text-dark); margin-bottom: 15px; font-size: 1.2rem; }
            .product-specifications ul { list-style: none; padding: 0; }
            .product-specifications li { padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: var(--text-medium); }
            .modal-actions { margin-top: 30px; display: flex; gap: 15px; }

            /* Loading & No Products State */
            .loading-state, .no-products { grid-column: 1 / -1; text-align: center; padding: 80px 20px; color: var(--text-medium); }
            .loading-state .spinner { margin: 0 auto 20px; }
            .no-products i { font-size: 4rem; margin-bottom: 20px; opacity: 0.5; }
            .no-products h3 { margin-bottom: 10px; color: var(--text-dark); }

            /* Stock Status */
            .stock-status { display: inline-flex; align-items: center; gap: 5px; padding: 4px 8px; border-radius: 15px; font-size: 0.8rem; font-weight: 500; margin-top: 10px; }
            .stock-status.in-stock { background: rgba(39, 174, 96, 0.1); color: var(--success-color); }
            .stock-status.out-of-stock { background: rgba(231, 76, 60, 0.1); color: var(--error-color); }

            /* Notifications */
            .notification { position: fixed; top: 20px; right: 20px; background: var(--bg-white); color: var(--text-dark); padding: 15px 20px; border-radius: var(--border-radius); box-shadow: var(--shadow-medium); display: flex; align-items: center; gap: 10px; z-index: 10001; max-width: 350px; animation: slideInRight 0.3s ease-out; }
            .notification-success { border-left: 4px solid var(--success-color); }
            .notification-error { border-left: 4px solid var(--error-color); }
            .notification-info { border-left: 4px solid var(--accent-color); }
            .notification-close { background: none; border: none; color: var(--text-medium); cursor: pointer; margin-left: auto; padding: 5px; }
            @keyframes slideInRight { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }

            /* Responsive Modal */
            @media (max-width: 768px) {
                .modal-content { grid-template-columns: 1fr; gap: 20px; }
                .modal-actions { flex-direction: column; }
                .product-modal { width: 95%; margin: 20px; }
                .modal-header, .modal-content { padding: 20px; }
            }

            /* Animation Classes */
            .animate-in { animation: slideInUp 0.6s ease-out forwards; }
            @keyframes slideInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        `;
        document.head.appendChild(style);
    }

    // ===== UTILITY FUNCTIONS =====
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func.apply(this, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            if (!inThrottle) {
                func.apply(this, arguments);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // REFACTOR: The app is now self-contained and doesn't need a global variable.
    new VenkatEnterprisesApp();

    window.addEventListener('error', (e) => {
        console.error('An unhandled application error occurred:', e.error);
    });

    window.addEventListener('load', () => {
        if (performance) {
            const loadTime = performance.now();
            console.log(`Page fully loaded in ${Math.round(loadTime)}ms`);
        }
    });
});
