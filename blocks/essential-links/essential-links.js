export default function decorate(block) {
  const title = block.children[0];
  title.classList.add("d-flex-wrapper");

  const imgbox = block.children[0].children[0];
  imgbox.classList.add("img-div");

  const textcontent = block.children[0].children[1];
  textcontent.classList.add("grey-bg");
}
