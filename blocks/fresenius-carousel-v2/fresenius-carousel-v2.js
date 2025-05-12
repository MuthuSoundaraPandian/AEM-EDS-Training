export default async function decorate(block) {
  const blockFirstChild = block.children[0];
  if (blockFirstChild) {
    blockFirstChild.classList.add('blockFirstChild');
  }
  const freseniusCarousel = document.querySelectorAll('.fresenius-carousel-v2');
  if (freseniusCarousel.length > 0) {
    freseniusCarousel.forEach((div) => {
      div.classList.add('fresenius-carousel');
    });
  }
  const freseniusCarouselLeftContent = document.querySelectorAll(
    '.fresenius-carousel-v2 > div:first-child',
  );
  if (freseniusCarouselLeftContent.length > 0) {
    freseniusCarouselLeftContent.forEach((div) => {
      div.classList.add('fresenius-carousel__left-content');
    });
  }
  const freseniusCarouselLeftContentHeading = document.querySelectorAll(
    '.fresenius-carousel-v2 > div:first-child h2',
  );
  if (freseniusCarouselLeftContentHeading.length > 0) {
    freseniusCarouselLeftContentHeading.forEach((div) => {
      div.classList.add('fresenius-carousel__left-content__heading');
    });
  }
  const freseniusCarouselLeftContentDescription = document.querySelectorAll(
    '.fresenius-carousel-v2 > div:first-child p',
  );
  if (freseniusCarouselLeftContentDescription.length > 0) {
    freseniusCarouselLeftContentDescription.forEach((div) => {
      div.classList.add('fresenius-carousel__left-content__description');
    });
  }
  const newDiv = document.createElement('div');
  newDiv.classList.add('fresenius-carousel__right-content');
  freseniusCarousel[0].appendChild(newDiv);
  // 1. Get the carousel and right-content container
  const carousel = document.querySelector('.fresenius-carousel');
  const rightContent = document.querySelector(
    '.fresenius-carousel__right-content',
  );
  if (!carousel || !rightContent) {
    console.error('Required elements not found!');
    return;
  }
  // 2. Get all unnamed divs inside the carousel (without a class)
  const unnamedDivs = Array.from(carousel.children).filter(
    (child) => child.tagName === 'DIV' && !child.className,
  );
  // 3. Move each unnamed div into right-content
  unnamedDivs.forEach((div) => {
    rightContent.appendChild(div);
  });
  const freseniusCarouselSliderWrapper = document.querySelectorAll(
    '.fresenius-carousel__right-content > div',
  );
  if (freseniusCarouselSliderWrapper.length > 0) {
    freseniusCarouselSliderWrapper.forEach((div) => {
      div.classList.add('fresenius-carousel__right-content__slider-wrapper');
    });
  }
  const freseniusCarouselSliderWrapperImg = document.querySelectorAll(
    '.fresenius-carousel__right-content__slider-wrapper > div:first-child',
  );
  if (freseniusCarouselSliderWrapperImg.length > 0) {
    freseniusCarouselSliderWrapperImg.forEach((div) => {
      div.classList.add(
        'fresenius-carousel__right-content__slider-wrapper__img',
      );
    });
  }
  const freseniusCarouselSliderWrappercontent = document.querySelectorAll(
    '.fresenius-carousel__right-content__slider-wrapper > div:last-child',
  );
  if (freseniusCarouselSliderWrappercontent.length > 0) {
    freseniusCarouselSliderWrappercontent.forEach((div) => {
      div.classList.add(
        'fresenius-carousel__right-content__slider-wrapper__content',
      );
    });
  }
  // Create navigation buttons
  const prevButton = document.createElement('button');
  prevButton.className = 'fresenius-carousel__right-content__prev-button';
  prevButton.innerHTML = '<i class=\'fa fa-arrow-left\' aria-hidden=\'true\'></i>'; // Note the escaped single quotes
  prevButton.setAttribute('aria-label', 'Previous slide');
  const nextButton = document.createElement('button');
  nextButton.className = 'fresenius-carousel__right-content__next-button';
  nextButton.innerHTML = '<i class=\'fa fa-arrow-right\' aria-hidden=\'true\'></i>'; // Note the escaped single quotes
  nextButton.setAttribute('aria-label', 'Next slide');
  // Append navigation buttons
  rightContent.appendChild(prevButton);
  rightContent.appendChild(nextButton);
  // Create dots container - will be placed INSIDE slider-wrapper
  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'fresenius-carousel__right-content__dots-container';
  // Unified function to handle slide transitions
  function goToSlide(targetSlide) {
    // Remove active class from all slides and dots
    document
      .querySelectorAll(
        '.fresenius-carousel__right-content > .fresenius-carousel__right-content__slider-wrapper',
      )
      .forEach((slide) => slide.classList.remove('active'));

    document
      .querySelectorAll(
        '.fresenius-carousel__right-content__dots-container__dot',
      )
      .forEach((dot) => dot.classList.remove('active'));
    // Add active class to target slide
    targetSlide.classList.add('active');
    // Find and activate corresponding dot
    const slides = Array.from(
      document.querySelectorAll(
        '.fresenius-carousel__right-content > .fresenius-carousel__right-content__slider-wrapper',
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
      '.fresenius-carousel__right-content > .fresenius-carousel__right-content__slider-wrapper',
    );
    // Clear existing dots
    dotsContainer.innerHTML = '';
    // Create a dot for each slide
    slides.forEach((slide, index) => {
      const dot = document.createElement('button');
      dot.className = 'fresenius-carousel__right-content__dots-container__dot';
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
      '.fresenius-carousel__right-content > .fresenius-carousel__right-content__slider-wrapper:first-child',
    );
    if (firstslide) {
      firstslide.forEach((div) => {
        div.classList.add('active');
      });
    }
    // Add dots container INSIDE slider-wrapper (as last child)
    rightContent.appendChild(dotsContainer);
    // Initialize dots
    initializeDots();
  }, 100);
  // Previous button functionality
  function showPrev() {
    // Get current active slide
    const activeSlide = document.querySelector(
      '.fresenius-carousel__right-content > .fresenius-carousel__right-content__slider-wrapper.active',
    );
    // Find previous sibling that is a carousel wrapper (not button)
    let prevSlide = activeSlide.previousElementSibling;
    while (
      prevSlide
      && !prevSlide.classList.contains(
        'fresenius-carousel__right-content__slider-wrapper',
      )
    ) {
      prevSlide = prevSlide.previousElementSibling;
    }
    // If we found a valid previous slide
    if (prevSlide) {
      goToSlide(prevSlide);
    } else {
      // Optional: wrap around to last slide
      const allSlides = document.querySelectorAll(
        '.fresenius-carousel__right-content > .fresenius-carousel__right-content__slider-wrapper',
      );
      goToSlide(allSlides[allSlides.length - 1]);
    }
  }
  // Next button functionality
  function showNext() {
    // Get current active slide
    const activeSlide = document.querySelector(
      '.fresenius-carousel__right-content > .fresenius-carousel__right-content__slider-wrapper.active',
    );
    // Find next sibling that is a carousel wrapper (not button)
    let nextSlide = activeSlide.nextElementSibling;
    while (
      nextSlide
      && !nextSlide.classList.contains(
        'fresenius-carousel__right-content__slider-wrapper',
      )
    ) {
      nextSlide = nextSlide.nextElementSibling;
    }
    // If we found a valid next slide
    if (nextSlide) {
      goToSlide(nextSlide);
    } else {
      // Wrap around to first slide
      const allSlides = document.querySelectorAll(
        '.fresenius-carousel__right-content > .fresenius-carousel__right-content__slider-wrapper',
      );
      goToSlide(allSlides[0]);
    }
  }
  // Add event listeners
  prevButton.addEventListener('click', showPrev);
  nextButton.addEventListener('click', showNext);
}
