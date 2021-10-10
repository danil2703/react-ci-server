import './BuildItem.scss';
import moment from 'moment';
import 'moment/locale/ru';
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
      <div className="build__status-container">
        {info.status === 'success' && <SuccessIcon />}
        {info.status === 'error' && <ErrorIcon />}
        {info.status === 'pending' && <PendingIcon />}
      </div>
      <div className="build__info-container">
        <div className="build__info-top-content">
          <span className="build__number">#{info.number}</span>
          <span className="build__title">{info.title}</span>
        </div>
        <div className="build__info-bottom-content">
          <span className="build__branch-container">
            <BranchIcon />
            <span className="build__branch">{info.branch}</span>
            <span className="build__hash">{info.hash}</span>
          </span>
          <AuthorIcon />
          <span className="build__author">{info.author}</span>
        </div>
      </div>
      <div className="build__date-container">
        <span className="build__date">
          <CalendarIcon />
          {moment(info.date).format('D MMM h:mm')}
        </span>
        <span className="build__time">
          <ClockIcon />
          {moment(info.time).format('h [ч] m [мин]')}
        </span>
      </div>
    </div>
  );
});
