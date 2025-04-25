import { loadStyle, unloadStyle } from './Components/styleUtils.js';
import { useEffect , useState } from 'react';
import * as authUtils from './Components/authUtils.js';
import * as apiService from './Components/apiService.js';
import CustomCheckbox from './Components/CheckboxComponent.js';
import dayjs from 'dayjs';

function TaskCardPage() {

    useEffect(() => {
        async function FetchData() {
            const data = { document_id: sessionStorage.getItem("document_id"), table: "task_cards" };
            try{
                const response = await apiService.apiRequest(`get-document-data?table=${data.table}&document_id=${data.document_id}`);
                if (response && typeof response === "object") {
                    const report = response;

                    document.getElementById("u674_input").value = report.tc_number || "";
                    document.getElementById("u675_input").value = report.ata_chapter || "";
                    document.getElementById("u676_input").value = report.title || "";
                    document.getElementById("u677_input").value = report.aircraft_type || "";
                    document.getElementById("u678_input").value = report.registration || "";
                    document.getElementById("u682_input").value = report.serial_number || "";
                    document.getElementById("u683_input").value = report.work_order_number || "";
                    document.getElementById("u680_input").value = report.total_airframe_time || "";
                    document.getElementById("u679_input").value = report.airframe_cycles || "";
                    document.getElementById("u681_input").value = report.originated_by || "";
                    document.getElementById("u684_input").value = dayjs(report.date_opened).format('YYYY-MM-DD');
                    document.getElementById("u685_input").value = report.defect_description || "";
                    document.getElementById("u666_input").value = report.page_sequence_number || "";
                    document.getElementById("u686_input").value = report.resolution_description || "";
                    document.getElementById("u672_input").value = report.attached_supporting_docs || "";
                    document.getElementById("u687_input").value = report.mel_id || "";
                    document.getElementById("u669_input").value = report.mel_category || "";
                    document.getElementById("u688_input").value = dayjs(report.mel_due_date).format('YYYY-MM-DD');
                    document.getElementById("u689_input").value = report.mel_due_time || "";
                    document.getElementById("u690_input").value = report.fc_systems_affected || "";
                    document.getElementById("u673_input").value = report.fc_detailed_on_tc || "";
                    document.getElementById("u698_input").value = report.lc_systems_affected || "";
                    document.getElementById("u697_input").value = report.lc_detailed_on_tc || "";
                    document.getElementById("u700_input").value = report.oc_systems_affected || "";
                    document.getElementById("u699_input").value = report.oc_detailed_on_tc || "";
                    document.getElementById("u691_input").value = report.post_maintenance_inspection || "";
                    document.getElementById("u692_input").value = report.independent_check_by || "";
                    document.getElementById("u693_input").value = report.tc_certified_by || "";
                    document.getElementById("u694_input").value = dayjs(report.tc_certified_date).format('YYYY-MM-DD');
                    document.getElementById("u695_input").value = report.tc_certified_time || "";
                    document.getElementById("u696_input").value = report.checks_during_test_flight || "";
                    setCheckboxes({
                        function_check_yes: report.function_check_yes === 1,
                        leak_check_yes: report.leak_check_yes === 1,
                        other_yes: report.other_check_yes === 1, 
                        other_no: report.other_check_no === 1,
                        leak_check_no: report.leak_check_no === 1,
                        function_check_no: report.function_check_no === 1,
                        defect_deferred: report.defect_deferred === 1,
                        satisfactory_test_flight: report.subject_to_test_flight === 1,
                        deferred_previously: report.deferred_previously === 1,
                        type_mel: report.defer_category_type_mel === 1,
                        type_non_mel: report.defer_category_type_non_mel === 1,
                        ic_required_yes: report.ic_required_yes === 1,
                        ic_required_no: report.ic_required_no === 1
                    })
                    return response;
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        authUtils.CheckLoggedIn();
        authUtils.CheckAccess();
        authUtils.CheckSession();
        FetchData();
        const cssFile = '/css/TaskCard.css';
        loadStyle(cssFile);

        return () => {
        unloadStyle(cssFile); // clean up when navigating away
        };
     }, []);

     const [checkboxes, setCheckboxes] = useState({
        function_check_yes: false,
        leak_check_yes: false,
        other_yes: false,
        other_no: false,
        leak_check_no: false,
        function_check_no: false,
        defect_deferred: false,
        satisfactory_test_flight: false,
        deferred_previously: false,
        type_mel: false,
        type_non_mel: false,
        ic_required_yes: false,
        ic_required_no: false
    });

    const handleCheckboxChange = (id, value) => {
        setCheckboxes((prev) => ({ ...prev, [id]: value }));
     };

    function Back_Button(){
        sessionStorage.removeItem("document_id");
        authUtils.Back();
    };

     async function SaveDocument() {
        const tc_number = document.getElementById("u674_input");
        const ata_chatper = document.getElementById("u675_input");
        const title = document.getElementById("u676_input");
        const aircraft_type = document.getElementById("u677_input");
        const registration = document.getElementById("u678_input");
        const serial_number = document.getElementById("u682_input");
        const work_order_number = document.getElementById("u683_input");
        const total_airframe_time = document.getElementById("u680_input");
        const airframe_cycles = document.getElementById("u679_input");
        const originated_by = document.getElementById("u681_input");
        const date_opened = document.getElementById("u684_input");
        const defect_description = document.getElementById("u685_input");
        const deferred_previously = document.getElementById("u665_input");
        const page_sequence_number = document.getElementById("u666_input");
        const resolution_description = document.getElementById("u686_input");
        const attached_supporting_docs = document.getElementById("u672_input");
        const defect_deferred = document.getElementById("u663_input");
        const defer_category_type_mel = document.getElementById("u667_input");
        const defer_category_type_non_mel = document.getElementById("u668_input");
        const mel_id = document.getElementById("u687_input");
        const mel_category = document.getElementById("u669_input");
        const mel_due_date = document.getElementById("u688_input");
        const mel_due_time = document.getElementById("u689_input");
        const function_check_yes = document.getElementById("u657_input");
        const function_check_no = document.getElementById("u662_input");
        const fc_systems_affected = document.getElementById("u690_input");
        const fc_detailed_on_tc = document.getElementById("u673_input");
        const leak_check_yes = document.getElementById("u658_input");
        const leak_check_no = document.getElementById("u661_input");
        const lc_systems_affected = document.getElementById("u698_input");
        const lc_detailed_on_tc = document.getElementById("u697_input");
        const other_check_yes = document.getElementById("u659_input");
        const other_check_no = document.getElementById("u660_input");
        const oc_systems_affected = document.getElementById("u700_input");
        const oc_detailed_on_tc = document.getElementById("u699_input");
        const ic_required_yes = document.getElementById("u670_input");
        const ic_required_no = document.getElementById("u671_input");
        const post_maintenance_inspection = document.getElementById("u691_input");
        const independent_check_by = document.getElementById("u692_input");
        const tc_certified_by = document.getElementById("u693_input");
        const tc_certified_date = document.getElementById("u694_input");
        const tc_certified_time = document.getElementById("u695_input");
        const subject_to_test_flight = document.getElementById("u664_input");
        const checks_during_test_flight = document.getElementById("u696_input");

        const data = {
            tc_number:tc_number.value.trim(),
            ata_chapter:ata_chatper.value.trim(),
            title:title.value.trim(),
            aircraft_type:aircraft_type.value.trim(),
            registration:registration.value.trim(),
            serial_number:serial_number.value.trim(),
            work_order_number:work_order_number.value.trim(),
            total_airframe_time: total_airframe_time.value.trim(),
            airframe_cycles:airframe_cycles.value.trim(),
            originated_by:originated_by.value.trim(),
            date_opened:date_opened.value.trim(),
            defect_description:defect_description.value.trim(),
            deferred_previously:deferred_previously.checked,
            page_sequence_number: page_sequence_number.value.trim(),
            resolution_description:resolution_description.value.trim(),
            attached_supporting_docs: attached_supporting_docs.value.trim(),
            defect_deferred:defect_deferred.checked,
            defer_category_type_mel:defer_category_type_mel.checked,
            defer_category_type_non_mel: defer_category_type_non_mel.checked,
            mel_id:mel_id.value.trim(),
            mel_category:mel_category.value.trim(),
            mel_due_date:mel_due_date.value.trim(),
            mel_due_time:mel_due_time.value.trim(),
            function_check_yes:function_check_yes.checked,
            function_check_no:function_check_no.checked,
            fc_systems_affected:fc_systems_affected.value.trim(),
            fc_detailed_on_tc:fc_detailed_on_tc.value.trim(),
            leak_check_yes: leak_check_yes.checked,
            leak_check_no:leak_check_no.checked,
            lc_systems_affected:lc_systems_affected.value.trim(),
            lc_detailed_on_tc:lc_detailed_on_tc.value.trim(),
            other_check_yes:other_check_yes.checked,
            other_check_no:other_check_no.checked,
            oc_systems_affected:oc_systems_affected.value.trim(),
            oc_detailed_on_tc: oc_detailed_on_tc.value.trim(),
            ic_required_yes:ic_required_yes.checked,
            ic_required_no:ic_required_no.checked,
            post_maintenance_inspection:post_maintenance_inspection.value.trim(),
            independent_check_by:independent_check_by.value.trim(),
            tc_certified_by:tc_certified_by.value.trim(),
            tc_certified_date: tc_certified_date.value.trim(),
            tc_certified_time:tc_certified_time.value.trim(),
            subject_to_test_flight:subject_to_test_flight.checked,
            checks_during_test_flight:checks_during_test_flight.value.trim(),
            document_id:sessionStorage.getItem("document_id")
        };
        try {
            const response = await apiService.apiRequest("update-document-data", "POST", {document_type:"TC", data:data});
            if (response) {
                alert("Task Card Saved Successfully");
            }
        } catch (error) {
            alert(error.message);
        }
     };
    return(
        <div id="base" className="">
        {/* Unnamed (Rectangle) */}
        <div id="u597" className="ax_default box_1 transition notrs">
            <div id="u597_div" className="" />
            <div id="u597_text" className="text ">
            <p>
                <span>TASK CARD</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u598" className="ax_default box_1 transition notrs">
            <div id="u598_div" className="" />
            <div id="u598_text" className="text ">
            <p>
                <span>ID</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u599" className="ax_default box_1 transition notrs">
            <div id="u599_div" className="" />
            <div id="u599_text" className="text ">
            <p>
                <span>ATA CHAPTER</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u600" className="ax_default box_1 transition notrs">
            <div id="u600_div" className="" />
            <div id="u600_text" className="text ">
            <p>
                <span>TITLE</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u601" className="ax_default box_1 transition notrs">
            <div id="u601_div" className="" />
            <div id="u601_text" className="text ">
            <p>
                <span>AIRCRAFT TYPE</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u602" className="ax_default box_1 transition notrs">
            <div id="u602_div" className="" />
            <div id="u602_text" className="text ">
            <p>
                <span>REGISTRATION</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u603" className="ax_default box_1 transition notrs">
            <div id="u603_div" className="" />
            <div id="u603_text" className="text ">
            <p>
                <span>SERIAL NUMBER</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u604" className="ax_default box_1 transition notrs">
            <div id="u604_div" className="" />
            <div id="u604_text" className="text ">
            <p>
                <span>WORK ORDER#</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u605" className="ax_default box_1 transition notrs">
            <div id="u605_div" className="" />
            <div id="u605_text" className="text ">
            <p>
                <span>DATE OPENED</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u606" className="ax_default box_1 transition notrs">
            <div id="u606_div" className="" />
            <div id="u606_text" className="text ">
            <p>
                <span>ORIGINATED BY</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u607" className="ax_default box_1 transition notrs">
            <div id="u607_div" className="" />
            <div id="u607_text" className="text ">
            <p>
                <span>TOTAL AIRFRAME TIME (HOURS)</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u608" className="ax_default box_1 transition notrs">
            <div id="u608_div" className="" />
            <div id="u608_text" className="text ">
            <p>
                <span>AIRFRAME CYCLES</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u609" className="ax_default box_1 transition notrs">
            <div id="u609_div" className="" />
            <div id="u609_text" className="text ">
            <p>
                <span>MAINTENANCE REQUIRED / DEFECT DESCRIPTION</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u610" className="ax_default box_1 transition notrs">
            <div id="u610_div" className="" />
            <div
            id="u610_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u611" className="ax_default box_1 transition notrs">
            <div id="u611_div" className="" />
            <div id="u611_text" className="text ">
            <p>
                <span>RESOLUTION / DEFERRAL DESCRIPTION</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u612" className="ax_default box_1 transition notrs">
            <div id="u612_div" className="" />
            <div
            id="u612_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u613" className="ax_default box_1 transition notrs">
            <div id="u613_div" className="" />
            <div id="u613_text" className="text ">
            <p>
                <span style={{ fontFamily: '"Arial", sans-serif', fontWeight: 400 }}>
                Defect Deferred
                </span>
            </p>
            <p>
                <span
                style={{
                    fontFamily: '"Arial Bold", "Arial", sans-serif',
                    fontWeight: 700
                }}
                >
                <br />
                </span>
            </p>
            <p>
                <span
                style={{
                    fontFamily: '"Arial Bold", "Arial", sans-serif',
                    fontWeight: 700
                }}
                >
                <br />
                </span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u614" className="ax_default box_1 transition notrs">
            <div id="u614_div" className="" />
            <div id="u614_text" className="text ">
            <p>
                <span>Defer Category</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u615" className="ax_default box_1 transition notrs">
            <div id="u615_div" className="" />
            <div id="u615_text" className="text ">
            <p>
                <span>MEL Due</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u616" className="ax_default box_1 transition notrs">
            <div id="u616_div" className="" />
            <div id="u616_text" className="text ">
            <p>
                <span>Type</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u617" className="ax_default box_1 transition notrs">
            <div id="u617_div" className="" />
            <div
            id="u617_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u618" className="ax_default box_1 transition notrs">
            <div id="u618_div" className="" />
            <div id="u618_text" className="text ">
            <p>
                <span>MEL ID#</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u619" className="ax_default box_1 transition notrs">
            <div id="u619_div" className="" />
            <div id="u619_text" className="text ">
            <p>
                <span>MEL Category</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u620" className="ax_default box_1 transition notrs">
            <div id="u620_div" className="" />
            <div id="u620_text" className="text ">
            <p>
                <span>&nbsp;Time (UTC):</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u621" className="ax_default box_1 transition notrs">
            <div id="u621_div" className="" />
            <div id="u621_text" className="text ">
            <p style={{ fontSize: 16 }}>
                <span
                style={{
                    fontFamily: '"Arial Bold", "Arial", sans-serif',
                    fontWeight: 700,
                    fontSize: 18
                }}
                >
                &nbsp;
                </span>
                <span style={{ fontFamily: '"Arial", sans-serif', fontWeight: 400 }}>
                Date:
                </span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u622" className="ax_default box_1 transition notrs">
            <div id="u622_div" className="" />
            <div id="u622_text" className="text ">
            <p>
                <span>FOLLOW-ON MAINTENACE CHECKS</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u623" className="ax_default box_1 transition notrs">
            <div id="u623_div" className="" />
            <div id="u623_text" className="text ">
            <p>
                <span>Description</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u624" className="ax_default box_1 transition notrs">
            <div id="u624_div" className="" />
            <div id="u624_text" className="text ">
            <p>
                <span>YES</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u625" className="ax_default box_1 transition notrs">
            <div id="u625_div" className="" />
            <div id="u625_text" className="text ">
            <p>
                <span>NO</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u626" className="ax_default box_1 transition notrs">
            <div id="u626_div" className="" />
            <div
            id="u626_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u627" className="ax_default box_1 transition notrs">
            <div id="u627_div" className="" />
            <div
            id="u627_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u628" className="ax_default box_1 transition notrs">
            <div id="u628_div" className="" />
            <div id="u628_text" className="text ">
            <p>
                <span>Function Check</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u629" className="ax_default box_1 transition notrs">
            <div id="u629_div" className="" />
            <div id="u629_text" className="text ">
            <p>
                <span>Leak Check</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u630" className="ax_default box_1 transition notrs">
            <div id="u630_div" className="" />
            <div id="u630_text" className="text ">
            <p>
                <span>Other</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u631" className="ax_default box_1 transition notrs">
            <div id="u631_div" className="" />
            <div
            id="u631_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u632" className="ax_default box_1 transition notrs">
            <div id="u632_div" className="" />
            <div
            id="u632_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u633" className="ax_default box_1 transition notrs">
            <div id="u633_div" className="" />
            <div
            id="u633_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u634" className="ax_default box_1 transition notrs">
            <div id="u634_div" className="" />
            <div
            id="u634_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u635" className="ax_default box_1 transition notrs">
            <div id="u635_div" className="" />
            <div id="u635_text" className="text ">
            <p>
                <span>System(s) Affected and Details of Check</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u636" className="ax_default box_1 transition notrs">
            <div id="u636_div" className="" />
            <div
            id="u636_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u702" className="ax_default box_1 transition notrs">
            <div id="u702_div" className="" />
            <div
            id="u702_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u704" className="ax_default box_1 transition notrs">
            <div id="u704_div" className="" />
            <div
            id="u704_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u637" className="ax_default box_1 transition notrs">
            <div id="u637_div" className="" />
            <div id="u637_text" className="text ">
            <p>
                <span>MAINTENANCE RELEASE</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u638" className="ax_default box_1 transition notrs">
            <div id="u638_div" className="" />
            <div
            id="u638_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u639" className="ax_default box_1 transition notrs">
            <div id="u639_div" className="" />
            <div
            id="u639_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u640" className="ax_default box_1 transition notrs">
            <div id="u640_div" className="" />
            <div
            id="u640_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u641" className="ax_default box_1 transition notrs">
            <div id="u641_div" className="" />
            <div
            id="u641_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u642" className="ax_default box_1 transition notrs">
            <div id="u642_div" className="" />
            <div id="u642_text" className="text ">
            <p>
                <span>&nbsp;Date:</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u643" className="ax_default box_1 transition notrs">
            <div id="u643_div" className="" />
            <div id="u643_text" className="text ">
            <p>
                <span>&nbsp;Time:</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u644" className="ax_default box_1 transition notrs">
            <div id="u644_div" className="" />
            <div id="u644_text" className="text ">
            <p>
                <span>
                The described maintenance has been performed in accordance with the
                applicable airworthiness requirements and is subject to the FOLLOW-ON
                MAINTENANCE CHECKS detailed above.&nbsp; AMO# 2019-14
                </span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u645" className="ax_default box_1 transition notrs">
            <div id="u645_div" className="" />
            <div id="u645_text" className="text ">
            <p>
                <span>SUBJECT TO SATISFACTORY TEST FLIGHT</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u646" className="ax_default box_1 transition notrs">
            <div id="u646_div" className="" />
            <div
            id="u646_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u647" className="ax_default box_1 transition notrs">
            <div id="u647_div" className="" />
            <div id="u647_text" className="text ">
            <p>
                <span>Details of check(s) to be performed during TEST FLIGHT</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u648" className="ax_default paragraph transition notrs">
            <div id="u648_div" className="" />
            <div id="u648_text" className="text ">
            <p>
                <span>Deferred previously reported in Aircraft Technical Log</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u649" className="ax_default paragraph transition notrs">
            <div id="u649_div" className="" />
            <div id="u649_text" className="text ">
            <p>
                <span>IC Required?</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u650" className="ax_default paragraph transition notrs">
            <div id="u650_div" className="" />
            <div id="u650_text" className="text ">
            <p>
                <span>Post Maintenance Inspection</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u651" className="ax_default paragraph transition notrs">
            <div id="u651_div" className="" />
            <div id="u651_text" className="text ">
            <p>
                <span>
                Independent Check (IC) accomplished before Maintenance Release by
                (Signature &amp; ACA):
                </span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u652" className="ax_default paragraph transition notrs">
            <div id="u652_div" className="" />
            <div id="u652_text" className="text ">
            <p>
                <span>Independent Check carried out satisfacotry. AMO# 2019-14</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u653" className="ax_default paragraph transition notrs">
            <div id="u653_div" className="" />
            <div id="u653_text" className="text ">
            <p>
                <span>Task Card certified by (Signatue &amp; ACA):</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u654" className="ax_default paragraph transition notrs">
            <div id="u654_div" className="" />
            <div id="u654_text" className="text ">
            <p>
                <span>Number of attached supporting documents</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u655" className="ax_default paragraph transition notrs">
            <div id="u655_div" className="" />
            <div id="u655_text" className="text ">
            <p>
                <span>Detailed on Task Card ID # </span>
            </p>
            </div>
        </div>
        {/* Task_Card_Inserts (Group) */}
        <div
            id="u656"
            className="ax_default"
            data-label="Task_Card_Inserts"
            data-left={96}
            data-top={18}
            data-width={1003}
            data-height={1480}
            layer-opacity={1}
        >
            {/* Function_Check_Yes (Checkbox) */}
            <CustomCheckbox id="u657" label="FC_Yes" initialChecked={checkboxes.function_check_yes} onChange={handleCheckboxChange}/>
            {/* Leak_Check_Yes (Checkbox) */}
            <CustomCheckbox id="u658" label="LC_Yes" initialChecked={checkboxes.leak_check_yes} onChange={handleCheckboxChange}/>
            {/* Other_Yes (Checkbox) */}
            <CustomCheckbox id="u659" label="Other_Yes" initialChecked={checkboxes.other_yes} onChange={handleCheckboxChange}/>
            {/* Other_No (Checkbox) */}
            <CustomCheckbox id="u660" label="Other_No" initialChecked={checkboxes.other_no} onChange={handleCheckboxChange}/>
            {/* Leak_Check_No (Checkbox) */}
            <CustomCheckbox id="u661" label="LC_No" initialChecked={checkboxes.leak_check_no} onChange={handleCheckboxChange}/>
            {/* Function_Check_No (Checkbox) */}
            <CustomCheckbox id="u662" label="FC_No" initialChecked={checkboxes.function_check_no} onChange={handleCheckboxChange}/>
            {/* Defect_Deferred (Checkbox) */}
            <CustomCheckbox id="u663" label="Defect_Deferred" initialChecked={checkboxes.defect_deferred} onChange={handleCheckboxChange}/>
            {/* Satisfactory_Test_Flight (Checkbox) */}
            <CustomCheckbox id="u664" label="Satisfactory_Test_Flight" initialChecked={checkboxes.satisfactory_test_flight} onChange={handleCheckboxChange}/>
            {/* Reported_In_ATL (Checkbox) */}
            <CustomCheckbox id="u665" label="Deferred_Previsouly" initialChecked={checkboxes.deferred_previously} onChange={handleCheckboxChange}/>
            {/* Page_Sequence_Number (Text field) */}
            <div
            id="u666"
            className="ax_default text_field transition notrs"
            data-label="Page_Sequence_Number"
            >
            <div id="u666_div" className="" />
            <input
                id="u666_input"
                type="text"
                defaultValue=""
                className="u666_input"
            />
            </div>
            {/* Type_MEL (Checkbox) */}
            <CustomCheckbox id="u667" label="MEL" initialChecked={checkboxes.type_mel} onChange={handleCheckboxChange}/>
            {/* Type_Non-MEL (Checkbox) */}
            <CustomCheckbox id="u668" label="NON-MEL" initialChecked={checkboxes.type_non_mel} onChange={handleCheckboxChange}/>
            {/* MEL_Category (Droplist) */}
            <div
            id="u669"
            className="ax_default droplist transition notrs"
            data-label="MEL_Category"
            >
            <div id="u669_div" className="" />
            <select id="u669_input" className="u669_input">
                <option className="u669_input_option" value="N/A">
                N/A
                </option>
                <option className="u669_input_option" value="A">
                A
                </option>
                <option className="u669_input_option" value="B">
                B
                </option>
                <option className="u669_input_option" value="C">
                C
                </option>
                <option className="u669_input_option" value="D">
                D
                </option>
            </select>
            </div>
            {/* IC_Required_Yes (Checkbox) */}
            <CustomCheckbox id="u670" label="Yes" initialChecked={checkboxes.ic_required_yes} onChange={handleCheckboxChange}/>
            {/* IC_Required_No (Checkbox) */}
            <CustomCheckbox id="u671" label="No" initialChecked={checkboxes.ic_required_no} onChange={handleCheckboxChange}/>
            {/* Number_Of_Attached_Documents (Text field) */}
            <div
            id="u672"
            className="ax_default text_field transition notrs"
            data-label="Number_Of_Attached_Documents"
            >
            <div id="u672_div" className="" />
            <input
                id="u672_input"
                type="text"
                defaultValue=""
                className="u672_input"
            />
            </div>
            {/* FC_Task_Card_ID (Text field) */}
            <div
            id="u673"
            className="ax_default text_field transition notrs"
            data-label="FC_Task_Card_ID"
            >
            <div id="u673_div" className="" />
            <input
                id="u673_input"
                type="text"
                defaultValue=""
                className="u673_input"
            />
            </div>
            {/* TaskCard_ID (Text field) */}
            <div
            id="u674"
            className="ax_default text_field transition notrs"
            data-label="TaskCard_ID"
            >
            <div id="u674_div" className="" />
            <input
                id="u674_input"
                type="text"
                defaultValue=""
                className="u674_input"
            />
            </div>
            {/* ATA_Chapter (Text field) */}
            <div
            id="u675"
            className="ax_default text_field transition notrs"
            data-label="ATA_Chapter"
            >
            <div id="u675_div" className="" />
            <input
                id="u675_input"
                type="text"
                defaultValue=""
                className="u675_input"
            />
            </div>
            {/* Title (Text field) */}
            <div
            id="u676"
            className="ax_default text_field transition notrs"
            data-label="Title"
            >
            <div id="u676_div" className="" />
            <input
                id="u676_input"
                type="text"
                defaultValue=""
                className="u676_input"
            />
            </div>
            {/* Aircraft_Type (Text field) */}
            <div
            id="u677"
            className="ax_default text_field transition notrs"
            data-label="Aircraft_Type"
            >
            <div id="u677_div" className="" />
            <input
                id="u677_input"
                type="text"
                defaultValue=""
                className="u677_input"
            />
            </div>
            {/* Registration (Text field) */}
            <div
            id="u678"
            className="ax_default text_field transition notrs"
            data-label="Registration"
            >
            <div id="u678_div" className="" />
            <input
                id="u678_input"
                type="text"
                defaultValue=""
                className="u678_input"
            />
            </div>
            {/* Airframe_Cycles (Text field) */}
            <div
            id="u679"
            className="ax_default text_field transition notrs"
            data-label="Airframe_Cycles"
            >
            <div id="u679_div" className="" />
            <input
                id="u679_input"
                type="text"
                defaultValue=""
                className="u679_input"
            />
            </div>
            {/* Total_Airframe_Time (Text field) */}
            <div
            id="u680"
            className="ax_default text_field transition notrs"
            data-label="Total_Airframe_Time"
            >
            <div id="u680_div" className="" />
            <input
                id="u680_input"
                type="text"
                defaultValue=""
                className="u680_input"
            />
            </div>
            {/* Originated_By (Text field) */}
            <div
            id="u681"
            className="ax_default text_field transition notrs"
            data-label="Originated_By"
            >
            <div id="u681_div" className="" />
            <input
                id="u681_input"
                type="text"
                defaultValue=""
                className="u681_input"
            />
            </div>
            {/* Serial_Number (Text field) */}
            <div
            id="u682"
            className="ax_default text_field transition notrs"
            data-label="Serial_Number"
            >
            <div id="u682_div" className="" />
            <input
                id="u682_input"
                type="text"
                defaultValue=""
                className="u682_input"
            />
            </div>
            {/* Work_Order_Number (Text field) */}
            <div
            id="u683"
            className="ax_default text_field transition notrs"
            data-label="Work_Order_Number"
            >
            <div id="u683_div" className="" />
            <input
                id="u683_input"
                type="text"
                defaultValue=""
                className="u683_input"
            />
            </div>
            {/* Date_Opened (Text field) */}
            <div
            id="u684"
            className="ax_default text_field transition notrs"
            data-label="Date_Opened"
            >
            <div id="u684_div" className="" />
            <input
                id="u684_input"
                type="date"
                defaultValue=""
                className="u684_input"
            />
            </div>
            {/* Maintenance_Required (Text area) */}
            <div
            id="u685"
            className="ax_default text_area transition notrs"
            data-label="Maintenance_Required"
            >
            <div id="u685_div" className="" />
            <textarea id="u685_input" className="u685_input" defaultValue={""} />
            </div>
            {/* Resolution_Description (Text area) */}
            <div
            id="u686"
            className="ax_default text_area transition notrs"
            data-label="Resolution_Description"
            >
            <div id="u686_div" className="" />
            <textarea id="u686_input" className="u686_input" defaultValue={""} />
            </div>
            {/* MEL_ID (Text field) */}
            <div
            id="u687"
            className="ax_default text_field transition notrs"
            data-label="MEL_ID"
            >
            <div id="u687_div" className="" />
            <input
                id="u687_input"
                type="text"
                defaultValue=""
                className="u687_input"
            />
            </div>
            {/* MEL_Due_Date (Text field) */}
            <div
            id="u688"
            className="ax_default text_field transition notrs"
            data-label="MEL_Due_Date"
            >
            <div id="u688_div" className="" />
            <input
                id="u688_input"
                type="date"
                defaultValue=""
                className="u688_input"
            />
            </div>
            {/* MEL_Due_Time (Text field) */}
            <div
            id="u689"
            className="ax_default text_field transition notrs"
            data-label="MEL_Due_Time"
            >
            <div id="u689_div" className="" />
            <input
                id="u689_input"
                type="time"
                defaultValue=""
                className="u689_input"
            />
            </div>
            {/* FC_Systems_Affected (Text field) */}
            <div
            id="u690"
            className="ax_default text_field transition notrs"
            data-label="FC_Systems_Affected"
            >
            <div id="u690_div" className="" />
            <input
                id="u690_input"
                type="text"
                defaultValue=""
                className="u690_input"
            />
            </div>
            {/* Post_Maintenance_Inspection (Text field) */}
            <div
            id="u691"
            className="ax_default text_field transition notrs"
            data-label="Post_Maintenance_Inspection"
            >
            <div id="u691_div" className="" />
            <input
                id="u691_input"
                type="text"
                defaultValue=""
                className="u691_input"
            />
            </div>
            {/* Deferral_Number (Text field) */}
            <div
            id="u692"
            className="ax_default text_field transition notrs"
            data-label="Deferral_Number"
            >
            <div id="u692_div" className="" />
            <input
                id="u692_input"
                type="text"
                defaultValue=""
                className="u692_input"
            />
            </div>
            {/* Task_Card_Certified_By (Text field) */}
            <div
            id="u693"
            className="ax_default text_field transition notrs"
            data-label="Task_Card_Certified_By"
            >
            <div id="u693_div" className="" />
            <input
                id="u693_input"
                type="text"
                defaultValue=""
                className="u693_input"
            />
            </div>
            {/* Task_Card_Certified_Date (Text field) */}
            <div
            id="u694"
            className="ax_default text_field transition notrs"
            data-label="Task_Card_Certified_Date"
            >
            <div id="u694_div" className="" />
            <input
                id="u694_input"
                type="date"
                defaultValue=""
                className="u694_input"
            />
            </div>
            {/* Task_Card_Certified_Time (Text field) */}
            <div
            id="u695"
            className="ax_default text_field transition notrs"
            data-label="Task_Card_Certified_Time"
            >
            <div id="u695_div" className="" />
            <input
                id="u695_input"
                type="time"
                defaultValue=""
                className="u695_input"
            />
            </div>
            {/* Checks_During_Test_Flight (Text field) */}
            <div
            id="u696"
            className="ax_default text_field transition notrs"
            data-label="Checks_During_Test_Flight"
            >
            <div id="u696_div" className="" />
            <input
                id="u696_input"
                type="text"
                defaultValue=""
                className="u696_input"
            />
            </div>
            {/* LC_Task_Card_ID (Text field) */}
            <div
            id="u697"
            className="ax_default text_field transition notrs"
            data-label="LC_Task_Card_ID"
            >
            <div id="u697_div" className="" />
            <input
                id="u697_input"
                type="text"
                defaultValue=""
                className="u697_input"
            />
            </div>
            {/* LC_Systems_Affected (Text field) */}
            <div
            id="u698"
            className="ax_default text_field transition notrs"
            data-label="LC_Systems_Affected"
            >
            <div id="u698_div" className="" />
            <input
                id="u698_input"
                type="text"
                defaultValue=""
                className="u698_input"
            />
            </div>
            {/* Other_Task_Card_ID (Text field) */}
            <div
            id="u699"
            className="ax_default text_field transition notrs"
            data-label="Other_Task_Card_ID"
            >
            <div id="u699_div" className="" />
            <input
                id="u699_input"
                type="text"
                defaultValue=""
                className="u699_input"
            />
            </div>
            {/* Other_Systems_Affected (Text field) */}
            <div
            id="u700"
            className="ax_default text_field transition notrs"
            data-label="Other_Systems_Affected"
            >
            <div id="u700_div" className="" />
            <input
                id="u700_input"
                type="text"
                defaultValue=""
                className="u700_input"
            />
            </div>
        </div>
        {/* Save_Button (Rectangle) */}
        <div
            id="u701"
            className="ax_default shape transition notrs"
            data-label="Save_Button"
            onClick={SaveDocument}
        >
            <div id="u701_div" className="" />
            <div id="u701_text" className="text ">
            <p>
                <span>Save</span>
            </p>
            </div>
        </div>
        <div id="u703" className="ax_default paragraph transition notrs">
            <div id="u703_div" className="" />
            <div id="u703_text" className="text ">
            <p>
                <span>Detailed on Task Card ID # </span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u705" className="ax_default paragraph transition notrs">
            <div id="u705_div" className="" />
            <div id="u705_text" className="text ">
            <p>
                <span>Detailed on Task Card ID # </span>
            </p>
            </div>
        </div>
        {/* Back_Button (Rectangle) */}
        <div
            id="u706"
            className="ax_default shape transition notrs"
            data-label="Back_Button"
            onClick={Back_Button}
        >
            <div id="u706_div" className="" />
            <div id="u706_text" className="text ">
            <p>
                <span>Back</span>
            </p>
            </div>
        </div>
        </div>
    );
};

export default TaskCardPage;