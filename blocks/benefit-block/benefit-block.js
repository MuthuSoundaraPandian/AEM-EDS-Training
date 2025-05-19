export default function decorate(block) {

  const parentDiv = document.querySelector('.benefit-block');

  const benefitBlockItem = document.querySelectorAll('.benefit-block > div:first-child');
  if (benefitBlockItem.length > 0) {
    benefitBlockItem.forEach((div) => {
      div.classList.add('benefit-block__leftside-item');

    });
  }

  const benefitBlockContents = document.querySelectorAll('.benefit-block > div:first-child > div');
  if (benefitBlockContents.length > 0) {
    benefitBlockContents.forEach((div) => {
      div.classList.add('benefit-block__leftside-item__contents');
    });
  }

  const benefitBlockContentsH1 = document.querySelectorAll('.benefit-block > div:first-child > div > h1');
  if (benefitBlockContentsH1.length > 0) {
    benefitBlockContentsH1.forEach((div) => {
      div.classList.add('benefit-block__leftside-item__contents__title');
    });
  }

  const benefitBlockContentsDescription = document.querySelectorAll('.benefit-block > div:first-child > div > p:nth-child(2)');
  if (benefitBlockContentsDescription.length > 0) {
    benefitBlockContentsDescription.forEach((div) => {
      div.classList.add('benefit-block__leftside-item__contents__description');
    });
  }

  const benefitBlockContentsButton = document.querySelectorAll('.benefit-block > div:first-child > div > p:nth-child(3)');
  if (benefitBlockContentsButton.length > 0) {
    benefitBlockContentsButton.forEach((div) => {
      div.classList.add('benefit-block__leftside-item__contents__button');
    });
  }

  const benefitBlockContentsButtonIcon = document.querySelectorAll('.benefit-block > div:first-child > div > p:nth-child(3) > picture');
  if (benefitBlockContentsButtonIcon.length > 0) {
    benefitBlockContentsButtonIcon.forEach((div) => {
      div.classList.add('benefit-block__leftside-item__contents__icon');
    });
  }


  const leftSide = document.createElement('div');
  leftSide.classList.add('benefit-block__leftside-item__container');
  block.append(leftSide);



  const leftsideItems = document.querySelector('.benefit-block__leftside-item');
  const leftsideContainers = document.querySelector('.benefit-block__leftside-item__container');

  if (leftsideItems) {
    leftsideContainers.append(leftsideItems);
    parentDiv.prepend(leftsideContainers);
  }

  const children = [...parentDiv.children];
  // console.log(children);
  const newDiv = document.createElement('div');
  newDiv.classList.add('benefit-block__rightside-item__container');
  // console.log(newDiv);
  const remainingChildren = children.slice(1);
  remainingChildren.forEach(child =>
    newDiv.appendChild(child));
  parentDiv.appendChild(newDiv);


  const benefitBlockRightsideItems = document.querySelectorAll('.benefit-block__rightside-item__container > div');
  if (benefitBlockRightsideItems.length > 0) {
    benefitBlockRightsideItems.forEach((div) => {
      div.classList.add('benefit-block__rightside-item__container__items');

    });
  }

  const benefitBlockRightsideContents = document.querySelectorAll('.benefit-block__rightside-item__container > div > div');
  if (benefitBlockRightsideContents.length > 0) {
    benefitBlockRightsideContents.forEach((div) => {
      div.classList.add('benefit-block__rightside-item__container__items__contents');

    });
  }

  const benefitBlockRightsideimg = document.querySelectorAll('.benefit-block__rightside-item__container__items__contents > p:first-child');
  if (benefitBlockRightsideimg.length > 0) {
    benefitBlockRightsideimg.forEach((div) => {
      div.classList.add('benefit-block__rightside-item__container__items__contents__img');

    });
  }

  const benefitBlockRightsidetitle = document.querySelectorAll('.benefit-block__rightside-item__container__items__contents > h2');
  if (benefitBlockRightsidetitle.length > 0) {
    benefitBlockRightsidetitle.forEach((div) => {
      div.classList.add('benefit-block__rightside-item__container__items__contents__title');

    });
  }

  const benefitBlockRightsidedescription = document.querySelectorAll('.benefit-block__rightside-item__container__items__contents > p:nth-child(3)');
  if (benefitBlockRightsidedescription.length > 0) {
    benefitBlockRightsidedescription.forEach((div) => {
      div.classList.add('benefit-block__rightside-item__container__items__contents__description');

    });
  }

}