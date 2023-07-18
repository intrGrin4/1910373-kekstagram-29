import { isEscapeKey } from '../utils/util.js';
import { initScaleImg, resetScale } from '../upload-form/scale.js';
import { initEffects } from './effects-editor.js';
import { initValidator, pristineValidate, pristineReset } from './validation.js';

const imageUploadForm = document.querySelector('.img-upload__form');
const imageUploadInput = document.querySelector('.img-upload__input');
const imageUploadOverlay = document.querySelector('.img-upload__overlay');
const imageUploadCancel = document.querySelector('.img-upload__cancel');
const currentEffectValue = document.querySelector('input:checked').value;
const effectsList = document.querySelector('.img-upload__effects');


const onEffectsListChange = (evt) => initEffects(evt.target.value);
const openUploadForm = () => {
  imageUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', documentKeydownHandler);
};

const closeUploadForm = () => {
  imageUploadForm.reset();
  resetScale();
  pristineReset();
  initEffects(currentEffectValue);
  imageUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', documentKeydownHandler);
};

const UploadInputChangeHandler = () => openUploadForm();

const UploadFormSubmitHandler = (evt) => {
  if (!pristineValidate()) {
    evt.preventDefault();
  }
};

const UploadCancelClickHandler = () => closeUploadForm();

const isInput = (evt) => evt.target.closest('.text__description') || evt.target.closest('.text__hashtags');

function documentKeydownHandler(evt) {
  if (isEscapeKey(evt) && !isInput(evt)) {
    evt.preventDefault();
    closeUploadForm();
  }
}

const uploadFormImage = () => {
  initScaleImg();
  initEffects(currentEffectValue);
  initValidator();
  effectsList.addEventListener('change', onEffectsListChange);
  imageUploadInput.addEventListener('change', UploadInputChangeHandler);
  imageUploadForm.addEventListener('submit', UploadFormSubmitHandler);
  imageUploadCancel.addEventListener('click', UploadCancelClickHandler);
};

export { uploadFormImage };
