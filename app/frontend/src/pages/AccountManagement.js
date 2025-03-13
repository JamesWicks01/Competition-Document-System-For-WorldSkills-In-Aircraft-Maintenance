import './css/AccountManagement.css';
import { useEffect } from 'react';
import * as authUtils from './authUtils.js';

function AccountManagementPage() {

    useEffect(() => {
        authUtils.CheckLoggedIn();
        authUtils.CheckAccess();
    }, []);

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
            {/* Unnamed (Table cell) */}
            <div id="u189" className="ax_default table_cell transition notrs">
            <svg
                data="images/account_management/u189.svg"
                id="u189_img"
                className="img generatedImage"
                viewBox="0 0 114 34"
            >
                <path
                d="M 1 1  L 114 1  L 114 34  L 1 34  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(238, 236, 225, 0.9921568627450981)"
                stroke="none"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 34  "
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
            <div id="u189_text" className="text ">
                <p>
                <span>User ID</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u190" className="ax_default table_cell transition notrs">
            <svg
                data="images/account_management/u190.svg"
                id="u190_img"
                className="img generatedImage"
                viewBox="114 0 211 34"
            >
                <path
                d="M 1 1  L 211 1  L 211 34  L 1 34  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(238, 236, 225, 0.9921568627450981)"
                stroke="none"
                transform="matrix(1 0 0 1 114 0 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 34  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 114 0 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 211 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 114 0 )"
                className="stroke"
                />
            </svg>
            <div id="u190_text" className="text ">
                <p>
                <span>Name</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u191" className="ax_default table_cell transition notrs">
            <svg
                data="images/account_management/u191.svg"
                id="u191_img"
                className="img generatedImage"
                viewBox="325 0 234 34"
            >
                <path
                d="M 1 1  L 234 1  L 234 34  L 1 34  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(238, 236, 225, 0.9921568627450981)"
                stroke="none"
                transform="matrix(1 0 0 1 325 0 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 34  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 325 0 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 234 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 325 0 )"
                className="stroke"
                />
            </svg>
            <div id="u191_text" className="text ">
                <p>
                <span>Username</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u192" className="ax_default table_cell transition notrs">
            <svg
                data="images/account_management/u192.svg"
                id="u192_img"
                className="img generatedImage"
                viewBox="559 0 221 34"
            >
                <path
                d="M 1 1  L 221 1  L 221 34  L 1 34  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(238, 236, 225, 0.9921568627450981)"
                stroke="none"
                transform="matrix(1 0 0 1 559 0 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 34  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 559 0 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 221 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 559 0 )"
                className="stroke"
                />
            </svg>
            <div id="u192_text" className="text ">
                <p>
                <span>Role</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u193" className="ax_default table_cell transition notrs">
            <svg
                data="images/account_management/u193.svg"
                id="u193_img"
                className="img generatedImage"
                viewBox="780 0 340 34"
            >
                <path
                d="M 1 1  L 339 1  L 339 34  L 1 34  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(238, 236, 225, 0.9921568627450981)"
                stroke="none"
                transform="matrix(1 0 0 1 780 0 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 34  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 780 0 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 340 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 780 0 )"
                className="stroke"
                />
                <path
                d="M 339.5 1  L 339.5 34  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 780 0 )"
                className="stroke"
                />
            </svg>
            <div
                id="u193_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u194" className="ax_default table_cell transition notrs">
            <svg
                data="images/account_management/u194.svg"
                id="u194_img"
                className="img generatedImage"
                viewBox="0 34 114 57"
            >
                <path
                d="M 1 1  L 114 1  L 114 57  L 1 57  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 0 34 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 57  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 0 34 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 114 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 0 34 )"
                className="stroke"
                />
            </svg>
            <div id="u194_text" className="text ">
                <p>
                <span>1</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u195" className="ax_default table_cell transition notrs">
            <svg
                data="images/account_management/u195.svg"
                id="u195_img"
                className="img generatedImage"
                viewBox="114 34 211 57"
            >
                <path
                d="M 1 1  L 211 1  L 211 57  L 1 57  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 114 34 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 57  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 114 34 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 211 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 114 34 )"
                className="stroke"
                />
            </svg>
            <div id="u195_text" className="text ">
                <p>
                <span>User Competitor</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u196" className="ax_default table_cell transition notrs">
            <svg
                data="images/account_management/u196.svg"
                id="u196_img"
                className="img generatedImage"
                viewBox="325 34 234 57"
            >
                <path
                d="M 1 1  L 234 1  L 234 57  L 1 57  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 325 34 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 57  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 325 34 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 234 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 325 34 )"
                className="stroke"
                />
            </svg>
            <div id="u196_text" className="text ">
                <p>
                <span>user_competitor</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u197" className="ax_default table_cell transition notrs">
            <svg
                data="images/account_management/u197.svg"
                id="u197_img"
                className="img generatedImage"
                viewBox="559 34 221 57"
            >
                <path
                d="M 1 1  L 221 1  L 221 57  L 1 57  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 559 34 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 57  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 559 34 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 221 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 559 34 )"
                className="stroke"
                />
            </svg>
            <div id="u197_text" className="text ">
                <p>
                <span>COMPETITIOR</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u198" className="ax_default table_cell transition notrs">
            <svg
                data="images/account_management/u198.svg"
                id="u198_img"
                className="img generatedImage"
                viewBox="780 34 340 57"
            >
                <path
                d="M 1 1  L 339 1  L 339 57  L 1 57  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 780 34 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 57  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 780 34 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 340 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 780 34 )"
                className="stroke"
                />
                <path
                d="M 339.5 1  L 339.5 57  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 780 34 )"
                className="stroke"
                />
            </svg>
            <div
                id="u198_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u199" className="ax_default table_cell transition notrs">
            <svg
                data="images/account_management/u199.svg"
                id="u199_img"
                className="img generatedImage"
                viewBox="0 91 114 57"
            >
                <path
                d="M 1 1  L 114 1  L 114 57  L 1 57  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 0 91 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 57  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 0 91 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 114 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 0 91 )"
                className="stroke"
                />
            </svg>
            <div id="u199_text" className="text ">
                <p>
                <span>2</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u200" className="ax_default table_cell transition notrs">
            <svg
                data="images/account_management/u200.svg"
                id="u200_img"
                className="img generatedImage"
                viewBox="114 91 211 57"
            >
                <path
                d="M 1 1  L 211 1  L 211 57  L 1 57  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 114 91 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 57  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 114 91 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 211 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 114 91 )"
                className="stroke"
                />
            </svg>
            <div id="u200_text" className="text ">
                <p>
                <span>User Expert</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u201" className="ax_default table_cell transition notrs">
            <svg
                data="images/account_management/u201.svg"
                id="u201_img"
                className="img generatedImage"
                viewBox="325 91 234 57"
            >
                <path
                d="M 1 1  L 234 1  L 234 57  L 1 57  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 325 91 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 57  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 325 91 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 234 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 325 91 )"
                className="stroke"
                />
            </svg>
            <div id="u201_text" className="text ">
                <p>
                <span>user_expert</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u202" className="ax_default table_cell transition notrs">
            <svg
                data="images/account_management/u202.svg"
                id="u202_img"
                className="img generatedImage"
                viewBox="559 91 221 57"
            >
                <path
                d="M 1 1  L 221 1  L 221 57  L 1 57  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 559 91 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 57  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 559 91 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 221 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 559 91 )"
                className="stroke"
                />
            </svg>
            <div id="u202_text" className="text ">
                <p>
                <span>EXPERT</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u203" className="ax_default table_cell transition notrs">
            <svg
                data="images/account_management/u203.svg"
                id="u203_img"
                className="img generatedImage"
                viewBox="780 91 340 57"
            >
                <path
                d="M 1 1  L 339 1  L 339 57  L 1 57  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 780 91 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 57  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 780 91 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 340 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 780 91 )"
                className="stroke"
                />
                <path
                d="M 339.5 1  L 339.5 57  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 780 91 )"
                className="stroke"
                />
            </svg>
            <div
                id="u203_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u204" className="ax_default table_cell transition notrs">
            <svg
                data="images/account_management/u204.svg"
                id="u204_img"
                className="img generatedImage"
                viewBox="0 148 114 57"
            >
                <path
                d="M 1 1  L 114 1  L 114 56  L 1 56  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 0 148 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 56  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 0 148 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 114 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 0 148 )"
                className="stroke"
                />
                <path
                d="M 0 56.5  L 114 56.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 0 148 )"
                className="stroke"
                />
            </svg>
            <div id="u204_text" className="text ">
                <p>
                <span>3</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u205" className="ax_default table_cell transition notrs">
            <svg
                data="images/account_management/u205.svg"
                id="u205_img"
                className="img generatedImage"
                viewBox="114 148 211 57"
            >
                <path
                d="M 1 1  L 211 1  L 211 56  L 1 56  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 114 148 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 56  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 114 148 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 211 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 114 148 )"
                className="stroke"
                />
                <path
                d="M 0 56.5  L 211 56.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 114 148 )"
                className="stroke"
                />
            </svg>
            <div id="u205_text" className="text ">
                <p>
                <span>User Admin</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u206" className="ax_default table_cell transition notrs">
            <svg
                data="images/account_management/u206.svg"
                id="u206_img"
                className="img generatedImage"
                viewBox="325 148 234 57"
            >
                <path
                d="M 1 1  L 234 1  L 234 56  L 1 56  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 325 148 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 56  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 325 148 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 234 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 325 148 )"
                className="stroke"
                />
                <path
                d="M 0 56.5  L 234 56.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 325 148 )"
                className="stroke"
                />
            </svg>
            <div id="u206_text" className="text ">
                <p>
                <span>user_admin</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u207" className="ax_default table_cell transition notrs">
            <svg
                data="images/account_management/u207.svg"
                id="u207_img"
                className="img generatedImage"
                viewBox="559 148 221 57"
            >
                <path
                d="M 1 1  L 221 1  L 221 56  L 1 56  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 559 148 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 56  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 559 148 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 221 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 559 148 )"
                className="stroke"
                />
                <path
                d="M 0 56.5  L 221 56.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 559 148 )"
                className="stroke"
                />
            </svg>
            <div id="u207_text" className="text ">
                <p>
                <span>ADMIN</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u208" className="ax_default table_cell transition notrs">
            <svg
                data="images/account_management/u208.svg"
                id="u208_img"
                className="img generatedImage"
                viewBox="780 148 340 57"
            >
                <path
                d="M 1 1  L 339 1  L 339 56  L 1 56  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 780 148 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 56  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 780 148 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 340 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 780 148 )"
                className="stroke"
                />
                <path
                d="M 339.5 1  L 339.5 56  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 780 148 )"
                className="stroke"
                />
                <path
                d="M 0 56.5  L 340 56.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 780 148 )"
                className="stroke"
                />
            </svg>
            <div
                id="u208_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
        </div>
        {/* Delete_User_Button (Rectangle) */}
        <div
            id="u209"
            className="ax_default shape transition notrs"
            data-label="Delete_User_Button"
        >
            <div id="u209_div" className="" />
            <div id="u209_text" className="text ">
            <p>
                <span>Delete User</span>
            </p>
            </div>
        </div>
        {/* Edit_User_Button (Rectangle) */}
        <div
            id="u210"
            className="ax_default shape transition notrs"
            data-label="Edit_User_Button"
        >
            <div id="u210_div" className="" />
            <div id="u210_text" className="text ">
            <p>
                <span>Edit User</span>
            </p>
            </div>
        </div>
        {/* Delete_User_Button (Rectangle) */}
        <div
            id="u211"
            className="ax_default shape transition notrs"
            data-label="Delete_User_Button"
        >
            <div id="u211_div" className="" />
            <div id="u211_text" className="text ">
            <p>
                <span>Delete User</span>
            </p>
            </div>
        </div>
        {/* Edit_User_Button (Rectangle) */}
        <div
            id="u212"
            className="ax_default shape transition notrs"
            data-label="Edit_User_Button"
        >
            <div id="u212_div" className="" />
            <div id="u212_text" className="text ">
            <p>
                <span>Edit User</span>
            </p>
            </div>
        </div>
        {/* Delete_User_Button (Rectangle) */}
        <div
            id="u213"
            className="ax_default shape transition notrs"
            data-label="Delete_User_Button"
        >
            <div id="u213_div" className="" />
            <div id="u213_text" className="text ">
            <p>
                <span>Delete User</span>
            </p>
            </div>
        </div>
        {/* Edit_User_Button (Rectangle) */}
        <div
            id="u214"
            className="ax_default shape transition notrs"
            data-label="Edit_User_Button"
        >
            <div id="u214_div" className="" />
            <div id="u214_text" className="text ">
            <p>
                <span>Edit User</span>
            </p>
            </div>
        </div>
        {/* New_User (Rectangle) */}
        <div
            id="u215"
            className="ax_default shape transition notrs"
            data-label="New_User"
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
                type="number"
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
                type="number"
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
                <option className="u260_input_option" value="COMPETITOR">
                    COMPETITOR
                </option>
                <option className="u260_input_option" value="EXPERT">
                    EXPERT
                </option>
                <option className="u260_input_option" value="ADMIN">
                    ADMIN
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
            <option className="u273_input_option" value="User ID">
                User ID
            </option>
            <option className="u273_input_option" value="Name">
                Name
            </option>
            <option className="u273_input_option" value="Username">
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