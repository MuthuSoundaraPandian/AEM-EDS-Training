export default function decorate(block) {
  const essentialHeading = block.children[0];
  essentialHeading ? essentialHeading.classList.add('essential-heading') : null;
  const essentialImgContentContainer = block.children[1];
  essentialImgContentContainer
    ? essentialImgContentContainer.classList.add(
        'essential_img_content_container'
      )
    : null;
  const essential_img_section = document.querySelectorAll(
    '.essential_img_content_container > div:first-child'
  );
  if (essential_img_section.length >= 0) {
    essential_img_section.forEach((div) => {
      div.classList.add('essential-img');
    });
  }
  const essential_content_section = document.querySelectorAll(
    '.essential_img_content_container > div:last-child'
  );
  if (essential_content_section.length >= 0) {
    essential_content_section.forEach((div) => {
      div.classList.add('essential-content');
    });
  }
}
