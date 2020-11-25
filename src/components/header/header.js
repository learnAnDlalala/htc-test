import React, { useContext, useState } from 'react';
import './header.css';
import Button from '../button';
import Logo from '../logo';
import SearchPanel from '../search-panel';
import { ContextApp } from '../../reducer';

const UserBar = ({ currentName, onChangeName }) => {
  const [nameIsChanged, setNameIsChanged] = useState(false);
  const [name, setName] = useState(currentName);
  const showInput = (e) => {
    e.preventDefault();
    setNameIsChanged(true);
  };
  const changeName = (e) => {
    setNameIsChanged(false);
    onChangeName(e.target.value);
  };
  return nameIsChanged ? (
    <input
      type="text"
      className="header__name__input"
      placeholder="sss"
      value={name}
      onChange={(e) => {
        setName(e.target.value);
      }}
      onBlur={changeName}
    />
  ) : (
    <div className="header__name" onClick={showInput}>
      {name}
    </div>
  );
};

const Header = () => {
  const { state, dispatch } = useContext(ContextApp);

  const switchModal = () => {
    dispatch({
      type: 'SWITCH_MODAL',
    });
  };
  const logOut = () => {
    dispatch({
      type: 'LOGOUT',
    });
  };
  const changeName = (newName) => {

    dispatch({
      type: 'CHANGE_NAME',
      payload: newName,
    });
  };
  return (
    <div className="header row">
      <Logo className="header__logo" />
      <SearchPanel className="header__search"></SearchPanel>
      {state.isLoggin ? (
        <>
          <UserBar currentName={state.name} onChangeName={changeName} />
          <div
            className="header__logout"
            onClick={(e) => {
              logOut();
            }}
          >
            Выйти
          </div>
        </>
      ) : (
        <Button className="header__button" click={switchModal}>
          Войти
        </Button>
      )}
    </div>
  );
};

export default Header;
