import './css/ViewAllDocumentBinders.css';
import { useEffect } from 'react';
import * as authUtils from './authUtils.js';

function ViewAllDocumentBindersPage() {

    useEffect(() => {
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
            {/* Unnamed (Table cell) */}
            <div id="u46" className="ax_default table_cell transition notrs">
            <svg
                data="images/view_all_document_binders/u46.svg"
                id="u46_img"
                className="img generatedImage"
                viewBox="0 0 143 34"
            >
                <path
                d="M 1 1  L 143 1  L 143 34  L 1 34  L 1 1  Z "
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
                d="M 0 0.5  L 143 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                className="stroke"
                />
            </svg>
            <div id="u46_text" className="text ">
                <p>
                <span>Binger ID</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u47" className="ax_default table_cell transition notrs">
            <svg
                data="images/view_all_document_binders/u47.svg"
                id="u47_img"
                className="img generatedImage"
                viewBox="143 0 486 34"
            >
                <path
                d="M 1 1  L 486 1  L 486 34  L 1 34  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(238, 236, 225, 0.9921568627450981)"
                stroke="none"
                transform="matrix(1 0 0 1 143 0 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 34  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 143 0 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 486 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 143 0 )"
                className="stroke"
                />
            </svg>
            <div id="u47_text" className="text ">
                <p>
                <span>Assigned Competitor</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u48" className="ax_default table_cell transition notrs">
            <svg
                data="images/view_all_document_binders/u48.svg"
                id="u48_img"
                className="img generatedImage"
                viewBox="629 0 294 34"
            >
                <path
                d="M 1 1  L 294 1  L 294 34  L 1 34  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(238, 236, 225, 0.9921568627450981)"
                stroke="none"
                transform="matrix(1 0 0 1 629 0 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 34  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 629 0 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 294 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 629 0 )"
                className="stroke"
                />
            </svg>
            <div id="u48_text" className="text ">
                <p>
                <span>Status</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u49" className="ax_default table_cell transition notrs">
            <svg
                data="images/view_all_document_binders/u49.svg"
                id="u49_img"
                className="img generatedImage"
                viewBox="924 0 198 34"
            >
                <path
                d="M 1 1  L 197 1  L 197 34  L 1 34  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(238, 236, 225, 0.9921568627450981)"
                stroke="none"
                transform="matrix(1 0 0 1 924 0 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 34  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 924 0 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 198 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 924 0 )"
                className="stroke"
                />
                <path
                d="M 197.5 1  L 197.5 34  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 924 0 )"
                className="stroke"
                />
            </svg>
            <div
                id="u49_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u50" className="ax_default table_cell transition notrs">
            <svg
                data="images/view_all_document_binders/u50.svg"
                id="u50_img"
                className="img generatedImage"
                viewBox="0 34 143 57"
            >
                <path
                d="M 1 1  L 143 1  L 143 57  L 1 57  L 1 1  Z "
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
                d="M 0 0.5  L 143 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 0 34 )"
                className="stroke"
                />
            </svg>
            <div id="u50_text" className="text ">
                <p>
                <span>1</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u51" className="ax_default table_cell transition notrs">
            <svg
                data="images/view_all_document_binders/u51.svg"
                id="u51_img"
                className="img generatedImage"
                viewBox="143 34 486 57"
            >
                <path
                d="M 1 1  L 486 1  L 486 57  L 1 57  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 143 34 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 57  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 143 34 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 486 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 143 34 )"
                className="stroke"
                />
            </svg>
            <div id="u51_text" className="text ">
                <p>
                <span>Competitor 1</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u52" className="ax_default table_cell transition notrs">
            <svg
                data="images/view_all_document_binders/u52.svg"
                id="u52_img"
                className="img generatedImage"
                viewBox="629 34 294 57"
            >
                <path
                d="M 1 1  L 294 1  L 294 57  L 1 57  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 629 34 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 57  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 629 34 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 294 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 629 34 )"
                className="stroke"
                />
            </svg>
            <div id="u52_text" className="text ">
                <p>
                <span>Completed</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u53" className="ax_default table_cell transition notrs">
            <svg
                data="images/view_all_document_binders/u53.svg"
                id="u53_img"
                className="img generatedImage"
                viewBox="924 34 198 57"
            >
                <path
                d="M 1 1  L 197 1  L 197 57  L 1 57  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 924 34 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 57  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 924 34 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 198 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 924 34 )"
                className="stroke"
                />
                <path
                d="M 197.5 1  L 197.5 57  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 924 34 )"
                className="stroke"
                />
            </svg>
            <div
                id="u53_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u54" className="ax_default table_cell transition notrs">
            <svg
                data="images/view_all_document_binders/u54.svg"
                id="u54_img"
                className="img generatedImage"
                viewBox="0 91 143 57"
            >
                <path
                d="M 1 1  L 143 1  L 143 57  L 1 57  L 1 1  Z "
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
                d="M 0 0.5  L 143 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 0 91 )"
                className="stroke"
                />
            </svg>
            <div id="u54_text" className="text ">
                <p>
                <span>2</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u55" className="ax_default table_cell transition notrs">
            <svg
                data="images/view_all_document_binders/u55.svg"
                id="u55_img"
                className="img generatedImage"
                viewBox="143 91 486 57"
            >
                <path
                d="M 1 1  L 486 1  L 486 57  L 1 57  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 143 91 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 57  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 143 91 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 486 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 143 91 )"
                className="stroke"
                />
            </svg>
            <div id="u55_text" className="text ">
                <p>
                <span>Competitor 2</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u56" className="ax_default table_cell transition notrs">
            <svg
                data="images/view_all_document_binders/u56.svg"
                id="u56_img"
                className="img generatedImage"
                viewBox="629 91 294 57"
            >
                <path
                d="M 1 1  L 294 1  L 294 57  L 1 57  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 629 91 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 57  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 629 91 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 294 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 629 91 )"
                className="stroke"
                />
            </svg>
            <div id="u56_text" className="text ">
                <p>
                <span>In Progress</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u57" className="ax_default table_cell transition notrs">
            <svg
                data="images/view_all_document_binders/u57.svg"
                id="u57_img"
                className="img generatedImage"
                viewBox="924 91 198 57"
            >
                <path
                d="M 1 1  L 197 1  L 197 57  L 1 57  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 924 91 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 57  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 924 91 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 198 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 924 91 )"
                className="stroke"
                />
                <path
                d="M 197.5 1  L 197.5 57  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 924 91 )"
                className="stroke"
                />
            </svg>
            <div
                id="u57_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u58" className="ax_default table_cell transition notrs">
            <svg
                data="images/view_all_document_binders/u58.svg"
                id="u58_img"
                className="img generatedImage"
                viewBox="0 148 143 57"
            >
                <path
                d="M 1 1  L 143 1  L 143 56  L 1 56  L 1 1  Z "
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
                d="M 0 0.5  L 143 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 0 148 )"
                className="stroke"
                />
                <path
                d="M 0 56.5  L 143 56.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 0 148 )"
                className="stroke"
                />
            </svg>
            <div id="u58_text" className="text ">
                <p>
                <span>3</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u59" className="ax_default table_cell transition notrs">
            <svg
                data="images/view_all_document_binders/u59.svg"
                id="u59_img"
                className="img generatedImage"
                viewBox="143 148 486 57"
            >
                <path
                d="M 1 1  L 486 1  L 486 56  L 1 56  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 143 148 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 56  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 143 148 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 486 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 143 148 )"
                className="stroke"
                />
                <path
                d="M 0 56.5  L 486 56.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 143 148 )"
                className="stroke"
                />
            </svg>
            <div id="u59_text" className="text ">
                <p>
                <span>Competitor 3</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u60" className="ax_default table_cell transition notrs">
            <svg
                data="images/view_all_document_binders/u60.svg"
                id="u60_img"
                className="img generatedImage"
                viewBox="629 148 294 57"
            >
                <path
                d="M 1 1  L 294 1  L 294 56  L 1 56  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 629 148 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 56  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 629 148 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 294 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 629 148 )"
                className="stroke"
                />
                <path
                d="M 0 56.5  L 294 56.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 629 148 )"
                className="stroke"
                />
            </svg>
            <div id="u60_text" className="text ">
                <p>
                <span>Completed</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u61" className="ax_default table_cell transition notrs">
            <svg
                data="images/view_all_document_binders/u61.svg"
                id="u61_img"
                className="img generatedImage"
                viewBox="924 148 198 57"
            >
                <path
                d="M 1 1  L 197 1  L 197 56  L 1 56  L 1 1  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 924 148 )"
                className="fill"
                />
                <path
                d="M 0.5 1  L 0.5 56  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 924 148 )"
                className="stroke"
                />
                <path
                d="M 0 0.5  L 198 0.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 924 148 )"
                className="stroke"
                />
                <path
                d="M 197.5 1  L 197.5 56  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 924 148 )"
                className="stroke"
                />
                <path
                d="M 0 56.5  L 198 56.5  "
                strokeWidth={1}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 924 148 )"
                className="stroke"
                />
            </svg>
            <div
                id="u61_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
        </div>
        {/* View_ATL_Button (Rectangle) */}
        <div
            id="u62"
            className="ax_default shape transition notrs"
            data-label="View_ATL_Button"
        >
            <div id="u62_div" className="" />
            <div id="u62_text" className="text ">
            <p>
                <span>View Binger</span>
            </p>
            </div>
        </div>
        {/* View_ATL_Button (Rectangle) */}
        <div
            id="u63"
            className="ax_default shape transition notrs"
            data-label="View_ATL_Button"
        >
            <div id="u63_div" className="" />
            <div id="u63_text" className="text ">
            <p>
                <span>View Binger</span>
            </p>
            </div>
        </div>
        {/* View_ATL_Button (Rectangle) */}
        <div
            id="u64"
            className="ax_default shape transition notrs"
            data-label="View_ATL_Button"
        >
            <div id="u64_div" className="" />
            <div id="u64_text" className="text ">
            <p>
                <span>View Binger</span>
            </p>
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