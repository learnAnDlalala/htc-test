import React from 'react';
import ActionTab from '../action-tabs/';

import './action-panel.css';

const ActionPanel = ({ actions }) => {
  return (
    <div className="action-panel row">
      {actions.map((el, index) => {
        const link = Object.values(el).toString();
        return (
          <ActionTab
            title={Object.keys(el).toString()}
            src={link}
            key={index + 'act'}
          />
        );
      })}
    </div>
  );
};
//23
export default ActionPanel;
