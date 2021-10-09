import './BuildHistory.scss';
import React, { useState } from 'react';
import { BuildItem } from '../../components/BuildItem/BuildItem';
import { Header } from '../../components/Header/Header';
import { Modal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';

export const BuildHistory = React.memo(() => {
  const [isModal, setModal] = useState(false);
  const onClose = () => setModal(false);
  const openModal = () => setModal(true);

  const numbers = [
    {
      number: '1368',
      title: 'add documentation for postgres scaler',
      status: 'success',
      branchName: 'master',
      hash: '9c9f0b9',
      author: 'Philip Kirkorow',
      date: '21 янв, 03:06',
      time: '1 ч 20 мин',
    },
    {
      number: '1369',
      title: 'add documentation for postgres scaler',
      status: 'pending',
      branchName: 'master',
      hash: '9c9f0b9',
      author: 'Philip Kirkorow',
      date: '21 янв, 03:06',
      time: '1 ч 20 мин',
    },
    {
      number: '1370',
      title: 'add documentation for postgres scaler',
      status: 'error',
      branchName: 'master',
      hash: '9c9f0b9',
      author: 'Philip Kirkorow',
      date: '21 янв, 03:06',
      time: '1 ч 20 мин',
    },
    {
      number: '1371',
      title: 'add documentation for postgres scaler',
      status: 'success',
      branchName: 'master',
      hash: '9c9f0b9',
      author: 'Philip Kirkorow',
      date: '21 янв, 03:06',
      time: '1 ч 20 мин',
    },
    {
      number: '1371',
      title: 'add documentation for postgres scaler',
      status: 'success',
      branchName: 'master',
      hash: '9c9f0b9',
      author: 'Philip Kirkorow',
      date: '21 янв, 03:06',
      time: '1 ч 20 мин',
    },
    {
      number: '1371',
      title: 'add documentation for postgres scaler',
      status: 'success',
      branchName: 'master',
      hash: '9c9f0b9',
      author: 'Philip Kirkorow',
      date: '21 янв, 03:06',
      time: '1 ч 20 мин',
    },
    {
      number: '1371',
      title: 'add documentation for postgres scaler',
      status: 'success',
      branchName: 'master',
      hash: '9c9f0b9',
      author: 'Philip Kirkorow',
      date: '21 янв, 03:06',
      time: '1 ч 20 мин',
    },
    {
      number: '1371',
      title: 'add documentation for postgres scaler',
      status: 'success',
      branchName: 'master',
      hash: '9c9f0b9',
      author: 'Philip Kirkorow',
      date: '21 янв, 03:06',
      time: '1 ч 20 мин',
    },
    {
      number: '1371',
      title: 'add documentation for postgres scaler',
      status: 'success',
      branchName: 'master',
      hash: '9c9f0b9',
      author: 'Philip Kirkorow',
      date: '21 янв, 03:06',
      time: '1 ч 20 мин',
    },
    {
      number: '1371',
      title: 'add documentation for postgres scaler',
      status: 'success',
      branchName: 'master',
      hash: '9c9f0b9',
      author: 'Philip Kirkorow',
      date: '21 янв, 03:06',
      time: '1 ч 20 мин',
    },
    {
      number: '1371',
      title: 'add documentation for postgres scaler',
      status: 'success',
      branchName: 'master',
      hash: '9c9f0b9',
      author: 'Philip Kirkorow',
      date: '21 янв, 03:06',
      time: '1 ч 20 мин',
    },
    {
      number: '1371',
      title: 'add documentation for postgres scaler',
      status: 'success',
      branchName: 'master',
      hash: '9c9f0b9',
      author: 'Philip Kirkorow',
      date: '21 янв, 03:06',
      time: '1 ч 20 мин',
    },
    {
      number: '1371',
      title: 'add documentation for postgres scaler',
      status: 'success',
      branchName: 'master',
      hash: '9c9f0b9',
      author: 'Philip Kirkorow',
      date: '21 янв, 03:06',
      time: '1 ч 20 мин',
    },
    {
      number: '1371',
      title: 'add documentation for postgres scaler',
      status: 'success',
      branchName: 'master',
      hash: '9c9f0b9',
      author: 'Philip Kirkorow',
      date: '21 янв, 03:06',
      time: '1 ч 20 мин',
    },
  ];
  const buildItems = numbers.map((info) => <BuildItem info={info} className="history_item" />);
  return (
    <>
      <Header>
        <h1 className="header_link">School CI server</h1>
        <Button onClick={openModal} size="medium">
          Settings
        </Button>
      </Header>
      <div className="history">{buildItems}</div>
      <Modal
        visible={isModal}
        title="New build"
        text="Enter the commit hash which you want to build."
        onClose={onClose}
      />
    </>
  );
});
