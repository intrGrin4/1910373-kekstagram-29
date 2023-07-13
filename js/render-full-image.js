
const COMMENT_COUNTER = 5;

const bigPicture = document.querySelector('.big-picture');
const buttonClose = bigPicture.querySelector('.big-picture__cancel');
const bigImage = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.social__comment-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const commentsLoaderButton = bigPicture.querySelector('.comments-loader');
const commentList = bigPicture.querySelector('.social__comments');
const commentItem = bigPicture.querySelector('.social__comment');

let showingComments = 0;
let comments;

const fillCommentsCounter = () => {
  commentsCount.innerHTML = `${showingComments} из <span class="comments-count">${comments.length}</span> комментариев`;
};

const setButtonState = () => {
  if (showingComments >= comments.length) {
    commentsLoaderButton.classList.add('hidden');
    return;
  }
  commentsLoaderButton.classList.remove('hidden');
};

const openModal = () => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  buttonClose.addEventListener('click', buttonCloseClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
  commentsLoaderButton.addEventListener('click', onCommentsLoaderButton);
};

const closeModal = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  buttonClose.removeEventListener('click', buttonCloseClickHandler);
  document.removeEventListener('keydown', documentKeydownHandler);
  commentsLoaderButton.removeEventListener('click', onCommentsLoaderButton);
  showingComments = 0;
};

function buttonCloseClickHandler(evt) {
  evt.preventDefault();
  closeModal();
}

function documentKeydownHandler(evt) {
  if (evt.key === 'Escape' && !evt.target.closest('.social__footer-text')) {
    evt.preventDefault();
    closeModal();
  }
}

const fillComment = (item) => {
  const comment = commentItem.cloneNode(true);
  const socialPicture = comment.querySelector('.social__picture');
  socialPicture.src = item.avatar;
  socialPicture.alt = item.name;
  comment.querySelector('.social__text').textContent = item.message;
  return comment;
};

const createComment = () => {
  const fragment = document.createDocumentFragment();
  const currentComments = comments.slice(showingComments, showingComments + COMMENT_COUNTER);
  showingComments = Math.min(showingComments + COMMENT_COUNTER, comments.length);
  currentComments.forEach((comment) => fragment.append(fillComment(comment)));
  commentList.append(fragment);
  setButtonState();
  fillCommentsCounter();
};

function onCommentsLoaderButton(evt) {
  evt.preventDefault();
  createComment();
}

const fillBigPicture = (data) => {
  bigImage.src = data.url;
  bigImage.alt = data.description;
  likesCount.textContent = data.likes;
  socialCaption.textContent = data.description;
  createComment();
};

const renderBigPicture = (data) => {
  commentList.innerHTML = '';
  comments = data.comments;
  openModal();
  fillBigPicture(data);
};

export { renderBigPicture };
