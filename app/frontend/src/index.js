import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Page Imports
import AccountManagementPage from './pages/AccountManagement';
import AircraftTechnicalLogPage from './pages/AircraftTechnicalLog';
import AircraftTechnicalLogCreatePage from './pages/AircraftTechnicalLogCreate';
import ChangeUserPasswordPage from './pages/ChangeUserPassword';
import DashboardAdminPage from './pages/DashboardAdmin';
import DashboardCompetitorPage from './pages/DashboardCompetitor';
import DashboardExpertPage from './pages/DashboardExpert';
import DocumentBinderPage from './pages/DocumentBinder';
import EndOfShiftReportPage from './pages/EndOfShiftReport';
import EngineReportPage from './pages/EngineReport';
import LoginPage from './pages/Login';
import PartsConsumableRequestPage from './pages/PartsConsumableRequest';
import StructureDamageReportPage from './pages/StructureDamageReport';
import TaskCardPage from './pages/TaskCard';
import TechnicalDispatchReportPage from './pages/TechnicalDispatchReport';
import ToolCalibrationRecordPage from './pages/ToolCalibrationRecord';
import ViewAllDocumentBindersPage from './pages/ViewAllDocumentBinders';
import WorkOrderSummaryPage from './pages/WorkOrderSummary';

import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/account-management" element={<AccountManagementPage />} />
        <Route path="/aircraft-technical-log" element={<AircraftTechnicalLogPage />} />
        <Route path="/aircraft-technical-log-create" element={<AircraftTechnicalLogCreatePage />} />
        <Route path="/change-user-password" element={<ChangeUserPasswordPage />} />
        <Route path="/dashboard-admin" element={<DashboardAdminPage />} />
        <Route path="/dashboard-competitor" element={<DashboardCompetitorPage />} />
        <Route path="/dashboard-expert" element={<DashboardExpertPage />} />
        <Route path="/document-binder" element={<DocumentBinderPage />} />
        <Route path="/end-of-work-shift-report" element={<EndOfShiftReportPage />} />
        <Route path="/engine-report" element={<EngineReportPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/parts-consumable-request" element={<PartsConsumableRequestPage />} />
        <Route path="/structure-damage-report" element={<StructureDamageReportPage />} />
        <Route path="/task-card" element={<TaskCardPage />} />
        <Route path="/technical-dispatch-report" element={<TechnicalDispatchReportPage />} />
        <Route path="/tool-calibration-record" element={<ToolCalibrationRecordPage />} />
        <Route path="/view-all-document-binders" element={<ViewAllDocumentBindersPage />} />
        <Route path="/work-order-summary" element={<WorkOrderSummaryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();
