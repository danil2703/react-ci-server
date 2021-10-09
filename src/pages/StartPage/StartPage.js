import { useHistory } from 'react-router-dom';
import React from 'react';
import { EmptySettings } from '../../components/EmptySettings/EmptySettings';
import { Header } from '../../components/Header/Header';
import { Button } from '../../components/Button/Button';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';

export const StartPage = React.memo(() => {
  const history = useHistory();

  return (
    <>
      <Header>
        <h1 className="header_link">School CI server</h1>
        <Button
          onClick={() => history.push('/settings')}
          withIcon="true"
          size="medium"
          color="secondary"
        >
          <SettingsIcon /> Settings
        </Button>
      </Header>
      <EmptySettings />
    </>
  );
});
