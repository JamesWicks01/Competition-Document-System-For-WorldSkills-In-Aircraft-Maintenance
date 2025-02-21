import './css/ToolCalibrationRecord.css';
import { BASE_URL } from './config';
import React, { useEffect, useState } from "react";
import * as apiService from './apiService';
import * as authUtils from './authUtils';

function ToolCalibrationRecordPage() {

    useEffect(() => {

        function InsertNewRecordAccess() {
            const UserRole = authUtils.GetRole();
            
            if (UserRole !== "ADMIN" && UserRole !== "EXPERT") {
                document.getElementById("u91").style.display = "none";
                document.getElementById("u91").style.visibility = "hidden";
            }
        }
        
        async function fetchData() {
            try {
                const response = await apiService.apiRequest("load-tool-calibration-records");
                setData(response);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        authUtils.CheckLoggedIn();
        authUtils.CheckAccess();
        fetchData();
        InsertNewRecordAccess();
    }, []);

    const [data, setData] = useState([]);
    const headers = ["Description", "Part Number", "Serial Number", "Calibration Date", "Calibration Due Date"];

    const Back_Button = () => {
        window.history.back();
    };

    const NewRecord_Button = () => {
        document.getElementById("u92").style.display = "block";
        document.getElementById("u92").style.visibility = "visible";
    };

    const Cancel_Button = () => {
        document.getElementById("u92").style.display = "none";
        document.getElementById("u92").style.visibility = "hidden";
    };

    const NewRecord = async () => {
        const description = document.getElementById("u98_input");
        const partNumber = document.getElementById("u102_input");
        const serialNumber = document.getElementById("u106_input");
        const calibrationDate = document.getElementById("u110_input");
        const calibrationDueDate = document.getElementById("u114_input");
    
        // Trim values to avoid spaces being counted as valid input
        if (
            !description.value.trim() ||
            !partNumber.value.trim() ||
            !serialNumber.value.trim() ||
            !calibrationDate.value.trim() ||
            !calibrationDueDate.value.trim()
        ) {
            alert("Please fill in all fields");
            return null; // Stop execution if validation fails
        }
    
        const Record = {
            Description: description.value.trim(),
            PartNumber: partNumber.value.trim(),
            SerialNumber: serialNumber.value.trim(),
            CalibrationDate: calibrationDate.value.trim(),
            CalibrationDueDate: calibrationDueDate.value.trim(),
        };
    
        try {
            const response = await fetch(`${BASE_URL}/new-record`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(Record),
            });
    
            if (response.ok) {
                alert("Record added successfully");
            } else {
                alert("Failed to add record");
                return null;
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while adding the record");
            return null;
        }
    
        // Clear input fields after successful submission
        description.value = "";
        partNumber.value = "";
        serialNumber.value = "";
        calibrationDate.value = "";
        calibrationDueDate.value = "";
    
        return Record;
    };
    
    const Submit_Button = async () => {
        const newRecord = await NewRecord(); // Await the result
    
        if (!newRecord) {
            return; // Stop execution if validation fails
        }
        document.getElementById("u92").style.display = "none";
        document.getElementById("u92").style.visibility = "hidden";
        window.location.reload();     
    };

    const Search = async () => {
        const searchType = document.getElementById("u76_input").value;
        const searchInput = document.getElementById("u77_input").value.trim();       
        try {
            const data = await apiService.apiRequest(`search-tool-calibration-records?searchType=${searchType}&searchInput=${searchInput}`);
            setData(data);
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while searching for records");
        }
    };

    return(
        <div id="base" className="">
        {/* Unnamed (Rectangle) */}
        <div id="u73" className="ax_default box_1 transition notrs">
            <div id="u73_div" className="" />
            <div id="u73_text" className="text ">
            <p>
                <span>TOOL CALIBRATION RECORD</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u74" className="ax_default box_1 transition notrs">
            <div id="u74_div" className="" />
            <div id="u74_text" className="text ">
            <p>
                <span>&nbsp;Search By:</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u75" className="ax_default box_1 transition notrs">
            <div id="u75_div" className="" />
            <div
            id="u75_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Search_Type (Droplist) */}
        <div
            id="u76"
            className="ax_default droplist transition notrs"
            data-label="Search_Type"
        >
            <div id="u76_div" className="" />
            <select id="u76_input" className="u76_input">
            <option className="u76_input_option" value="part_number">
                Part Number
            </option>
            <option className="u76_input_option" value="serial_number">
                Serial Number
            </option>
            </select>
        </div>
        {/* Search_Input (Text field) */}
        <div
            id="u77"
            className="ax_default text_field transition notrs"
            data-label="Search_Input"
        >
            <div id="u77_div" className="" />
            <input id="u77_input" type="text" defaultValue="" className="u77_input" />
        </div>
        {/* Search_Button (Rectangle) */}
        <div
            id="u78"
            className="ax_default shape transition notrs"
            data-label="Search_Button"
            onClick={Search}
        >
            <div id="u78_div" className="" />
            <div id="u78_text" className="text ">
            <p>
                <span>Search</span>
            </p>
            </div>
        </div>
        <div id="u79" className="ax_default">
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
            </tr>
          ))}
        </tbody>
        </table>
        <div className="buttons-container">
        <div id="u90" className="button" onClick={Back_Button}>
            <p><span>Back</span></p>
        </div>

        <div id="u91" className="button" onClick={NewRecord_Button}>
            <p><span>Insert New Record</span></p>
        </div>
        </div>
        </div>
        {/* New_Record (Group) */}
        <div
            id="u92"
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
            <div id="u93" className="ax_default box_3 transition notrs">
            <div id="u93_div" className="" />
            <div
                id="u93_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u94" className="ax_default heading_2 transition notrs">
            <div id="u94_div" className="" />
            <div id="u94_text" className="text ">
                <p>
                <span>Insert Tool Calibration Record</span>
                </p>
            </div>
            </div>
            {/* Cancel_Button (Rectangle) */}
            <div
            id="u95"
            className="ax_default shape transition notrs"
            data-label="Cancel_Button"
            onClick={Cancel_Button}
            >
            <div id="u95_div" className="" />
            <div id="u95_text" className="text ">
                <p>
                <span>Cancel</span>
                </p>
            </div>
            </div>
            {/* Submit_Button (Rectangle) */}
            <div
            id="u96"
            className="ax_default shape transition notrs"
            data-label="Submit_Button"
            onClick={Submit_Button}
            >
            <div id="u96_div" className="" />
            <div id="u96_text" className="text ">
                <p>
                <span>Submit</span>
                </p>
            </div>
            </div>
            {/* Text field & labels (filled) (Group) */}
            <div
            id="u97"
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
                id="u98"
                className="ax_default text_field transition notrs"
                data-label="Input field"
            >
                <div id="u98_div" className="" />
                <input
                id="u98_input"
                type="text"
                defaultValue=""
                className="u98_input"
                />
            </div>
            {/* Input label (Rectangle) */}
            <div
                id="u99"
                className="ax_default label transition notrs"
                data-label="Input label"
            >
                <div id="u99_div" className="" />
                <div id="u99_text" className="text ">
                <p>
                    <span>Description</span>
                </p>
                </div>
            </div>
            {/* Helper text (Rectangle) */}
            <div
                id="u100"
                className="ax_default label transition notrs"
                data-label="Helper text"
            >
                <div id="u100_div" className="" />
                <div
                id="u100_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
                >
                <p />
                </div>
            </div>
            </div>
            {/* Text field & labels (filled) (Group) */}
            <div
            id="u101"
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
                id="u102"
                className="ax_default text_field transition notrs"
                data-label="Input field"
            >
                <div id="u102_div" className="" />
                <input
                id="u102_input"
                type="text"
                defaultValue=""
                className="u102_input"
                />
            </div>
            {/* Input label (Rectangle) */}
            <div
                id="u103"
                className="ax_default label transition notrs"
                data-label="Input label"
            >
                <div id="u103_div" className="" />
                <div id="u103_text" className="text ">
                <p>
                    <span>Part Number</span>
                </p>
                </div>
            </div>
            {/* Helper text (Rectangle) */}
            <div
                id="u104"
                className="ax_default label transition notrs"
                data-label="Helper text"
            >
                <div id="u104_div" className="" />
                <div
                id="u104_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
                >
                <p />
                </div>
            </div>
            </div>
            {/* Text field & labels (filled) (Group) */}
            <div
            id="u105"
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
                id="u106"
                className="ax_default text_field transition notrs"
                data-label="Input field"
            >
                <div id="u106_div" className="" />
                <input
                id="u106_input"
                type="text"
                defaultValue=""
                className="u106_input"
                />
            </div>
            {/* Input label (Rectangle) */}
            <div
                id="u107"
                className="ax_default label transition notrs"
                data-label="Input label"
            >
                <div id="u107_div" className="" />
                <div id="u107_text" className="text ">
                <p>
                    <span>Serial Number</span>
                </p>
                </div>
            </div>
            {/* Helper text (Rectangle) */}
            <div
                id="u108"
                className="ax_default label transition notrs"
                data-label="Helper text"
            >
                <div id="u108_div" className="" />
                <div
                id="u108_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
                >
                <p />
                </div>
            </div>
            </div>
            {/* Text field & labels (filled) (Group) */}
            <div
            id="u109"
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
                id="u110"
                className="ax_default text_field transition notrs"
                data-label="Input field"
            >
                <div id="u110_div" className="" />
                <input
                id="u110_input"
                type="date"
                defaultValue=""
                className="u110_input"
                />
            </div>
            {/* Input label (Rectangle) */}
            <div
                id="u111"
                className="ax_default label transition notrs"
                data-label="Input label"
            >
                <div id="u111_div" className="" />
                <div id="u111_text" className="text ">
                <p>
                    <span>Calibration Date</span>
                </p>
                </div>
            </div>
            {/* Helper text (Rectangle) */}
            <div
                id="u112"
                className="ax_default label transition notrs"
                data-label="Helper text"
            >
                <div id="u112_div" className="" />
                <div
                id="u112_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
                >
                <p />
                </div>
            </div>
            </div>
            {/* Text field & labels (filled) (Group) */}
            <div
            id="u113"
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
                id="u114"
                className="ax_default text_field transition notrs"
                data-label="Input field"
            >
                <div id="u114_div" className="" />
                <input
                id="u114_input"
                type="date"
                defaultValue=""
                className="u114_input"
                />
            </div>
            {/* Input label (Rectangle) */}
            <div
                id="u115"
                className="ax_default label transition notrs"
                data-label="Input label"
            >
                <div id="u115_div" className="" />
                <div id="u115_text" className="text ">
                <p>
                    <span>Calibration Due Date</span>
                </p>
                </div>
            </div>
            {/* Helper text (Rectangle) */}
            <div
                id="u116"
                className="ax_default label transition notrs"
                data-label="Helper text"
            >
                <div id="u116_div" className="" />
                <div
                id="u116_text"
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
}

export default ToolCalibrationRecordPage;