export default function decorate(block) {
    const freseniusCard = document.querySelectorAll(".fresenius-card");
  if (freseniusCard.length > 0) {
    freseniusCard.forEach((div) => {
      div.classList.add("fresenius-card-wrapper");
    });
  }
  const freseniusCardItem = document.querySelectorAll(".fresenius-card > div");
  if (freseniusCardItem.length > 0) {
    freseniusCardItem.forEach((div) => {
      div.classList.add("fresenius-card-wrapper__item");
    });
  }
  const freseniusCardContainer = document.querySelectorAll(".fresenius-card > div > div");
  if (freseniusCardContainer.length > 0) {
    freseniusCardContainer.forEach((div) => {
      div.classList.add("fresenius-card-wrapper__item__container");
    });
  }

  const freseniusContentH1 = document.querySelectorAll(".fresenius-card > div > div > h1");
  if (freseniusContentH1.length > 0) {
    freseniusContentH1.forEach((div) => {
      div.classList.add("fresenius-card-wrapper__item__container__title");
    });
  }

  const freseniusContentDescription = document.querySelectorAll(".fresenius-card > div > div > p:nth-child(2)");
  if (freseniusContentDescription.length > 0) {
    freseniusContentDescription.forEach((div) => {
      div.classList.add("fresenius-card-wrapper__item__container__description");
    });
  }

  const freseniusContentButton = document.querySelectorAll(".fresenius-card > div > div > p:nth-child(3)");
  if (freseniusContentButton.length > 0) {
    freseniusContentButton.forEach((div) => {
      div.classList.add("fresenius-card-wrapper__item__container__button");
    });
  }

  const freseniusContentImage = document.querySelectorAll(".fresenius-card > div > div > p:nth-child(4)");
  if (freseniusContentImage.length > 0) {
    freseniusContentImage.forEach((div) => {
      div.classList.add("fresenius-card-wrapper__item__container__img");
    });
  }
    
  const contentsDiv = document.createElement('div');
  contentsDiv.classList.add('fresenius-card-wrapper__item__container__contents');
  freseniusCardContainer[0].appendChild(contentsDiv);

  const freseniusfirstcolumn = document.querySelectorAll(".fresenius-card > div:first-child > div:first-child");

  
  freseniusfirstcolumn.forEach(container => { 
    const freseniusfirstcolumnh1 = container.querySelector("h1");
    const freseniusfirstcolumnp = container.querySelector("p");
    const freseniusfirstcolumnbutton = container.querySelector(".fresenius-card-wrapper__item__container__button");
    // Check if all elements exist
    if (contentsDiv && freseniusfirstcolumnh1) {
        // Move title first (so it appears at the top)
        contentsDiv.insertBefore(freseniusfirstcolumnh1, contentsDiv.firstChild);
    }
    
    if (contentsDiv && freseniusfirstcolumnp) {
        contentsDiv.appendChild(freseniusfirstcolumnp);
    }
    
    if (contentsDiv && freseniusfirstcolumnbutton) {
        contentsDiv.appendChild(freseniusfirstcolumnbutton);
    }
  });  
}