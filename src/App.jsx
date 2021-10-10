import './App.scss';
import React, { useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { Footer } from './components/Footer/Footer';
import { StartPage } from './pages/StartPage/StartPage';
import { Settings } from './pages/Settings/Settings';
import { BuildHistory } from './pages/BuildHistory/BuildHistory';
import { Header } from './components/Header/Header';
import { Modal } from './components/Modal/Modal';
import { TextField } from './components/TextField/TextField';
import { Button } from './components/Button/Button';
import { modalShow, modalClose } from './state/actions/modalActions';

export const App = React.memo(() => {
  const settings = useSelector((state) => state.settings);

  const dispatch = useDispatch();
  const modalShowDispatch = bindActionCreators(modalShow, dispatch);
  const modalCloseDispatch = bindActionCreators(modalClose, dispatch);

  const onClose = useCallback(() => {
    modalCloseDispatch();
  }, []);

  const openModal = useCallback(({ type, title, text }) => {
    modalShowDispatch({ open: true, title, type, text });
  });

  return (
    <div className="App">
      <Header repository={settings.repository} openModal={openModal} />

      <div className="content">
        <Switch>
          <Route path="/settings">
            <Settings showError={openModal} />
          </Route>
          <Route path="/no-settings">
            <StartPage />
          </Route>
          <Route path="/">
            <BuildHistory />
          </Route>
        </Switch>
      </div>

      <Footer />

      <Modal onClose={onClose}>
        <TextField name="hash" className="modal_input" placeholder="Commit hash" />
        <div>
          <Button onClick={onClose} className="modal_submit">
            Run build
          </Button>
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
});
