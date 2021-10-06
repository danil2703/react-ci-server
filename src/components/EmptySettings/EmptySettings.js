import './EmptySettings.scss';
import toolsIcon from '../../assets/icons/tools.svg';
import Button from '../Button/Button';

function EmptySettings() {
  return (
    <div className="empty-settings">
      <img className="empty-settings_icon" src={toolsIcon} />
      <div className="empty-settings_message">
        Configure repository connection and synchronization settings
      </div>
      <Button label="Open setting" />
    </div>
  );
}

export default EmptySettings;
