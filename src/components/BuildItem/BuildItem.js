import './BuildItem.scss';
import { ReactComponent as SuccessIcon } from '../../assets/icons/status-success.svg';
import { ReactComponent as BranchIcon } from '../../assets/icons/branch.svg';
import { ReactComponent as AuthorIcon } from '../../assets/icons/author.svg';
import { ReactComponent as CalendarIcon } from '../../assets/icons/calendar.svg';
import { ReactComponent as ClockIcon } from '../../assets/icons/clock.svg';

function BuildItem({ status }) {
  return (
    <div className={`build  build_${status}`}>
      <div className="build_status-container">
        <SuccessIcon />
      </div>
      <div className="build_info-container">
        <div className="build_info-top-content">
          <span className="build_number">#1368</span>
          <span className="build_title">add documentation for postgres scaler</span>
        </div>
        <div className="build_info-bottom-content">
          <BranchIcon />
          <span className="build_branch">master</span>
          <span className="build_hash">9c9f0b9</span>
          <AuthorIcon />
          <span className="build_author">Philip Kirkorov</span>
        </div>
      </div>
      <div className="build_date-container">
        <span className="build_date">
          <CalendarIcon />
          21 янв, 03:06
        </span>
        <span className="build_time">
          <ClockIcon />1 ч 20 мин
        </span>
      </div>
    </div>
  );
}

export default BuildItem;
