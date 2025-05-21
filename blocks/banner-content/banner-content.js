export default function decorate(block) {
  const bannerimage = block.children[0];
  if (bannerimage) {
    bannerimage.classList.add('banner-content__image');
  }
  const bannercontent = block.children[1];
  if (bannercontent) {
    bannercontent.classList.add('banner-content__content');
    const paragraph = bannercontent.querySelector('p');
    if (paragraph) {
      paragraph.classList.add('banner-content__paragraph');
    }
  }
}
