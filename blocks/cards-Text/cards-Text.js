export default function decorate(block) {
  // 1. Block 1 heading
  const block1 = block.children[0];
  if (block1) {
    block1.classList.add('block1');
  }
  const block1ttle = block.children[0].children[0];
  if (block1ttle) {
    block1ttle.classList.add('block1ttle');
  }
  // Block 1 image
  const block1image = block.children[1];
  if (block1image) {
    block1image.classList.add('block1image');
  }
  // Block 1 image - Left section
  const block1imageleft = block.children[1].children[0];
  if (block1imageleft) {
    block1imageleft.classList.add('block1imageleft');
  }
  // Block 1 image - left image-text
  const block1imagelefttext = block.children[1].children[0].children[0].children[1];
  if (block1imagelefttext) {
    block1imagelefttext.classList.add('block1imagelefttext');
  }
  // Block 1 image - right section
  const block1imageright = block.children[1].children[1];
  if (block1imageright) {
    block1imageright.classList.add('block1imageright');
  }
  // Block 1 image - right image-text
  const block1imagerighttext = block.children[1].children[1].children[0].children[1];
  if (block1imagerighttext) {
    block1imagerighttext.classList.add('block1imagerighttext');
  }
}
