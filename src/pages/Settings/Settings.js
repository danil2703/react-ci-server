import './Settings.scss';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField } from '../../components/TextField/TextField';
import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { ReactComponent as Loader } from '../../assets/icons/loader.svg';

export const Settings = React.memo(() => {
  const history = useHistory();

  const [state, setState] = useState({
    repository: '',
    buildCommand: '',
    mainBranch: '',
    synchro: '',
  });

  const [isLoading, setLoadingState] = useState(false);

  const checkIsValidGithubRepos = (repos) => Promise.resolve(repos.split('/').length === 2);
  const checkIsValidMainBranch = (b) => Promise.resolve(/^(\w|\d|[-_\/])+$/.test(b));
  const delayPromise = () => new Promise((resolve) => setTimeout(resolve, 5000));

  const onChange = (e) => {
    const { value } = e.target;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const onSubmit = () => {
    setLoadingState(true);

    Promise.all([
      checkIsValidGithubRepos(state.repository),
      checkIsValidMainBranch(state.mainBranch),
      delayPromise(),
    ]).then((data) => {
      if (data[0] && data[1]) {
        localStorage.setItem('settings', JSON.stringify(state));
      } else {
        console.log('bad');
      }
      setLoadingState(false);
    });
  };

  return (
    <>
      <Header>
        <h1 className="header_link">School CI server</h1>
      </Header>
      <div className="settings">
        <h3 className="settings_title">Settings</h3>
        <p className="settings_paragraph">
          Configure repository connection and synchronization settings.
        </p>
        <form>
          <TextField
            onChange={onChange}
            type="text"
            placeholder="user-name/repo-name"
            name="repository"
            className="settings_input"
            label="GitHub repository"
            required
          />
          <TextField
            onChange={onChange}
            type="text"
            placeholder="npm run build"
            name="buildCommand"
            className="settings_input"
            label="Build command"
            required
          />
          <TextField
            onChange={onChange}
            type="text"
            placeholder="main"
            name="mainBranch"
            className="settings_input"
            label="Main branch"
            required
          />
          <TextField
            onChange={onChange}
            type="number"
            name="synchro"
            placeholder="10"
            className="settings_number"
            label="Synchronize every"
            unit="minutes"
          />
          <Button
            onClick={onSubmit}
            disabled={!state.repository || !state.buildCommand || !state.mainBranch || isLoading}
            className="settings_button"
          >
            {isLoading ? <Loader /> : 'Save'}
          </Button>
          <Button onClick={() => history.push('/')} color="secondary">
            Cancel
          </Button>
        </form>
      </div>
    </>
  );
});
