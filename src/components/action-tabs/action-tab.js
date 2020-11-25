import React from 'react';
import { NavLink } from 'react-router-dom';
import './action-tab.css';

const ActionTab = ({ title, src }) => {
  return (
    <NavLink activeClassName="toggle" to={`${src}`} className="action-tab">
      {title}
    </NavLink>
  );
};

export default ActionTab;
