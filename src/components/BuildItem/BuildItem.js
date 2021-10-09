import './BuildItem.scss';
import React from 'react';
import { ReactComponent as SuccessIcon } from '../../assets/icons/status-success.svg';
import { ReactComponent as ErrorIcon } from '../../assets/icons/status-error.svg';
import { ReactComponent as PendingIcon } from '../../assets/icons/status-pending.svg';
import { ReactComponent as BranchIcon } from '../../assets/icons/branch.svg';
import { ReactComponent as AuthorIcon } from '../../assets/icons/author.svg';
import { ReactComponent as CalendarIcon } from '../../assets/icons/calendar.svg';
import { ReactComponent as ClockIcon } from '../../assets/icons/clock.svg';

export const BuildItem = React.memo((props) => {
  const { info, className = '' } = props;

  return (
    <div className={`build  build_${info.status} ${className}`}>
      <div className="build_status-container">
        {info.status === 'success' && <SuccessIcon />}
        {info.status === 'error' && <ErrorIcon />}
        {info.status === 'pending' && <PendingIcon />}
      </div>
      <div className="build_info-container">
        <div className="build_info-top-content">
          <span className="build_number">#{info.number}</span>
          <span className="build_title">add documentation for postgres scaler</span>
        </div>
        <div className="build_info-bottom-content">
          <BranchIcon />
          <span className="build_branch">{info.branch}</span>
          <span className="build_hash">{info.hash}</span>
          <AuthorIcon />
          <span className="build_author">{info.author}</span>
        </div>
      </div>
      <div className="build_date-container">
        <span className="build_date">
          <CalendarIcon />
          {info.date}
        </span>
        <span className="build_time">
          <ClockIcon />
          {info.time}
        </span>
      </div>
    </div>
  );
});
