import './EmptySettings.scss';
import React from 'react';
import toolsIcon from '../../assets/icons/tools.svg';
import { Button } from '../Button/Button';

export const EmptySettings = React.memo(() => (
  <div className="empty-settings">
    <img className="empty-settings_icon" src={toolsIcon} />
    <div className="empty-settings_message">Configure repository connection and synchronization settings</div>
    <Button type="link" to="/settings">
      Open setting
    </Button>
  </div>
));