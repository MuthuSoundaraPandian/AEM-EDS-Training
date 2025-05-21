export default function decorate(block) {
  // 1. Block 1 heading
  const block1 = block.children[0];
  if (block1) {
    block1.classList.add('cards-text__title');
  }
  const block1image = block.children[1];
  if (block1image) {
    block1image.classList.add('cards-text__image');
  }
}
