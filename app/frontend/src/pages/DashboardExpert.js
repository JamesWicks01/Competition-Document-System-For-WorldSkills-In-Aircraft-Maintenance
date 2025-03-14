import './css/DashboardExpert.css';
import * as authUtils from './Components/authUtils.js';
import { useEffect } from 'react';

function DashboardExpertPage() {

    useEffect(() => {
        authUtils.CheckLoggedIn();
        authUtils.CheckAccess();
    }, []);

    function PartsAndConsumableRequest_Button() {
        window.location.href = "/parts-consumable-request";
    };

    function ToolsCalibrationRecords_Button() {
        window.location.href = "/tools-calibration-record";
    };

    function CreateNewAircraftTechnicalLog_Button() {
        window.location.href = "/aircraft-technical-log-create";
    };

    function ViewAllDocumentBinders_Button() {
        window.location.href = "/view-all-document-binders";
    };

    return(
        <div id="base" className="">
        {/* Unnamed (Rectangle) */}
        <div id="u31" className="ax_default shape transition notrs" onClick={authUtils.Signout}>
            <div id="u31_div" className="" />
            <div id="u31_text" className="text ">
            <p>
                <span>Sign Out</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u32" className="ax_default box_3 transition notrs">
            <div id="u32_div" className="" />
            <div
            id="u32_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u33" className="ax_default shape transition notrs" onClick={PartsAndConsumableRequest_Button}>
            <div id="u33_div" className="" />
            <div id="u33_text" className="text ">
            <p>
                <span>Parts and Consumable Request</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u34" className="ax_default shape transition notrs" onClick={ToolsCalibrationRecords_Button}>
            <div id="u34_div" className="" />
            <div id="u34_text" className="text ">
            <p>
                <span>Tools Calibration Records</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u35" className="ax_default shape transition notrs" onClick={CreateNewAircraftTechnicalLog_Button}>
            <div id="u35_div" className="" />
            <div id="u35_text" className="text ">
            <p>
                <span>Create New Aircraft Technical Log</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u36" className="ax_default shape transition notrs" onClick={ViewAllDocumentBinders_Button}>
            <div id="u36_div" className="" />
            <div id="u36_text" className="text ">
            <p>
                <span>View All Document Binders</span>
            </p>
            </div>
        </div>
        </div>
    );
};

export default DashboardExpertPage;