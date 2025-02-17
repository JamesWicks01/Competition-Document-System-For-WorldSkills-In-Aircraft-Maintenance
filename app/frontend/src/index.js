import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/Login';
import DashboardCompetitorPage from './pages/DashboardCompetitor';
import DashboardExpertPage from './pages/DashboardExpert';
import DashboardAdminPage from './pages/DashboardAdmin';
import PartsConsumableRequestPage from './pages/PartsConsumableRequest';
import ToolCalibrationRecordPage from './pages/ToolCalibrationRecord';
import CreateAircraftTechnicalLogPage from './pages/CreateATL';
import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="dashboard-competitor" element={<DashboardCompetitorPage />} />
        <Route path="dashboard-expert" element={<DashboardExpertPage />} />
        <Route path="dashboard-admin" element={<DashboardAdminPage />} />
        <Route path="parts-consumable-request" element={<PartsConsumableRequestPage />} />
        <Route path="tool-calibration-record" element={<ToolCalibrationRecordPage />} />
        <Route path="create-atl" element={<CreateAircraftTechnicalLogPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();
