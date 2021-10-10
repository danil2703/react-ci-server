import './BuildHistory.scss';
import { Redirect } from 'react-router-dom';
import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { BuildItem } from '../../components/BuildItem/BuildItem';
import { Button } from '../../components/Button/Button';
import { buildData, moreBuildData } from './MockData';

export const BuildHistory = React.memo(() => {
  const [buildItems, setBuildItems] = useState(buildData);
  const [showMoreButton, setMoreButtonState] = useState(true);

  const showMoreData = useCallback(() => {
    setBuildItems([...buildItems, ...moreBuildData]);
    setMoreButtonState(false);
  }, [buildItems, moreBuildData]);

  const settings = useSelector((state) => state.settings);

  if (!settings.repository) {
    return <Redirect to={{ pathname: '/no-settings' }} />;
  }

  return (
    <div className="history container">
      {buildItems.map((info) => (
        <BuildItem key={info.number} info={info} className="history__item" />
      ))}
      {showMoreButton && (
        <Button className="history__show-more" onClick={showMoreData} color="secondary">
          Show more
        </Button>
      )}
    </div>
  );
});
