const MAX_LENGTH_COMMENT = 140;
const HASHTAG_MAX_COUNT = 5;
const REGEXP = /^#[a-zа-яё0-9]{1,19}$/i;

const INVALID_COMMENT_LENGTH = 'длина комментария не может составлять больше 140 символов';
const INVALID_HASHTAG_SAME = 'один и тот же хэш-тег не может быть использован дважды';
const INVALID_HASHTAG_LENGTH = 'нельзя указать больше пяти хэш-тегов';
const INVALID_HASHTAG_TEXT_CORRECT = 'у вас некорректный хэштег попробуйте запись #azаяё09 не больше 20 символов';

const imageForm = document.querySelector('.img-upload__form');
const hashtag = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const pristine = new Pristine(imageForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper'
});

const checkDescriptionLength = (value) => value.length <= MAX_LENGTH_COMMENT;

const createHashtags = (value) => value.trim().toLowerCase().split(' ');

const changeHashtagCorrect = (value) => {
  if (!value) {
    return true;
  }
  const hashtags = createHashtags(value);
  return hashtags.every((element) => (REGEXP.test(element)));
};

const changeHashtagLength = (value) => {
  const hashtags = createHashtags(value);
  return hashtags.length <= HASHTAG_MAX_COUNT;
};

const changeHashtagSame = (value) => {
  const hashtags = createHashtags(value);
  return hashtags.length === new Set(hashtags).size;
};

const pristineValidate = () => pristine.validate();
const pristineReset = () => pristine.reset();

const initValidator = () => {
  pristine.addValidator(textDescription, checkDescriptionLength, INVALID_COMMENT_LENGTH, 1, true);
  pristine.addValidator(hashtag, changeHashtagCorrect, INVALID_HASHTAG_TEXT_CORRECT, 1, true);
  pristine.addValidator(hashtag, changeHashtagLength, INVALID_HASHTAG_LENGTH, 1, true);
  pristine.addValidator(hashtag, changeHashtagSame, INVALID_HASHTAG_SAME, 1, true);
};

export { initValidator, pristineValidate, pristineReset };
