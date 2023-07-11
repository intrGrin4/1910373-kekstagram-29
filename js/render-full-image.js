// import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const buttonClose = bigPicture.querySelector('.big-picture__cancel');
const bigImage = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentCount = bigPicture.querySelector('.social__comment-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentList = bigPicture.querySelector('.social__comments');
const commentItem = bigPicture.querySelector('.social__comment');

const hideElements = () => {
  commentsLoader.remove();
  commentCount.remove();
};

const openModal = () => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  buttonClose.addEventListener('click', buttonCloseClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
};

const closeModal = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  buttonClose.removeEventListener('click', buttonCloseClickHandler);
  document.removeEventListener('keydown', documentKeydownHandler);
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

const fillCommentsList = (data) => {
  data.forEach((item) => commentList.append(fillComment(item)));
};

const fillBigPicture = (data) => {
  bigImage.src = data.url;
  bigImage.alt = data.description;
  likesCount.textContent = data.likes;
  socialCaption.textContent = data.description;
  fillCommentsList(data.comments);
};

const renderBigPicture = (data) => {
  commentList.innerHTML = '';
  openModal();
  hideElements();
  fillBigPicture(data);
};

export { renderBigPicture };
