export default function decorate(block) {
  const startingdiv = document.querySelector('.fresenius-carousel-container');
  if (startingdiv) {
    startingdiv.classList.add('fresenius-carousel');
  }
  const freseniusCarouselWrapper = block.children[0];
  if (freseniusCarouselWrapper) {
    freseniusCarouselWrapper.classList.add('fresenius-carousel__wrapper');
  }
  const freseniusCarouselContainer = document.querySelectorAll(
    '.fresenius-carousel__wrapper > div',
  );
  if (freseniusCarouselContainer.length > 0) {
    freseniusCarouselContainer.forEach((div) => {
      div.classList.add('fresenius-carousel__wrapper__container');
    });
  }
  const freseniusCarouselheading = document.querySelectorAll(
    '.fresenius-carousel__wrapper__container > h2',
  );
  if (freseniusCarouselheading.length > 0) {
    freseniusCarouselheading.forEach((h2) => {
      h2.classList.add('fresenius-carousel__wrapper__container__heading');
    });
  }
  const freseniusCarouseldescription = document.querySelectorAll(
    '.fresenius-carousel__wrapper__container > p',
  );
  if (freseniusCarouseldescription.length > 0) {
    freseniusCarouseldescription.forEach((p) => {
      p.classList.add('fresenius-carousel__wrapper__container__description');
    });
  }
  // Get the main container
  const mainContainer = document.querySelector('.fresenius-carousel-container');
  if (!mainContainer) return;
  // First remove any existing empty slider-wrapper divs
  const existingSliders = mainContainer.querySelectorAll(
    '.fresenius-slider-wrapper',
  );
  existingSliders.forEach((slider) => {
    if (slider.children.length === 0) {
      slider.remove();
    }
  });
  // Get all carousel wrappers
  const carouselWrappers = mainContainer.querySelectorAll(
    '.fresenius-carousel-wrapper',
  );
  if (carouselWrappers.length < 2) return;
  // Create a single slider-wrapper container
  const sliderWrapper = document.createElement('div');
  sliderWrapper.className = 'fresenius-slider-wrapper';
  // Move all wrappers except the first one into our slider
  for (let i = 1; i < carouselWrappers.length; i += 1) {
    sliderWrapper.appendChild(carouselWrappers[i]);
  }
  // Insert the slider after the first wrapper
  carouselWrappers[0].insertAdjacentElement('afterend', sliderWrapper);
  // Final cleanup - remove any remaining empty sliders (just in case)
  const remainingEmptySliders = mainContainer.querySelectorAll(
    '.fresenius-slider-wrapper:not(:has(*))',
  );
  remainingEmptySliders.forEach((slider) => slider.remove());
  // Create navigation buttons
  const prevButton = document.createElement('button');
  prevButton.className = 'prev-button';
  prevButton.innerHTML = '<i class=\'fa fa-arrow-left\' aria-hidden=\'true\'></i>'; // < symbol
  prevButton.setAttribute('aria-label', 'Previous slide');

  const nextButton = document.createElement('button');
  nextButton.className = 'next-button';
  nextButton.innerHTML = '<i class=\'fa fa-arrow-right\' aria-hidden=\'true\'></i>'; // > symbol
  nextButton.setAttribute('aria-label', 'Next slide');

  // Create dots container - will be placed INSIDE slider-wrapper
  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'fresenius-dots-container';
  // Unified function to handle slide transitions
  function goToSlide(targetSlide) {
    // Remove active class from all slides and dots
    document
      .querySelectorAll(
        '.fresenius-slider-wrapper > .fresenius-carousel-wrapper',
      )
      .forEach((slide) => slide.classList.remove('active'));

    document
      .querySelectorAll('.fresenius-dot')
      .forEach((dot) => dot.classList.remove('active'));

    // Add active class to target slide
    targetSlide.classList.add('active');

    // Find and activate corresponding dot
    const slides = Array.from(
      document.querySelectorAll(
        '.fresenius-slider-wrapper > .fresenius-carousel-wrapper',
      ),
    );
    const slideIndex = slides.indexOf(targetSlide);
    if (slideIndex >= 0) {
      dotsContainer.children[slideIndex].classList.add('active');
    }
  }

  // Initialize dots navigation
  function initializeDots() {
    const slides = document.querySelectorAll(
      '.fresenius-slider-wrapper > .fresenius-carousel-wrapper',
    );
    // Clear existing dots
    dotsContainer.innerHTML = '';
    // Create a dot for each slide
    slides.forEach((slide, index) => {
      const dot = document.createElement('button');
      dot.className = 'fresenius-dot';
      dot.setAttribute('aria-label', `Go to slide ${index + 1}`);

      if (slide.classList.contains('active')) {
        dot.classList.add('active');
      }

      dot.addEventListener('click', () => {
        goToSlide(slide);
      });
      dotsContainer.appendChild(dot);
    });
  }
  setTimeout(() => {
    // Add buttons to the DOM
    const firstslide = document.querySelectorAll(
      '.fresenius-slider-wrapper > .fresenius-carousel-wrapper:first-child',
    );
    if (firstslide) {
      firstslide.forEach((div) => {
        div.classList.add('active');
      });
    }
    sliderWrapper.prepend(prevButton);
    sliderWrapper.append(nextButton);
    // Add dots container INSIDE slider-wrapper (as last child)
    sliderWrapper.appendChild(dotsContainer);
    // Initialize dots
    initializeDots();
  }, 100);

  // Previous button functionality
  function showPrev() {
    // Get current active slide
    const activeSlide = document.querySelector(
      '.fresenius-slider-wrapper > .fresenius-carousel-wrapper.active',
    );
    // Find previous sibling that is a carousel wrapper (not button)
    let prevSlide = activeSlide.previousElementSibling;
    while (
      prevSlide
      && !prevSlide.classList.contains('fresenius-carousel-wrapper')
    ) {
      prevSlide = prevSlide.previousElementSibling;
    }

    // If we found a valid previous slide
    if (prevSlide) {
      goToSlide(prevSlide);
    } else {
      // Optional: wrap around to last slide
      const allSlides = document.querySelectorAll(
        '.fresenius-slider-wrapper > .fresenius-carousel-wrapper',
      );
      goToSlide(allSlides[allSlides.length - 1]);
    }
  }

  // Next button functionality
  function showNext() {
    // Get current active slide
    const activeSlide = document.querySelector(
      '.fresenius-slider-wrapper > .fresenius-carousel-wrapper.active',
    );
    // Find next sibling that is a carousel wrapper (not button)
    let nextSlide = activeSlide.nextElementSibling;
    while (
      nextSlide
       && !nextSlide.classList.contains('fresenius-carousel-wrapper')
    ) {
      nextSlide = nextSlide.nextElementSibling;
    }
    // If we found a valid next slide
    if (nextSlide) {
      goToSlide(nextSlide);
    } else {
      // Wrap around to first slide
      const allSlides = document.querySelectorAll(
        '.fresenius-slider-wrapper > .fresenius-carousel-wrapper',
      );
      goToSlide(allSlides[0]);
    }
  }
  // Add event listeners
  prevButton.addEventListener('click', showPrev);
  nextButton.addEventListener('click', showNext);
}
