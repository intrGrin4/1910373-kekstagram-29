import {getRandomArrayElement, getRandomNumber} from './util.js';

const DESCRIPTION_PHOTO = [
  'Бассейн', 'Как же круто тут кормят', 'Лазурное море', 'Красивый купальник', 'Вкусная еда', 'Крутая машина', 'Освежающие фрукты',
  'Вкусный коктейль', 'Пролетающий самолет', 'Дорогая обувь', 'Жаркое солнце', 'Спортивная машина', 'Вкусная форель',
  'Котэ-сашими', 'Nike Будущего', 'Высота птичьего полета', 'Хор', 'Ретро-авто', 'Ночные светильники', 'Пальмы на фоне города',
  'Диетический салат', 'Красивый закат', 'Хмурый крабик', 'Концерт любимой группы', 'Сафари преключение'];

const PHOTOS = 25;
let integerId = 1;
let commentsId = 1;
const likes = {
  min: 15,
  max: 200
};

const avatars = {
  min: 1,
  max: 6
};

const counter = {
  min: 0,
  max: 30
};

const MESSAGES = [
  'Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const NAME = ['Артём', 'Никита', 'Стас', 'Всеволод', 'Андрей', 'Освальд', 'Мишель', 'Мияги', 'Олоф', 'Гио'];

const createMessage = () => {
  const messages = Array.from({length: getRandomNumber(1, 2)}, () => getRandomArrayElement(MESSAGES));
  return Array.from(new Set(messages)).join(' ');
};

const createComment = () => ({
  id: commentsId++,
  avatar: `img/${getRandomNumber(avatars.min, avatars.max)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAME)
});

const createDescription = () => ({
  id: integerId,
  url: `photos/${integerId++}.jpg`,
  description: getRandomArrayElement(DESCRIPTION_PHOTO),
  likes: getRandomNumber(likes.min, likes.max),
  comments: Array.from({length: getRandomNumber(counter.min, counter.max)}, createComment)
});

const createCards = () => Array.from({length: PHOTOS}, createDescription);
export {createCards};
