import './EmptySettings.scss';
import React from 'react';
import { Button } from '../Button/Button';
import { ReactComponent as ToolsIcon } from '../../assets/icons/tools.svg';

export const EmptySettings = React.memo(() => (
  <div className="empty-settings">
    <ToolsIcon className="empty-settings_icon" />
    <div className="empty-settings_message">Configure repository connection and synchronization settings</div>
    <Button type="link" to="/settings">
      Open setting
    </Button>
  </div>
));
