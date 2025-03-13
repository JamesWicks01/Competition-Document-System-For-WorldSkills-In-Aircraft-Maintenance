import './css/AircraftTechnicalLog.css';
import logo from './images/WorldSkills-Logo.png';
import { useEffect } from 'react';
import * as authUtils from './authUtils.js';

function AircraftTechnicalLogPage() {

    useEffect(() => {
        authUtils.CheckLoggedIn();
        authUtils.CheckAccess();
     }, []);

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
                />
            </div>
            {/* Defects (Text area) */}
            <div
                id="u444"
                className="ax_default text_area transition notrs"
                data-label="Defects"
            >
                <div id="u444_div" className="" />
                <textarea id="u444_input" className="u444_input" defaultValue={""} />
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
            <div
                id="u463"
                className="ax_default checkbox"
                data-label="Function_Check"
            >
                <label
                id="u463_input_label"
                htmlFor="u463_input"
                style={{ position: "absolute", left: 0 }}
                >
                <svg
                    data="images/aircraft_technical_log_create/function_check_u364.svg"
                    id="u463_img"
                    className="img "
                    viewBox="543 646 13 13"
                >
                    <path
                    d="M 543 646  L 556 646  L 556 659  L 543 659  L 543 646  Z "
                    fillRule="nonzero"
                    fill="rgba(255, 255, 255, 1)"
                    stroke="none"
                    className="fill"
                    />
                    <path
                    d="M 543.5 646.5  L 555.5 646.5  L 555.5 658.5  L 543.5 658.5  L 543.5 646.5  Z "
                    strokeWidth={1}
                    strokeDasharray={0}
                    stroke="rgba(121, 121, 121, 1)"
                    fill="none"
                    className="stroke"
                    strokeDashoffset="0.5"
                    />
                    <path
                    d="M 545.7857142857143 652.5  L 548.5714285714286 655.2857142857142  L 553.2142857142857 648.7857142857143  "
                    strokeWidth="2.7857142857142856"
                    strokeDasharray={0}
                    stroke="rgba(121, 121, 121, 1)"
                    fill="none"
                    className="stroke btn_check"
                    />
                </svg>
                <div id="u463_text" className="text ">
                    <p>
                    <span>Function Check</span>
                    </p>
                </div>
                </label>
                <input id="u463_input" type="checkbox" defaultValue="checkbox" />
            </div>
            {/* Leak_Check (Checkbox) */}
            <div id="u464" className="ax_default checkbox" data-label="Leak_Check">
                <label
                id="u464_input_label"
                htmlFor="u464_input"
                style={{ position: "absolute", left: 0 }}
                >
                <svg
                    data="images/aircraft_technical_log_create/leak_check_u365.svg"
                    id="u464_img"
                    className="img "
                    viewBox="551 682 13 13"
                >
                    <path
                    d="M 551 682  L 564 682  L 564 695  L 551 695  L 551 682  Z "
                    fillRule="nonzero"
                    fill="rgba(255, 255, 255, 1)"
                    stroke="none"
                    className="fill"
                    />
                    <path
                    d="M 551.5 682.5  L 563.5 682.5  L 563.5 694.5  L 551.5 694.5  L 551.5 682.5  Z "
                    strokeWidth={1}
                    strokeDasharray={0}
                    stroke="rgba(121, 121, 121, 1)"
                    fill="none"
                    className="stroke"
                    strokeDashoffset="0.5"
                    />
                    <path
                    d="M 553.7857142857143 688.5  L 556.5714285714286 691.2857142857142  L 561.2142857142857 684.7857142857143  "
                    strokeWidth="2.7857142857142856"
                    strokeDasharray={0}
                    stroke="rgba(121, 121, 121, 1)"
                    fill="none"
                    className="stroke btn_check"
                    />
                </svg>
                <div id="u464_text" className="text ">
                    <p>
                    <span>Leak Check</span>
                    </p>
                </div>
                </label>
                <input id="u464_input" type="checkbox" defaultValue="checkbox" />
            </div>
            {/* Independent Check (Checkbox) */}
            <div
                id="u465"
                className="ax_default checkbox"
                data-label="Independent Check"
            >
                <label
                id="u465_input_label"
                htmlFor="u465_input"
                style={{ position: "absolute", left: 0 }}
                >
                <svg
                    data="images/aircraft_technical_log_create/independent_check_u366.svg"
                    id="u465_img"
                    className="img "
                    viewBox="531 718 13 13"
                >
                    <path
                    d="M 531 718  L 544 718  L 544 731  L 531 731  L 531 718  Z "
                    fillRule="nonzero"
                    fill="rgba(255, 255, 255, 1)"
                    stroke="none"
                    className="fill"
                    />
                    <path
                    d="M 531.5 718.5  L 543.5 718.5  L 543.5 730.5  L 531.5 730.5  L 531.5 718.5  Z "
                    strokeWidth={1}
                    strokeDasharray={0}
                    stroke="rgba(121, 121, 121, 1)"
                    fill="none"
                    className="stroke"
                    strokeDashoffset="0.5"
                    />
                    <path
                    d="M 533.7857142857143 724.5  L 536.5714285714286 727.2857142857142  L 541.2142857142857 720.7857142857143  "
                    strokeWidth="2.7857142857142856"
                    strokeDasharray={0}
                    stroke="rgba(121, 121, 121, 1)"
                    fill="none"
                    className="stroke btn_check"
                    />
                </svg>
                <div id="u465_text" className="text ">
                    <p>
                    <span>Independent Check</span>
                    </p>
                </div>
                </label>
                <input id="u465_input" type="checkbox" defaultValue="checkbox" />
            </div>
            {/* Other_Check (Checkbox) */}
            <div id="u466" className="ax_default checkbox" data-label="Other_Check">
                <label
                id="u466_input_label"
                htmlFor="u466_input"
                style={{ position: "absolute", left: 0 }}
                >
                <svg
                    data="images/aircraft_technical_log_create/other_check_u367.svg"
                    id="u466_img"
                    className="img "
                    viewBox="574 754 13 13"
                >
                    <path
                    d="M 574 754  L 587 754  L 587 767  L 574 767  L 574 754  Z "
                    fillRule="nonzero"
                    fill="rgba(255, 255, 255, 1)"
                    stroke="none"
                    className="fill"
                    />
                    <path
                    d="M 574.5 754.5  L 586.5 754.5  L 586.5 766.5  L 574.5 766.5  L 574.5 754.5  Z "
                    strokeWidth={1}
                    strokeDasharray={0}
                    stroke="rgba(121, 121, 121, 1)"
                    fill="none"
                    className="stroke"
                    strokeDashoffset="0.5"
                    />
                    <path
                    d="M 576.7857142857143 760.5  L 579.5714285714286 763.2857142857142  L 584.2142857142857 756.7857142857143  "
                    strokeWidth="2.7857142857142856"
                    strokeDasharray={0}
                    stroke="rgba(121, 121, 121, 1)"
                    fill="none"
                    className="stroke btn_check"
                    />
                </svg>
                <div id="u466_text" className="text ">
                    <p>
                    <span>Other</span>
                    </p>
                </div>
                </label>
                <input id="u466_input" type="checkbox" defaultValue="checkbox" />
            </div>
            </div>
        </div>
        {/* Back_Button (Rectangle) */}
        <div
            id="u467"
            className="ax_default shape transition notrs"
            data-label="Back_Button"
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