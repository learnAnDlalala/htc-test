import React from 'react';

import './tv-card.css';

const TvCard = ({ title, src, schedule }) => {
  return (
    <div className="tv-card row">
      <div className="tv-card__img">
        <img
          src={process.env.PUBLIC_URL + `/${src}`}
          alt={title}
          style={{ display: 'inline-block' }}
        />
      </div>
      <div className="tv-card__body">
        <div className="tv-card__body__title">{title}</div>
        <div className="tv-card__body__schedule">
          <ul>
            {schedule.map((el, index) => {
              const style = index === 0 ? 'active' : '';
              return (
                <li className={`${style} shedule__item`} key={index + 'tv'}>
                  <span>{el.date}</span>
                  <span className="shedule__text">{el.program}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TvCard;
