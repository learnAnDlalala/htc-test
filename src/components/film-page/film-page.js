import React, { useContext, useEffect, useState } from 'react';
import FilmCard from '../film-card';
import GenreCard from '../genre-card';
import Title from '../title';
import { ServiceContext } from '../../services';

import './film-page.css';
const FilmPage = () => {
  const { getFilms, getGenres } = useContext(ServiceContext);
  const [films, setFilms] = useState([]);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    let filmData = getFilms();
    let genresData = getGenres();
    setFilms(filmData);
    setGenres(genresData);
  });
  return (
    <div className="films-page">
      <Title>🔥 Новинки</Title>
      <div className="films__bar row">
        {films.map(({ id, title, src, info }) => {
          return <FilmCard key={id} title={title} src={src} info={info} />;
        })}
      </div>
      <Title>Жанры</Title>
      <div className="genre__bar row">
        {genres.map(({ id, genre, title, src }) => {
          return <GenreCard key={id} style={genre} title={title} src={src} />;
        })}
      </div>
    </div>
  );
};

export default FilmPage;
