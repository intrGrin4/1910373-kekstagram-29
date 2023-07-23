import { getData } from '../utils/api.js';
import { renderMessage } from '../utils/messages.js';
import { initFilter, renderFilteringPictures } from './filter.js';

const GET_URL = 'https://29.javascript.pages.academy/kekstagram/data';
const GET_ERROR_DATA = 'Ошибка загрузки данных';
const ERROR_CLASS_NAME = 'error';

const onGetSuccess = (data) => {
  initFilter(data);
  renderFilteringPictures(document.querySelector('.img-filters__button--active').id, data);
};

const onGetError = () => {
  renderMessage(ERROR_CLASS_NAME, GET_ERROR_DATA);
};

const initThumbnails = () => {
  getData(GET_URL, onGetSuccess, onGetError);
};

export { initThumbnails };
