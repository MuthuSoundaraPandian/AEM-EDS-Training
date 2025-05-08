export default function decorate(block) {
    const img = block.children[0];
    img.classList.add('teaser-right-image__overlapimage');
    const desc = block.children[1];
    desc.classList.add('teaser-right-image__content');
    const overlap = block.children[0].children[0];
    overlap.classList.add('teaser-right-image__overlap-image');
    const btn = block.children[1].children[2].children[0];
    btn.classList.add('teaser-right-image__button');
    const heading = block.children[1].children[1].children[0];
    heading.classList.add('teaser-right-image__heading');
    const para = block.children[1].children[0].children[0];
    para.classList.add('teaser-right-image__sub-heading');
    const button = block.children[1].children[2].children[0].children[0];
    button.classList.add('teaser-right-image__learnmore-btn');
    
}