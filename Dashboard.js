import React from 'react';
import { Route, Routes, useMatch } from 'react-router-dom';
import Tables from '../pages/Tables';
import Forms from '../pages/Forms';
import Charts from '../pages/ChartPage';

const Dashboard = () => {
  const match = useMatch('/dashboard/*');

  return (
    <Routes>
      <Route path={`${match.path}/tables`} element={<Tables />} />
      <Route path={`${match.path}/forms`} element={<Forms />} />
      <Route path={`${match.path}/charts`} element={<Charts />} />
    </Routes>
  );
};

export default Dashboard;
