import React from 'react';
export const ContextApp = React.createContext();

export const initialState = {
  isModalOpen: false,
  isLoggin: false,
  save: false,
  name: '',
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case 'SWITCH_MODAL':
      return { ...state, isModalOpen: !state.isModalOpen };
      break;

    case 'LOGIN':
      localStorage.setItem('user', action.payload.name);
      localStorage.setItem('login', true);
      return {
        ...state,
        isLoggin: true,
        name: action.payload.name,
        save: action.payload.save,
        isModalOpen: false,
      };

    case 'CHANGE_NAME':
      localStorage.setItem('user', action.payload);
      return {
        ...state,
        name: action.payload,
      };

      break;

    case 'LOGOUT':
      localStorage.setItem('login', '');
      if (state.save) {
        localStorage.setItem('save', true);
        return {
          ...state,
          isLoggin: false,
          name: state.name,
        };
      } else {
        localStorage.setItem('save', '');
        return {
          ...state,
          isLoggin: false,
          name: '',
        };
      }
    default:
      return state;
      break;
  }
};
