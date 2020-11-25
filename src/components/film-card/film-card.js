import React from 'react';
import './film-card.css';

const FilmCard = ({ src, title, info }) => {
  return (
    <div className="film-card">
      <div
        className="film-card__img"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL+`/${src}`})` }}
      >
        <div className="film-card__info">{info}</div>
      </div>
      <div className="film-card__title">{title}</div>
    </div>
  );
};

export default FilmCard;
