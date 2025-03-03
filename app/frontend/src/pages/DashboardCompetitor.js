import './css/DashboardCompetitor.css';
import * as authUtils from './authUtils.js';
import { useEffect } from 'react';

function DashboardCompetitorPage() {

    useEffect(() => {
        authUtils.CheckLoggedIn();
        authUtils.CheckAccess();
    }, []);

    function PartsAndConsumableRequest_Button() {
        window.location.href = "/parts-and-consumable-request";
    };

    function ToolsCalibrationRecords_Button() {
        window.location.href = "/tools-calibration-records";
    };

    function OpenYourDocumentBinder_Button() {
        window.location.href = "/open-your-document-binder";
    };

    return(
        <div id="base" className="">
        {/* Unnamed (Rectangle) */}
        <div id="u26" className="ax_default shape transition notrs" onClick={authUtils.Signout}>
            <div id="u26_div" className="" />
            <div id="u26_text" className="text ">
            <p>
                <span>Sign Out</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u27" className="ax_default box_3 transition notrs">
            <div id="u27_div" className="" />
            <div
            id="u27_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u28" className="ax_default shape transition notrs" onClick={PartsAndConsumableRequest_Button}>
            <div id="u28_div" className="" />
            <div id="u28_text" className="text ">
            <p>
                <span>Parts and Consumable Request</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u29" className="ax_default shape transition notrs" onClick={ToolsCalibrationRecords_Button}>
            <div id="u29_div" className="" />
            <div id="u29_text" className="text ">
            <p>
                <span>Tools Calibration Records</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u30" className="ax_default shape transition notrs" onClick={OpenYourDocumentBinder_Button}>
            <div id="u30_div" className="" />
            <div id="u30_text" className="text ">
            <p>
                <span>Open Your Document Binder</span>
            </p>
            </div>
        </div>
        </div>
    );
};

export default DashboardCompetitorPage;