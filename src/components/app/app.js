import Header from '../header';
import Footer from '../footer';
import ActionPanel from '../action-panel/';
import FilmPage from '../film-page';
import TvPage from '../tv-page';
import Modal from '../modal';
import AuthForm from '../auth-form';

import { ContextApp, initialState, appReducer } from '../../reducer';
import { ServiceContext, service } from '../../services';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import React, { useReducer } from 'react';
import './app.css';
import './media.css';

const App = () => {
  const [state, dispatch] = useReducer(appReducer, {
    ...initialState,
    name: localStorage.getItem('user'),
    isLoggin: localStorage.getItem('login'),
    save: Boolean(localStorage.getItem('save')),
  });
  return (
    <>
      <Router>
        <div className="container-fluid">
          <div className="container">
            <ContextApp.Provider value={{ dispatch, state }}>
              <Header />
              <ActionPanel
                actions={[{ Фильмы: '/films' }, { Телеканалы: '/tv' }]}
              />
              <div className="main-content">
                <ServiceContext.Provider value={service}>
                  <Switch>
                    <Route path="/tv" component={TvPage} />
                    <Route path="/films" component={FilmPage} />
                    <Redirect from="/" to="/films" />
                  </Switch>
                </ServiceContext.Provider>
              </div>
              {state.isModalOpen &&
                ReactDOM.createPortal(
                  <Modal><AuthForm/></Modal>,
                  document.getElementById('portal')
                )}
              <div />
            </ContextApp.Provider>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
