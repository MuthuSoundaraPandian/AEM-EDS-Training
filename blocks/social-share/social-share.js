export default function decorate(block) {
  block.classList.add('social-share');
  const likeAndShareWrapper = block.children[0];
  const likeContainer = block.children[0].children[0];
  const likeImgContainer = block.children[0].children[0].children[1];
  const likeImgButton = block.children[0].children[0].children[1].children[0];
  const dislikeImgButton = block.children[0].children[0].children[1].children[1];
  const shareContainer = block.children[0].children[1];
  const msgAndErrorWrapper = block.children[1];
  const msgAndErrorContainer = block.children[1].children[0];
  const likeContainerHeading = block.children[0].children[0].children[0];
  const likeSucessMsg = block.children[1].children[0].children[0];
  const shareErrorMsg = block.children[1].children[0].children[1];
  const disLikeComments = block.children[1].children[0].children[2];
  const submitButton = document.createElement('button');
  const msgContainer = document.createElement('textarea');
  msgContainer.classList.add('social-share__msg-and-error-wrapper__msg-and-error-container__msg');
  submitButton.classList.add('social-share__msg-and-error-wrapper__msg-and-error-container__submit');
  submitButton.textContent = 'Submit';
  const SocialSharebuttons = block.children[0].children[1].children[1];
  const SocialSharebuttonsFacebook = block.children[0].children[1].children[1].children[0];
  const SocialSharebuttonsTwitter = block.children[0].children[1].children[1].children[1];
  const SocialSharebuttonsLinkedin = block.children[0].children[1].children[1].children[2];
  const SocialSharebuttonsMail = block.children[0].children[1].children[1].children[3];
  const SocialSharebuttonsPrint = block.children[0].children[1].children[1].children[4];
  const added = likeAndShareWrapper
  && msgAndErrorWrapper
  && likeContainer
  && likeImgContainer
  && shareContainer
  && msgAndErrorContainer
  && likeImgButton
  && dislikeImgButton
  && likeSucessMsg
  && shareErrorMsg
  && disLikeComments
  && SocialSharebuttons
    ? (
      likeAndShareWrapper.classList.add('social-share__like-and-share-wrapper'),
      likeContainer.classList.add('social-share__like-and-share-wrapper__like-container'),
      likeImgContainer.classList.add('social-share__like-and-share-wrapper__like-container__img'),
      likeImgButton.classList.add('social-share__like-and-share-wrapper__like-container__img__like'),
      dislikeImgButton.classList.add('social-share__like-and-share-wrapper__like-container__img__dislike'),
      likeContainerHeading.classList.add('social-share__like-and-share-wrapper__like-container__heading'),
      shareContainer.classList.add('social-share__like-and-share-wrapper__share-container'),
      msgAndErrorWrapper.classList.add('social-share__msg-and-error-wrapper'),
      msgAndErrorContainer.classList.add('social-share__msg-and-error-wrapper__msg-and-error-container'),
      likeSucessMsg.classList.add('social-share__msg-and-error-wrapper__msg-and-error-container__like-sucess-msg'),
      shareErrorMsg.classList.add('social-share__msg-and-error-wrapper__msg-and-error-container__share-error-msg'),
      disLikeComments.classList.add('social-share__msg-and-error-wrapper__msg-and-error-container__dislike-comments'),
      SocialSharebuttons.classList.add('social-share__like-and-share-wrapper__share-container__social-share-buttons'),
      SocialSharebuttonsFacebook.classList.add('social-share__like-and-share-wrapper__share-container__social-share-buttons__facebook'),
      SocialSharebuttonsTwitter.classList.add('social-share__like-and-share-wrapper__share-container__social-share-buttons__twitter'),
      SocialSharebuttonsLinkedin.classList.add('social-share__like-and-share-wrapper__share-container__social-share-buttons__linkedin'),
      SocialSharebuttonsMail.classList.add('social-share__like-and-share-wrapper__share-container__social-share-buttons__mail'),
      SocialSharebuttonsPrint.classList.add('social-share__like-and-share-wrapper__share-container__social-share-buttons__print')
    )
    : null;
  console.log(added);
  dislikeImgButton.addEventListener('click', () => {
    likeImgButton.classList.remove('active');
    dislikeImgButton.classList.add('active');
    likeImgButton.style.cssText = 'opacity: 0.5; pointer-events: none;';
    dislikeImgButton.style.cssText = 'opacity: 0.5; pointer-events: none;';
    disLikeComments.style.display = 'flex';
    msgAndErrorContainer.append(msgContainer);
    msgAndErrorContainer.append(submitButton);
  });
  likeImgButton.addEventListener('click', () => {
    likeImgButton.classList.add('active');
    dislikeImgButton.classList.remove('active');
    likeImgButton.style.cssText = 'opacity: 0.5; pointer-events: none;';
    dislikeImgButton.style.cssText = 'opacity: 0.5; pointer-events: none;';
    likeSucessMsg.style.display = 'flex';
  });
  submitButton.addEventListener('click', () => {
    if (msgContainer.value !== '') {
      disLikeComments.style.display = 'none';
      msgContainer.style.display = 'none';
      submitButton.style.display = 'none';
      shareErrorMsg.style.display = 'none';
      likeSucessMsg.style.display = 'flex';
    } else {
      // shareErrorMsg.style.display = 'flex';
      alert('Please enter a message');
    }
  });
  SocialSharebuttons.addEventListener('click', (element) => {
    const clickedElementParent = element.target.parentNode;
    console.log(clickedElementParent);
    if (clickedElementParent.classList.contains('social-share__like-and-share-wrapper__share-container__social-share-buttons__facebook')) {
      window.open('https://www.facebook.com/login', '_blank');
    } else if (clickedElementParent.classList.contains('social-share__like-and-share-wrapper__share-container__social-share-buttons__twitter')) {
      window.open('https://x.com/', '_blank');
    } else if (clickedElementParent.classList.contains('social-share__like-and-share-wrapper__share-container__social-share-buttons__linkedin')) {
      window.open('https://in.linkedin.com/', '_blank');
    } else if (clickedElementParent.classList.contains('social-share__like-and-share-wrapper__share-container__social-share-buttons__mail')) {
      window.open('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=ASKV5MjJ_UOGSMF8ubJKOzk1y4EkLY0KgTUkyY751HZRgi95Q2Tfm5ak5l2K1iIy8cJ8vN3GCTGJQA&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1010628594%3A1747203801952519', '_blank');
    } else if (clickedElementParent.classList.contains('social-share__like-and-share-wrapper__share-container__social-share-buttons__print')) {
      window.print();
    }
  });
}
