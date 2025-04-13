import './css/TechnicalDispatchReport.css';
import { useEffect } from 'react';
import * as authUtils from './Components/authUtils.js';
import CustomCheckbox from "./Components/CheckboxComponent.js";

function TechnicalDispatchReportPage() {

    useEffect(() => {
        authUtils.CheckLoggedIn();
        authUtils.CheckAccess();
        authUtils.CheckSession();
     }, []);

    return(
        <div id="base" className="">
        {/* Save_Button (Rectangle) */}
        <div
            id="u812"
            className="ax_default shape transition notrs"
            data-label="Save_Button"
        >
            <div id="u812_div" className="" />
            <div id="u812_text" className="text ">
            <p>
                <span>Save</span>
            </p>
            </div>
        </div>
        {/* Back_Button (Rectangle) */}
        <div
            id="u813"
            className="ax_default shape transition notrs"
            data-label="Back_Button"
        >
            <div id="u813_div" className="" />
            <div id="u813_text" className="text ">
            <p>
                <span>Back</span>
            </p>
            </div>
        </div>
        {/* TDR_Style (Group) */}
        <div
            id="u814"
            className="ax_default"
            data-label="TDR_Style"
            data-left={39}
            data-top={6}
            data-width={1112}
            data-height={691}
            layer-opacity={1}
        >
            {/* Unnamed (Rectangle) */}
            <div id="u815" className="ax_default box_1 transition notrs">
            <div id="u815_div" className="" />
            <div id="u815_text" className="text ">
                <p>
                <span>TECHNICAL DISPATCH REPORT</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u816" className="ax_default box_1 transition notrs">
            <div id="u816_div" className="" />
            <div id="u816_text" className="text ">
                <p>
                <span>REGISTRATION</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u817" className="ax_default box_1 transition notrs">
            <div id="u817_div" className="" />
            <div id="u817_text" className="text ">
                <p>
                <span>TOTAL AIR TIME (HOURS)</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u818" className="ax_default box_1 transition notrs">
            <div id="u818_div" className="" />
            <div id="u818_text" className="text ">
                <p>
                <span>DATE</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u819" className="ax_default box_1 transition notrs">
            <div id="u819_div" className="" />
            <div id="u819_text" className="text ">
                <p>
                <span>DEFERRED DEFECTS</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u820" className="ax_default box_1 transition notrs">
            <div id="u820_div" className="" />
            <div id="u820_text" className="text ">
                <p>
                <span>MAINTENANCE FORECAST</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u821" className="ax_default box_1 transition notrs">
            <div id="u821_div" className="" />
            <div id="u821_text" className="text ">
                <p>
                <span>Maintenance Description</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u822" className="ax_default box_1 transition notrs">
            <div id="u822_div" className="" />
            <div id="u822_text" className="text ">
                <p>
                <span>Limitation</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u823" className="ax_default box_1 transition notrs">
            <div id="u823_div" className="" />
            <div id="u823_text" className="text ">
                <p>
                <span>DAILY TASKS</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u824" className="ax_default box_1 transition notrs">
            <div id="u824_div" className="" />
            <div id="u824_text" className="text ">
                <p>
                <span>Airworthiness Directive Number(s)</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u825" className="ax_default box_1 transition notrs">
            <div id="u825_div" className="" />
            <div id="u825_text" className="text ">
                <p>
                <span>Airworthiness Directive Description(s)</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u826" className="ax_default box_1 transition notrs">
            <div id="u826_div" className="" />
            <div id="u826_text" className="text ">
                <p>
                <span>Other Task(s)</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u827" className="ax_default box_1 transition notrs">
            <div id="u827_div" className="" />
            <div id="u827_text" className="text ">
                <p>
                <span>
                    Technical Dispatch Report prepared by (Signature &amp; ACA)
                </span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u828" className="ax_default box_1 transition notrs">
            <div id="u828_div" className="" />
            <div id="u828_text" className="text ">
                <p>
                <span>
                    This report has been prepared in accordance with the WS Aviation
                    Maintenance Policy and Porcedures Manual and reflects the aircraft's
                    current status as of the stated Total Air Time and Date
                </span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u829" className="ax_default box_1 transition notrs">
            <div id="u829_div" className="" />
            <div id="u829_text" className="text ">
                <p>
                <span>
                    The Technical Dispatch Report (TDR) is required to be included with
                    the current Technical Log Page prior to aircraft release for
                    service.
                </span>
                </p>
                <p>
                <span>
                    <br />
                </span>
                </p>
                <p>
                <span>
                    Multiple flight may occur between TDR updates, provided no
                    Limitations or MEL Due Dates are exceeded
                </span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u830" className="ax_default box_1 transition notrs">
            <div id="u830_div" className="" />
            <div id="u830_text" className="text ">
                <p>
                <span>Cycles</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u831" className="ax_default box_1 transition notrs">
            <div id="u831_div" className="" />
            <div id="u831_text" className="text ">
                <p>
                <span>Total Air Time (Hours)</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u832" className="ax_default box_1 transition notrs">
            <div id="u832_div" className="" />
            <div id="u832_text" className="text ">
                <p>
                <span>Date</span>
                </p>
            </div>
            </div>
        </div>
        {/* Deferred_Defect (Group) */}
        <div
            id="u833"
            className="ax_default"
            data-label="Deferred_Defect"
            data-left={39}
            data-top={88}
            data-width={1112}
            data-height={79}
            layer-opacity={1}
        >
            {/* Unnamed (Rectangle) */}
            <div id="u834" className="ax_default box_1 transition notrs">
            <div id="u834_div" className="" />
            <div
                id="u834_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u835" className="ax_default box_1 transition notrs">
            <div id="u835_div" className="" />
            <div
                id="u835_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u836" className="ax_default box_1 transition notrs">
            <div id="u836_div" className="" />
            <div
                id="u836_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u837" className="ax_default box_1 transition notrs">
            <div id="u837_div" className="" />
            <div
                id="u837_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u838" className="ax_default box_1 transition notrs">
            <div id="u838_div" className="" />
            <div
                id="u838_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Deferred_Defect_Due_Date (Text field) */}
            <div
            id="u839"
            className="ax_default text_field transition notrs"
            data-label="Deferred_Defect_Due_Date"
            >
            <div id="u839_div" className="" />
            <input
                id="u839_input"
                type="date"
                defaultValue=""
                className="u839_input"
            />
            </div>
            {/* Deferred_Defect_Due_Time (Text field) */}
            <div
            id="u840"
            className="ax_default text_field transition notrs"
            data-label="Deferred_Defect_Due_Time"
            >
            <div id="u840_div" className="" />
            <input
                id="u840_input"
                type="time"
                defaultValue=""
                className="u840_input"
            />
            </div>
            {/* Deferred_Defect_Description (Text field) */}
            <div
            id="u841"
            className="ax_default text_field transition notrs"
            data-label="Deferred_Defect_Description"
            >
            <div id="u841_div" className="" />
            <input
                id="u841_input"
                type="text"
                defaultValue=""
                className="u841_input"
            />
            </div>
            {/* MEL_ID (Text field) */}
            <div
            id="u842"
            className="ax_default text_field transition notrs"
            data-label="MEL_ID"
            >
            <div id="u842_div" className="" />
            <input
                id="u842_input"
                type="text"
                defaultValue=""
                className="u842_input"
            />
            </div>
            {/* MEL_Category (Droplist) */}
            <div
            id="u843"
            className="ax_default droplist transition notrs"
            data-label="MEL_Category"
            >
            <div id="u843_div" className="" />
            <select id="u843_input" className="u843_input">
                <option className="u843_input_option" value="N/A">
                N/A
                </option>
                <option className="u843_input_option" value="A">
                A
                </option>
                <option className="u843_input_option" value="B">
                B
                </option>
                <option className="u843_input_option" value="C">
                C
                </option>
                <option className="u843_input_option" value="D">
                D
                </option>
            </select>
            </div>
            {/* Unnamed (Checkbox) */}
            <div id="u844" className="ax_default checkbox">
            <label
                id="u844_input_label"
                htmlFor="u844_input"
                style={{ position: "absolute", left: 0 }}
            >
                <svg
                data="images/technical_dispatch_report/u844.svg"
                id="u844_img"
                className="img "
                viewBox="521 130 13 13"
                >
                <path
                    d="M 521 130  L 534 130  L 534 143  L 521 143  L 521 130  Z "
                    fillRule="nonzero"
                    fill="rgba(255, 255, 255, 1)"
                    stroke="none"
                    className="fill"
                />
                <path
                    d="M 521.5 130.5  L 533.5 130.5  L 533.5 142.5  L 521.5 142.5  L 521.5 130.5  Z "
                    strokeWidth={1}
                    strokeDasharray={0}
                    stroke="rgba(121, 121, 121, 1)"
                    fill="none"
                    className="stroke"
                    strokeDashoffset="0.5"
                />
                <path
                    d="M 523.7857142857143 136.5  L 526.5714285714286 139.2857142857143  L 531.2142857142857 132.78571428571428  "
                    strokeWidth="2.7857142857142856"
                    strokeDasharray={0}
                    stroke="rgba(121, 121, 121, 1)"
                    fill="none"
                    className="stroke btn_check"
                />
                </svg>
                <div id="u844_text" className="text ">
                <p>
                    <span>MEL</span>
                </p>
                </div>
            </label>
            <input id="u844_input" type="checkbox" defaultValue="checkbox" />
            </div>
            {/* Unnamed (Checkbox) */}
            <div id="u845" className="ax_default checkbox">
            <label
                id="u845_input_label"
                htmlFor="u845_input"
                style={{ position: "absolute", left: 0 }}
            >
                <svg
                data="images/technical_dispatch_report/u845.svg"
                id="u845_img"
                className="img "
                viewBox="583 130 13 13"
                >
                <path
                    d="M 583 130  L 596 130  L 596 143  L 583 143  L 583 130  Z "
                    fillRule="nonzero"
                    fill="rgba(255, 255, 255, 1)"
                    stroke="none"
                    className="fill"
                />
                <path
                    d="M 583.5 130.5  L 595.5 130.5  L 595.5 142.5  L 583.5 142.5  L 583.5 130.5  Z "
                    strokeWidth={1}
                    strokeDasharray={0}
                    stroke="rgba(121, 121, 121, 1)"
                    fill="none"
                    className="stroke"
                    strokeDashoffset="0.5"
                />
                <path
                    d="M 585.7857142857143 136.5  L 588.5714285714286 139.2857142857143  L 593.2142857142857 132.78571428571428  "
                    strokeWidth="2.7857142857142856"
                    strokeDasharray={0}
                    stroke="rgba(121, 121, 121, 1)"
                    fill="none"
                    className="stroke btn_check"
                />
                </svg>
                <div id="u845_text" className="text ">
                <p>
                    <span>NON-MEL</span>
                </p>
                </div>
            </label>
            <input id="u845_input" type="checkbox" defaultValue="checkbox" />
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u846" className="ax_default box_1 transition notrs">
            <div id="u846_div" className="" />
            <div id="u846_text" className="text ">
                <p>
                <span>Due Date &amp; Time</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u847" className="ax_default box_1 transition notrs">
            <div id="u847_div" className="" />
            <div id="u847_text" className="text ">
                <p>
                <span>MEL Category</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u848" className="ax_default box_1 transition notrs">
            <div id="u848_div" className="" />
            <div id="u848_text" className="text ">
                <p>
                <span>MEL ID</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u849" className="ax_default box_1 transition notrs">
            <div id="u849_div" className="" />
            <div id="u849_text" className="text ">
                <p>
                <span>Type</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u850" className="ax_default box_1 transition notrs">
            <div id="u850_div" className="" />
            <div id="u850_text" className="text ">
                <p>
                <span>Defect &amp; Deferral Description</span>
                </p>
            </div>
            </div>
        </div>
        {/* Add_New_Deferred_Defect (Rectangle) */}
        <div
            id="u851"
            className="ax_default shape transition notrs"
            data-label="Add_New_Deferred_Defect"
        >
            <div id="u851_div" className="" />
            <div id="u851_text" className="text ">
            <p>
                <span>Add New Deferred Defect</span>
            </p>
            </div>
        </div>
        {/* TDR_Inputs (Group) */}
        <div
            id="u852"
            className="ax_default"
            data-label="TDR_Inputs"
            data-left={39}
            data-top={27}
            data-width={1112}
            data-height={631}
            layer-opacity={1}
        >
            {/* Registration (Text field) */}
            <div
            id="u853"
            className="ax_default text_field transition notrs"
            data-label="Registration"
            >
            <div id="u853_div" className="" />
            <input
                id="u853_input"
                type="text"
                defaultValue=""
                className="u853_input"
            />
            </div>
            {/* Total_Air_Time (Text field) */}
            <div
            id="u854"
            className="ax_default text_field transition notrs"
            data-label="Total_Air_Time"
            >
            <div id="u854_div" className="" />
            <input
                id="u854_input"
                type="text"
                defaultValue=""
                className="u854_input"
            />
            </div>
            {/* Date (Text field) */}
            <div
            id="u855"
            className="ax_default text_field transition notrs"
            data-label="Date"
            >
            <div id="u855_div" className="" />
            <input
                id="u855_input"
                type="date"
                defaultValue=""
                className="u855_input"
            />
            </div>
            {/* Limitation_Date (Text field) */}
            <div
            id="u856"
            className="ax_default text_field transition notrs"
            data-label="Limitation_Date"
            >
            <div id="u856_div" className="" />
            <input
                id="u856_input"
                type="date"
                defaultValue=""
                className="u856_input"
            />
            </div>
            {/* Limitation_Total_Air_Time (Text field) */}
            <div
            id="u857"
            className="ax_default text_field transition notrs"
            data-label="Limitation_Total_Air_Time"
            >
            <div id="u857_div" className="" />
            <input
                id="u857_input"
                type="text"
                defaultValue=""
                className="u857_input"
            />
            </div>
            {/* Limitation_Cycles (Text field) */}
            <div
            id="u858"
            className="ax_default text_field transition notrs"
            data-label="Limitation_Cycles"
            >
            <div id="u858_div" className="" />
            <input
                id="u858_input"
                type="text"
                defaultValue=""
                className="u858_input"
            />
            </div>
            {/* Airworthiness_Directive_Number (Text field) */}
            <div
            id="u859"
            className="ax_default text_field transition notrs"
            data-label="Airworthiness_Directive_Number"
            >
            <div id="u859_div" className="" />
            <input
                id="u859_input"
                type="text"
                defaultValue=""
                className="u859_input"
            />
            </div>
            {/* Airworthiness_Directive_Description (Text field) */}
            <div
            id="u860"
            className="ax_default text_field transition notrs"
            data-label="Airworthiness_Directive_Description"
            >
            <div id="u860_div" className="" />
            <input
                id="u860_input"
                type="text"
                defaultValue=""
                className="u860_input"
            />
            </div>
            {/* Other_Task (Text field) */}
            <div
            id="u861"
            className="ax_default text_field transition notrs"
            data-label="Other_Task"
            >
            <div id="u861_div" className="" />
            <input
                id="u861_input"
                type="text"
                defaultValue=""
                className="u861_input"
            />
            </div>
            {/* Prepared_By (Text field) */}
            <div
            id="u862"
            className="ax_default text_field transition notrs"
            data-label="Prepared_By"
            >
            <div id="u862_div" className="" />
            <input
                id="u862_input"
                type="text"
                defaultValue=""
                className="u862_input"
            />
            </div>
            {/* Maintenance_Description (Text area) */}
            <div
            id="u863"
            className="ax_default text_area transition notrs"
            data-label="Maintenance_Description"
            >
            <div id="u863_div" className="" />
            <textarea id="u863_input" className="u863_input" defaultValue={""} />
            </div>
        </div>
        </div>      
    );
};

export default TechnicalDispatchReportPage;