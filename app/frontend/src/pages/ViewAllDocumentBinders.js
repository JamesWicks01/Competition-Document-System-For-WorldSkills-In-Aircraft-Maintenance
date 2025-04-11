import './css/ViewAllDocumentBinders.css';
import * as authUtils from './Components/authUtils.js';
import * as apiService from './Components/apiService.js';
import React, { useEffect, useState } from "react";

function ViewAllDocumentBindersPage() {

    useEffect(() => {
        async function fetchData() {
            try{
                const response = await api
            }
        }

        authUtils.CheckLoggedIn();
        authUtils.CheckAccess();
     }, []);

    return (
        <div id="base" className="">
        {/* Back (Rectangle) */}
        <div id="u44" className="ax_default shape transition notrs" data-label="Back">
            <div id="u44_div" className="" />
            <div id="u44_text" className="text ">
            <p>
                <span>Back</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Table) */}
        <div id="u45" className="ax_default">
        <table className="table-binder w-full">
            <thead>
                <tr className="table-header">
                    <th className="table-header text-left">Binder ID</th>
                    <th className="table-header text-left">Assigned Competitor</th>
                    <th className="table-header text-left">Binder Status</th>
                    <th className="table-binder-header text-left">Actions</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
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
            <option className="u67_input_option" value="Binger ID">
                Binger ID
            </option>
            <option className="u67_input_option" value="Assigned Competitor">
                Assigned Competitor
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
                <span>VIEW ALL DOCUMENT BINDERS</span>
            </p>
            </div>
        </div>
        </div>
    );

};

export default ViewAllDocumentBindersPage;