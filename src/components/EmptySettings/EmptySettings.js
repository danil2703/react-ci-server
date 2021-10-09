import './EmptySettings.scss';
import React from 'react';
import { useHistory } from 'react-router-dom';
import toolsIcon from '../../assets/icons/tools.svg';
import { Button } from '../Button/Button';

export const EmptySettings = React.memo(() => {
  const history = useHistory();

  return (
    <div className="empty-settings">
      <img className="empty-settings_icon" src={toolsIcon} />
      <div className="empty-settings_message">
        Configure repository connection and synchronization settings
      </div>
      <Button onClick={() => history.push('/settings')}>Open setting</Button>
    </div>
  );
});
