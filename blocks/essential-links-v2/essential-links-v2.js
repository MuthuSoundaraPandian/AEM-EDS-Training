export default function decorate(block) {
  const essentialHeading = block.children[0];
  if (essentialHeading) {
    essentialHeading.classList.add('essential-heading');
  }
  const essentialImgContentContainer = block.children[1];
  if (essentialImgContentContainer) {
    essentialImgContentContainer.classList.add(
      'essential_img_content_container',
    );
  }
  const essentialImgSection = document.querySelectorAll(
    '.essential_img_content_container > div:first-child',
  );
  if (essentialImgSection.length >= 0) {
    essentialImgSection.forEach((div) => {
      div.classList.add('essential-img');
    });
  }
  const essentialContentSection = document.querySelectorAll(
    '.essential_img_content_container > div:last-child',
  );
  if (essentialContentSection.length >= 0) {
    essentialContentSection.forEach((div) => {
      div.classList.add('essential-content');
    });
  }
}
