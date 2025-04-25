import { loadStyle, unloadStyle } from './Components/styleUtils.js';
import { useEffect , useState } from 'react';
import * as authUtils from './Components/authUtils.js';
import CustomCheckbox from "./Components/CheckboxComponent.js";
import * as apiService from './Components/apiService.js';
import dayjs from 'dayjs';

function WorkOrderSummaryPage2() {

    useEffect(() => {
        async function fetchData() {
            const data = { document_id: sessionStorage.getItem("document_id"), table: "work_order_summaries" };
                        try{
                            const response = await apiService.apiRequest(`get-document-data?table=${data.table}&document_id=${data.document_id}`);
                            if (response && typeof response === "object") {
                                const report = response;
                                document.getElementById("u556_input").value = dayjs(report.date).format('YYYY-MM-DD');
                                document.getElementById("u557_input").value = report.time || "";
                                document.getElementById("u558_input").value = report.technical_log_page_sequence_number || "";
                                document.getElementById("u549_input").value = report.closed_by || "";
                                setCheckboxes({
                                    followon_maintenance_checks_yes: report.followon_maintenance_checks_yes === 1,
                                    followon_maintenance_checks_na: report.followon_maintenance_checks_na === 1,
                                    testflight_requirements_yes: report.testflight_requirements_yes === 1,
                                    testflight_requirements_na: report.testflight_requirements_na === 1,
                                    deferred_defects_yes: report.deferred_defects_yes === 1,
                                    wos_affixed_yes: report.wos_affixed_yes === 1,
                                    subject_to_test_flight: report.subject_to_test_flight === 1
                                })
                                return response;
                            }   
                        } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        authUtils.CheckLoggedIn();
        authUtils.CheckAccess();
        authUtils.CheckSession();
        fetchData();
        const cssFile = '/css/WorkOrderSummaryPart2.css';
        loadStyle(cssFile);

        return () => {
        unloadStyle(cssFile); // clean up when navigating away
        };
     }, []);

     function Back_Button() {
        authUtils.Back();
     }

     const [checkboxes, setCheckboxes] = useState({
        followon_maintenance_checks_yes: false,
        followon_maintenance_checks_na: false,
        testflight_requirements_yes: false,
        testflight_requirements_na: false,
        deferred_defects_yes: false,
        wos_affixed_yes: false,
        subject_to_test_flight: false
    });

    const handleCheckboxChange = (id, value) => {
        setCheckboxes((prev) => ({ ...prev, [id]: value }));
     };

    async function handleSave() {
        const date = document.getElementById("u556_input");
        const time = document.getElementById("u557_input");
        const technical_log_page_sequence_number = document.getElementById("u558_input");
        const closed_by = document.getElementById("u549_input");
        const subject_to_test_flight = document.getElementById("u548_input");
        const followon_maintenance_checks_yes = document.getElementById("u550_input");
        const followon_maintenance_checks_na = document.getElementById("u554_input");
        const testflight_requirements_yes = document.getElementById("u551_input");
        const testflight_requirements_na = document.getElementById("u555_input");
        const deferred_defects_yes = document.getElementById("u552_input");
        const wos_affixed_yes = document.getElementById("u553_input");

        const data = {
            date: date.value.trim(),
            time: time.value.trim(),
            technical_log_page_sequence_number: technical_log_page_sequence_number.value.trim(),
            closed_by: closed_by.value.trim(),
            subject_to_test_flight : subject_to_test_flight.checked,
            followon_maintenance_checks_yes: followon_maintenance_checks_yes.checked,
            followon_maintenance_checks_na: followon_maintenance_checks_na.checked,
            testflight_requirements_yes: testflight_requirements_yes.checked,
            testflight_requirements_na: testflight_requirements_na.checked,
            deferred_defects_yes: deferred_defects_yes.checked,
            wos_affixed_yes: wos_affixed_yes.checked,
            document_id: sessionStorage.getItem("document_id")
        };
        try {
            const response = await apiService.apiRequest("update-document-data", "POST", {document_type:"WOS-P2", data:data});
            if (response) {
                alert("Work Order Summary Page Saved Successfully");
            }
        } catch (error) {
            alert(error.message);
        }

    }

    return( 
        <div id="base" className="">
        {/* Unnamed (Rectangle) */}
        <div id="u512" className="ax_default box_1 transition notrs">
            <div id="u512_div" className="" />
            <div id="u512_text" className="text ">
            <p>
                <span>WORK ORDER SUMMARY</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u513" className="ax_default box_1 transition notrs">
            <div id="u513_div" className="" />
            <div id="u513_text" className="text ">
            <p>
                <span>WORK ORDER CLOSURE</span>
            </p>
            <p>
                <span>(Complete for the Last Work Order Summary Page ONLY)</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u514" className="ax_default box_1 transition notrs">
            <div id="u514_div" className="" />
            <div
            id="u514_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u515" className="ax_default box_1 transition notrs">
            <div id="u515_div" className="" />
            <div id="u515_text" className="text ">
            <p>
                <span>Work Order Closure Checklist</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u516" className="ax_default box_1 transition notrs">
            <div id="u516_div" className="" />
            <div id="u516_text" className="text ">
            <p>
                <span>YES</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u517" className="ax_default box_1 transition notrs">
            <div id="u517_div" className="" />
            <div id="u517_text" className="text ">
            <p>
                <span>N/A</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u518" className="ax_default box_1 transition notrs">
            <div id="u518_div" className="" />
            <div
            id="u518_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u519" className="ax_default box_1 transition notrs">
            <div id="u519_div" className="" />
            <div
            id="u519_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u520" className="ax_default box_1 transition notrs">
            <div id="u520_div" className="" />
            <div
            id="u520_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u521" className="ax_default box_1 transition notrs">
            <div id="u521_div" className="" />
            <div
            id="u521_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u522" className="ax_default box_1 transition notrs">
            <div id="u522_div" className="" />
            <div
            id="u522_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u523" className="ax_default box_1 transition notrs">
            <div id="u523_div" className="" />
            <div
            id="u523_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u524" className="ax_default box_1 transition notrs">
            <div id="u524_div" className="" />
            <div
            id="u524_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u525" className="ax_default box_1 transition notrs">
            <div id="u525_div" className="" />
            <div id="u525_text" className="text ">
            <p>
                <span>All FOLLOW-ON MAINTENANCE CHECK(S) completed</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u526" className="ax_default box_1 transition notrs">
            <div id="u526_div" className="" />
            <div id="u526_text" className="text ">
            <p>
                <span>
                TEST FLIGHT requirements detailed on current Technical Log Page
                </span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u527" className="ax_default box_1 transition notrs">
            <div id="u527_div" className="" />
            <div id="u527_text" className="text ">
            <p>
                <span>Technical Dispatch Report updated with DEFERRED DEFECTS</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u528" className="ax_default box_1 transition notrs">
            <div id="u528_div" className="" />
            <div id="u528_text" className="text ">
            <p>
                <span>
                Copy of Work Order Summary affixed to current Technical Log Page
                </span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u529" className="ax_default box_1 transition notrs">
            <div id="u529_div" className="" />
            <div id="u529_text" className="text ">
            <p>
                <span>Date:</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u530" className="ax_default box_1 transition notrs">
            <div id="u530_div" className="" />
            <div id="u530_text" className="text ">
            <p>
                <span>Time:</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u531" className="ax_default box_1 transition notrs">
            <div id="u531_div" className="" />
            <div id="u531_text" className="text ">
            <p>
                <span>Technical Log Page Sequence #</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u532" className="ax_default box_1 transition notrs">
            <div id="u532_div" className="" />
            <div
            id="u532_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u533" className="ax_default box_1 transition notrs">
            <div id="u533_div" className="" />
            <div id="u533_text" className="text ">
            <p>
                <span>SUBJECT TO SATISFACTORY TEST FLIGHT</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u534" className="ax_default box_1 transition notrs">
            <div id="u534_div" className="" />
            <div
            id="u534_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u535" className="ax_default paragraph transition notrs">
            <div id="u535_div" className="" />
            <div id="u535_text" className="text ">
            <p>
                <span>
                The described maintenance has been performed in accordance with the
                applicable airworthiness requirements.&nbsp; AMO 2019-14
                </span>
            </p>
            </div>
        </div>
        {/* Save_Button (Rectangle) */}
        <div
            id="u536"
            className="ax_default shape transition notrs"
            data-label="Save_Button"
            onClick={handleSave}
        >
            <div id="u536_div" className="" />
            <div id="u536_text" className="text ">
            <p>
                <span>Save</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u546" className="ax_default box_1 transition notrs">
            <div id="u546_div" className="" />
            <div id="u546_text" className="text ">
            <p>
                <span>Work Order Closed By</span>
            </p>
            </div>
        </div>
        {/* Work_Order_Summary_Inputs (Group) */}
        <div
            id="u547"
            className="ax_default"
            data-label="Work_Order_Summary_Inputs"
            data-left={2}
            data-top={196}
            data-width={1189}
            data-height={252}
            layer-opacity={1}
        >
            {/* Satisfactory_Test_Flight (Checkbox) */}
            <CustomCheckbox id="u548" label="subject_to_flight_test" initialChecked={checkboxes.subject_to_test_flight} onChange={handleCheckboxChange}/>
            {/* Work_Order_Closed_By (Text field) */}
            <div
            id="u549"
            className="ax_default text_field transition notrs"
            data-label="Work_Order_Closed_By"
            > 
            <div id="u549_div" className="" />
            <input
                id="u549_input"
                type="text"
                defaultValue=""
                className="u549_input"
            />
            </div>
            {/* Unnamed (Checkbox) */}
            <CustomCheckbox id="u550" label="followon_maintenance_checks_yes" initialChecked={checkboxes.followon_maintenance_checks_yes} onChange={handleCheckboxChange}/>
            {/* Unnamed (Checkbox) */}
            <CustomCheckbox id="u551" label="testflight_requirements_yes" initialChecked={checkboxes.testflight_requirements_yes} onChange={handleCheckboxChange}/>
            {/* Unnamed (Checkbox) */}
            <CustomCheckbox id="u552" label="deferred_defects_yes" initialChecked={checkboxes.deferred_defects_yes} onChange={handleCheckboxChange}/>
            {/* Unnamed (Checkbox) */}
            <CustomCheckbox id="u553" label="wos_affixed_yes" initialChecked={checkboxes.wos_affixed_yes} onChange={handleCheckboxChange}/>
            {/* Unnamed (Checkbox) */}
            <CustomCheckbox id="u554" label="followon_maintenance_checks_na" initialChecked={checkboxes.followon_maintenance_checks_na} onChange={handleCheckboxChange}/>
            {/* Unnamed (Checkbox) */}
            <CustomCheckbox id="u555" label="testflight_requirements_na" initialChecked={checkboxes.testflight_requirements_na} onChange={handleCheckboxChange}/>
            {/* Work_Order_Closure_Date (Text field) */}
            <div
            id="u556"
            className="ax_default text_field transition notrs"
            data-label="Work_Order_Closure_Date"
            >
            <div id="u556_div" className="" />
            <input
                id="u556_input"
                type="date"
                defaultValue=""
                className="u556_input"
            />
            </div>
            {/* Work_Order_Close_Time (Text field) */}
            <div
            id="u557"
            className="ax_default text_field transition notrs"
            data-label="Work_Order_Close_Time"
            >
            <div id="u557_div" className="" />
            <input
                id="u557_input"
                type="time"
                defaultValue=""
                className="u557_input"
            />
            </div>
            {/* Technical_Log_Page_Sequence_Number (Text field) */}
            <div
            id="u558"
            className="ax_default text_field transition notrs"
            data-label="Technical_Log_Page_Sequence_Number"
            >
            <div id="u558_div" className="" />
            <input
                id="u558_input"
                type="text"
                defaultValue=""
                className="u558_input"
            />
            </div>
        </div>
        {/* Back_Button (Rectangle) */}
        <div
            id="u559"
            className="ax_default shape transition notrs"
            data-label="Back_Button"
            onClick={Back_Button}
        >
            <div id="u559_div" className="" />
            <div id="u559_text" className="text ">
            <p>
                <span>Back</span>
            </p>
            </div>
        </div>
        </div>   
    );
};

export default WorkOrderSummaryPage2;