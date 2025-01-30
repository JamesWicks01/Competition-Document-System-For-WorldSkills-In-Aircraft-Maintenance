import './css/DashboardExpert.css';

function DashboardExpertPage() {
    return (
        <div id="base" className="">
        {/* SignOut_Button (Rectangle) */}
        <div
            id="u11"
            className="ax_default shape transition notrs"
            data-label="SignOut_Button"
        >
            <div id="u11_div" className="" />
            <div id="u11_text" className="text ">
            <p>
                <span>Sign Out</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u12" className="ax_default box_3 transition notrs">
            <div id="u12_div" className="" />
            <div
            id="u12_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* PartsConsumableRequest_Button (Rectangle) */}
        <div
            id="u13"
            className="ax_default shape transition notrs"
            data-label="PartsConsumableRequest_Button"
        >
            <div id="u13_div" className="" />
            <div id="u13_text" className="text ">
            <p>
                <span>Parts and Consumable Request</span>
            </p>
            </div>
        </div>
        {/* ToolCalibrationRecords_Button (Rectangle) */}
        <div
            id="u14"
            className="ax_default shape transition notrs"
            data-label="ToolCalibrationRecords_Button"
        >
            <div id="u14_div" className="" />
            <div id="u14_text" className="text ">
            <p>
                <span>Tools Calibration Records</span>
            </p>
            </div>
        </div>
        {/* CreateNewATL_Button (Rectangle) */}
        <div
            id="u15"
            className="ax_default shape transition notrs"
            data-label="CreateNewATL_Button"
        >
            <div id="u15_div" className="" />
            <div id="u15_text" className="text ">
            <p>
                <span>Create New Aircraft Technical Log</span>
            </p>
            </div>
        </div>
        {/* ViewAllATL_Button (Rectangle) */}
        <div
            id="u16"
            className="ax_default shape transition notrs"
            data-label="ViewAllATL_Button"
        >
            <div id="u16_div" className="" />
            <div id="u16_text" className="text ">
            <p>
                <span>View All Aircraft Technical Logs</span>
            </p>
            </div>
        </div>
        </div>
    );
}

export default DashboardExpertPage;