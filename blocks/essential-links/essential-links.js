export default function decorate(block) {
  const flexWrapper = block.children[0];
  if (flexWrapper) {
    flexWrapper.classList.add('d-flex-wrapper');
  }
  const flexchild = document.querySelectorAll('.d-flex-wrapper > div');
  const newDiv = document.createElement('div');
  newDiv.classList.add('flex-container');
  if (flexchild.length > 0) {
    flexchild.forEach((div) => {
      div.classList.add('flex-item');
    });
  }
  const flexWrapperSibling = block.children[1];
  flexWrapperSibling.classList.add('flex-wrap-sibling');
  newDiv.classList.add('content-wrapper');
  const flexItems = document.querySelectorAll('.d-flex-wrapper .flex-item');
  const flexWrapSibling = document.querySelector('.flex-wrap-sibling');
  const flexWrapChildren = Array.from(flexWrapSibling.children);
  // Process content distribution
  flexWrapChildren.forEach((child, index) => {
    const flexItemIndex = Math.floor(index / 2);
    flexItems[flexItemIndex]
      ? flexItems[flexItemIndex].appendChild(child)
      : null;
  });
  flexWrapSibling.remove();
  // Process headings
  const flexItemH2s = document.querySelectorAll('.flex-item h2');
  if (flexItemH2s.length > 0) {
    flexItemH2s.forEach((h2) => {
      h2.classList.add('box-heading');
    });
  }
  // Process image blocks
  const flexItemImg = document.querySelectorAll(
    '.flex-item .box-heading + div',
  );
  if (flexItemImg.length > 0) {
    flexItemImg.forEach((div) => {
      div.classList.add('img-block');
    });
  }
  // Process content blocks
  const flexItemDiv = document.querySelectorAll(
    '.flex-item .box-heading + div + div',
  );
  if (flexItemDiv.length > 0) {
    flexItemDiv.forEach((div) => {
      div.classList.add('content-block');
    });
  }
  // Now wrap img-block and content-block in flex-container for each flex-item
  flexItems.forEach((flexItem) => {
    // Find all direct children that need to be wrapped
    const imgBlock = flexItem.querySelector('.img-block');
    const contentBlock = flexItem.querySelector('.content-block');
    if (imgBlock && contentBlock) {
      // Create the flex-container
      const flexContainer = document.createElement('div');
      flexContainer.classList.add('flex-container');
      // Insert the container before the first element to wrap
      imgBlock.before(flexContainer);
      // Move the elements into the container
      flexContainer.appendChild(imgBlock);
      flexContainer.appendChild(contentBlock);
    }
  });
}
