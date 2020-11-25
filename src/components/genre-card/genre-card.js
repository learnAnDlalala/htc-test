import React from 'react';
import './genre-card.css';

const GenreCard = ({ style, title,src }) => {
  return (
    <div className={`genre-card ${style}`}>
      <img
        className="genre-card__emoji emoji"
        src={src}
        alt = {style}
      />
      <div className="genre-card__title">{title}</div>
    </div>
  );
};
export default GenreCard;
<style />;
