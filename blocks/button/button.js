export default function decorate(block) {
    const title = block.children[0];
    title.classList.add('button_signup-heading');
    const section = block.children[1];
    section.classList.add('button_signup-content');
    const buttonsec = block.children[1].children[1];
    buttonsec.classList.add('signup-content_button');
    const btnsec = block.children[1].children[0];
    btnsec.classList.add('signup-content_desc');
}