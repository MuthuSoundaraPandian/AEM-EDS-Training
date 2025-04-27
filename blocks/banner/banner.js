// export default function decorate(block) {
//     const title = block.children[0].children[0].children[0];
//     console.log(title);
//     title.classList.add('title');
//     const pretitle = block.children[1].children[0].children[0];
//     console.log(pretitle);
//     pretitle.classList.add('pretitle');
//     const img = block.children[2].children[0];
//     console.log(img);
//     img.classList.add('img');
// }


export default function decorate(block) {
    const title = block.children[0].children[0].children[0];
    if (title) {
        title.classList.add('title');
    }    
    const description = block.children[0].children[1].children[0];
    if (description) {
        description.classList.add('description');
    }
    const img = block.children[1].children[0];
    if (img) {
        img.classList.add('img');
    }
}