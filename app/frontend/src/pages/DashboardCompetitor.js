import './css/DashboardCompetitor.css';

function DashboardCompetitorPage() {

    const SignOut_Button = () => {
        window.location.href = "/";
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
            id="u17"
            className="ax_default shape transition notrs"
            data-label="SignOut_Button"
            onClick={SignOut_Button}
        >
            <div id="u17_div" className="" />
            <div id="u17_text" className="text ">
            <p>
                <span>Sign Out</span>
            </p>
            </div>
        </button>
        {/* Unnamed (Rectangle) */}
        <div id="u18" className="ax_default box_3 transition notrs">
            <div id="u18_div" className="" />
            <div
            id="u18_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* PartsConsumableRequest_Button (Rectangle) */}
        <div
            id="u19"
            className="ax_default shape transition notrs"
            data-label="PartsConsumableRequest_Button"
            onClick = {PartsConsumableRequest_Button}
        >
            <div id="u19_div" className="" />
            <div id="u19_text" className="text ">
            <p>
                <span>Parts and Consumable Request</span>
            </p>
            </div>
        </div>
        {/* ToolCalibrationRecords_Button (Rectangle) */}
        <div
            id="u20"
            className="ax_default shape transition notrs"
            data-label="ToolCalibrationRecords_Button"
            onClick={ToolCalibrationRecords_Button}
        >
            <div id="u20_div" className="" />
            <div id="u20_text" className="text ">
            <p>
                <span>Tools Calibration Records</span>
            </p>
            </div>
        </div>
        {/* ViewYourATL_Button (Rectangle) */}
        <div
            id="u21"
            className="ax_default shape transition notrs"
            data-label="ViewYourATL_Button"
        >
            <div id="u21_div" className="" />
            <div id="u21_text" className="text ">
            <p>
                <span>View Your Aircraft Technical Log </span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u22" className="ax_default paragraph transition notrs">
            <div id="u22_div" className="" />
            <div
            id="u22_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        </div>

    );
}

export default DashboardCompetitorPage;