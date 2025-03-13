import './css/EndOfShiftReport.css';
import {useState, useEffect} from 'react';
import * as authUtils from './authUtils.js';
import * as apiService from './apiService.js';

function EndOfShiftReportPage() {

    useEffect(() => {
        authUtils.CheckLoggedIn();
        authUtils.CheckAccess();
     }, []);

    const [checked, setChecked] = useState(false);

    function Back_Button() {
        authUtils.Back();
    };

    function SaveReport() {
        const id = "id";
        const aircraft = document.getElementById("u882_input");
        const date = document.getElementById("u888_input");
        const prepared_by = document.getElementById("u889_input");
        const steps_accomplished = document.getElementById("u883_input");
        const work_order_numbers = document.getElementById("u890_input");
        const task_card_ids = document.getElementById("u891_input");
        const remaining_steps = document.getElementById("u884_input");
        const difficulties = document.getElementById("u887_input");
        const no_difficulties = document.getElementById("u885_input");
        const signature_and_aca = document.getElementById("u886_input");

        const report = {
                id: id,
                aircraft: aircraft.value.trim(),
                date: date.value.trim(),
                prepared_by: prepared_by.value.trim(),
                steps_accomplished: steps_accomplished.value.trim(),
                work_order_numbers: work_order_numbers.value.trim(),
                task_card_ids: task_card_ids.value.trim(),
                remaining_steps: remaining_steps.value.trim(),
                difficulties: difficulties.value.trim(),
                no_difficulties: no_difficulties.value.trim(),
                signature_and_aca: signature_and_aca.value.trim()
        };
    }
    
    return(
        <div id="base" className="">
        {/* Report_Style (Group) */}
        <div
            id="u864"
            className="ax_default"
            data-label="Report_Style"
            data-left={71}
            data-top={33}
            data-width={1048}
            data-height={1198}
            layer-opacity={1}
        >
            {/* Unnamed (Rectangle) */}
            <div id="u865" className="ax_default box_1 transition notrs">
            <div id="u865_div" className="" />
            <div id="u865_text" className="text ">
                <p>
                <span>END-OF-WORK-SHIFT REPORT</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u866" className="ax_default box_1 transition notrs">
            <div id="u866_div" className="" />
            <div id="u866_text" className="text ">
                <p>
                <span>AIRCRAFT</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u867" className="ax_default box_1 transition notrs">
            <div id="u867_div" className="" />
            <div id="u867_text" className="text ">
                <p>
                <span>DATE</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u868" className="ax_default box_1 transition notrs">
            <div id="u868_div" className="" />
            <div id="u868_text" className="text ">
                <p>
                <span>PREPARED BY</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u869" className="ax_default box_1 transition notrs">
            <div id="u869_div" className="" />
            <div
                id="u869_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u870" className="ax_default box_1 transition notrs">
            <div id="u870_div" className="" />
            <div
                id="u870_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u871" className="ax_default box_1 transition notrs">
            <div id="u871_div" className="" />
            <div
                id="u871_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u872" className="ax_default paragraph transition notrs">
            <div id="u872_div" className="" />
            <div id="u872_text" className="text ">
                <p>
                <span>Work Order #(s)</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u873" className="ax_default paragraph transition notrs">
            <div id="u873_div" className="" />
            <div id="u873_text" className="text ">
                <p>
                <span>
                    The information provided is correct and to the best of my knowledge.
                </span>
                </p>
                <p>
                <span>AMO 2019-14</span>
                </p>
                <p>
                <span>
                    <br />
                </span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u874" className="ax_default paragraph transition notrs">
            <div id="u874_div" className="" />
            <div id="u874_text" className="text ">
                <p>
                <span>Task Card ID#(s)</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u875" className="ax_default box_1 transition notrs">
            <div id="u875_div" className="" />
            <div
                id="u875_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u876" className="ax_default box_1 transition notrs">
            <div id="u876_div" className="" />
            <div
                id="u876_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u877" className="ax_default paragraph transition notrs">
            <div id="u877_div" className="" />
            <div id="u877_text" className="text ">
                <p>
                <span>Signature &amp; ACA</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u878" className="ax_default paragraph transition notrs">
            <div id="u878_div" className="" />
            <div id="u878_text" className="text ">
                <p>
                <span>Steps Accomplished</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u879" className="ax_default paragraph transition notrs">
            <div id="u879_div" className="" />
            <div id="u879_text" className="text ">
                <p>
                <span>Remaining Steps</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u880" className="ax_default paragraph transition notrs">
            <div id="u880_div" className="" />
            <div id="u880_text" className="text ">
                <p>
                <span>Difficulties</span>
                </p>
            </div>
            </div>
        </div>
        {/* Report_Inputs (Group) */}
        <div
            id="u881"
            className="ax_default"
            data-label="Report_Inputs"
            data-left={71}
            data-top={101}
            data-width={1047}
            data-height={1085}
            layer-opacity={1}
        >
            {/* Aircraft (Text field) */}
            <div
            id="u882"
            className="ax_default text_field transition notrs"
            data-label="Aircraft"
            >
            <div id="u882_div" className="" />
            <input
                id="u882_input"
                type="text"
                defaultValue=""
                className="u882_input"
            />
            </div>
            {/* Steps_Accomplished (Text area) */}
            <div
            id="u883"
            className="ax_default text_area transition notrs"
            data-label="Steps_Accomplished"
            >
            <div id="u883_div" className="" />
            <textarea id="u883_input" className="u883_input" defaultValue={""} />
            </div>
            {/* Remaining_Steps (Text area) */}
            <div
            id="u884"
            className="ax_default text_area transition notrs"
            data-label="Remaining_Steps"
            >
            <div id="u884_div" className="" />
            <textarea id="u884_input" className="u884_input" defaultValue={""} />
            </div>
            {/* No_Difficulties (Checkbox) */}
            <div id="u885" className="ax_default checkbox" data-label="No_Difficulties">
            <input
                id="u885_input"
                type="checkbox"
                className="u885_input"
                defaultChecked={checked}
                onChange={e => setChecked(e.target.checked)}
                style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
            />
            <label
                id="u885_input_label"
                htmlFor="u885_input"
                onClick={e => setChecked(e.target.checked)}
                style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}
            >
                <div
                style={{
                    width: "16px",
                    height: "16px",
                    border: "1px solid #797979",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                >
                {checked && (
                    <span style={{ color: "black", fontWeight: "bold" }}>✔</span>
                )}
                </div>
                <div id="u885_text" className="text">
                <p>
                    <span>No Difficulties</span>
                </p>
                </div>
            </label>
            </div>
            {/* Signature_And_ACA (Text field) */}
            <div
            id="u886"
            className="ax_default text_field transition notrs"
            data-label="Signature_And_ACA"
            >
            <div id="u886_div" className="" />
            <input
                id="u886_input"
                type="text"
                defaultValue=""
                className="u886_input"
            />
            </div>
            {/* Difficulties (Text area) */}
            <div
            id="u887"
            className="ax_default text_area transition notrs"
            data-label="Difficulties"
            >
            <div id="u887_div" className="" />
            <textarea id="u887_input" className="u887_input" defaultValue={""} />
            </div>
            {/* Date (Text field) */}
            <div
            id="u888"
            className="ax_default text_field transition notrs"
            data-label="Date"
            >
            <div id="u888_div" className="" />
            <input
                id="u888_input"
                type="date"
                defaultValue=""
                className="u888_input"
            />
            </div>
            {/* Prepared_By (Text field) */}
            <div
            id="u889"
            className="ax_default text_field transition notrs"
            data-label="Prepared_By"
            >
            <div id="u889_div" className="" />
            <input
                id="u889_input"
                type="text"
                defaultValue=""
                className="u889_input"
            />
            </div>
            {/* Word_Order_Number (Text field) */}
            <div
            id="u890"
            className="ax_default text_field transition notrs"
            data-label="Word_Order_Number"
            >
            <div id="u890_div" className="" />
            <input
                id="u890_input"
                type="text"
                defaultValue=""
                className="u890_input"
            />
            </div>
            {/* Task_Card_ID (Text field) */}
            <div
            id="u891"
            className="ax_default text_field transition notrs"
            data-label="Task_Card_ID"
            >
            <div id="u891_div" className="" />
            <input
                id="u891_input"
                type="text"
                defaultValue=""
                className="u891_input"
            />
            </div>
        </div>
        {/* Save_Button (Rectangle) */}
        <div
            id="u892"
            className="ax_default shape transition notrs"
            data-label="Save_Button"
        >
            <div id="u892_div" className="" />
            <div id="u892_text" className="text ">
            <p>
                <span>Save</span>
            </p>
            </div>
        </div>
        {/* Back_Button (Rectangle) */}
        <div
            id="u893"
            className="ax_default shape transition notrs"
            data-label="Back_Button"
        >
            <div id="u893_div" className="" />
            <div id="u893_text" className="text ">
            <p>
                <span>Back</span>
            </p>
            </div>
        </div>
        </div>     
    );
};

export default EndOfShiftReportPage;