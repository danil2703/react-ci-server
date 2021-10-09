import React from 'react';
import './Header.scss';
import { Switch, Route } from 'react-router-dom';
import { Button } from '../Button/Button';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';
import { ReactComponent as RunIcon } from '../../assets/icons/run.svg';
import {} from 'react/cjs/react.development';

export const Header = React.memo((props) => {
  const { className = '', openModal, repository = '' } = props;

  return (
    <header className={`header ${className}`}>
      <div className="header_container container">
        <Switch>
          <Route exact path="/">
            <h1 className="header_repository">{repository}</h1>
            <div className="header_button-container">
              <Button
                className="header_btn header_run-build"
                onClick={() => openModal({ title: 'New build', text: 'Enter the commit hash which you want to build.' })}
                withIcon="true"
                size="md"
                color="secondary"
              >
                <RunIcon />
                Run build
              </Button>
              <Button className="header_btn header_btn-settings" type="link" to="/settings" withIcon="true" size="sm" color="secondary">
                <SettingsIcon />
              </Button>
            </div>
          </Route>

          <Route path="/no-settings">
            <h1 className="header_link">School CI server</h1>
            <Button className="header_btn" type="link" to="/settings" withIcon="true" size="md" color="secondary">
              <SettingsIcon /> Settings
            </Button>
          </Route>

          <Route path="/settings">
            <h1 className="header_link">School CI server</h1>
          </Route>
        </Switch>
      </div>
    </header>
  );
});
