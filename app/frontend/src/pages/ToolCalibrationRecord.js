import './css/ToolCalibrationRecord.css';
import React, { useEffect, useState } from "react";
import * as apiService from './Components/apiService.js';
import * as authUtils from './Components/authUtils.js';


function ToolCalibrationRecordPage() {

    useEffect(() => {

        function InsertNewRecordAccess() {
            const UserRole = authUtils.GetRole();
            if (UserRole !== "Admin" && UserRole !== "Expert") {
                document.getElementById("u161").style.display = "none";
                document.getElementById("u161").style.visibility = "hidden";
            }
        }

        async function fetchData() {
            try{
                const response = await apiService.apiRequest("load-tool-calibration-records", "GET");
                setData(response);
            } catch (error) {
                console.error("Error fetch data: ", error);
            }
        }
        authUtils.CheckLoggedIn();
        authUtils.CheckAccess();
        fetchData();
        InsertNewRecordAccess();
    }, []);

    const [data, setData] = useState([]);
    const headers = ["Description", "Part Number", "Serial Number", "Calibration Date", "Calibration Due Date", "Actions"];
    const userRole = authUtils.GetRole();

    function Back_Button() {
        authUtils.Back();
    };

    function NewRecord_Button() {
        document.getElementById("u162").style.display = "block";
        document.getElementById("u162").style.visibility = "visible";
    };

    function Cancel_Button() {
        document.getElementById("u162").style.display = "none";
        document.getElementById("u162").style.visibility = "hidden";
    };

    async function NewRecord() {
        const description = document.getElementById("u168_input");
        const partNumber = document.getElementById("u172_input");
        const serialNumber = document.getElementById("u176_input");
        const calibrationDate = document.getElementById("u180_input");
        const calibrationDueDate = document.getElementById("u184_input");

        if (
            !description.value.trim() ||
            !partNumber.value.trim() ||
            !serialNumber.value.trim() ||
            !calibrationDate.value.trim() ||
            !calibrationDueDate.value.trim()
        ) {
            alert("Please fill in all fields.");
            return null;
        }

        const Record = {
            Description: description.value.trim(),
            PartNumber: partNumber.value.trim(),
            SerialNumber: serialNumber.value.trim(),
            CalibrationDate: calibrationDate.value.trim(),
            CalibrationDueDate: calibrationDueDate.value.trim(),
        };

        try {
            const response = await apiService.apiRequest("new-record", "POST", Record);
            if(response) {
                alert("Record added successfully.");
            }
        } catch (error) {
            console.log(error);
            alert("Failed to add record.");
            return null;
        }

        description.value = "";
        partNumber.value = "";
        serialNumber.value = "";
        calibrationDate.value = "";
        calibrationDueDate.value = "";

        return Record;
    };

    async function SubmitRecord_Button() {
        const newRecord = await NewRecord();
        if (!newRecord) {
            return;
        }
        document.getElementById("u162").style.display = "none";
        document.getElementById("u143").style.display = "block";
        window.location.reload();
    };

    async function Search() {
        const searchType = document.getElementById("u146_input").value;
        const searchInput = document.getElementById("u147_input").value.trim();
        try {
            const data = await apiService.apiRequest(`search-tool-calibration-records?searchType=${searchType}&searchInput=${searchInput}`);
            setData(data);
        } catch (error) {
            console.error("Error fetching data: ", error);
            alert("An error occurred while searching for records.");
        }
    }

    async function DeleteRecord(calibration_id) {
        const confirmation = window.confirm("Are you sure you want to delete this record?");
        if(!confirmation) {
            return;
        } else {
          try {
            const response = await apiService.apiRequest(`delete-tool-calibration-record?calibration_id=${calibration_id}`);
            if(response) {
                alert("Record deleted successfully.");
                window.location.reload();
            }
          } catch (error) {
            console.error("Error deleting record: ", error);
            alert("Failed to delete record.");
          }
        }
    }

    return(
        <div id="base" className="">
        {/* Unnamed (Rectangle) */}
        <div id="u143" className="ax_default box_1 transition notrs">
            <div id="u143_div" className="" />
            <div id="u143_text" className="text ">
            <p>
                <span>TOOL CALIBRATION RECORD</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u144" className="ax_default box_1 transition notrs">
            <div id="u144_div" className="" />
            <div id="u144_text" className="text ">
            <p>
                <span>&nbsp;Search By:</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u145" className="ax_default box_1 transition notrs">
            <div id="u145_div" className="" />
            <div
            id="u145_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Search_Type (Droplist) */}
        <div
            id="u146"
            className="ax_default droplist transition notrs"
            data-label="Search_Type"
        >
            <div id="u146_div" className="" />
            <select id="u146_input" className="u146_input">
            <option className="u146_input_option" value="Part Number">
                Part Number
            </option>
            <option className="u146_input_option" value="Serial Number">
                Serial Number
            </option>
            </select>
        </div>
        {/* Search_Input (Text field) */}
        <div
            id="u147"
            className="ax_default text_field transition notrs"
            data-label="Search_Input"
        >
            <div id="u147_div" className="" />
            <input id="u147_input" type="text" defaultValue="" className="u147_input" />
        </div>
        {/* Search_Button (Rectangle) */}
        <div
            id="u148"
            className="ax_default shape transition notrs"
            data-label="Search_Button"
            onClick={Search}
        >
            <div id="u148_div" className="" />
            <div id="u148_text" className="text ">
            <p>
                <span>Search</span>
            </p>
            </div>
        </div>
        <div id="u149" className="ax_default">
        <table className="table-calibration">
        <thead>
          <tr className="table-header">
            {headers.map((header, index) => (
              <th key={index} className={`table-cell header-cell u8${index}`}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="table-row">
              <td className="table-cell">{row.description}</td>
              <td className="table-cell">{row.part_number}</td>
              <td className="table-cell">{row.serial_number}</td>
              <td className="table-cell">{row.calibration_date}</td>
              <td className="table-cell">{row.calibration_due_date}</td>
              <td className="table-cell">
                {(userRole === "Admin" || userRole === "Expert") &&  (
                    <button onClick={() => DeleteRecord(row.calibration_id)}>Delete Record</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
        </table>
        <div className="buttons-container">
        <div id="u160" className="button" onClick={Back_Button}>
            <p><span>Back</span></p>
        </div>

        <div id="u161" className="button" onClick={NewRecord_Button}>
            <p><span>Insert New Record</span></p>
        </div>
        </div>
        </div>
        {/* New_Record (Group) */}
        <div
            id="u162"
            className="ax_default ax_default_hidden"
            data-label="New_Record"
            style={{ display: "none", visibility: "hidden" }}
            data-left={397}
            data-top={124}
            data-width={400}
            data-height={527}
            layer-opacity={1}
        >
            {/* Unnamed (Rectangle) */}
            <div id="u163" className="ax_default box_3 transition notrs">
            <div id="u163_div" className="" />
            <div
                id="u163_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u164" className="ax_default heading_2 transition notrs">
            <div id="u164_div" className="" />
            <div id="u164_text" className="text ">
                <p>
                <span>Insert Tool Calibration Record</span>
                </p>
            </div>
            </div>
            {/* Cancel_Button (Rectangle) */}
            <div
            id="u165"
            className="ax_default shape transition notrs"
            data-label="Cancel_Button"
            onClick={Cancel_Button}
            >
            <div id="u165_div" className="" />
            <div id="u165_text" className="text ">
                <p>
                <span>Cancel</span>
                </p>
            </div>
            </div>
            {/* Submit_Button (Rectangle) */}
            <div
            id="u166"
            className="ax_default shape transition notrs"
            data-label="Submit_Button"
            onClick={SubmitRecord_Button}
            >
            <div id="u166_div" className="" />
            <div id="u166_text" className="text ">
                <p>
                <span>Submit</span>
                </p>
            </div>
            </div>
            {/* Text field & labels (filled) (Group) */}
            <div
            id="u167"
            className="ax_default"
            data-label="Text field & labels (filled)"
            data-left={454}
            data-top={206}
            data-width={287}
            data-height={91}
            layer-opacity={1}
            >
            {/* Input field (Text field) */}
            <div
                id="u168"
                className="ax_default text_field transition notrs"
                data-label="Input field"
            >
                <div id="u168_div" className="" />
                <input
                id="u168_input"
                type="text"
                defaultValue=""
                className="u168_input"
                />
            </div>
            {/* Input label (Rectangle) */}
            <div
                id="u169"
                className="ax_default label transition notrs"
                data-label="Input label"
            >
                <div id="u169_div" className="" />
                <div id="u169_text" className="text ">
                <p>
                    <span>Description</span>
                </p>
                </div>
            </div>
            {/* Helper text (Rectangle) */}
            <div
                id="u170"
                className="ax_default label transition notrs"
                data-label="Helper text"
            >
                <div id="u170_div" className="" />
                <div
                id="u170_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
                >
                <p />
                </div>
            </div>
            </div>
            {/* Text field & labels (filled) (Group) */}
            <div
            id="u171"
            className="ax_default"
            data-label="Text field & labels (filled)"
            data-left={454}
            data-top={277}
            data-width={287}
            data-height={91}
            layer-opacity={1}
            >
            {/* Input field (Text field) */}
            <div
                id="u172"
                className="ax_default text_field transition notrs"
                data-label="Input field"
            >
                <div id="u172_div" className="" />
                <input
                id="u172_input"
                type="text"
                defaultValue=""
                className="u172_input"
                />
            </div>
            {/* Input label (Rectangle) */}
            <div
                id="u173"
                className="ax_default label transition notrs"
                data-label="Input label"
            >
                <div id="u173_div" className="" />
                <div id="u173_text" className="text ">
                <p>
                    <span>Part Number</span>
                </p>
                </div>
            </div>
            {/* Helper text (Rectangle) */}
            <div
                id="u174"
                className="ax_default label transition notrs"
                data-label="Helper text"
            >
                <div id="u174_div" className="" />
                <div
                id="u174_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
                >
                <p />
                </div>
            </div>
            </div>
            {/* Text field & labels (filled) (Group) */}
            <div
            id="u175"
            className="ax_default"
            data-label="Text field & labels (filled)"
            data-left={454}
            data-top={348}
            data-width={287}
            data-height={91}
            layer-opacity={1}
            >
            {/* Input field (Text field) */}
            <div
                id="u176"
                className="ax_default text_field transition notrs"
                data-label="Input field"
            >
                <div id="u176_div" className="" />
                <input
                id="u176_input"
                type="text"
                defaultValue=""
                className="u176_input"
                />
            </div>
            {/* Input label (Rectangle) */}
            <div
                id="u177"
                className="ax_default label transition notrs"
                data-label="Input label"
            >
                <div id="u177_div" className="" />
                <div id="u177_text" className="text ">
                <p>
                    <span>Serial Number</span>
                </p>
                </div>
            </div>
            {/* Helper text (Rectangle) */}
            <div
                id="u178"
                className="ax_default label transition notrs"
                data-label="Helper text"
            >
                <div id="u178_div" className="" />
                <div
                id="u178_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
                >
                <p />
                </div>
            </div>
            </div>
            {/* Text field & labels (filled) (Group) */}
            <div
            id="u179"
            className="ax_default"
            data-label="Text field & labels (filled)"
            data-left={454}
            data-top={419}
            data-width={287}
            data-height={91}
            layer-opacity={1}
            >
            {/* Input field (Text field) */}
            <div
                id="u180"
                className="ax_default text_field transition notrs"
                data-label="Input field"
            >
                <div id="u180_div" className="" />
                <input
                id="u180_input"
                type="date"
                defaultValue=""
                className="u180_input"
                />
            </div>
            {/* Input label (Rectangle) */}
            <div
                id="u181"
                className="ax_default label transition notrs"
                data-label="Input label"
            >
                <div id="u181_div" className="" />
                <div id="u181_text" className="text ">
                <p>
                    <span>Calibration Date</span>
                </p>
                </div>
            </div>
            {/* Helper text (Rectangle) */}
            <div
                id="u182"
                className="ax_default label transition notrs"
                data-label="Helper text"
            >
                <div id="u182_div" className="" />
                <div
                id="u182_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
                >
                <p />
                </div>
            </div>
            </div>
            {/* Text field & labels (filled) (Group) */}
            <div
            id="u183"
            className="ax_default"
            data-label="Text field & labels (filled)"
            data-left={454}
            data-top={490}
            data-width={287}
            data-height={91}
            layer-opacity={1}
            >
            {/* Input field (Text field) */}
            <div
                id="u184"
                className="ax_default text_field transition notrs"
                data-label="Input field"
            >
                <div id="u184_div" className="" />
                <input
                id="u184_input"
                type="date"
                defaultValue=""
                className="u184_input"
                />
            </div>
            {/* Input label (Rectangle) */}
            <div
                id="u185"
                className="ax_default label transition notrs"
                data-label="Input label"
            >
                <div id="u185_div" className="" />
                <div id="u185_text" className="text ">
                <p>
                    <span>Calibration Due Date</span>
                </p>
                </div>
            </div>
            {/* Helper text (Rectangle) */}
            <div
                id="u186"
                className="ax_default label transition notrs"
                data-label="Helper text"
            >
                <div id="u186_div" className="" />
                <div
                id="u186_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
                >
                <p />
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default ToolCalibrationRecordPage;
