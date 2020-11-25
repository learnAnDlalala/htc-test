import React from 'react';

import './title.css';

const Title = ({ children }) => {
  return (
    <div className="title row">
      <div className="title__text">{children}</div>
    </div>
  );
};

export default Title;
