export default function decorate(block) {
  const img = block.children[0];
  if (img) {
    img.classList.add('teaser-image');
  }
  const content = block.children[1];
  if (content) {
    content.classList.add('teaser-content');
  }
  const heading = block.children[1].children[0];
  if (heading) {
    heading.classList.add('teaser-heading');
  }
  const desc = block.children[1].children[1];
  if (desc) {
    desc.classList.add('teaser-desc');
  }
}
