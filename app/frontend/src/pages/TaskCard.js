import './css/TaskCard.css';
import { useEffect } from 'react';
import * as authUtils from './Components/authUtils.js';
import CustomCheckbox from './Components/CheckboxComponent.js';

function TaskCardPage() {

    useEffect(() => {
        authUtils.CheckLoggedIn();
        authUtils.CheckAccess();
        authUtils.CheckSession();
     }, []);

    return(
        <div id="base" className="">
        {/* Unnamed (Rectangle) */}
        <div id="u597" className="ax_default box_1 transition notrs">
            <div id="u597_div" className="" />
            <div id="u597_text" className="text ">
            <p>
                <span>TASK CARD</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u598" className="ax_default box_1 transition notrs">
            <div id="u598_div" className="" />
            <div id="u598_text" className="text ">
            <p>
                <span>ID</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u599" className="ax_default box_1 transition notrs">
            <div id="u599_div" className="" />
            <div id="u599_text" className="text ">
            <p>
                <span>ATA CHAPTER</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u600" className="ax_default box_1 transition notrs">
            <div id="u600_div" className="" />
            <div id="u600_text" className="text ">
            <p>
                <span>TITLE</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u601" className="ax_default box_1 transition notrs">
            <div id="u601_div" className="" />
            <div id="u601_text" className="text ">
            <p>
                <span>AIRCRAFT TYPE</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u602" className="ax_default box_1 transition notrs">
            <div id="u602_div" className="" />
            <div id="u602_text" className="text ">
            <p>
                <span>REGISTRATION</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u603" className="ax_default box_1 transition notrs">
            <div id="u603_div" className="" />
            <div id="u603_text" className="text ">
            <p>
                <span>SERIAL NUMBER</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u604" className="ax_default box_1 transition notrs">
            <div id="u604_div" className="" />
            <div id="u604_text" className="text ">
            <p>
                <span>WORK ORDER#</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u605" className="ax_default box_1 transition notrs">
            <div id="u605_div" className="" />
            <div id="u605_text" className="text ">
            <p>
                <span>DATE OPENED</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u606" className="ax_default box_1 transition notrs">
            <div id="u606_div" className="" />
            <div id="u606_text" className="text ">
            <p>
                <span>ORIGINATED BY</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u607" className="ax_default box_1 transition notrs">
            <div id="u607_div" className="" />
            <div id="u607_text" className="text ">
            <p>
                <span>TOTAL AIRFRAME TIME (HOURS)</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u608" className="ax_default box_1 transition notrs">
            <div id="u608_div" className="" />
            <div id="u608_text" className="text ">
            <p>
                <span>AIRFRAME CYCLES</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u609" className="ax_default box_1 transition notrs">
            <div id="u609_div" className="" />
            <div id="u609_text" className="text ">
            <p>
                <span>MAINTENANCE REQUIRED / DEFECT DESCRIPTION</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u610" className="ax_default box_1 transition notrs">
            <div id="u610_div" className="" />
            <div
            id="u610_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u611" className="ax_default box_1 transition notrs">
            <div id="u611_div" className="" />
            <div id="u611_text" className="text ">
            <p>
                <span>RESOLUTION / DEFERRAL DESCRIPTION</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u612" className="ax_default box_1 transition notrs">
            <div id="u612_div" className="" />
            <div
            id="u612_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u613" className="ax_default box_1 transition notrs">
            <div id="u613_div" className="" />
            <div id="u613_text" className="text ">
            <p>
                <span style={{ fontFamily: '"Arial", sans-serif', fontWeight: 400 }}>
                Defect Deferred
                </span>
            </p>
            <p>
                <span
                style={{
                    fontFamily: '"Arial Bold", "Arial", sans-serif',
                    fontWeight: 700
                }}
                >
                <br />
                </span>
            </p>
            <p>
                <span
                style={{
                    fontFamily: '"Arial Bold", "Arial", sans-serif',
                    fontWeight: 700
                }}
                >
                <br />
                </span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u614" className="ax_default box_1 transition notrs">
            <div id="u614_div" className="" />
            <div id="u614_text" className="text ">
            <p>
                <span>Defer Category</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u615" className="ax_default box_1 transition notrs">
            <div id="u615_div" className="" />
            <div id="u615_text" className="text ">
            <p>
                <span>MEL Due</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u616" className="ax_default box_1 transition notrs">
            <div id="u616_div" className="" />
            <div id="u616_text" className="text ">
            <p>
                <span>Type</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u617" className="ax_default box_1 transition notrs">
            <div id="u617_div" className="" />
            <div
            id="u617_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u618" className="ax_default box_1 transition notrs">
            <div id="u618_div" className="" />
            <div id="u618_text" className="text ">
            <p>
                <span>MEL ID#</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u619" className="ax_default box_1 transition notrs">
            <div id="u619_div" className="" />
            <div id="u619_text" className="text ">
            <p>
                <span>MEL Category</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u620" className="ax_default box_1 transition notrs">
            <div id="u620_div" className="" />
            <div id="u620_text" className="text ">
            <p>
                <span>&nbsp;Time (UTC):</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u621" className="ax_default box_1 transition notrs">
            <div id="u621_div" className="" />
            <div id="u621_text" className="text ">
            <p style={{ fontSize: 16 }}>
                <span
                style={{
                    fontFamily: '"Arial Bold", "Arial", sans-serif',
                    fontWeight: 700,
                    fontSize: 18
                }}
                >
                &nbsp;
                </span>
                <span style={{ fontFamily: '"Arial", sans-serif', fontWeight: 400 }}>
                Date:
                </span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u622" className="ax_default box_1 transition notrs">
            <div id="u622_div" className="" />
            <div id="u622_text" className="text ">
            <p>
                <span>FOLLOW-ON MAINTENACE CHECKS</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u623" className="ax_default box_1 transition notrs">
            <div id="u623_div" className="" />
            <div id="u623_text" className="text ">
            <p>
                <span>Description</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u624" className="ax_default box_1 transition notrs">
            <div id="u624_div" className="" />
            <div id="u624_text" className="text ">
            <p>
                <span>YES</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u625" className="ax_default box_1 transition notrs">
            <div id="u625_div" className="" />
            <div id="u625_text" className="text ">
            <p>
                <span>NO</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u626" className="ax_default box_1 transition notrs">
            <div id="u626_div" className="" />
            <div
            id="u626_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u627" className="ax_default box_1 transition notrs">
            <div id="u627_div" className="" />
            <div
            id="u627_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u628" className="ax_default box_1 transition notrs">
            <div id="u628_div" className="" />
            <div id="u628_text" className="text ">
            <p>
                <span>Function Check</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u629" className="ax_default box_1 transition notrs">
            <div id="u629_div" className="" />
            <div id="u629_text" className="text ">
            <p>
                <span>Leak Check</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u630" className="ax_default box_1 transition notrs">
            <div id="u630_div" className="" />
            <div id="u630_text" className="text ">
            <p>
                <span>Other</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u631" className="ax_default box_1 transition notrs">
            <div id="u631_div" className="" />
            <div
            id="u631_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u632" className="ax_default box_1 transition notrs">
            <div id="u632_div" className="" />
            <div
            id="u632_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u633" className="ax_default box_1 transition notrs">
            <div id="u633_div" className="" />
            <div
            id="u633_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u634" className="ax_default box_1 transition notrs">
            <div id="u634_div" className="" />
            <div
            id="u634_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u635" className="ax_default box_1 transition notrs">
            <div id="u635_div" className="" />
            <div id="u635_text" className="text ">
            <p>
                <span>System(s) Affected and Details of Check</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u636" className="ax_default box_1 transition notrs">
            <div id="u636_div" className="" />
            <div
            id="u636_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u702" className="ax_default box_1 transition notrs">
            <div id="u702_div" className="" />
            <div
            id="u702_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u704" className="ax_default box_1 transition notrs">
            <div id="u704_div" className="" />
            <div
            id="u704_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u637" className="ax_default box_1 transition notrs">
            <div id="u637_div" className="" />
            <div id="u637_text" className="text ">
            <p>
                <span>MAINTENANCE RELEASE</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u638" className="ax_default box_1 transition notrs">
            <div id="u638_div" className="" />
            <div
            id="u638_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u639" className="ax_default box_1 transition notrs">
            <div id="u639_div" className="" />
            <div
            id="u639_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u640" className="ax_default box_1 transition notrs">
            <div id="u640_div" className="" />
            <div
            id="u640_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u641" className="ax_default box_1 transition notrs">
            <div id="u641_div" className="" />
            <div
            id="u641_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u642" className="ax_default box_1 transition notrs">
            <div id="u642_div" className="" />
            <div id="u642_text" className="text ">
            <p>
                <span>&nbsp;Date:</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u643" className="ax_default box_1 transition notrs">
            <div id="u643_div" className="" />
            <div id="u643_text" className="text ">
            <p>
                <span>&nbsp;Time:</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u644" className="ax_default box_1 transition notrs">
            <div id="u644_div" className="" />
            <div id="u644_text" className="text ">
            <p>
                <span>
                The described maintenance has been performed in accordance with the
                applicable airworthiness requirements and is subject to the FOLLOW-ON
                MAINTENANCE CHECKS detailed above.&nbsp; AMO# 2019-14
                </span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u645" className="ax_default box_1 transition notrs">
            <div id="u645_div" className="" />
            <div id="u645_text" className="text ">
            <p>
                <span>SUBJECT TO SATISFACTORY TEST FLIGHT</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u646" className="ax_default box_1 transition notrs">
            <div id="u646_div" className="" />
            <div
            id="u646_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u647" className="ax_default box_1 transition notrs">
            <div id="u647_div" className="" />
            <div id="u647_text" className="text ">
            <p>
                <span>Details of check(s) to be performed during TEST FLIGHT</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u648" className="ax_default paragraph transition notrs">
            <div id="u648_div" className="" />
            <div id="u648_text" className="text ">
            <p>
                <span>Deferred previously reported in Aircraft Technical Log</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u649" className="ax_default paragraph transition notrs">
            <div id="u649_div" className="" />
            <div id="u649_text" className="text ">
            <p>
                <span>IC Required?</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u650" className="ax_default paragraph transition notrs">
            <div id="u650_div" className="" />
            <div id="u650_text" className="text ">
            <p>
                <span>Post Maintenance Inspection</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u651" className="ax_default paragraph transition notrs">
            <div id="u651_div" className="" />
            <div id="u651_text" className="text ">
            <p>
                <span>
                Independent Check (IC) accomplished before Maintenance Release by
                (Signature &amp; ACA):
                </span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u652" className="ax_default paragraph transition notrs">
            <div id="u652_div" className="" />
            <div id="u652_text" className="text ">
            <p>
                <span>Independent Check carried out satisfacotry. AMO# 2019-14</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u653" className="ax_default paragraph transition notrs">
            <div id="u653_div" className="" />
            <div id="u653_text" className="text ">
            <p>
                <span>Task Card certified by (Signatue &amp; ACA):</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u654" className="ax_default paragraph transition notrs">
            <div id="u654_div" className="" />
            <div id="u654_text" className="text ">
            <p>
                <span>Number of attached supporting documents</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u655" className="ax_default paragraph transition notrs">
            <div id="u655_div" className="" />
            <div id="u655_text" className="text ">
            <p>
                <span>Detailed on Task Card ID # </span>
            </p>
            </div>
        </div>
        {/* Task_Card_Inserts (Group) */}
        <div
            id="u656"
            className="ax_default"
            data-label="Task_Card_Inserts"
            data-left={96}
            data-top={18}
            data-width={1003}
            data-height={1480}
            layer-opacity={1}
        >
            {/* Function_Check_Yes (Checkbox) */}
            <CustomCheckbox id="u657" label="" />
            {/* Leak_Check_Yes (Checkbox) */}
            <CustomCheckbox id="u658" label="" />
            {/* Other_Yes (Checkbox) */}
            <CustomCheckbox id="u659" label="" />
            {/* Other_No (Checkbox) */}
            <CustomCheckbox id="u660" label="" />
            {/* Leak_Check_No (Checkbox) */}
            <CustomCheckbox id="u661" label="" />
            {/* Function_Check_No (Checkbox) */}
            <CustomCheckbox id="u662" label="" />
            {/* Defect_Deferred (Checkbox) */}
            <CustomCheckbox id="u663" label="" />
            {/* Satisfactory_Test_Flight (Checkbox) */}
            <CustomCheckbox id="u664" label="" />
            {/* Reported_In_ATL (Checkbox) */}
            <CustomCheckbox id="u665" label="" />
            {/* Page_Sequence_Number (Text field) */}
            <div
            id="u666"
            className="ax_default text_field transition notrs"
            data-label="Page_Sequence_Number"
            >
            <div id="u666_div" className="" />
            <input
                id="u666_input"
                type="text"
                defaultValue=""
                className="u666_input"
            />
            </div>
            {/* Type_MEL (Checkbox) */}
            <CustomCheckbox id="u667" label="MEL" />
            {/* Type_Non-MEL (Checkbox) */}
            <CustomCheckbox id="u668" label="NON-MEL" />
            {/* MEL_Category (Droplist) */}
            <div
            id="u669"
            className="ax_default droplist transition notrs"
            data-label="MEL_Category"
            >
            <div id="u669_div" className="" />
            <select id="u669_input" className="u669_input">
                <option className="u669_input_option" value="N/A">
                N/A
                </option>
                <option className="u669_input_option" value="A">
                A
                </option>
                <option className="u669_input_option" value="B">
                B
                </option>
                <option className="u669_input_option" value="C">
                C
                </option>
                <option className="u669_input_option" value="D">
                D
                </option>
            </select>
            </div>
            {/* IC_Required_Yes (Checkbox) */}
            <CustomCheckbox id="u670" label="Yes" />
            {/* IC_Required_No (Checkbox) */}
            <CustomCheckbox id="u671" label="No" />
            {/* Number_Of_Attached_Documents (Text field) */}
            <div
            id="u672"
            className="ax_default text_field transition notrs"
            data-label="Number_Of_Attached_Documents"
            >
            <div id="u672_div" className="" />
            <input
                id="u672_input"
                type="text"
                defaultValue=""
                className="u672_input"
            />
            </div>
            {/* FC_Task_Card_ID (Text field) */}
            <div
            id="u673"
            className="ax_default text_field transition notrs"
            data-label="FC_Task_Card_ID"
            >
            <div id="u673_div" className="" />
            <input
                id="u673_input"
                type="text"
                defaultValue=""
                className="u673_input"
            />
            </div>
            {/* TaskCard_ID (Text field) */}
            <div
            id="u674"
            className="ax_default text_field transition notrs"
            data-label="TaskCard_ID"
            >
            <div id="u674_div" className="" />
            <input
                id="u674_input"
                type="text"
                defaultValue=""
                className="u674_input"
            />
            </div>
            {/* ATA_Chapter (Text field) */}
            <div
            id="u675"
            className="ax_default text_field transition notrs"
            data-label="ATA_Chapter"
            >
            <div id="u675_div" className="" />
            <input
                id="u675_input"
                type="text"
                defaultValue=""
                className="u675_input"
            />
            </div>
            {/* Title (Text field) */}
            <div
            id="u676"
            className="ax_default text_field transition notrs"
            data-label="Title"
            >
            <div id="u676_div" className="" />
            <input
                id="u676_input"
                type="text"
                defaultValue=""
                className="u676_input"
            />
            </div>
            {/* Aircraft_Type (Text field) */}
            <div
            id="u677"
            className="ax_default text_field transition notrs"
            data-label="Aircraft_Type"
            >
            <div id="u677_div" className="" />
            <input
                id="u677_input"
                type="text"
                defaultValue=""
                className="u677_input"
            />
            </div>
            {/* Registration (Text field) */}
            <div
            id="u678"
            className="ax_default text_field transition notrs"
            data-label="Registration"
            >
            <div id="u678_div" className="" />
            <input
                id="u678_input"
                type="text"
                defaultValue=""
                className="u678_input"
            />
            </div>
            {/* Airframe_Cycles (Text field) */}
            <div
            id="u679"
            className="ax_default text_field transition notrs"
            data-label="Airframe_Cycles"
            >
            <div id="u679_div" className="" />
            <input
                id="u679_input"
                type="text"
                defaultValue=""
                className="u679_input"
            />
            </div>
            {/* Total_Airframe_Time (Text field) */}
            <div
            id="u680"
            className="ax_default text_field transition notrs"
            data-label="Total_Airframe_Time"
            >
            <div id="u680_div" className="" />
            <input
                id="u680_input"
                type="text"
                defaultValue=""
                className="u680_input"
            />
            </div>
            {/* Originated_By (Text field) */}
            <div
            id="u681"
            className="ax_default text_field transition notrs"
            data-label="Originated_By"
            >
            <div id="u681_div" className="" />
            <input
                id="u681_input"
                type="text"
                defaultValue=""
                className="u681_input"
            />
            </div>
            {/* Serial_Number (Text field) */}
            <div
            id="u682"
            className="ax_default text_field transition notrs"
            data-label="Serial_Number"
            >
            <div id="u682_div" className="" />
            <input
                id="u682_input"
                type="text"
                defaultValue=""
                className="u682_input"
            />
            </div>
            {/* Work_Order_Number (Text field) */}
            <div
            id="u683"
            className="ax_default text_field transition notrs"
            data-label="Work_Order_Number"
            >
            <div id="u683_div" className="" />
            <input
                id="u683_input"
                type="text"
                defaultValue=""
                className="u683_input"
            />
            </div>
            {/* Date_Opened (Text field) */}
            <div
            id="u684"
            className="ax_default text_field transition notrs"
            data-label="Date_Opened"
            >
            <div id="u684_div" className="" />
            <input
                id="u684_input"
                type="date"
                defaultValue=""
                className="u684_input"
            />
            </div>
            {/* Maintenance_Required (Text area) */}
            <div
            id="u685"
            className="ax_default text_area transition notrs"
            data-label="Maintenance_Required"
            >
            <div id="u685_div" className="" />
            <textarea id="u685_input" className="u685_input" defaultValue={""} />
            </div>
            {/* Resolution_Description (Text area) */}
            <div
            id="u686"
            className="ax_default text_area transition notrs"
            data-label="Resolution_Description"
            >
            <div id="u686_div" className="" />
            <textarea id="u686_input" className="u686_input" defaultValue={""} />
            </div>
            {/* MEL_ID (Text field) */}
            <div
            id="u687"
            className="ax_default text_field transition notrs"
            data-label="MEL_ID"
            >
            <div id="u687_div" className="" />
            <input
                id="u687_input"
                type="text"
                defaultValue=""
                className="u687_input"
            />
            </div>
            {/* MEL_Due_Date (Text field) */}
            <div
            id="u688"
            className="ax_default text_field transition notrs"
            data-label="MEL_Due_Date"
            >
            <div id="u688_div" className="" />
            <input
                id="u688_input"
                type="date"
                defaultValue=""
                className="u688_input"
            />
            </div>
            {/* MEL_Due_Time (Text field) */}
            <div
            id="u689"
            className="ax_default text_field transition notrs"
            data-label="MEL_Due_Time"
            >
            <div id="u689_div" className="" />
            <input
                id="u689_input"
                type="time"
                defaultValue=""
                className="u689_input"
            />
            </div>
            {/* FC_Systems_Affected (Text field) */}
            <div
            id="u690"
            className="ax_default text_field transition notrs"
            data-label="FC_Systems_Affected"
            >
            <div id="u690_div" className="" />
            <input
                id="u690_input"
                type="text"
                defaultValue=""
                className="u690_input"
            />
            </div>
            {/* Post_Maintenance_Inspection (Text field) */}
            <div
            id="u691"
            className="ax_default text_field transition notrs"
            data-label="Post_Maintenance_Inspection"
            >
            <div id="u691_div" className="" />
            <input
                id="u691_input"
                type="text"
                defaultValue=""
                className="u691_input"
            />
            </div>
            {/* Deferral_Number (Text field) */}
            <div
            id="u692"
            className="ax_default text_field transition notrs"
            data-label="Deferral_Number"
            >
            <div id="u692_div" className="" />
            <input
                id="u692_input"
                type="text"
                defaultValue=""
                className="u692_input"
            />
            </div>
            {/* Task_Card_Certified_By (Text field) */}
            <div
            id="u693"
            className="ax_default text_field transition notrs"
            data-label="Task_Card_Certified_By"
            >
            <div id="u693_div" className="" />
            <input
                id="u693_input"
                type="text"
                defaultValue=""
                className="u693_input"
            />
            </div>
            {/* Task_Card_Certified_Date (Text field) */}
            <div
            id="u694"
            className="ax_default text_field transition notrs"
            data-label="Task_Card_Certified_Date"
            >
            <div id="u694_div" className="" />
            <input
                id="u694_input"
                type="date"
                defaultValue=""
                className="u694_input"
            />
            </div>
            {/* Task_Card_Certified_Time (Text field) */}
            <div
            id="u695"
            className="ax_default text_field transition notrs"
            data-label="Task_Card_Certified_Time"
            >
            <div id="u695_div" className="" />
            <input
                id="u695_input"
                type="time"
                defaultValue=""
                className="u695_input"
            />
            </div>
            {/* Checks_During_Test_Flight (Text field) */}
            <div
            id="u696"
            className="ax_default text_field transition notrs"
            data-label="Checks_During_Test_Flight"
            >
            <div id="u696_div" className="" />
            <input
                id="u696_input"
                type="text"
                defaultValue=""
                className="u696_input"
            />
            </div>
            {/* LC_Task_Card_ID (Text field) */}
            <div
            id="u697"
            className="ax_default text_field transition notrs"
            data-label="LC_Task_Card_ID"
            >
            <div id="u697_div" className="" />
            <input
                id="u697_input"
                type="text"
                defaultValue=""
                className="u697_input"
            />
            </div>
            {/* LC_Systems_Affected (Text field) */}
            <div
            id="u698"
            className="ax_default text_field transition notrs"
            data-label="LC_Systems_Affected"
            >
            <div id="u698_div" className="" />
            <input
                id="u698_input"
                type="text"
                defaultValue=""
                className="u698_input"
            />
            </div>
            {/* Other_Task_Card_ID (Text field) */}
            <div
            id="u699"
            className="ax_default text_field transition notrs"
            data-label="Other_Task_Card_ID"
            >
            <div id="u699_div" className="" />
            <input
                id="u699_input"
                type="text"
                defaultValue=""
                className="u699_input"
            />
            </div>
            {/* Other_Systems_Affected (Text field) */}
            <div
            id="u700"
            className="ax_default text_field transition notrs"
            data-label="Other_Systems_Affected"
            >
            <div id="u700_div" className="" />
            <input
                id="u700_input"
                type="text"
                defaultValue=""
                className="u700_input"
            />
            </div>
        </div>
        {/* Save_Button (Rectangle) */}
        <div
            id="u701"
            className="ax_default shape transition notrs"
            data-label="Save_Button"
        >
            <div id="u701_div" className="" />
            <div id="u701_text" className="text ">
            <p>
                <span>Save</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        {/* <div id="u702" className="ax_default box_1 transition notrs">
            <div id="u702_div" className="" />
            <div
            id="u702_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div> */}
        {/* Unnamed (Rectangle) */}
        <div id="u703" className="ax_default paragraph transition notrs">
            <div id="u703_div" className="" />
            <div id="u703_text" className="text ">
            <p>
                <span>Detailed on Task Card ID # </span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        {/* <div id="u704" className="ax_default box_1 transition notrs">
            <div id="u704_div" className="" />
            <div
            id="u704_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div> */}
        {/* Unnamed (Rectangle) */}
        <div id="u705" className="ax_default paragraph transition notrs">
            <div id="u705_div" className="" />
            <div id="u705_text" className="text ">
            <p>
                <span>Detailed on Task Card ID # </span>
            </p>
            </div>
        </div>
        {/* Back_Button (Rectangle) */}
        <div
            id="u706"
            className="ax_default shape transition notrs"
            data-label="Back_Button"
        >
            <div id="u706_div" className="" />
            <div id="u706_text" className="text ">
            <p>
                <span>Back</span>
            </p>
            </div>
        </div>
        </div>
    );
};

export default TaskCardPage;