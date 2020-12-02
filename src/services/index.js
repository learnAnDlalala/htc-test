import React from 'react';

export const genres = [
  { id: 1, genre: 'comedy', title: 'Комедии', src: '/imgs/emoji/comedy.png' },
  { id: 2, genre: 'drama', title: 'Драмы', src: '/imgs/emoji/drama.png' },
  { id: 3, genre: 'horror', title: 'Ужасы', src: '/imgs/emoji/horror.png' },
  {
    id: 4,
    genre: 'fantasy',
    title: 'Фантастика',
    src: '/imgs/emoji/fantasy.png',
  },
];

export const films = [
  {
    id: 1,
    title: 'Мульт в кино. Выпуск №103. \n Некогда грустить!',
    info: '',
    src: '/imgs/film/1.png',
  },
  {
    id: 2,
    title: 'Новый бэтмен',
    info:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    src: '/imgs/film/2.png',
  },
  {
    id: 3,
    title: 'Однажды... в Голливуде',
    info: '',
    src: '/imgs/film/3.png',
  },
  {
    id: 4,
    title: 'Стриптизерши',
    info: '',
    src: '/imgs/film/4.png',
  },
];

export const tvs = [
  {
    id: '1tv',
    title: 'Первый канал',
    src: '/imgs/tv/1.png',
    schedule: [
      { date: '13:00', program: 'Новости с субтитрами' },
      { date: '14:00', program: 'Давай поженимся' },
      { date: '15:00', program: 'Другие новости' },
    ],
  },
  {
    id: '2tv',
    title: '2х2',
    src: '/imgs/tv/2.png',
    schedule: [
      { date: '13:00', program: 'МУЛЬТ ТВ. Сезон 4, 7 серия' },
      { date: '14:00', program: 'ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия' },
      { date: '15:00', program: 'БУРДАШЕВ. Сезон 1, 20 серия' },
    ],
  },
  {
    id: '3tv',
    title: 'РБК',
    src: '/imgs/tv/3.png',
    schedule: [
      {
        date: '13:00',
        program: 'ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС',
      },
      { date: '14:00', program: 'ДЕНЬ. Главные темы' },
      { date: '15:00', program: 'Главные новости' },
    ],
  },
  {
    id: '4tv',
    title: 'AMEDIA PREMIUM',
    src: '/imgs/tv/4.png',
    schedule: [
      { date: '13:00', program: 'Клиент всегда мёртв' },
      { date: '14:00', program: 'Голодные игры: Сойка-пересмешница. Часть I' },
      { date: '15:00', program: 'Секс в большом городе' },
    ],
  },
  {
    id: '5tv',
    title: 'РБК',
    src: '/imgs/tv/3.png',
    schedule: [
      {
        date: '13:00',
        program: 'ДЕНЬ. Горючая смесь: как бороться с суррогатом АЗС',
      },
      { date: '14:00', program: 'ДЕНЬ. Главные темы' },
      { date: '15:00', program: 'Главные новости' },
    ],
  },
  {
    id: '6tv',
    title: 'AMEDIA PREMIUM',
    src: '/imgs/tv/4.png',
    schedule: [
      { date: '13:00', program: 'Клиент всегда мёртв' },
      { date: '14:00', program: 'Голодные игры: Сойка-пересмешница. Часть I' },
      { date: '15:00', program: 'Секс в большом городе' },
    ],
  },
];

export const service = {
  getTvProgramm() {
    return tvs;
  },
  getFilms() {
    return films;
  },
  getGenres() {
    return genres;
  },
};

export const ServiceContext = React.createContext();
