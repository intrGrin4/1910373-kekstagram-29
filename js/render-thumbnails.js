import { createCards } from './data.js';

const fragment = document.createDocumentFragment();
const picture = document.querySelector('#picture').content.querySelector('.picture');
const data = createCards();
const picturesContainer = document.querySelector('.pictures');

const createThumbnails = (item) => {
  const pictureClone = picture.cloneNode(true);
  const cloneImg = pictureClone.querySelector('.picture__img');

  cloneImg.src = item.url;
  cloneImg.alt = item.description;
  pictureClone.querySelector('.picture__likes').textContent = item.likes;
  pictureClone.querySelector('.picture__comments').textContent = item.comments.length;
  fragment.append(pictureClone);
};


const renderThumbnails = () => {
  data.forEach((item) => createThumbnails(item));
  picturesContainer.append(fragment);
};

export { renderThumbnails };
