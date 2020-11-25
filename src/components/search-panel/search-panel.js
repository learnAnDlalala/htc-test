import React from 'react';

import './search-panel.css';

const SeacrchPanel = ({ className }) => {
  return (
    <div className={`${className} search-panel row`}>
      <div className="search-panel__field">
        <input
          className="search-panel__field__input"
          placeholder="Поиск..."
        ></input>
      </div>
      <div className="search-panel__button">Поиск</div>
    </div>
  );
};

export default SeacrchPanel;
