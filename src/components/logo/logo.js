import React from 'react';
const Logo = ({ className }) => {
  return (
    <div className={`${className} row`}>
      <img
        className="logo__icon"
        src={process.env.PUBLIC_URL + '/logo.png'}
        alt="logo"
      />
      <div className="logo__title">Видеосервис</div>
    </div>
  );
};

export default Logo;
