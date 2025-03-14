import './css/DashboardAdmin.css';
import * as authUtils from './Components/authUtils.js';
import { useEffect } from 'react';

function DashboardAdminPage() {

    useEffect(() => {
        authUtils.CheckLoggedIn();
        authUtils.CheckAccess();
    }, []);

    function ToolCalibrationRecords_Button() {
        window.location.href = "/tool-calibration-record";
    };

    function AccountManagement_Button() {
        window.location.href = "/account-management";
    };

    function CreateNewAircraftTechnicalLog_Button() {
        window.location.href = "/aircraft-technical-log-create";
    };

    function ViewAllDocumentBinders_Button() {
        window.location.href = "/view-all-document-binders";
    };

    function PartsAndConsumableRequest_Button() {
        window.location.href = "/parts-consumable-request";
    };

    return(
        <div id="base" className="">
        {/* Unnamed (Rectangle) */}
        <div id="u37" className="ax_default shape transition notrs" onClick={authUtils.Signout}>
            <div id="u37_div" className="" />
            <div id="u37_text" className="text ">
            <p>
                <span>Sign Out</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u38" className="ax_default box_3 transition notrs">
            <div id="u38_div" className="" />
            <div
            id="u38_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u39" className="ax_default shape transition notrs" onClick={PartsAndConsumableRequest_Button}>
            <div id="u39_div" className="" />
            <div id="u39_text" className="text ">
            <p>
                <span>Parts and Consumable Request</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u40" className="ax_default shape transition notrs" onClick={ToolCalibrationRecords_Button}>
            <div id="u40_div" className="" />
            <div id="u40_text" className="text ">
            <p>
                <span>Tools Calibration Records</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u41" className="ax_default shape transition notrs" onClick={AccountManagement_Button}>
            <div id="u41_div" className="" />
            <div id="u41_text" className="text ">
            <p>
                <span>Account Management</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u42" className="ax_default shape transition notrs" onClick={CreateNewAircraftTechnicalLog_Button}>
            <div id="u42_div" className="" />
            <div id="u42_text" className="text ">
            <p>
                <span>Create New Aircraft Technical Log</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u43" className="ax_default shape transition notrs" onClick={ViewAllDocumentBinders_Button}>
            <div id="u43_div" className=""/>
            <div id="u43_text" className="text ">
            <p>
                <span>View All Document Binders</span>
            </p>
            </div>
        </div>
        </div>     
    );
};

export default DashboardAdminPage;