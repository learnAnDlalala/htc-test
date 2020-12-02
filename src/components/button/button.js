import React from 'react';
import './button.css';

const Button = ({ type = 'button', className, children, click }) => {
  return click ? (
    <button type="button" className={`${className} button`} onClick={click}>
      {children}
    </button>
  ) : (
    <button type="submit" className={`${className} button`}>
      {children}
    </button>
  );
};

export default Button;
