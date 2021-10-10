import './Settings.scss';
import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '../../components/TextField/TextField';
import { Button } from '../../components/Button/Button';
import { ReactComponent as Loader } from '../../assets/icons/loader.svg';
import { settingsSaveAction } from '../../state/actions/index';

export const Settings = React.memo(({ openModal }) => {
  const history = useHistory();

  const dispatch = useDispatch();
  const dispatchSettings = bindActionCreators(settingsSaveAction, dispatch);

  const [formState, setFormState] = useState({
    repository: '',
    buildCommand: '',
    mainBranch: '',
    synchro: '',
  });

  const [isLoading, setLoadingState] = useState(false);

  const settings = useSelector((state) => state.settings);

  useEffect(() => {
    setFormState(settings);
  }, [settings]);

  const checkIsValidGithubRepos = useCallback((repos) => Promise.resolve(repos.split('/').length === 2), []);
  const checkIsValidMainBranch = useCallback((b) => Promise.resolve(/^(\w|\d|[-_\/])+$/.test(b)), []);
  const delayPromise = () => new Promise((resolve) => setTimeout(resolve, 5000));

  const onChange = useCallback(
    (e) => {
      const { value } = e.target;
      setFormState({
        ...formState,
        [e.target.name]: value,
      });
    },
    [formState]
  );

  const onSubmit = useCallback(() => {
    setLoadingState(true);

    Promise.all([checkIsValidGithubRepos(formState.repository), checkIsValidMainBranch(formState.mainBranch), delayPromise()]).then(
      ([validRepository, validBranch]) => {
        setLoadingState(false);
        if (!validRepository) {
          openModal({ type: 'error', title: 'Error', text: 'Wrong repository name. Enter username/repository.' });
        } else if (!validBranch) {
          openModal({ type: 'error', title: 'Error', text: 'Wrong branch name.' });
        } else {
          dispatchSettings(formState);
          history.push('/');
        }
      }
    );
  }, [formState]);

  return (
    <>
      <div className="settings container">
        <h3 className="settings__title">Settings</h3>
        <p className="settings__paragraph">Configure repository connection and synchronization settings.</p>
        <form>
          <TextField
            onChange={onChange}
            type="text"
            value={formState.repository}
            placeholder="user-name/repo-name"
            name="repository"
            className="settings__input"
            label="GitHub repository"
            disabled={isLoading}
            required
          />
          <TextField
            onChange={onChange}
            type="text"
            value={formState.buildCommand}
            placeholder="npm run build"
            name="buildCommand"
            className="settings__input"
            label="Build command"
            disabled={isLoading}
            required
          />
          <TextField
            onChange={onChange}
            type="text"
            value={formState.mainBranch}
            placeholder="main"
            name="mainBranch"
            className="settings__input"
            label="Main branch"
            disabled={isLoading}
            required
          />
          <TextField
            onChange={onChange}
            type="number"
            value={formState.synchro}
            name="synchro"
            placeholder="10"
            className="settings__number"
            label="Synchronize every"
            unit="minutes"
            disabled={isLoading}
          />
          <Button
            onClick={onSubmit}
            disabled={!formState.repository || !formState.buildCommand || !formState.mainBranch || isLoading}
            className="settings__button"
          >
            {isLoading ? <Loader /> : 'Save'}
          </Button>
          <Button type="link" to="/" color="secondary" disabled={isLoading}>
            Cancel
          </Button>
        </form>
      </div>
    </>
  );
});
