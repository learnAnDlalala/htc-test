import React, { useContext, useState } from 'react';
import Button from '../button/';
import { ContextApp } from '../../reducer/index';

import './modal.css';
const Modal = () => {
  const { state, dispatch } = useContext(ContextApp);
  const [name, setName] = useState(state.name);
  const [checked, setChecked] = useState(false);
  const login = () => {
    if (name !== '')
      dispatch({
        type: 'LOGIN',
        payload: {
          name: name,
          save: checked,
        },
      });
    else
      dispatch({
        type: 'SWITCH_MODAL',
      });
  };

  return (
    <div className="modal">
      <div className="login column">
        <div className="login__form">
          <div className="login__form__title">Вход</div>
          <input
            type="text"
            placeholder="Логин"
            className="name input"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input type="text" placeholder="Пароль" className="password input" />
          <div className="input2">
            <input
              id="checkbox-1"
              className="checkbox-custom"
              name="checkbox-1"
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <label htmlFor="checkbox-1" className="checkbox-custom-label">
              Запомнить
            </label>
          </div>
        </div>
        <Button className="login__form__button" click={login}>
          Войти
        </Button>
      </div>
    </div>
  );
};

export default Modal;
