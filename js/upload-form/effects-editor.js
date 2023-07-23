const EFFECTS = {
  chrome: {
    name: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  sepia: {
    name: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  marvin: {
    name: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  phobos: {
    name: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  heat: {
    name: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  },
  default: {
    name: 'default',
    min: 1,
    max: 1,
    step: 1,
    unit: ''
  }
};

const effectLevelValue = document.querySelector('.effect-level__value');
const slider = document.querySelector('.effect-level__slider');
const imagePreview = document.querySelector('.img-upload__preview img');
const imageUploadEffect = document.querySelector('.img-upload__effect-level');

const setContainerState = (value) => {
  if (value === 'none' || !value) {
    imageUploadEffect.classList.add('hidden');
    imagePreview.style.filter = 'none';
    return;
  }
  imageUploadEffect.classList.remove('hidden');
};

const createSlider = (value) => {
  const { min, max, step, name, unit } = EFFECTS[value] || EFFECTS.default;

  setContainerState(value);

  noUiSlider.create(slider, {
    range: {
      min,
      max
    },
    step,
    start: max,
    connect: 'lower'
  });
  slider.noUiSlider.on('update', () => {
    const saturation = slider.noUiSlider.get();
    imagePreview.style.filter = `${name}(${saturation}${unit})`;
    effectLevelValue.value = saturation;
  });
};

const initEffects = (value) => {
  if (slider.noUiSlider) {
    slider.noUiSlider.destroy();
  }
  createSlider(value);
};

export { initEffects };
