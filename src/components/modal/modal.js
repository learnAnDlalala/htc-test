import React, { useContext, useEffect } from 'react';
import { ContextApp } from '../../reducer/index';

import './modal.css';

const Modal = ({ children }) => {
  const { state, dispatch } = useContext(ContextApp);
  useEffect(() => {
    document.body.setAttribute('class', 'fixed');
    return () => {
      document.body.classList.remove('fixed');
    };
  }, []);

  const keyPress = (e) => {
    switch (e.which) {
      case 27:
        closeModal();
        break;
      default:
        break;
    }
  };

  const closeModal = (e) => {
    dispatch({
      type: 'SWITCH_MODAL',
    });
  };
  const app = 'sss';
  return (
    <div
      className="modal"
      id="modal"
      tabIndex="0"
      onKeyDown={keyPress}
      app={app}
    >
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { closeModal });
      })}
    </div>
  );
};

export default Modal;
