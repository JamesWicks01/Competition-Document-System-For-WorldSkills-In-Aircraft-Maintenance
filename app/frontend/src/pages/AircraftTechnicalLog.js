import './css/AircraftTechnicalLog.css';
import logo from './images/WorldSkills-Logo.png';
import { useState, useEffect } from "react";
import * as authUtils from './Components/authUtils.js';
import * as apiService from './Components/apiService.js';
import CustomCheckbox from "./Components/CheckboxComponent.js";

function AircraftTechnicalLogPage() {

    const [checkboxes, setCheckboxes] = useState({
        function_check: false,
        leak_check: false,
        independent_check: false,
        other_check: false,
    });
    const [isDisabled] = useState(true);

    useEffect(() => {
        async function LoadData() {
          const data = {
            document_id: sessionStorage.getItem("document_id"),
            table: "aircraft_technical_logs"
          };
      
          try {
            const response = await apiService.apiRequest(
              `get-document-data?table=${data.table}&document_id=${data.document_id}`
            );
      
            if (response && typeof response === "object") {
              const form = response; // single object
      
              document.getElementById("u424_input").value = form.page_sequence || "";
              document.getElementById("u426_input").value = form.registration || "";
              document.getElementById("u427_input").value = form.captain || "";
              document.getElementById("u428_input").value = form.captain_signature || "";
              document.getElementById("u429_input").value = form.leg1_date ? form.leg1_date.split("T")[0] : "";
              document.getElementById("u430_input").value = form.leg1_timeup || "";
              document.getElementById("u431_input").value = form.leg1_timedown || "";
              document.getElementById("u432_input").value = form.leg1_airtime || "";
              document.getElementById("u433_input").value = form.leg1_from || "";
              document.getElementById("u434_input").value = form.leg1_to || "";
              document.getElementById("u435_input").value = form.leg2_date ? form.leg2_date.split("T")[0] : "";
              document.getElementById("u436_input").value = form.leg2_timeup || "";
              document.getElementById("u437_input").value = form.leg2_timedown || "";
              document.getElementById("u438_input").value = form.leg2_airtime || "";
              document.getElementById("u439_input").value = form.leg2_from || "";
              document.getElementById("u440_input").value = form.leg2_to || "";
              document.getElementById("u441_input").value = form.total_bftime || "";
              document.getElementById("u442_input").value = form.total_airtime || "";
              document.getElementById("u443_input").value = form.total_time || "";
              document.getElementById("u444_input").value = form.defects || "";
              document.getElementById("u445_input").value = form.reported_by || "";
              document.getElementById("u446_input").value = form.reported_date ? form.reported_date.split("T")[0] : "";
              document.getElementById("u448_input").value = form.work_order_summary_number || "";
              document.getElementById("u449_input").value = form.resolutions || "";
              document.getElementById("u450_input").value = form.resolved_by || "";
              document.getElementById("u451_input").value = form.resolved_date ? form.resolved_date.split("T")[0] : "";
              document.getElementById("u452_input").value = form.part_number || "";
              document.getElementById("u453_input").value = form.serial_number_on || "";
              document.getElementById("u454_input").value = form.serial_number_off || "";
              document.getElementById("u455_input").value = form.batch_number || "";
              document.getElementById("u456_input").value = form.deferral_number || "";
              document.getElementById("u457_input").value = form.mel || "";
              document.getElementById("u458_input").value = form.category || "";
              document.getElementById("u459_input").value = form.independent_checkby || "";
              document.getElementById("u460_input").value = form.independent_checkdate ? form.independent_checkdate.split("T")[0] : "";
              document.getElementById("u461_input").value = form.release_by || "";
              document.getElementById("u462_input").value = form.release_date || "";
      
              setCheckboxes({
                function_check: form.function_check === 1,
                leak_check: form.leak_check === 1,
                independent_check: form.independent_check === 1,
                other_check: form.other_check === 1
              });
            }
          } catch (error) {
            console.error("Error loading data:", error);
          }
        }
      
        LoadData();
        authUtils.CheckLoggedIn();
        authUtils.CheckAccess();
        authUtils.CheckSession();        
      }, []);

    const handleCheckboxChange = (id, value) => {
        setCheckboxes((prev) => ({ ...prev, [id]: value }));
     };
     
    function Back_Button() {
        sessionStorage.removeItem("document_id");
        authUtils.Back();
    }

     async function SaveATL() {
        const pageSequence = document.getElementById("u424_input");
        const registrationNumber = document.getElementById("u426_input");
        const captainName = document.getElementById("u427_input");
        const captainSignature = document.getElementById("u428_input");
        const Leg1Date = document.getElementById("u429_input");
        const Leg1TimeUp = document.getElementById("u430_input");
        const Leg1TimeDown = document.getElementById("u431_input");
        const Leg1AirTime = document.getElementById("u432_input");
        const Leg1From = document.getElementById("u433_input");
        const Leg1To = document.getElementById("u434_input");
        const Leg2Date = document.getElementById("u435_input");
        const Leg2TimeUp = document.getElementById("u436_input");
        const Leg2TimeDown = document.getElementById("u437_input");
        const Leg2AirTime = document.getElementById("u438_input");
        const Leg2From = document.getElementById("u439_input");
        const Leg2To = document.getElementById("u440_input");
        const totalTimeBFFlight = document.getElementById("u441_input");
        const totalAirTime = document.getElementById("u442_input");
        const totalTime = document.getElementById("u443_input");
        const defects = document.getElementById("u444_input");
        const reportedBy = document.getElementById("u445_input");
        const reportedByDate = document.getElementById("u446_input");
        const workOrderSummaryNumber = document.getElementById("u448_input");
        const resolutions = document.getElementById("u449_input");
        const resolvedBy = document.getElementById("u450_input");
        const resolvedByDate = document.getElementById("u451_input");
        const partNumber = document.getElementById("u452_input");
        const serialNumberOn = document.getElementById("u453_input");
        const serialNumberOff = document.getElementById("u454_input");
        const batchNumber = document.getElementById("u455_input");
        const deferralNumber = document.getElementById("u456_input");
        const mel = document.getElementById("u457_input");
        const cat = document.getElementById("u458_input");
        const independentCheckBy = document.getElementById("u459_input");
        const independentCheckDate = document.getElementById("u460_input");
        const readyForReleaseBy = document.getElementById("u461_input");
        const readyForReleaseDate = document.getElementById("u462_input");
        const functionCheck = document.getElementById("u463_input");
        const leakCheck = document.getElementById("u464_input");
        const independentCheck = document.getElementById("u465_input");
        const otherCheck = document.getElementById("u466_input");


        const data = {
            "registration": registrationNumber.value.trim(),
            "captain": captainName.value.trim(),
            "captain_signature": captainSignature.value.trim(),
            "page_sequence": pageSequence.value.trim(),
            "leg1_date": Leg1Date.value.trim(),
            "leg1_timeup": Leg1TimeUp.value.trim(),
            "leg1_timedown": Leg1TimeDown.value.trim(),
            "leg1_airtime": Leg1AirTime.value.trim(),
            "leg1_from": Leg1From.value.trim(),
            "leg1_to": Leg1To.value.trim(),
            "leg2_date": Leg2Date.value.trim(),
            "leg2_timeup": Leg2TimeUp.value.trim(),
            "leg2_timedown": Leg2TimeDown.value.trim(),
            "leg2_airtime": Leg2AirTime.value.trim(),
            "leg2_from": Leg2From.value.trim(),
            "leg2_to": Leg2To.value.trim(),
            "total_bftime": totalTimeBFFlight.value.trim(),
            "total_airtime": totalAirTime.value.trim(),
            "total_time": totalTime.value.trim(),
            "defects": defects.value.trim(),
            "reported_by": reportedBy.value.trim(),
            "reported_date": reportedByDate.value.trim(),
            "work_order_summary_number": workOrderSummaryNumber.value.trim(),
            "resolutions": resolutions.value.trim(),
            "resolved_by": resolvedBy.value.trim(),
            "resolved_date": resolvedByDate.value.trim(),
            "part_number": partNumber.value.trim(),
            "serial_number_on": serialNumberOn.value.trim(),
            "serial_number_off": serialNumberOff.value.trim(),
            "batch_number": batchNumber.value.trim(),
            "deferral_number": deferralNumber.value.trim(),
            "mel": mel.value.trim(),
            "category": cat.value.trim(),
            "leak_check": leakCheck.checked,
            "function_check": functionCheck.checked,
            "independent_check": independentCheck.checked,
            "other_check": otherCheck.checked,
            "independent_checkby": independentCheckBy.value.trim(),
            "independent_checkdate": independentCheckDate.value.trim(),
            "release_by": readyForReleaseBy.value.trim(),
            "release_date": readyForReleaseDate.value.trim(),
            "document_id": sessionStorage.getItem("document_id")
        };
        try {
            const response = await apiService.apiRequest("update-document-data", "POST", {document_type:"ATL", data:data});
            if (response) {
                alert("Aircraft Technical Log Saved Successfully");
            }
        } catch (error) {
            alert(error.message);
        }
     }

    return(
        <div id="base" className="">
        {/* ATL_Style (Group) */}
        <div
            id="u376"
            className="ax_default"
            data-label="ATL_Style"
            data-left={6}
            data-top={7}
            data-width={1183}
            data-height={773}
            layer-opacity={1}
        >
            {/* Unnamed (Rectangle) */}
            <div id="u377" className="ax_default box_3 transition notrs">
            <div id="u377_div" className="" />
            <div
                id="u377_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u378" className="ax_default box_3 transition notrs">
            <div id="u378_div" className="" />
            <div id="u378_text" className="text ">
                <p>
                <span>AIRCRAFT TECHNICAL LOG</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u379" className="ax_default box_3 transition notrs">
            <div id="u379_div" className="" />
            <div id="u379_text" className="text ">
                <p>
                <span>REGISTRATION #</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u380" className="ax_default box_3 transition notrs">
            <div id="u380_div" className="" />
            <div id="u380_text" className="text ">
                <p>
                <span>CAPTAIN</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u381" className="ax_default box_3 transition notrs">
            <div id="u381_div" className="" />
            <div id="u381_text" className="text ">
                <p>
                <span>SIGNATURE</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u382" className="ax_default box_3 transition notrs">
            <div id="u382_div" className="" />
            <div id="u382_text" className="text ">
                <p>
                <span>PAGE SEQUENCE</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u383" className="ax_default box_3 transition notrs">
            <div id="u383_div" className="" />
            <div
                id="u383_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u384" className="ax_default box_3 transition notrs">
            <div id="u384_div" className="" />
            <div id="u384_text" className="text ">
                <p>
                <span>LEG</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u385" className="ax_default box_3 transition notrs">
            <div id="u385_div" className="" />
            <div id="u385_text" className="text ">
                <p>
                <span>1</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u386" className="ax_default box_3 transition notrs">
            <div id="u386_div" className="" />
            <div id="u386_text" className="text ">
                <p>
                <span>2</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u387" className="ax_default box_3 transition notrs">
            <div id="u387_div" className="" />
            <div id="u387_text" className="text ">
                <p>
                <span>DATE</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u388" className="ax_default box_3 transition notrs">
            <div id="u388_div" className="" />
            <div id="u388_text" className="text ">
                <p>
                <span>TIME UP (UTC)</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u389" className="ax_default box_3 transition notrs">
            <div id="u389_div" className="" />
            <div id="u389_text" className="text ">
                <p>
                <span>TIME DOWN (UTC)</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u390" className="ax_default box_3 transition notrs">
            <div id="u390_div" className="" />
            <div id="u390_text" className="text ">
                <p>
                <span>AIR TIME</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u391" className="ax_default box_3 transition notrs">
            <div id="u391_div" className="" />
            <div id="u391_text" className="text ">
                <p>
                <span>FROM</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u392" className="ax_default box_3 transition notrs">
            <div id="u392_div" className="" />
            <div id="u392_text" className="text ">
                <p>
                <span>TO</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u393" className="ax_default box_3 transition notrs">
            <div id="u393_div" className="" />
            <div
                id="u393_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u394" className="ax_default box_3 transition notrs">
            <div id="u394_div" className="" />
            <div id="u394_text" className="text ">
                <p>
                <span>TOTAL TIME B/F FLIGHT</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u395" className="ax_default box_3 transition notrs">
            <div id="u395_div" className="" />
            <div id="u395_text" className="text ">
                <p>
                <span>TOTAL AIR TIME</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u396" className="ax_default box_3 transition notrs">
            <div id="u396_div" className="" />
            <div id="u396_text" className="text ">
                <p>
                <span>TOTAL TIME</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u397" className="ax_default box_3 transition notrs">
            <div id="u397_div" className="" />
            <div
                id="u397_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u398" className="ax_default box_3 transition notrs">
            <div id="u398_div" className="" />
            <div id="u398_text" className="text ">
                <p>
                <span>REPORTED BY</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u399" className="ax_default box_3 transition notrs">
            <div id="u399_div" className="" />
            <div id="u399_text" className="text ">
                <p>
                <span>WORK ORDER SUMMARY #</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u400" className="ax_default box_3 transition notrs">
            <div id="u400_div" className="" />
            <div
                id="u400_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u401" className="ax_default box_3 transition notrs">
            <div id="u401_div" className="" />
            <div id="u401_text" className="text ">
                <p>
                <span>DATE:</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u402" className="ax_default box_3 transition notrs">
            <div id="u402_div" className="" />
            <div
                id="u402_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u403" className="ax_default box_3 transition notrs">
            <div id="u403_div" className="" />
            <div id="u403_text" className="text ">
                <p>
                <span>RESOLVED BY</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u404" className="ax_default box_3 transition notrs">
            <div id="u404_div" className="" />
            <div id="u404_text" className="text ">
                <p>
                <span>DATE:</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u405" className="ax_default box_3 transition notrs">
            <div id="u405_div" className="" />
            <div id="u405_text" className="text ">
                <p>
                <span>P/N</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u406" className="ax_default box_3 transition notrs">
            <div id="u406_div" className="" />
            <div id="u406_text" className="text ">
                <p>
                <span>DEFERRAL #</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u407" className="ax_default box_3 transition notrs">
            <div id="u407_div" className="" />
            <div
                id="u407_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u408" className="ax_default box_3 transition notrs">
            <div id="u408_div" className="" />
            <div id="u408_text" className="text ">
                <p>
                <span>
                    Independent Check accomplished before Maintenance Release by
                </span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u409" className="ax_default box_3 transition notrs">
            <div id="u409_div" className="" />
            <div id="u409_text" className="text ">
                <p>
                <span>
                    Certifies that the work specified except as otherwise specified was
                    the requirement of the Air Navigation Act and in respect to that
                    work the aircraft/engine/aircraft component is considered ready for
                    release to service
                </span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u410" className="ax_default box_3 transition notrs">
            <div id="u410_div" className="" />
            <div id="u410_text" className="text ">
                <p>
                <span>S/N ON</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u411" className="ax_default box_3 transition notrs">
            <div id="u411_div" className="" />
            <div id="u411_text" className="text ">
                <p>
                <span>MEL</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u412" className="ax_default box_3 transition notrs">
            <div id="u412_div" className="" />
            <div
                id="u412_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u413" className="ax_default box_3 transition notrs">
            <div id="u413_div" className="" />
            <div id="u413_text" className="text ">
                <p>
                <span>S/N OFF</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u414" className="ax_default box_3 transition notrs">
            <div id="u414_div" className="" />
            <div id="u414_text" className="text ">
                <p>
                <span>CAT</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u415" className="ax_default box_3 transition notrs">
            <div id="u415_div" className="" />
            <div
                id="u415_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u416" className="ax_default box_3 transition notrs">
            <div id="u416_div" className="" />
            <div id="u416_text" className="text ">
                <p>
                <span>BATCH #</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u417" className="ax_default box_3 transition notrs">
            <div id="u417_div" className="" />
            <div
                id="u417_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u418" className="ax_default paragraph transition notrs">
            <div id="u418_div" className="" />
            <div id="u418_text" className="text ">
                <p>
                <span>FLIGHT DETAILS</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u419" className="ax_default paragraph transition notrs">
            <div id="u419_div" className="" />
            <div id="u419_text" className="text ">
                <p>
                <span>TIME</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u420" className="ax_default paragraph transition notrs">
            <div id="u420_div" className="" />
            <div id="u420_text" className="text ">
                <p>
                <span>DEFECT/MAINT</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u421" className="ax_default paragraph transition notrs">
            <div id="u421_div" className="" />
            <div id="u421_text" className="text ">
                <p>
                <span>RESOLUTION</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Image) */}
            <div id="u422" className="ax_default image transition notrs">
            <img id="u422_img" className="img " src={logo} alt='' />
            <div
                id="u422_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
        </div>
        {/* ATL_Inputs (Group) */}
        <div
            id="u423"
            className="ax_default"
            data-label="ATL_Inputs"
            data-left={66}
            data-top={7}
            data-width={1123}
            data-height={773}
            layer-opacity={1}
        >
            {/* Page_Sequence (Text field) */}
            <div
            id="u424"
            className="ax_default text_field transition notrs"
            data-label="Page_Sequence"
            >
            <div id="u424_div" className="" />
            <input
                id="u424_input"
                type="text"
                defaultValue=""
                className="u424_input"
            />
            </div>
            {/* Create_ATL_Only_Inputs (Group) */}
            <div
            id="u425"
            className="ax_default"
            data-label="Create_ATL_Only_Inputs"
            data-left={66}
            data-top={7}
            data-width={1123}
            data-height={420}
            layer-opacity={1}
            >
            {/* Registration_Number (Text field) */}
            <div
                id="u426"
                className="ax_default text_field transition notrs"
                data-label="Registration_Number"
            >
                <div id="u426_div" className="" />
                <input
                id="u426_input"
                type="text"
                defaultValue=""
                className="u426_input"
                disabled={isDisabled}
                />
            </div>
            {/* Captain_Name (Text field) */}
            <div
                id="u427"
                className="ax_default text_field transition notrs"
                data-label="Captain_Name"
            >
                <div id="u427_div" className="" />
                <input
                id="u427_input"
                type="text"
                defaultValue=""
                className="u427_input"
                disabled={isDisabled}
                />
            </div>
            {/* Captain_Signature (Text field) */}
            <div
                id="u428"
                className="ax_default text_field transition notrs"
                data-label="Captain_Signature"
            >
                <div id="u428_div" className="" />
                <input
                id="u428_input"
                type="text"
                defaultValue=""
                className="u428_input"
                disabled={isDisabled}
                />
            </div>
            {/* Leg1_Date (Text field) */}
            <div
                id="u429"
                className="ax_default text_field transition notrs"
                data-label="Leg1_Date"
            >
                <div id="u429_div" className="" />
                <input
                id="u429_input"
                type="date"
                defaultValue=""
                className="u429_input"
                disabled={isDisabled}
                />
            </div>
            {/* Leg1_TimeUp (Text field) */}
            <div
                id="u430"
                className="ax_default text_field transition notrs"
                data-label="Leg1_TimeUp"
            >
                <div id="u430_div" className="" />
                <input
                id="u430_input"
                type="time"
                defaultValue=""
                className="u430_input"
                disabled={isDisabled}
                />
            </div>
            {/* Leg1_TimeDown (Text field) */}
            <div
                id="u431"
                className="ax_default text_field transition notrs"
                data-label="Leg1_TimeDown"
            >
                <div id="u431_div" className="" />
                <input
                id="u431_input"
                type="time"
                defaultValue=""
                className="u431_input"
                disabled={isDisabled}
                />
            </div>
            {/* Leg1_AirTime (Text field) */}
            <div
                id="u432"
                className="ax_default text_field transition notrs"
                data-label="Leg1_AirTime"
            >
                <div id="u432_div" className="" />
                <input
                id="u432_input"
                type="time"
                defaultValue=""
                className="u432_input"
                disabled={isDisabled}
                />
            </div>
            {/* Leg1_From (Text field) */}
            <div
                id="u433"
                className="ax_default text_field transition notrs"
                data-label="Leg1_From"
            >
                <div id="u433_div" className="" />
                <input
                id="u433_input"
                type="text"
                defaultValue=""
                className="u433_input"
                disabled={isDisabled}
                />
            </div>
            {/* Leg1_To (Text field) */}
            <div
                id="u434"
                className="ax_default text_field transition notrs"
                data-label="Leg1_To"
            >
                <div id="u434_div" className="" />
                <input
                id="u434_input"
                type="text"
                defaultValue=""
                className="u434_input"
                disabled={isDisabled}
                />
            </div>
            {/* Leg2_Date (Text field) */}
            <div
                id="u435"
                className="ax_default text_field transition notrs"
                data-label="Leg2_Date"
            >
                <div id="u435_div" className="" />
                <input
                id="u435_input"
                type="date"
                defaultValue=""
                className="u435_input"
                disabled={isDisabled}
                />
            </div>
            {/* Leg2_TimeUp (Text field) */}
            <div
                id="u436"
                className="ax_default text_field transition notrs"
                data-label="Leg2_TimeUp"
            >
                <div id="u436_div" className="" />
                <input
                id="u436_input"
                type="time"
                defaultValue=""
                className="u436_input"
                disabled={isDisabled}
                />
            </div>
            {/* Leg2_TimeDown (Text field) */}
            <div
                id="u437"
                className="ax_default text_field transition notrs"
                data-label="Leg2_TimeDown"
            >
                <div id="u437_div" className="" />
                <input
                id="u437_input"
                type="time"
                defaultValue=""
                className="u437_input"
                disabled={isDisabled}
                />
            </div>
            {/* Leg2_AirTime (Text field) */}
            <div
                id="u438"
                className="ax_default text_field transition notrs"
                data-label="Leg2_AirTime"
            >
                <div id="u438_div" className="" />
                <input
                id="u438_input"
                type="time"
                defaultValue=""
                className="u438_input"
                disabled={isDisabled}
                />
            </div>
            {/* Leg2_From (Text field) */}
            <div
                id="u439"
                className="ax_default text_field transition notrs"
                data-label="Leg2_From"
            >
                <div id="u439_div" className="" />
                <input
                id="u439_input"
                type="text"
                defaultValue=""
                className="u439_input"
                disabled={isDisabled}
                />
            </div>
            {/* Leg2_To (Text field) */}
            <div
                id="u440"
                className="ax_default text_field transition notrs"
                data-label="Leg2_To"
            >
                <div id="u440_div" className="" />
                <input
                id="u440_input"
                type="text"
                defaultValue=""
                className="u440_input"
                disabled={isDisabled}
                />
            </div>
            {/* Total_Time_BF_Flight (Text field) */}
            <div
                id="u441"
                className="ax_default text_field transition notrs"
                data-label="Total_Time_BF_Flight"
            >
                <div id="u441_div" className="" />
                <input
                id="u441_input"
                type="time"
                defaultValue=""
                className="u441_input"
                disabled={isDisabled}
                />
            </div>
            {/* Total_Air_Time (Text field) */}
            <div
                id="u442"
                className="ax_default text_field transition notrs"
                data-label="Total_Air_Time"
            >
                <div id="u442_div" className="" />
                <input
                id="u442_input"
                type="time"
                defaultValue=""
                className="u442_input"
                disabled={isDisabled}
                />
            </div>
            {/* Total_Time (Text field) */}
            <div
                id="u443"
                className="ax_default text_field transition notrs"
                data-label="Total_Time"
            >
                <div id="u443_div" className="" />
                <input
                id="u443_input"
                type="time"
                defaultValue=""
                className="u443_input"
                disabled={isDisabled}
                />
            </div>
            {/* Defects (Text area) */}
            <div
                id="u444"
                className="ax_default text_area transition notrs"
                data-label="Defects"
            >
                <div id="u444_div" className="" />
                <textarea id="u444_input" className="u444_input" defaultValue={""} disabled={isDisabled}/>
            </div>
            {/* Reported_By (Text field) */}
            <div
                id="u445"
                className="ax_default text_field transition notrs"
                data-label="Reported_By"
            >
                <div id="u445_div" className="" />
                <input
                id="u445_input"
                type="text"
                defaultValue=""
                className="u445_input"
                disabled={isDisabled}
                />
            </div>
            {/* Reported_By_Date (Text field) */}
            <div
                id="u446"
                className="ax_default text_field transition notrs"
                data-label="Reported_By_Date"
            >
                <div id="u446_div" className="" />
                <input
                id="u446_input"
                type="date"
                defaultValue=""
                className="u446_input"
                disabled={isDisabled}
                />
            </div>
            </div>
            {/* Competitor_ATL_Inputs (Group) */}
            <div
            id="u447"
            className="ax_default"
            data-label="Competitor_ATL_Inputs"
            data-left={66}
            data-top={391}
            data-width={1123}
            data-height={389}
            layer-opacity={1}
            >
            {/* Work_Order_Summary_Number (Text field) */}
            <div
                id="u448"
                className="ax_default text_field transition notrs"
                data-label="Work_Order_Summary_Number"
            >
                <div id="u448_div" className="" />
                <input
                id="u448_input"
                type="text"
                defaultValue=""
                className="u448_input"
                />
            </div>
            {/* Resolutions (Text area) */}
            <div
                id="u449"
                className="ax_default text_area transition notrs"
                data-label="Resolutions"
            >
                <div id="u449_div" className="" />
                <textarea id="u449_input" className="u449_input" defaultValue={""} />
            </div>
            {/* Resolved_By (Text field) */}
            <div
                id="u450"
                className="ax_default text_field transition notrs"
                data-label="Resolved_By"
            >
                <div id="u450_div" className="" />
                <input
                id="u450_input"
                type="text"
                defaultValue=""
                className="u450_input"
                />
            </div>
            {/* Resolved_By_Date (Text field) */}
            <div
                id="u451"
                className="ax_default text_field transition notrs"
                data-label="Resolved_By_Date"
            >
                <div id="u451_div" className="" />
                <input
                id="u451_input"
                type="date"
                defaultValue=""
                className="u451_input"
                />
            </div>
            {/* Part_Number (Text field) */}
            <div
                id="u452"
                className="ax_default text_field transition notrs"
                data-label="Part_Number"
            >
                <div id="u452_div" className="" />
                <input
                id="u452_input"
                type="text"
                defaultValue=""
                className="u452_input"
                />
            </div>
            {/* Serial_Number_On (Text field) */}
            <div
                id="u453"
                className="ax_default text_field transition notrs"
                data-label="Serial_Number_On"
            >
                <div id="u453_div" className="" />
                <input
                id="u453_input"
                type="text"
                defaultValue=""
                className="u453_input"
                />
            </div>
            {/* Serial_Number_Off (Text field) */}
            <div
                id="u454"
                className="ax_default text_field transition notrs"
                data-label="Serial_Number_Off"
            >
                <div id="u454_div" className="" />
                <input
                id="u454_input"
                type="text"
                defaultValue=""
                className="u454_input"
                />
            </div>
            {/* Batch_Number (Text field) */}
            <div
                id="u455"
                className="ax_default text_field transition notrs"
                data-label="Batch_Number"
            >
                <div id="u455_div" className="" />
                <input
                id="u455_input"
                type="text"
                defaultValue=""
                className="u455_input"
                />
            </div>
            {/* Deferral_Number (Text field) */}
            <div
                id="u456"
                className="ax_default text_field transition notrs"
                data-label="Deferral_Number"
            >
                <div id="u456_div" className="" />
                <input
                id="u456_input"
                type="text"
                defaultValue=""
                className="u456_input"
                />
            </div>
            {/* Minimum_Equipment_List (Text field) */}
            <div
                id="u457"
                className="ax_default text_field transition notrs"
                data-label="Minimum_Equipment_List"
            >
                <div id="u457_div" className="" />
                <input
                id="u457_input"
                type="text"
                defaultValue=""
                className="u457_input"
                />
            </div>
            {/* Category (Droplist) */}
            <div
                id="u458"
                className="ax_default droplist transition notrs"
                data-label="Category"
            >
                <div id="u458_div" className="" />
                <select id="u458_input" className="u458_input">
                <option className="u458_input_option" value="N/A">
                    N/A
                </option>
                <option className="u458_input_option" value="A">
                    A
                </option>
                <option className="u458_input_option" value="B">
                    B
                </option>
                <option className="u458_input_option" value="C">
                    C
                </option>
                <option className="u458_input_option" value="D">
                    D
                </option>
                <option className="u458_input_option" value="P">
                    P
                </option>
                </select>
            </div>
            {/* Independent_Check_By (Text field) */}
            <div
                id="u459"
                className="ax_default text_field transition notrs"
                data-label="Independent_Check_By"
            >
                <div id="u459_div" className="" />
                <input
                id="u459_input"
                type="text"
                defaultValue=""
                className="u459_input"
                />
            </div>
            {/* Independent_Check_By_Date (Text field) */}
            <div
                id="u460"
                className="ax_default text_field transition notrs"
                data-label="Independent_Check_By_Date"
            >
                <div id="u460_div" className="" />
                <input
                id="u460_input"
                type="date"
                defaultValue=""
                className="u460_input"
                />
            </div>
            {/* Ready_For_Release_By (Text field) */}
            <div
                id="u461"
                className="ax_default text_field transition notrs"
                data-label="Ready_For_Release_By"
            >
                <div id="u461_div" className="" />
                <input
                id="u461_input"
                type="text"
                defaultValue=""
                className="u461_input"
                />
            </div>
            {/* Ready_For_Release_By_Date (Text field) */}
            <div
                id="u462"
                className="ax_default text_field transition notrs"
                data-label="Ready_For_Release_By_Date"
            >
                <div id="u462_div" className="" />
                <input
                id="u462_input"
                type="date"
                defaultValue=""
                className="u462_input"
                />
            </div>
            {/* Function_Check (Checkbox) */}
            <CustomCheckbox id="u463" label="Function Check" initialChecked={checkboxes.function_check} onChange={handleCheckboxChange}/>
            {/* Leak_Check (Checkbox) */}
            <CustomCheckbox id="u464" label="Leak Check" initialChecked={checkboxes.leak_check} onChange={handleCheckboxChange}/>
            {/* Independent Check (Checkbox) */}
            <CustomCheckbox id="u465" label="Independent Check" initialChecked={checkboxes.independent_check} onChange={handleCheckboxChange}/>
            {/* Other_Check (Checkbox) */}
            <CustomCheckbox id="u466" label="Other" initialChecked={checkboxes.other_check} onChange={handleCheckboxChange}/>
            </div>
        </div>
        {/* Back_Button (Rectangle) */}
        <div
            id="u467"
            className="ax_default shape transition notrs"
            data-label="Back_Button"
            onClick={Back_Button}
        >
            <div id="u467_div" className="" />
            <div id="u467_text" className="text ">
            <p>
                <span>Back</span>
            </p>
            </div>
        </div>
        {/* Save_Button (Rectangle) */}
        <div
            id="u468"
            className="ax_default shape transition notrs"
            data-label="Save_Button"
            onClick={SaveATL}
        >
            <div id="u468_div" className="" />
            <div id="u468_text" className="text ">
            <p>
                <span>Save</span>
            </p>
            </div>
        </div>
        </div>     
    );
};

export default AircraftTechnicalLogPage;