export default function decorate(block) {
    const img = block.children[0];
    if(img){
        img.classList.add('teaser-right-image__overlapimage');
    }
    const desc = block.children[1];
    if(desc){
        desc.classList.add('teaser-right-image__content');
    }
    const overlap = block.children[0].children[0];
    if(overlap){
        overlap.classList.add('teaser-right-image__overlap-image');
    }
    const btn = block.children[1].children[2].children[0];
    if(btn){
        btn.classList.add('teaser-right-image__button');
    }
    const heading = block.children[1].children[1].children[0];
    if(heading){
        heading.classList.add('teaser-right-image__heading');
    }
    const para = block.children[1].children[0].children[0];
    if(para){
        para.classList.add('teaser-right-image__sub-heading');
    } 
    const button = block.children[1].children[2].children[0].children[0];
    if(button){
        button.classList.add('teaser-right-image__learnmore-btn');
    }
}