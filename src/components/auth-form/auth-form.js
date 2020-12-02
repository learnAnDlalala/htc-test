import React, { useContext, useState, useRef } from 'react';
import Button from '../button/';
import { ContextApp } from '../../reducer/index';
import { useClickOutside } from '../../utils';
import './auth-form.css';
const AuthForm = ({ closeModal }) => {
  const ref = useRef();
  const { state, dispatch } = useContext(ContextApp);
  const [name, setName] = useState(state.save ? state.name : '');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [nameMessage, setNameMessage] = useState('Логин');
  const [passwordMessage, setPasswordMessage] = useState('Пароль');

  useClickOutside(ref, closeModal);
  const login = (e) => {
    e.preventDefault();
    const regName = new RegExp(/^[a-zA-Zа-яА-я0-9]/g);
    const regPassword = new RegExp(/^[a-zA-Zа-яА-Я0-9]{6,}$/g);
    const validationName = regName.test(name);
    const validationPassword = regPassword.test(password);
    if (validationName && validationPassword) {
      dispatch({
        type: 'LOGIN',
        payload: {
          name: name,
          save: checked ? true : '',
        },
      });
    } else {
      if (!validationName) {
        setName('');
        setNameMessage('Введите корректный логин');
      }
      if (!validationPassword) {
        setPassword('');
        setPasswordMessage('Введите корректный пароль');
      }
    }
    /*  e.preventDefault(); */
  };
  return (
    <form className="login column" onSubmit={login} ref={ref}>
      <div className="login__form">
        <div className="login__form__title">Вход</div>
        <input
          type="text"
          placeholder={nameMessage}
          className="name input"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          autoFocus
        />
        <input
          type="text"
          placeholder={passwordMessage}
          className="password input"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="login__checkbox">
          <input
            id="checkbox-1"
            className="checkbox__input"
            type="checkbox"
            checked={checked}
            onChange={() => {
              setChecked(!checked);
            }}
          />
          <label className="checkbox__label" htmlFor="checkbox-1">
            Запомнить
          </label>
        </div>
      </div>
      <Button type="submit" className="login__form__button">
        Войти
      </Button>
    </form>
  );
};

export default AuthForm;
