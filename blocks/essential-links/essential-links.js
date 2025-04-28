export default function decorate(block) {
  const title = block.children[0];
  if (title) {
    title.classList.add('d-flex-wrapper');
  }
  const flexitem = block.children[0].children[0];
  const flexitem1 = block.children[0].children[1];
  const flexitem2 = block.children[0].children[2];
  const flexitem3 = block.children[0].children[3];
  if (flexitem && flexitem1 && flexitem2 && flexitem3) {
    flexitem.classList.add('flex-item');
    flexitem1.classList.add('flex-item');
    flexitem2.classList.add('flex-item');
    flexitem3.classList.add('flex-item');
  }

  const ul = document.querySelector('ul');
  if (ul) {
    ul.classList.add('main-ul');
  }
}
