import './css/DashboardAdmin.css';
import { useEffect } from 'react';
import * as authUtils from './authUtils';

function DashboardAdminPage() {

    useEffect(() => {
        authUtils.CheckLoggedIn();
        authUtils.CheckAccess();
    }, []);

    const SignOut_Button = () => {
        authUtils.Signout();
    };

    const PartsConsumableRequest_Button = () => {
        window.location.href = "/parts-consumable-request";
    };

    const ToolCalibrationRecords_Button = () => {
        window.location.href = "/tool-calibration-record";
    };

    return (
        <div id="base" className="">
        {/* SignOut_Button (Rectangle) */}
        <button
            id="u23"
            className="ax_default shape transition notrs"
            data-label="SignOut_Button"
            onClick={SignOut_Button}
        >
            <div id="u23_div" className="" />
            <div id="u23_text" className="text ">
            <p>
                <span>Sign Out</span>
            </p>
            </div>
        </button>
        {/* Unnamed (Rectangle) */}
        <div id="u24" className="ax_default box_3 transition notrs">
            <div id="u24_div" className="" />
            <div
            id="u24_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* PartsConsumableRequest_Button (Rectangle) */}
        <div
            id="u25"
            className="ax_default shape transition notrs"
            data-label="PartsConsumableRequest_Button"
            onClick={PartsConsumableRequest_Button}
        >
            <div id="u25_div" className="" />
            <div id="u25_text" className="text ">
            <p>
                <span>Parts and Consumable Request</span>
            </p>
            </div>
        </div>
        {/* ToolCalibrationRecords_Button (Rectangle) */}
        <div
            id="u26"
            className="ax_default shape transition notrs"
            data-label="ToolCalibrationRecords_Button"
            onClick={ToolCalibrationRecords_Button}
        >
            <div id="u26_div" className="" />
            <div id="u26_text" className="text ">
            <p>
                <span>Tools Calibration Records</span>
            </p>
            </div>
        </div>
        {/* AccountManagement_Button (Rectangle) */}
        <div
            id="u27"
            className="ax_default shape transition notrs"
            data-label="AccountManagement_Button"
        >
            <div id="u27_div" className="" />
            <div id="u27_text" className="text ">
            <p>
                <span>Account Management</span>
            </p>
            </div>
        </div>
        {/* CreateNewATL_Button (Rectangle) */}
        <div
            id="u28"
            className="ax_default shape transition notrs"
            data-label="CreateNewATL_Button"
        >
            <div id="u28_div" className="" />
            <div id="u28_text" className="text ">
            <p>
                <span>Create New Aircraft Technical Log</span>
            </p>
            </div>
        </div>
        {/* ViewAllATL_Button (Rectangle) */}
        <div
            id="u29"
            className="ax_default shape transition notrs"
            data-label="ViewAllATL_Button"
        >
            <div id="u29_div" className="" />
            <div id="u29_text" className="text ">
            <p>
                <span>View All Aircraft Technical Logs</span>
            </p>
            </div>
        </div>
        </div>
    );
}

export default DashboardAdminPage;