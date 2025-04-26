import { loadStyle, unloadStyle } from './Components/styleUtils.js';
import * as authUtils from './Components/authUtils.js';
import * as apiService from './Components/apiService.js';
import React, { useEffect, useState } from "react";

function ViewAllPartsConsumableRequestsPage() {

    useEffect(() => {
        async function fetchData() {
            try{
                const response = await apiService.apiRequest('get-parts-consumable-requests');
                setData(response);
            } catch (error) {
                alert("Error fetching data: " + error.message);
                console.error("Error fetching data:", error);
            }
        }
        authUtils.CheckLoggedIn();
        authUtils.CheckAccess();
        authUtils.CheckSession();
        fetchData();
        const cssFile = '/css/ViewAllDocumentBinders.css';
        loadStyle(cssFile);

        return () => {
        unloadStyle(cssFile); // clean up when navigating away
        };
     }, []);

    const [data, setData] = useState([]);


    function openRequest(request_id) {
        sessionStorage.setItem('request_id', request_id);
        window.location.href = '/parts-consumable-request';
    };

    async function Search(){
        const searchType = document.getElementById('u67_input').value;
        const searchInput = document.getElementById('u68_input').value.trim();
        try {
            const data = await apiService.apiRequest(`search-parts-consumable-requests?searchType=${searchType}&searchInput=${searchInput}`);
            setData(data);
        } catch (error) {
            console.error("Error fetching data: ", error);
            alert("An error occured while searching for binders");
        }
    }

    return (
        <div id="base" className="">
        {/* Unnamed (Table) */}
        <div id="u45" className="ax_default">
        <table className="table-binder w-full">
            <thead>
                <tr className="table-header">
                    <th className="table-header text-left">Request ID</th>
                    <th className="table-header text-left">Competitor Name</th>
                    <th className="table-header text-left">Request Date</th>
                    <th className="table-binder-header text-left">Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                <tr key={rowIndex} className="table-row">
                    <td className="table-cell">{row.request_id}</td>
                    <td className="table-cell">{row.user_name}</td>
                    <td className="table-cell">{row.request_date}</td>
                    <td className="table-cell">
                        <button onClick={() => openRequest(row.request_id)}>View Request</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        <div className="buttons-container">
        <div id="u44" className="button">
            <p><spam>Back</spam></p>
        </div>
        </div>
        </div> 
        {/* Unnamed (Rectangle) */}
        <div id="u65" className="ax_default box_1 transition notrs">
            <div id="u65_div" className="" />
            <div id="u65_text" className="text ">
            <p>
                <span>&nbsp;Search By:</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u66" className="ax_default box_1 transition notrs">
            <div id="u66_div" className="" />
            <div
            id="u66_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Search_Type (Droplist) */}
        <div
            id="u67"
            className="ax_default droplist transition notrs"
            data-label="Search_Type"
        >
            <div id="u67_div" className="" />
            <select id="u67_input" className="u67_input">
            <option className="u67_input_option" value="request_id">
                Request ID
            </option>
            <option className="u67_input_option" value="user_name">
                Competitor Name
            </option>
            </select>
        </div>
        {/* Search_Input (Text field) */}
        <div
            id="u68"
            className="ax_default text_field transition notrs"
            data-label="Search_Input"
        >
            <div id="u68_div" className="" />
            <input id="u68_input" type="text" defaultValue="" className="u68_input" />
        </div>
        {/* Search_Button (Rectangle) */}
        <div
            id="u69"
            className="ax_default shape transition notrs"
            data-label="Search_Button"
            onClick={Search}
        >
            <div id="u69_div" className="" />
            <div id="u69_text" className="text ">
            <p>
                <span>Search</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u70" className="ax_default box_1 transition notrs">
            <div id="u70_div" className="" />
            <div id="u70_text" className="text ">
            <p>
                <span>VIEW ALL PARTS AND CONSUMABLE REQUESTS</span>
            </p>
            </div>
        </div>
        </div>
    );

};

export default ViewAllPartsConsumableRequestsPage;