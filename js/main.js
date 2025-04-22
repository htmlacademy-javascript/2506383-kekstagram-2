/*

ТЗ:

Нужно сгенерировать массив из 25 фотографий, у каждой:

Уникальный id от 1 до 25

Уникальный url вида photos/1.jpg

description — случайное описание из массива

likes — случайное число от 15 до 200

comments — массив случайных комментариев (от 0 до 30 штук), каждый с:

уникальным id

avatar (случайный от 1 до 6)

message (одно или два предложения из массива)

*/
const descriptions = [
  'Прекрасный день на пляже',
  'Восхитительный пейзаж!',
  'Фото с вечерней прогулки',
  'Любимый котик',
  'Момент счастья'
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = ['Артём', 'Оля', 'Сергей', 'Катя', 'Дима', 'Настя'];


/**
 *
 * @param {number} min - минимальное значение.
 * @param {number} max - максимальное значение.
 * @returns {number} случайное целое число от min до max.
 */

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
 *
 * @param {array} array - массив, из которого нужно взять случайный элемент
 * @returns {*} возвращает случайный элемент массива
 */

function getRandomElement(array) {
  return array[getRandomInt(0, array.length - 1)];
}


/**
 *
 * @param {number} commentId - уникальный id комментария
 * @returns {{id: number, avatar: string, message: string, name: string}} объект комментария
 */

function createComment(commentId) {
  const messageCount = getRandomInt(1, 2);
  let message = '';
  for (let i = 0; i < messageCount; i++) {
    if (i === 1) {
      message += ' ';
    }
    message += getRandomElement(messages);
  }

  return {
    id: commentId,
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: message,
    name: getRandomElement(names),
  };
}


/**
 *
 * @returns {array} возвращает массив фото
 */

function generatePhotos() {
  const photos = [];

  for (let i = 1; i <= 25; i++) {
    const comments = [];
    const commentsCount = getRandomInt(0, 30);

    for (let j = 1; j <= commentsCount; j++) {
      comments.push(createComment(i * 100 + j));
    }

    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: getRandomElement(descriptions),
      likes: getRandomInt(15, 200),
      comments: comments
    };

    photos.push(photo);
  }

  return photos;
}

// console.log(generatePhotos());
