import { loadStyle, unloadStyle } from './Components/styleUtils.js';
import * as authUtils from './Components/authUtils.js';
import { useEffect } from 'react';

function DashboardCompetitorPage() {

    useEffect(() => {
        authUtils.CheckLoggedIn();
        authUtils.CheckAccess();
        authUtils.CheckSession();
        const cssFile = '/css/DashboardCompetitor.css';
        loadStyle(cssFile);

        return () => {
        unloadStyle(cssFile); // clean up when navigating away
        };
    }, []);

    function PartsAndConsumableRequest_Button() {
        window.location.href = "/parts-consumable-request";
    };

    function ToolsCalibrationRecords_Button() {
        window.location.href = "/tool-calibration-record";
    };

    function OpenYourDocumentBinder_Button() {
        window.location.href = "/document-binder";
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