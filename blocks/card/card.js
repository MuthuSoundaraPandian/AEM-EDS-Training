export default function decorate(block){
    console.log('sharma', block);
    const cardContent = block.children[0];
    cardContent.classList.add('card_content');
    const cardLink = block.querySelector('.card_content p');
    const cardTitle = block.querySelector('.card_content h1');
    const cardDesc = block.querySelector('.card_content h6');
    console.log(cardLink, cardTitle, cardDesc);
    if (cardLink) {
        cardLink.classList.add('card_link');
    }
    if (cardTitle) {
        cardTitle.classList.add('card_title');
    }
    if (cardDesc) {
        cardDesc.classList.add('card_desc');
    }

    const cardContainer = block.children[1];
    if (cardContainer) {
        cardContainer.classList.add('card_items');
    }
    const cards = block.querySelectorAll('.card_items > div');
    console.log('cards', cards);
    cards.forEach((element) => {
        element.classList.add('card_common');
    });
}