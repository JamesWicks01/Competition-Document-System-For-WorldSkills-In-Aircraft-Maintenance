import { loadStyle, unloadStyle } from './Components/styleUtils.js';
import { useEffect } from 'react';
import * as apiService from './Components/apiService.js';
import * as authUtils from './Components/authUtils.js';
import dayjs from 'dayjs';

function TechnicalDispatchReportPage2() {

    useEffect(() => {
        async function fetchData() {
            const data = { document_id: sessionStorage.getItem("document_id"), table: "technical_dispatch_reports" };
            try {
                const response = await apiService.apiRequest(`get-document-data?table=${data.table}&document_id=${data.document_id}`);
                if (response && typeof response === 'object') {
                    const report = response;
                    document.getElementById("u832_input").value = report.maintenance_description || "";
                    document.getElementById("u825_input").value = dayjs(report.limitation_date).format('YYYY-MM-DD');;
                    document.getElementById("u826_input").value = report.limitation_total_air_time || "";
                    document.getElementById("u827_input").value = report.limitation_cycles || "";
                    document.getElementById("u828_input").value = report.airworthiness_directive_numbers || "";
                    document.getElementById("u829_input").value = report.airworthiness_directive_description || "";
                    document.getElementById("u830_input").value = report.other_tasks || "";
                    document.getElementById("u831_input").value = report.prepared_by || "";
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        authUtils.CheckLoggedIn();
        authUtils.CheckAccess();
        authUtils.CheckSession();
        fetchData();
        const cssFile = '/css/TechnicalDispatchReportPart2.css';
        loadStyle(cssFile);

        return () => {
        unloadStyle(cssFile); // clean up when navigating away
        };
     }, []);

     async function handleSave() {
        const maintenance_description = document.getElementById("u832_input");
        const limitation_date = document.getElementById("u825_input");
        const limitation_total_air_time = document.getElementById("u826_input");
        const limitation_cycles = document.getElementById("u827_input");
        const airworthiness_directive_number = document.getElementById("u828_input");
        const airworthiness_directive_description = document.getElementById("u829_input");
        const other_task = document.getElementById("u830_input");
        const prepared_by = document.getElementById("u831_input");

        const data = {
            maintenance_description: maintenance_description.value.trim(),
            limitation_date: limitation_date.value.trim(),
            limitation_total_air_time: limitation_total_air_time.value.trim(),
            limitation_cycles: limitation_cycles.value.trim(),
            airworthiness_directive_numbers: airworthiness_directive_number.value.trim(),
            airworthiness_directive_description: airworthiness_directive_description.value.trim(),
            other_tasks: other_task.value.trim(),
            prepared_by: prepared_by.value.trim(),
            document_id: sessionStorage.getItem("document_id")
        };
        try {
            const response = await apiService.apiRequest("update-document-data", "POST", {document_type:"TDR-P2", data:data});
            if (response) {
                alert("Technical Dispatch Report Page Saved Successfully");
            }
        } catch (error) {
            alert(error.message);
        }
     };

     function Back_Button() {
        authUtils.Back();
     } 

    return(
        <div id="base" className="">
        {/* Save_Button (Rectangle) */}
        <div
            id="u808"
            className="ax_default shape transition notrs"
            data-label="Save_Button"
            onClick={handleSave}
        >
            <div id="u808_div" className="" />
            <div id="u808_text" className="text ">
            <p>
                <span>Save</span>
            </p>
            </div>
        </div>
        {/* Back_Button (Rectangle) */}
        <div
            id="u809"
            className="ax_default shape transition notrs"
            data-label="Back_Button"
            onClick={Back_Button}
        >
            <div id="u809_div" className="" />
            <div id="u809_text" className="text ">
            <p>
                <span>Back</span>
            </p>
            </div>
        </div>
        {/* TDR_Style (Group) */}
        <div
            id="u810"
            className="ax_default"
            data-label="TDR_Style"
            data-left={39}
            data-top={67}
            data-width={1112}
            data-height={490}
            layer-opacity={1}
        >
            {/* Unnamed (Rectangle) */}
            <div id="u811" className="ax_default box_1 transition notrs">
            <div id="u811_div" className="" />
            <div id="u811_text" className="text ">
                <p>
                <span>MAINTENANCE FORECAST</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u812" className="ax_default box_1 transition notrs">
            <div id="u812_div" className="" />
            <div id="u812_text" className="text ">
                <p>
                <span>Maintenance Description</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u813" className="ax_default box_1 transition notrs">
            <div id="u813_div" className="" />
            <div id="u813_text" className="text ">
                <p>
                <span>Limitation</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u814" className="ax_default box_1 transition notrs">
            <div id="u814_div" className="" />
            <div id="u814_text" className="text ">
                <p>
                <span>DAILY TASKS</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u815" className="ax_default box_1 transition notrs">
            <div id="u815_div" className="" />
            <div id="u815_text" className="text ">
                <p>
                <span>Airworthiness Directive Number(s)</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u816" className="ax_default box_1 transition notrs">
            <div id="u816_div" className="" />
            <div id="u816_text" className="text ">
                <p>
                <span>Airworthiness Directive Description(s)</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u817" className="ax_default box_1 transition notrs">
            <div id="u817_div" className="" />
            <div id="u817_text" className="text ">
                <p>
                <span>Other Task(s)</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u818" className="ax_default box_1 transition notrs">
            <div id="u818_div" className="" />
            <div id="u818_text" className="text ">
                <p>
                <span>
                    Technical Dispatch Report prepared by (Signature &amp; ACA)
                </span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u819" className="ax_default box_1 transition notrs">
            <div id="u819_div" className="" />
            <div id="u819_text" className="text ">
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
            <div id="u820" className="ax_default box_1 transition notrs">
            <div id="u820_div" className="" />
            <div id="u820_text" className="text ">
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
            <div id="u821" className="ax_default box_1 transition notrs">
            <div id="u821_div" className="" />
            <div id="u821_text" className="text ">
                <p>
                <span>Cycles</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u822" className="ax_default box_1 transition notrs">
            <div id="u822_div" className="" />
            <div id="u822_text" className="text ">
                <p>
                <span>Total Air Time (Hours)</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u823" className="ax_default box_1 transition notrs">
            <div id="u823_div" className="" />
            <div id="u823_text" className="text ">
                <p>
                <span>Date</span>
                </p>
            </div>
            </div>
        </div>
        {/* TDR_Inputs (Group) */}
        <div
            id="u824"
            className="ax_default"
            data-label="TDR_Inputs"
            data-left={39}
            data-top={109}
            data-width={1112}
            data-height={408}
            layer-opacity={1}
        >
            {/* Limitation_Date (Text field) */}
            <div
            id="u825"
            className="ax_default text_field transition notrs"
            data-label="Limitation_Date"
            >
            <div id="u825_div" className="" />
            <input
                id="u825_input"
                type="date"
                defaultValue=""
                className="u825_input"
            />
            </div>
            {/* Limitation_Total_Air_Time (Text field) */}
            <div
            id="u826"
            className="ax_default text_field transition notrs"
            data-label="Limitation_Total_Air_Time"
            >
            <div id="u826_div" className="" />
            <input
                id="u826_input"
                type="text"
                defaultValue=""
                className="u826_input"
            />
            </div>
            {/* Limitation_Cycles (Text field) */}
            <div
            id="u827"
            className="ax_default text_field transition notrs"
            data-label="Limitation_Cycles"
            >
            <div id="u827_div" className="" />
            <input
                id="u827_input"
                type="text"
                defaultValue=""
                className="u827_input"
            />
            </div>
            {/* Airworthiness_Directive_Number (Text field) */}
            <div
            id="u828"
            className="ax_default text_field transition notrs"
            data-label="Airworthiness_Directive_Number"
            >
            <div id="u828_div" className="" />
            <input
                id="u828_input"
                type="text"
                defaultValue=""
                className="u828_input"
            />
            </div>
            {/* Airworthiness_Directive_Description (Text field) */}
            <div
            id="u829"
            className="ax_default text_field transition notrs"
            data-label="Airworthiness_Directive_Description"
            >
            <div id="u829_div" className="" />
            <input
                id="u829_input"
                type="text"
                defaultValue=""
                className="u829_input"
            />
            </div>
            {/* Other_Task (Text field) */}
            <div
            id="u830"
            className="ax_default text_field transition notrs"
            data-label="Other_Task"
            >
            <div id="u830_div" className="" />
            <input
                id="u830_input"
                type="text"
                defaultValue=""
                className="u830_input"
            />
            </div>
            {/* Prepared_By (Text field) */}
            <div
            id="u831"
            className="ax_default text_field transition notrs"
            data-label="Prepared_By"
            >
            <div id="u831_div" className="" />
            <input
                id="u831_input"
                type="text"
                defaultValue=""
                className="u831_input"
            />
            </div>
            {/* Maintenance_Description (Text area) */}
            <div
            id="u832"
            className="ax_default text_area transition notrs"
            data-label="Maintenance_Description"
            >
            <div id="u832_div" className="" />
            <textarea id="u832_input" className="u832_input" defaultValue={""} />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u833" className="ax_default box_1 transition notrs">
            <div id="u833_div" className="" />
            <div id="u833_text" className="text ">
            <p>
                <span>TECHNICAL DISPATCH REPORT</span>
            </p>
            </div>
        </div>
        </div>      
    );
};

export default TechnicalDispatchReportPage2;