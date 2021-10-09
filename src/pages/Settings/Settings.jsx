import './Settings.scss';
import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { TextField } from '../../components/TextField/TextField';
import { Button } from '../../components/Button/Button';
import { ReactComponent as Loader } from '../../assets/icons/loader.svg';
import { saveSettingAction } from '../../state/actions/index';

export const Settings = React.memo(({ showError, setRepository }) => {
  const history = useHistory();

  const dispatch = useDispatch();
  const saveSetting = bindActionCreators(saveSettingAction, dispatch);

  const [formState, setFormState] = useState({
    repository: '',
    buildCommand: '',
    mainBranch: '',
    synchro: '',
  });

  const [isLoading, setLoadingState] = useState(false);

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
          showError({ isError: true, title: 'Error', text: 'Wrong repository name' });
        } else if (!validBranch) {
          showError({ isError: true, title: 'Error', text: 'Wrong branch' });
        } else {
          localStorage.setItem('settings', JSON.stringify(formState));
          saveSetting(formState);
          setRepository(formState.repository);
          history.push('/');
        }
      }
    );
  }, [formState]);

  return (
    <>
      <div className="settings container">
        <h3 className="settings_title">Settings</h3>
        <p className="settings_paragraph">Configure repository connection and synchronization settings.</p>
        <form>
          <TextField
            onChange={onChange}
            type="text"
            placeholder="user-name/repo-name"
            name="repository"
            className="settings_input"
            label="GitHub repository"
            disabled={isLoading}
            required
          />
          <TextField
            onChange={onChange}
            type="text"
            placeholder="npm run build"
            name="buildCommand"
            className="settings_input"
            label="Build command"
            disabled={isLoading}
            required
          />
          <TextField
            onChange={onChange}
            type="text"
            placeholder="main"
            name="mainBranch"
            className="settings_input"
            label="Main branch"
            disabled={isLoading}
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
            disabled={isLoading}
          />
          <Button
            onClick={onSubmit}
            disabled={!formState.repository || !formState.buildCommand || !formState.mainBranch || isLoading}
            className="settings_button"
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
