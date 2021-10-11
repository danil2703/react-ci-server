import './App.scss';
import React, { useCallback, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { StartPage } from './pages/StartPage/StartPage';
import { Settings } from './pages/Settings/Settings';
import { BuildHistory } from './pages/BuildHistory/BuildHistory';
import { Header } from './components/Header/Header';
import { Modal } from './components/Modal/Modal';
import { TextField } from './components/TextField/TextField';
import { Button } from './components/Button/Button';

export const App = React.memo(() => {
  const [modalData, setModal] = useState({ isVisible: false, isError: false, title: '', text: '', hash: '' });
  const [repository, setRepositoryState] = useState(JSON.parse(localStorage.getItem('settings'))?.repository || '');

  const setRepository = useCallback(
    (respository) => {
      setRepositoryState(respository);
    },
    [repository]
  );

  const onClose = useCallback(() => {
    setModal({ isVisible: false, isError: false, title: '', text: '' });
  }, [modalData]);

  const openModal = useCallback(
    ({ isError, title, text }) => {
      setModal({ isVisible: true, isError, title, text });
    },
    [modalData]
  );

  const onChange = (e) => {
    const { value } = e.target;
    setModal({
      ...modalData,
      [e.target.name]: value,
    });
  };

  return (
    <div className="App">
      <Header repository={repository} openModal={openModal} />
      <div className="content">
        <Switch>
          <Route path="/settings">
            <Settings setRepository={setRepository} showError={openModal} />
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
      <Modal visible={modalData.isVisible} title={modalData.title} text={modalData.text} onClose={onClose}>
        {modalData.isError ? (
          <Button onClick={onClose} color="secondary">
            Ok
          </Button>
        ) : (
          <>
            <TextField onChange={onChange} name="hash" className="modal__input" placeholder="Commit hash" />
            <div>
              <Button disabled={!modalData.hash} onClick={onClose} className="modal__submit">
                Run build
              </Button>
              <Button onClick={onClose} color="secondary">
                Cancel
              </Button>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
});
