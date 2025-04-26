import { loadStyle, unloadStyle } from './Components/styleUtils.js';
import { useEffect, useState } from 'react';
import * as authUtils from './Components/authUtils.js';
import * as apiService from './Components/apiService.js';
import dayjs from 'dayjs';

function TechnicalDispatchReportPage() {
const [defectRows, setDefectRows] = useState([
  {
    description: '',
    type: [],
    melId: '',
    category: 'A',
    dueDate: '',
    dueTime: '',
  }
]);

useEffect(() => {
  const fetchData = async () => {
    const data = {
      document_id: sessionStorage.getItem("document_id"),
      table: "technical_dispatch_reports"
    };
    try {
      const response = await apiService.apiRequest(`get-document-data?table=${data.table}&document_id=${data.document_id}`);
      if (response && typeof response === 'object') {
        const report = response;
        document.getElementById("u785_input").value = report.registration || "";
        document.getElementById("u787_input").value = dayjs(report.date).format('YYYY-MM-DD');
        document.getElementById("u786_input").value = report.total_air_time || "";

        if (report.defect_rows) {
          setDefectRows(JSON.parse(report.defect_rows));
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  authUtils.CheckLoggedIn();
    authUtils.CheckAccess();
    authUtils.CheckSession();
    fetchData();
    const cssFile = '/css/TechnicalDispatchReport.css';
    loadStyle(cssFile);

    return () => {
      unloadStyle(cssFile);
    };
    }, []);

  function NextPage() {
    window.location.href = "/technical-dispatch-report-2";
  }

  function Back_Button() {
    sessionStorage.removeItem("document_id");
    authUtils.Back();
  }

  function handleAddRow() {
    setDefectRows([
      ...defectRows,
      {
        description: '',
        type: [],
        melId: '',
        category: 'A',
        dueDate: '',
        dueTime: '',
      }
    ]);
  }

  function handleDeleteRow(index) {
    const updatedRows = defectRows.filter((_, i) => i !== index);
    setDefectRows(updatedRows);
  }

  function handleInputChange(index, field, value) {
    const updatedRows = [...defectRows];
    updatedRows[index][field] = value;
    setDefectRows(updatedRows);
  }

  function handleCheckboxChange(index, value, checked) {
    const updatedRows = [...defectRows];
    if (checked) {
      updatedRows[index].type = [...new Set([...updatedRows[index].type, value])];
    } else {
      updatedRows[index].type = updatedRows[index].type.filter((v) => v !== value);
    }
    setDefectRows(updatedRows);
  }

  function handleCategoryChange(index, value) {
    const updatedRows = [...defectRows];
    updatedRows[index].category = value;
    setDefectRows(updatedRows);
  }

  async function handleSave() {
    const registration = document.getElementById('u785_input').value.trim();
    const total_air_time = document.getElementById('u786_input').value.trim();
    const date = document.getElementById('u787_input').value.trim();
    const data = {
      registration: registration,
      total_air_time: total_air_time,
      date: date,
      defect_rows: defectRows,
      document_id: sessionStorage.getItem("document_id"),
    };

    try {
      const response = await apiService.apiRequest("update-document-data", "POST", { document_type: "TDR", data: data });
      if (response) {
        alert("Technical Dispatch Report Page Saved Successfully");
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div id="base" className="">
      {/* TDR_Style Header */}
      <div id="u777" className="ax_default" data-label="TDR_Style">
        <div id="u778" className="ax_default box_1 transition notrs">
          <div id="u778_div" className="" />
          <div id="u778_text" className="text ">
            <p><span>TECHNICAL DISPATCH REPORT</span></p>
          </div>
        </div>
        <div id="u779" className="ax_default box_1 transition notrs">
          <div id="u779_div" className="" />
          <div id="u779_text" className="text ">
            <p><span>REGISTRATION</span></p>
          </div>
        </div>
        <div id="u780" className="ax_default box_1 transition notrs">
          <div id="u780_div" className="" />
          <div id="u780_text" className="text ">
            <p><span>TOTAL AIR TIME (HOURS)</span></p>
          </div>
        </div>
        <div id="u781" className="ax_default box_1 transition notrs">
          <div id="u781_div" className="" />
          <div id="u781_text" className="text ">
            <p><span>DATE</span></p>
          </div>
        </div>
        <div id="u782" className="ax_default box_1 transition notrs">
          <div id="u782_div" className="" />
          <div id="u782_text" className="text ">
            <p><span>DEFERRED DEFECTS</span></p>
          </div>
        </div>
      </div>

      {/* TDR_Inputs */}
      <div id="u784" className="ax_default" data-label="TDR_Inputs">
        <div id="u785" className="ax_default text_field transition notrs" data-label="Registration">
          <div id="u785_div" className="" />
          <input id="u785_input" type="text" defaultValue="" className="u785_input" />
        </div>
        <div id="u786" className="ax_default text_field transition notrs" data-label="Total_Air_Time">
          <div id="u786_div" className="" />
          <input id="u786_input" type="text" defaultValue="" className="u786_input" />
        </div>
        <div id="u787" className="ax_default text_field transition notrs" data-label="Date">
          <div id="u787_div" className="" />
          <input id="u787_input" type="date" defaultValue="" className="u787_input" />
        </div>
      </div>

      {/* Defects Table */}
      <div id="u788" className="ax_default">
        <table className="table-binder w-full">
          <thead>
            <tr className="table-header">
              <th>Defect & Deferral Description</th>
              <th>Type</th>
              <th>MEL ID #</th>
              <th>MEL Category</th>
              <th>Due Date</th>
              <th>Due Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {defectRows.map((row, index) => (
              <tr key={index} className="table-row">
                <td>
                  <input
                    value={row.description}
                    onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    id={`mel-${index}`}
                    value="mel"
                    checked={row.type.includes('mel')}
                    onChange={(e) => handleCheckboxChange(index, 'mel', e.target.checked)}
                  />
                  <label htmlFor={`mel-${index}`}> MEL</label><br />
                  <input
                    type="checkbox"
                    id={`non-mel-${index}`}
                    value="non-mel"
                    checked={row.type.includes('non-mel')}
                    onChange={(e) => handleCheckboxChange(index, 'non-mel', e.target.checked)}
                  />
                  <label htmlFor={`non-mel-${index}`}> NON-MEL</label>
                </td>
                <td>
                  <input
                    value={row.melId}
                    onChange={(e) => handleInputChange(index, 'melId', e.target.value)}
                  />
                </td>
                <td>
                  <select
                    value={row.category}
                    onChange={(e) => handleCategoryChange(index, e.target.value)}
                  >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                  </select>
                </td>
                <td>
                  <input
                    type="date"
                    value={row.dueDate}
                    onChange={(e) => handleInputChange(index, 'dueDate', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="time"
                    value={row.dueTime}
                    onChange={(e) => handleInputChange(index, 'dueTime', e.target.value)}
                  />
                </td>
                <td>
                  <button className="delete-button" onClick={() => handleDeleteRow(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          id="add-row-btn"
          className="button"
          onClick={handleAddRow}
          style={{
            marginTop: '10px',
            textAlign: 'center',
            cursor: 'pointer',
            borderRadius: '4px',
            width: '100%',
            fontWeight: 'bold',
            height: '40px',
          }}
        >
          <p style={{ margin: 0 }}><span>Add Row</span></p>
        </div>

        <div className="buttons-container">
          <div id="back" className="button" onClick={Back_Button}>
            <p><span>Back</span></p>
          </div>
          <div id="next" className="button" onClick={NextPage}>
            <p><span>Next Page</span></p>
          </div>
          <div id="save" className="button" onClick={handleSave}>
            <p><span>Save</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnicalDispatchReportPage;
