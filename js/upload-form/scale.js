const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;
const DIVIDER = 100;

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const scaleControlImage = document.querySelector('.img-upload__preview img');

let currentScale = SCALE_MAX;

const scaleImageChange = (value) => {
  scaleControlImage.style.transform = `scale(${value / DIVIDER})`;
  scaleControlValue.value = `(${value})%`;
};


const smallerClickHandler = (evt) => {
  evt.preventDefault();
  if (currentScale > SCALE_MIN) {
    currentScale -= SCALE_STEP;
    scaleImageChange(currentScale);
  }
};
const biggerClickHandler = (evt) => {
  evt.preventDefault();
  if (currentScale < SCALE_MAX) {
    currentScale += SCALE_STEP;
    scaleImageChange(currentScale);
  }
};

const initScaleImg = () => {
  scaleControlSmaller.addEventListener('click', smallerClickHandler);
  scaleControlBigger.addEventListener('click', biggerClickHandler);
};

const resetScale = () => scaleImageChange(SCALE_MAX);

export { initScaleImg, resetScale };
