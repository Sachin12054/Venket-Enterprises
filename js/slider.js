document.addEventListener('DOMContentLoaded', () => {
    const slideBox = document.querySelector('.slide-box');
    const sliderTrack = document.querySelector('.slider');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const dotsContainer = document.querySelector('.dots');

    const initialSourceImages = Array.from(sliderTrack.querySelectorAll('.slide-initial-source'));
    const imageURLs = initialSourceImages.map(img => img.src);
    const imageAlts = initialSourceImages.map(img => img.alt);
    sliderTrack.innerHTML = '';

    let originalImageCount = imageURLs.length;
    let currentIndex = 0;
    const slideIntervalTime = parseInt(sliderTrack.dataset.interval) || 2000;
    let autoSlideTimer;

    const getVisibleItemsCount = () => {
        if (window.innerWidth <= 480) return 1;
        else if (window.innerWidth <= 768) return 2;
        return 3;
    };

    const populateSlider = () => {
        sliderTrack.innerHTML = '';
        const visibleItems = getVisibleItemsCount();

        imageURLs.forEach((url, index) => {
            const item = document.createElement('div');
            item.classList.add('slide');
            const img = document.createElement('img');
            img.src = url;
            img.alt = imageAlts[index] || 'Slider Image';
            item.appendChild(img);
            sliderTrack.appendChild(item);
        });

        for (let i = 0; i < visibleItems; i++) {
            const item = document.createElement('div');
            item.classList.add('slide');
            const img = document.createElement('img');
            img.src = imageURLs[i % originalImageCount];
            img.alt = imageAlts[i % originalImageCount] || 'Cloned Slider Image';
            item.appendChild(img);
            sliderTrack.appendChild(item);
        }

        updateSliderPosition(false);
        generateDots();
        updateDots();
    };

    const updateSliderPosition = (animate = true) => {
        const sliderItemElement = sliderTrack.querySelector('.slide');
        const itemWidth = sliderItemElement ? sliderItemElement.offsetWidth : 0;

        sliderTrack.style.transition = animate
            ? `transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)`
            : `none`;

        sliderTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

        if (currentIndex >= originalImageCount) {
            setTimeout(() => {
                sliderTrack.style.transition = 'none';
                currentIndex = 0;
                sliderTrack.style.transform = `translateX(0px)`;
                updateDots();
                setTimeout(() => {
                    sliderTrack.style.transition = `transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
                }, 50);
            }, 800);
        }
        updateDots();
    };

    const nextSlide = () => {
        currentIndex++;
        updateSliderPosition();
    };

    const prevSlide = () => {
        if (currentIndex === 0) {
            sliderTrack.style.transition = 'none';
            const itemWidth = sliderTrack.querySelector('.slide').offsetWidth;
            currentIndex = originalImageCount - 1;
            sliderTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
            setTimeout(() => {
                sliderTrack.style.transition = `transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
                updateSliderPosition(true);
            }, 50);
        } else {
            currentIndex--;
            updateSliderPosition();
        }
    };

    const generateDots = () => {
        dotsContainer.innerHTML = '';
        const numDots = originalImageCount; 
        for (let i = 0; i < numDots; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.dataset.dotIndex = i;
            dot.addEventListener('click', () => {
                currentIndex = parseInt(dot.dataset.dotIndex);
                updateSliderPosition();
                startAutoSlide();
            });
            dotsContainer.appendChild(dot);
        }
    };

    const updateDots = () => {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === currentIndex % originalImageCount) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    };

    const startAutoSlide = () => {
        if (autoSlideTimer) clearInterval(autoSlideTimer);
        autoSlideTimer = setInterval(nextSlide, slideIntervalTime);
    };

    prevButton.addEventListener('click', () => {
        prevSlide();
        startAutoSlide();
    });
    nextButton.addEventListener('click', () => {
        nextSlide();
        startAutoSlide();
    });

    slideBox.addEventListener('mouseover', () => {
        clearInterval(autoSlideTimer);
    });
    slideBox.addEventListener('mouseout', () => {
        startAutoSlide();
    });

    window.addEventListener('resize', () => {
        populateSlider();
        startAutoSlide();
    });

    populateSlider();
    startAutoSlide();

    setTimeout(nextSlide, 500);
});
