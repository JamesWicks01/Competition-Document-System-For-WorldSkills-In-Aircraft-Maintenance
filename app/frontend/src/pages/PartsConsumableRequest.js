import './css/PartsConsumableRequest.css';
import { useEffect } from 'react';
import * as authUtils from './Components/authUtils.js';

function PartsConsumableRequestPage() {

    useEffect(() => {
        authUtils.CheckLoggedIn();
        authUtils.CheckAccess();
     }, []);

    return(
        <div id="base" className="">
        {/* Unnamed (Rectangle) */}
        <div id="u105" className="ax_default box_1 transition notrs">
            <div id="u105_div" className="" />
            <div id="u105_text" className="text ">
            <p>
                <span>PARTS AND CONSUMABLE REQUISITION</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u106" className="ax_default box_1 transition notrs">
            <div id="u106_div" className="" />
            <div id="u106_text" className="text ">
            <p>
                <span>Name</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u107" className="ax_default box_1 transition notrs">
            <div id="u107_div" className="" />
            <div id="u107_text" className="text ">
            <p>
                <span>ACA#</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u108" className="ax_default box_1 transition notrs">
            <div id="u108_div" className="" />
            <div id="u108_text" className="text ">
            <p>
                <span>Work Order #</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u109" className="ax_default box_1 transition notrs">
            <div id="u109_div" className="" />
            <div id="u109_text" className="text ">
            <p>
                <span>Task Card ID#</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u110" className="ax_default box_1 transition notrs">
            <div id="u110_div" className="" />
            <div id="u110_text" className="text ">
            <p>
                <span>PARTS REQUEST</span>
            </p>
            </div>
        </div>
        {/* Add_Row_Parts_Request (Rectangle) */}
        <div
            id="u111"
            className="ax_default shape transition notrs"
            data-label="Add_Row_Parts_Request"
        >
            <div id="u111_div" className="" />
            <div id="u111_text" className="text ">
            <p>
                <span>Add New Row Above</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u112" className="ax_default box_1 transition notrs">
            <div id="u112_div" className="" />
            <div id="u112_text" className="text ">
            <p>
                <span>CONSUMABLE REQUEST</span>
            </p>
            </div>
        </div>
        {/* Add_Row_Consumable_Request (Rectangle) */}
        <div
            id="u113"
            className="ax_default shape transition notrs"
            data-label="Add_Row_Consumable_Request"
        >
            <div id="u113_div" className="" />
            <div id="u113_text" className="text ">
            <p>
                <span>Add New Row Above</span>
            </p>
            </div>
        </div>
        {/* Submit_Button (Rectangle) */}
        <div
            id="u114"
            className="ax_default shape transition notrs"
            data-label="Submit_Button"
        >
            <div id="u114_div" className="" />
            <div id="u114_text" className="text ">
            <p>
                <span>Submit</span>
            </p>
            </div>
        </div>
        {/* Name (Text field) */}
        <div
            id="u115"
            className="ax_default text_field transition notrs"
            data-label="Name"
        >
            <div id="u115_div" className="" />
            <input id="u115_input" type="text" defaultValue="" className="u115_input" />
        </div>
        {/* Work_Order_Number (Text field) */}
        <div
            id="u116"
            className="ax_default text_field transition notrs"
            data-label="Work_Order_Number"
        >
            <div id="u116_div" className="" />
            <input id="u116_input" type="text" defaultValue="" className="u116_input" />
        </div>
        {/* ACA_Number (Text field) */}
        <div
            id="u117"
            className="ax_default text_field transition notrs"
            data-label="ACA_Number"
        >
            <div id="u117_div" className="" />
            <input id="u117_input" type="text" defaultValue="" className="u117_input" />
        </div>
        {/* Task_Card_ID (Text field) */}
        <div
            id="u118"
            className="ax_default text_field transition notrs"
            data-label="Task_Card_ID"
        >
            <div id="u118_div" className="" />
            <input id="u118_input" type="text" defaultValue="" className="u118_input" />
        </div>
        {/* Unnamed (Table) */}
        <div id="u119" className="ax_default">
            {/* Unnamed (Table cell) */}
            <div id="u120" className="ax_default transition notrs">
            <svg
                data="images/parts_and_consumable_request/u120.svg"
                id="u120_img"
                className="img generatedImage"
                viewBox="0 0 114 30"
            >
                <path
                d="M 1 1  L 114 1  L 114 30  L 1 30  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(238, 236, 225, 0.9921568627450981)"
                stroke="none"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 30  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 114 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                className="stroke"
                />
            </svg>
            <div id="u120_text" className="text ">
                <p>
                <span>Item</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u121" className="ax_default transition notrs">
            <svg
                data="images/parts_and_consumable_request/u121.svg"
                id="u121_img"
                className="img generatedImage"
                viewBox="114 0 447 30"
            >
                <path
                d="M 1 1  L 447 1  L 447 30  L 1 30  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(238, 236, 225, 0.9921568627450981)"
                stroke="none"
                transform="matrix(1 0 0 1 114 0 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 30  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 114 0 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 447 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 114 0 )"
                className="stroke"
                />
            </svg>
            <div id="u121_text" className="text ">
                <p>
                <span>Part Number</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u122" className="ax_default transition notrs">
            <svg
                data="images/parts_and_consumable_request/u122.svg"
                id="u122_img"
                className="img generatedImage"
                viewBox="561 0 425 30"
            >
                <path
                d="M 1 1  L 425 1  L 425 30  L 1 30  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(238, 236, 225, 0.9921568627450981)"
                stroke="none"
                transform="matrix(1 0 0 1 561 0 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 30  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 561 0 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 425 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 561 0 )"
                className="stroke"
                />
            </svg>
            <div id="u122_text" className="text ">
                <p>
                <span>Description</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u123" className="ax_default transition notrs">
            <svg
                data="images/parts_and_consumable_request/u123.svg"
                id="u123_img"
                className="img generatedImage"
                viewBox="986 0 135 30"
            >
                <path
                d="M 1 1  L 134 1  L 134 30  L 1 30  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(238, 236, 225, 0.9921568627450981)"
                stroke="none"
                transform="matrix(1 0 0 1 986 0 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 30  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 986 0 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 135 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 986 0 )"
                className="stroke"
                />
                <path
                d="M 134.5 1  L 134.5 30  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 986 0 )"
                className="stroke"
                />
            </svg>
            <div id="u123_text" className="text ">
                <p>
                <span>Quantity</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u124" className="ax_default transition notrs">
            <svg
                data="images/parts_and_consumable_request/u124.svg"
                id="u124_img"
                className="img generatedImage"
                viewBox="0 30 114 39"
            >
                <path
                d="M 1 1  L 114 1  L 114 38  L 1 38  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 0 30 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 38  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 0 30 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 114 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 0 30 )"
                className="stroke"
                />
                <path
                d="M 0 38.5  L 114 38.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 0 30 )"
                className="stroke"
                />
            </svg>
            <div id="u124_text" className="text ">
                <p>
                <span>1</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u125" className="ax_default transition notrs">
            <svg
                data="images/parts_and_consumable_request/u125.svg"
                id="u125_img"
                className="img generatedImage"
                viewBox="114 30 447 39"
            >
                <path
                d="M 1 1  L 447 1  L 447 38  L 1 38  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 114 30 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 38  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 114 30 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 447 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 114 30 )"
                className="stroke"
                />
                <path
                d="M 0 38.5  L 447 38.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 114 30 )"
                className="stroke"
                />
            </svg>
            <div
                id="u125_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u126" className="ax_default transition notrs">
            <svg
                data="images/parts_and_consumable_request/u126.svg"
                id="u126_img"
                className="img generatedImage"
                viewBox="561 30 425 39"
            >
                <path
                d="M 1 1  L 425 1  L 425 38  L 1 38  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 561 30 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 38  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 561 30 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 425 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 561 30 )"
                className="stroke"
                />
                <path
                d="M 0 38.5  L 425 38.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 561 30 )"
                className="stroke"
                />
            </svg>
            <div
                id="u126_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u127" className="ax_default transition notrs">
            <svg
                data="images/parts_and_consumable_request/u127.svg"
                id="u127_img"
                className="img generatedImage"
                viewBox="986 30 135 39"
            >
                <path
                d="M 1 1  L 134 1  L 134 38  L 1 38  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 986 30 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 38  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 986 30 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 135 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 986 30 )"
                className="stroke"
                />
                <path
                d="M 134.5 1  L 134.5 38  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 986 30 )"
                className="stroke"
                />
                <path
                d="M 0 38.5  L 135 38.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 986 30 )"
                className="stroke"
                />
            </svg>
            <div
                id="u127_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
        </div>
        {/* Part_Number (Text field) */}
        <div
            id="u128"
            className="ax_default text_field transition notrs"
            data-label="Part_Number"
        >
            <div id="u128_div" className="" />
            <input id="u128_input" type="text" defaultValue="" className="u128_input" />
        </div>
        {/* Part_Description (Text field) */}
        <div
            id="u129"
            className="ax_default text_field transition notrs"
            data-label="Part_Description"
        >
            <div id="u129_div" className="" />
            <input id="u129_input" type="text" defaultValue="" className="u129_input" />
        </div>
        {/* Part_Quantity (Text field) */}
        <div
            id="u130"
            className="ax_default text_field transition notrs"
            data-label="Part_Quantity"
        >
            <div id="u130_div" className="" />
            <input
            id="u130_input"
            type="number"
            defaultValue=""
            className="u130_input"
            />
        </div>
        {/* Unnamed (Table) */}
        <div id="u131" className="ax_default">
            {/* Unnamed (Table cell) */}
            <div id="u132" className="ax_default transition notrs">
            <svg
                data="images/parts_and_consumable_request/u120.svg"
                id="u132_img"
                className="img generatedImage"
                viewBox="0 0 114 30"
            >
                <path
                d="M 1 1  L 114 1  L 114 30  L 1 30  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(238, 236, 225, 0.9921568627450981)"
                stroke="none"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 30  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 114 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                className="stroke"
                />
            </svg>
            <div id="u132_text" className="text ">
                <p>
                <span>Item</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u133" className="ax_default transition notrs">
            <svg
                data="images/parts_and_consumable_request/u121.svg"
                id="u133_img"
                className="img generatedImage"
                viewBox="114 0 447 30"
            >
                <path
                d="M 1 1  L 447 1  L 447 30  L 1 30  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(238, 236, 225, 0.9921568627450981)"
                stroke="none"
                transform="matrix(1 0 0 1 114 0 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 30  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 114 0 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 447 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 114 0 )"
                className="stroke"
                />
            </svg>
            <div id="u133_text" className="text ">
                <p>
                <span>Identification #</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u134" className="ax_default transition notrs">
            <svg
                data="images/parts_and_consumable_request/u122.svg"
                id="u134_img"
                className="img generatedImage"
                viewBox="561 0 425 30"
            >
                <path
                d="M 1 1  L 425 1  L 425 30  L 1 30  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(238, 236, 225, 0.9921568627450981)"
                stroke="none"
                transform="matrix(1 0 0 1 561 0 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 30  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 561 0 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 425 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 561 0 )"
                className="stroke"
                />
            </svg>
            <div id="u134_text" className="text ">
                <p>
                <span>Description</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u135" className="ax_default transition notrs">
            <svg
                data="images/parts_and_consumable_request/u123.svg"
                id="u135_img"
                className="img generatedImage"
                viewBox="986 0 135 30"
            >
                <path
                d="M 1 1  L 134 1  L 134 30  L 1 30  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(238, 236, 225, 0.9921568627450981)"
                stroke="none"
                transform="matrix(1 0 0 1 986 0 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 30  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 986 0 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 135 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 986 0 )"
                className="stroke"
                />
                <path
                d="M 134.5 1  L 134.5 30  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 986 0 )"
                className="stroke"
                />
            </svg>
            <div id="u135_text" className="text ">
                <p>
                <span>Quantity</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u136" className="ax_default transition notrs">
            <svg
                data="images/parts_and_consumable_request/u124.svg"
                id="u136_img"
                className="img generatedImage"
                viewBox="0 30 114 39"
            >
                <path
                d="M 1 1  L 114 1  L 114 38  L 1 38  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 0 30 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 38  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 0 30 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 114 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 0 30 )"
                className="stroke"
                />
                <path
                d="M 0 38.5  L 114 38.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 0 30 )"
                className="stroke"
                />
            </svg>
            <div id="u136_text" className="text ">
                <p>
                <span>1</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u137" className="ax_default transition notrs">
            <svg
                data="images/parts_and_consumable_request/u125.svg"
                id="u137_img"
                className="img generatedImage"
                viewBox="114 30 447 39"
            >
                <path
                d="M 1 1  L 447 1  L 447 38  L 1 38  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 114 30 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 38  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 114 30 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 447 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 114 30 )"
                className="stroke"
                />
                <path
                d="M 0 38.5  L 447 38.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 114 30 )"
                className="stroke"
                />
            </svg>
            <div
                id="u137_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u138" className="ax_default transition notrs">
            <svg
                data="images/parts_and_consumable_request/u126.svg"
                id="u138_img"
                className="img generatedImage"
                viewBox="561 30 425 39"
            >
                <path
                d="M 1 1  L 425 1  L 425 38  L 1 38  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 561 30 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 38  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 561 30 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 425 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 561 30 )"
                className="stroke"
                />
                <path
                d="M 0 38.5  L 425 38.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 561 30 )"
                className="stroke"
                />
            </svg>
            <div
                id="u138_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u139" className="ax_default transition notrs">
            <svg
                data="images/parts_and_consumable_request/u127.svg"
                id="u139_img"
                className="img generatedImage"
                viewBox="986 30 135 39"
            >
                <path
                d="M 1 1  L 134 1  L 134 38  L 1 38  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 986 30 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 38  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 986 30 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 135 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 986 30 )"
                className="stroke"
                />
                <path
                d="M 134.5 1  L 134.5 38  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 986 30 )"
                className="stroke"
                />
                <path
                d="M 0 38.5  L 135 38.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 986 30 )"
                className="stroke"
                />
            </svg>
            <div
                id="u139_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
        </div>
        {/* Identification_Number (Text field) */}
        <div
            id="u140"
            className="ax_default text_field transition notrs"
            data-label="Identification_Number"
        >
            <div id="u140_div" className="" />
            <input id="u140_input" type="text" defaultValue="" className="u140_input" />
        </div>
        {/* Consumable_Description (Text field) */}
        <div
            id="u141"
            className="ax_default text_field transition notrs"
            data-label="Consumable_Description"
        >
            <div id="u141_div" className="" />
            <input id="u141_input" type="text" defaultValue="" className="u141_input" />
        </div>
        {/* Consumable_Quantity (Text field) */}
        <div
            id="u142"
            className="ax_default text_field transition notrs"
            data-label="Consumable_Quantity"
        >
            <div id="u142_div" className="" />
            <input
            id="u142_input"
            type="number"
            defaultValue=""
            className="u142_input"
            />
        </div>
        </div>       
    );
};

export default PartsConsumableRequestPage;