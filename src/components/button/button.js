import React from 'react';
import './button.css';

const Button = ({ className, children, click }) => {
  return (
    <button className={`${className} button`} onClick={click}>
      {children}
    </button>
  );
};

export default Button;
