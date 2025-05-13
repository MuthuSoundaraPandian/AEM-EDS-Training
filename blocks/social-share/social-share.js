export default function decorate(block) {
  block.classList.add('social-share');
  const likeAndShareWrapper = block.children[0];
  const likeContainer = block.children[0].children[0];
  const shareContainer = block.children[0].children[1];
  const msgAndErrorWrapper = block.children[1];
  const msgAndErrorContainer = block.children[1].children[0];
  likeAndShareWrapper && msgAndErrorWrapper && likeContainer && shareContainer && msgAndErrorContainer
  ? (
    likeAndShareWrapper.classList.add('social-share__like-and-share-wrapper'),
      likeContainer.classList.add('social-share__like-and-share-wrapper__like-container'),
      shareContainer.classList.add('social-share__like-and-share-wrapper__share-container'),
      msgAndErrorWrapper.classList.add('social-share__msg-and-error-wrapper'),
      msgAndErrorContainer.classList.add('social-share__msg-and-error-wrapper__msg-and-error-container')
    )
  : null;
}
