import './css/AccountManagement.css';
import * as authUtils from './Components/authUtils.js';
import * as apiService from './Components/apiService.js';
import React, { useEffect, useState } from "react";

function AccountManagementPage() {

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await apiService.apiRequest("get-users");
                setData(response);
            } catch (error) {
                console.error("Error fetching data:", error);
                alert("Error fetching data. Please try again later.");
            }
        }
        fetchData();
        authUtils.CheckLoggedIn();
        authUtils.CheckAccess();
    }, []);

    const [data, setData] = useState([]);

    async function Search() {
        const searchType = document.getElementById("u273_input").value;
        const searchInput = document.getElementById("u274_input").value.trim();
        try {
            const data = await apiService.apiRequest(`search-users?searchType=${searchType}&searchInput=${searchInput}`)
            setData(data)
        } catch (error) {
            console.error("Error fetching data: ", error);
            alert("An error occurred while searching for users.");
        }
    }

    function createAccountButton() {
        document.getElementById("u240").style.display = "block";
        document.getElementById("u240").style.visibility = "visible";
    }

    async function createAccount(){
        const firstName = document.getElementById("u246_input");
        const lastName = document.getElementById("u250_input");
        const username = document.getElementById("u254_input");
        const role = document.getElementById("u260_input");
        const password = authUtils.generatePassword();
        const hashedPassword = authUtils.hashString(password);

        const data = {
            user_fname:firstName.value.trim(),
            user_lname:lastName.value.trim(),
            username:username.value.trim(),
            user_role:role.value,
            password:hashedPassword
        };
        console.log("New Password:",password);
        console.log(data);
    }

    return(
        <div id="base" className="">
        {/* Back (Rectangle) */}
        <div
            id="u187"
            className="ax_default shape transition notrs"
            data-label="Back"
        >
            <div id="u187_div" className="" />
            <div id="u187_text" className="text ">
            <p>
                <span>Back</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Table) */}
        <div id="u188" className="ax_default">
        <table className="table-users w-full">
            <thead>
                <tr className="table-header">
                    <th className="table-header">User ID</th>
                    <th className="table-header">Name</th>
                    <th className="table-header">Username</th>
                    <th className="table-header">Role</th>
                    <th className="table-header">Actions</th>
                </tr>
            </thead>
            <tbody>
            {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="table-row">
                <td className="table-cell">{row.user_id}</td>
                <td className="table-cell">{row.name}</td>
                <td className="table-cell">{row.username}</td>
                <td className="table-cell">{row.user_role}</td>
                <td className="table-cell">
                <button>Edit User</button>
                <button>Delete User</button>
                </td>
            </tr>
          ))}
        </tbody>
        </table>
        </div>
        {/* New_User (Rectangle) */}
        <div
            id="u215"
            className="ax_default shape transition notrs"
            data-label="New_User"
            onClick={createAccountButton}
        >
            <div id="u215_div" className="" />
            <div id="u215_text" className="text ">
            <p>
                <span>Add New User</span>
            </p>
            </div>
        </div>
        {/* Edit_User (Group) */}
        <div
            id="u216"
            className="ax_default ax_default_hidden"
            data-label="Edit_User"
            style={{ display: "none", visibility: "hidden" }}
            data-left={400}
            data-top={122}
            data-width={400}
            data-height={527}
            layer-opacity={1}
        >
            {/* Unnamed (Rectangle) */}
            <div id="u217" className="ax_default box_3 transition notrs">
            <div id="u217_div" className="" />
            <div
                id="u217_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u218" className="ax_default heading_2 transition notrs">
            <div id="u218_div" className="" />
            <div id="u218_text" className="text ">
                <p>
                <span>Edit User</span>
                </p>
            </div>
            </div>
            {/* Cancel_Button (Rectangle) */}
            <div
            id="u219"
            className="ax_default shape transition notrs"
            data-label="Cancel_Button"
            >
            <div id="u219_div" className="" />
            <div id="u219_text" className="text ">
                <p>
                <span>Cancel</span>
                </p>
            </div>
            </div>
            {/* Submit_Button (Rectangle) */}
            <div
            id="u220"
            className="ax_default shape transition notrs"
            data-label="Submit_Button"
            >
            <div id="u220_div" className="" />
            <div id="u220_text" className="text ">
                <p>
                <span>Save</span>
                </p>
            </div>
            </div>
            {/* Text field & labels (filled) (Group) */}
            <div
            id="u221"
            className="ax_default"
            data-label="Text field & labels (filled)"
            data-left={457}
            data-top={204}
            data-width={287}
            data-height={91}
            layer-opacity={1}
            >
            {/* Input field (Text field) */}
            <div
                id="u222"
                className="ax_default text_field transition notrs"
                data-label="Input field"
            >
                <div id="u222_div" className="" />
                <input
                id="u222_input"
                type="text"
                defaultValue=""
                className="u222_input"
                />
            </div>
            {/* Input label (Rectangle) */}
            <div
                id="u223"
                className="ax_default label transition notrs"
                data-label="Input label"
            >
                <div id="u223_div" className="" />
                <div id="u223_text" className="text ">
                <p>
                    <span>First Name</span>
                </p>
                </div>
            </div>
            {/* Helper text (Rectangle) */}
            <div
                id="u224"
                className="ax_default label transition notrs"
                data-label="Helper text"
            >
                <div id="u224_div" className="" />
                <div
                id="u224_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
                >
                <p />
                </div>
            </div>
            </div>
            {/* Text field & labels (filled) (Group) */}
            <div
            id="u225"
            className="ax_default"
            data-label="Text field & labels (filled)"
            data-left={457}
            data-top={275}
            data-width={287}
            data-height={91}
            layer-opacity={1}
            >
            {/* Input field (Text field) */}
            <div
                id="u226"
                className="ax_default text_field transition notrs"
                data-label="Input field"
            >
                <div id="u226_div" className="" />
                <input
                id="u226_input"
                type="number"
                defaultValue=""
                className="u226_input"
                />
            </div>
            {/* Input label (Rectangle) */}
            <div
                id="u227"
                className="ax_default label transition notrs"
                data-label="Input label"
            >
                <div id="u227_div" className="" />
                <div id="u227_text" className="text ">
                <p>
                    <span>Last Name</span>
                </p>
                </div>
            </div>
            {/* Helper text (Rectangle) */}
            <div
                id="u228"
                className="ax_default label transition notrs"
                data-label="Helper text"
            >
                <div id="u228_div" className="" />
                <div
                id="u228_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
                >
                <p />
                </div>
            </div>
            </div>
            {/* Text field & labels (filled) (Group) */}
            <div
            id="u229"
            className="ax_default"
            data-label="Text field & labels (filled)"
            data-left={457}
            data-top={346}
            data-width={287}
            data-height={91}
            layer-opacity={1}
            >
            {/* Input field (Text field) */}
            <div
                id="u230"
                className="ax_default text_field transition notrs"
                data-label="Input field"
            >
                <div id="u230_div" className="" />
                <input
                id="u230_input"
                type="number"
                defaultValue=""
                className="u230_input"
                />
            </div>
            {/* Input label (Rectangle) */}
            <div
                id="u231"
                className="ax_default label transition notrs"
                data-label="Input label"
            >
                <div id="u231_div" className="" />
                <div id="u231_text" className="text ">
                <p>
                    <span>Username</span>
                </p>
                </div>
            </div>
            {/* Helper text (Rectangle) */}
            <div
                id="u232"
                className="ax_default label transition notrs"
                data-label="Helper text"
            >
                <div id="u232_div" className="" />
                <div
                id="u232_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
                >
                <p />
                </div>
            </div>
            </div>
            {/* Text field & labels (filled) (Group) */}
            <div
            id="u233"
            className="ax_default"
            data-label="Text field & labels (filled)"
            data-left={457}
            data-top={417}
            data-width={286}
            data-height={91}
            layer-opacity={1}
            >
            {/* Input label (Rectangle) */}
            <div
                id="u234"
                className="ax_default label transition notrs"
                data-label="Input label"
            >
                <div id="u234_div" className="" />
                <div id="u234_text" className="text ">
                <p>
                    <span>Role</span>
                </p>
                </div>
            </div>
            {/* Helper text (Rectangle) */}
            <div
                id="u235"
                className="ax_default label transition notrs"
                data-label="Helper text"
            >
                <div id="u235_div" className="" />
                <div
                id="u235_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
                >
                <p />
                </div>
            </div>
            {/* Unnamed (Droplist) */}
            <div id="u236" className="ax_default droplist transition notrs">
                <div id="u236_div" className="" />
                <select id="u236_input" className="u236_input">
                <option className="u236_input_option" value="COMPETITOR">
                    COMPETITOR
                </option>
                <option className="u236_input_option" value="EXPERT">
                    EXPERT
                </option>
                <option className="u236_input_option" value="ADMIN">
                    ADMIN
                </option>
                </select>
            </div>
            </div>
            {/* Text field & labels (filled) (Group) */}
            <div
            id="u237"
            className="ax_default"
            data-label="Text field & labels (filled)"
            data-left={473}
            data-top={563}
            data-width={1}
            data-height={16}
            layer-opacity={1}
            >
            {/* Helper text (Rectangle) */}
            <div
                id="u238"
                className="ax_default label transition notrs"
                data-label="Helper text"
            >
                <div id="u238_div" className="" />
                <div
                id="u238_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
                >
                <p />
                </div>
            </div>
            </div>
            {/* Reset_Password (Rectangle) */}
            <div
            id="u239"
            className="ax_default shape transition notrs"
            data-label="Reset_Password"
            >
            <div id="u239_div" className="" />
            <div id="u239_text" className="text ">
                <p>
                <span>Reset Password</span>
                </p>
            </div>
            </div>
        </div>
        {/* New_User (Group) */}
        <div
            id="u240"
            className="ax_default ax_default_hidden"
            data-label="New_User"
            style={{ display: "none", visibility: "hidden" }}
            data-left={400}
            data-top={122}
            data-width={400}
            data-height={527}
            layer-opacity={1}
        >
            {/* Unnamed (Rectangle) */}
            <div id="u241" className="ax_default box_3 transition notrs">
            <div id="u241_div" className="" />
            <div
                id="u241_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u242" className="ax_default heading_2 transition notrs">
            <div id="u242_div" className="" />
            <div id="u242_text" className="text ">
                <p>
                <span>New User</span>
                </p>
            </div>
            </div>
            {/* Cancel_Button (Rectangle) */}
            <div
            id="u243"
            className="ax_default shape transition notrs"
            data-label="Cancel_Button"
            >
            <div id="u243_div" className="" />
            <div id="u243_text" className="text ">
                <p>
                <span>Cancel</span>
                </p>
            </div>
            </div>
            {/* Save_Button (Rectangle) */}
            <div
            id="u244"
            className="ax_default shape transition notrs"
            data-label="Save_Button"
            onClick={createAccount}
            >
            <div id="u244_div" className="" />
            <div id="u244_text" className="text ">
                <p>
                <span>Save</span>
                </p>
            </div>
            </div>
            {/* Text field & labels (filled) (Group) */}
            <div
            id="u245"
            className="ax_default"
            data-label="Text field & labels (filled)"
            data-left={457}
            data-top={204}
            data-width={287}
            data-height={91}
            layer-opacity={1}
            >
            {/* Input field (Text field) */}
            <div
                id="u246"
                className="ax_default text_field transition notrs"
                data-label="Input field"
            >
                <div id="u246_div" className="" />
                <input
                id="u246_input"
                type="text"
                defaultValue=""
                className="u246_input"
                />
            </div>
            {/* Input label (Rectangle) */}
            <div
                id="u247"
                className="ax_default label transition notrs"
                data-label="Input label"
            >
                <div id="u247_div" className="" />
                <div id="u247_text" className="text ">
                <p>
                    <span>First Name</span>
                </p>
                </div>
            </div>
            {/* Helper text (Rectangle) */}
            <div
                id="u248"
                className="ax_default label transition notrs"
                data-label="Helper text"
            >
                <div id="u248_div" className="" />
                <div
                id="u248_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
                >
                <p />
                </div>
            </div>
            </div>
            {/* Text field & labels (filled) (Group) */}
            <div
            id="u249"
            className="ax_default"
            data-label="Text field & labels (filled)"
            data-left={457}
            data-top={275}
            data-width={287}
            data-height={91}
            layer-opacity={1}
            >
            {/* Input field (Text field) */}
            <div
                id="u250"
                className="ax_default text_field transition notrs"
                data-label="Input field"
            >
                <div id="u250_div" className="" />
                <input
                id="u250_input"
                type="text"
                defaultValue=""
                className="u250_input"
                />
            </div>
            {/* Input label (Rectangle) */}
            <div
                id="u251"
                className="ax_default label transition notrs"
                data-label="Input label"
            >
                <div id="u251_div" className="" />
                <div id="u251_text" className="text ">
                <p>
                    <span>Last Name</span>
                </p>
                </div>
            </div>
            {/* Helper text (Rectangle) */}
            <div
                id="u252"
                className="ax_default label transition notrs"
                data-label="Helper text"
            >
                <div id="u252_div" className="" />
                <div
                id="u252_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
                >
                <p />
                </div>
            </div>
            </div>
            {/* Text field & labels (filled) (Group) */}
            <div
            id="u253"
            className="ax_default"
            data-label="Text field & labels (filled)"
            data-left={457}
            data-top={346}
            data-width={287}
            data-height={91}
            layer-opacity={1}
            >
            {/* Input field (Text field) */}
            <div
                id="u254"
                className="ax_default text_field transition notrs"
                data-label="Input field"
            >
                <div id="u254_div" className="" />
                <input
                id="u254_input"
                type="text"
                defaultValue=""
                className="u254_input"
                />
            </div>
            {/* Input label (Rectangle) */}
            <div
                id="u255"
                className="ax_default label transition notrs"
                data-label="Input label"
            >
                <div id="u255_div" className="" />
                <div id="u255_text" className="text ">
                <p>
                    <span>Username</span>
                </p>
                </div>
            </div>
            {/* Helper text (Rectangle) */}
            <div
                id="u256"
                className="ax_default label transition notrs"
                data-label="Helper text"
            >
                <div id="u256_div" className="" />
                <div
                id="u256_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
                >
                <p />
                </div>
            </div>
            </div>
            {/* Text field & labels (filled) (Group) */}
            <div
            id="u257"
            className="ax_default"
            data-label="Text field & labels (filled)"
            data-left={457}
            data-top={417}
            data-width={286}
            data-height={91}
            layer-opacity={1}
            >
            {/* Input label (Rectangle) */}
            <div
                id="u258"
                className="ax_default label transition notrs"
                data-label="Input label"
            >
                <div id="u258_div" className="" />
                <div id="u258_text" className="text ">
                <p>
                    <span>Role</span>
                </p>
                </div>
            </div>
            {/* Helper text (Rectangle) */}
            <div
                id="u259"
                className="ax_default label transition notrs"
                data-label="Helper text"
            >
                <div id="u259_div" className="" />
                <div
                id="u259_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
                >
                <p />
                </div>
            </div>
            {/* Unnamed (Droplist) */}
            <div id="u260" className="ax_default droplist transition notrs">
                <div id="u260_div" className="" />
                <select id="u260_input" className="u260_input">
                <option className="u260_input_option" value="Competitor">
                    Competitor
                </option>
                <option className="u260_input_option" value="Expert">
                    Expert
                </option>
                <option className="u260_input_option" value="Admin">
                    Admin
                </option>
                </select>
            </div>
            </div>
            {/* Text field & labels (filled) (Group) */}
            <div
            id="u261"
            className="ax_default"
            data-label="Text field & labels (filled)"
            data-left={473}
            data-top={563}
            data-width={1}
            data-height={16}
            layer-opacity={1}
            >
            {/* Helper text (Rectangle) */}
            <div
                id="u262"
                className="ax_default label transition notrs"
                data-label="Helper text"
            >
                <div id="u262_div" className="" />
                <div
                id="u262_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
                >
                <p />
                </div>
            </div>
            </div>
        </div>
        {/* User_Password (Group) */}
        <div
            id="u263"
            className="ax_default ax_default_hidden"
            data-label="User_Password"
            style={{ display: "none", visibility: "hidden" }}
            data-left={397}
            data-top={287}
            data-width={400}
            data-height={176}
            layer-opacity={1}
        >
            {/* Unnamed (Rectangle) */}
            <div id="u264" className="ax_default box_3 transition notrs">
            <div id="u264_div" className="" />
            <div
                id="u264_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Okay_Button (Rectangle) */}
            <div
            id="u265"
            className="ax_default shape transition notrs"
            data-label="Okay_Button"
            >
            <div id="u265_div" className="" />
            <div id="u265_text" className="text ">
                <p>
                <span>Okay</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u266" className="ax_default box_3 transition notrs">
            <div id="u266_div" className="" />
            <div id="u266_text" className="text ">
                <p>
                <span>Password123</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u267" className="ax_default paragraph transition notrs">
            <div id="u267_div" className="" />
            <div id="u267_text" className="text ">
                <p>
                <span>
                    This is a tempory password the user will have to create a new
                    password once they have logged in{" "}
                </span>
                </p>
            </div>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u268" className="ax_default heading_2 transition notrs">
            <div id="u268_div" className="" />
            <div
            id="u268_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Text field & labels (filled) (Group) */}
        <div
            id="u269"
            className="ax_default"
            data-label="Text field & labels (filled)"
            data-left={305}
            data-top={736}
            data-width={1}
            data-height={16}
            layer-opacity={1}
        >
            {/* Helper text (Rectangle) */}
            <div
            id="u270"
            className="ax_default label transition notrs"
            data-label="Helper text"
            >
            <div id="u270_div" className="" />
            <div
                id="u270_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u271" className="ax_default box_1 transition notrs">
            <div id="u271_div" className="" />
            <div id="u271_text" className="text ">
            <p>
                <span>&nbsp;Search By:</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u272" className="ax_default box_1 transition notrs">
            <div id="u272_div" className="" />
            <div
            id="u272_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Search_Type (Droplist) */}
        <div
            id="u273"
            className="ax_default droplist transition notrs"
            data-label="Search_Type"
        >
            <div id="u273_div" className="" />
            <select id="u273_input" className="u273_input">
            <option className="u273_input_option" value="user_id">
                User ID
            </option>
            <option className="u273_input_option" value="name">
                Name
            </option>
            <option className="u273_input_option" value="username">
                Username
            </option>
            </select>
        </div>
        {/* Search_Input (Text field) */}
        <div
            id="u274"
            className="ax_default text_field transition notrs"
            data-label="Search_Input"
        >
            <div id="u274_div" className="" />
            <input id="u274_input" type="text" defaultValue="" className="u274_input" />
        </div>
        {/* Search_Button (Rectangle) */}
        <div
            id="u275"
            className="ax_default shape transition notrs"
            data-label="Search_Button"
        >
            <div id="u275_div" className="" />
            <div id="u275_text" className="text ">
            <p>
                <span>Search</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u276" className="ax_default box_1 transition notrs">
            <div id="u276_div" className="" />
            <div id="u276_text" className="text ">
            <p>
                <span>ACCOUNT MANAGEMENT</span>
            </p>
            </div>
        </div>
        </div>      
    );
};

export default AccountManagementPage;