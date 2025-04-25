import { useEffect , useState , useRef } from 'react';
import * as authUtils from './Components/authUtils.js';
import * as apiService from './Components/apiService.js';
import CustomCheckbox from "./Components/CheckboxComponent.js";
import DrawingCanvas from "./Components/DrawingCanvas.js";
import { loadStyle, unloadStyle } from './Components/styleUtils.js';
import dayjs from 'dayjs';

function StructuralDamageReportPage() {

    useEffect(() => {
        async function FetchData() {
            const data = {
                document_id: sessionStorage.getItem("document_id"),
                table: "structural_damage_reports"
            };

            try {
                const response = await apiService.apiRequest(
                    `get-document-data?table=${data.table}&document_id=${data.document_id}`
                );
                if (response && typeof response === "object") {
                    const form = response;
                    document.getElementById("u787_input").value = form.aircraft_type || "";
                    document.getElementById("u788_input").value = form.registration || "";
                    document.getElementById("u789_input").value = form.serial_number || "";
                    document.getElementById("u790_input").value = dayjs(form.date_submitted).format('YYYY-MM-DD');
                    document.getElementById("u791_input").value = form.total_airframe_time || "";
                    document.getElementById("u792_input").value = form.airframe_cycles || "";
                    document.getElementById("u793_input").value = form.work_order_number || "";
                    document.getElementById("u794_input").value = form.task_card_id || "";
                    document.getElementById("u795_input").value = form.damage_type_other || "";
                    document.getElementById("u796_input").value = form.damage_type || "";
                    document.getElementById("u797_input").value = form.damage_position_station || "";
                    document.getElementById("u798_input").value = form.damage_position_waterline || "";
                    document.getElementById("u799_input").value = form.damage_position_buttockline || "";
                    document.getElementById("u800_input").value = form.damage_dimension_length || "";
                    document.getElementById("u801_input").value = form.damage_dimension_width || "";
                    document.getElementById("u802_input").value = form.damage_dimension_depth || "";
                    document.getElementById("u803_input").value = form.damaged_part_number || "";
                    document.getElementById("u804_input").value = form.damaged_serial_number || "";
                    document.getElementById("u805_input").value = form.damaged_tsn || "";
                    document.getElementById("u806_input").value = form.damaged_description || "";
                    document.getElementById("u807_input").value = form.mechanism || "";
                    document.getElementById("u808_input").value = form.prepared_by || "";
                    document.getElementById("u809_input").value = form.reviewed_by || "";
                    setCheckboxes({
                        LH: form.damage_position_buttockline_lh === 1,
                        RH: form.damage_position_buttockline_rh === 1
                    });
                    if (response && response.damage_drawing && canvasRef.current) {
                        const drawingData = typeof response.damage_drawing === 'string'
                          ? JSON.parse(response.damage_drawing)
                          : response.damage_drawing;
                
                        canvasRef.current.loadPaths(drawingData);
                    };
                }
            } catch (error) {
                console.error("Error loading data:", error);
            };
        }
        authUtils.CheckLoggedIn();
        authUtils.CheckAccess();
        authUtils.CheckSession();
        FetchData();
        const cssFile = '/css/StructuralDamageReport.css';
        loadStyle(cssFile);

        return () => {
        unloadStyle(cssFile); // clean up when navigating away
        };
     }, []);

    const [checkboxes, setCheckboxes] = useState({
        LH : false,
        RH: false
    });

     const handleCheckboxChange = (id, value) => {
        setCheckboxes((prev) => ({ ...prev, [id]: value }));
     };

    const canvasRef = useRef();

    function Back_Button(){
        sessionStorage.removeItem("document_id");
        authUtils.Back();
    }

     async function SaveDocument() {
        const aircraft_type = document.getElementById("u787_input");
        const registration = document.getElementById("u788_input");
        const serial_number = document.getElementById("u789_input");
        const date_submitted = document.getElementById("u790_input");
        const total_airframe_time = document.getElementById("u791_input");
        const airframe_cycles = document.getElementById("u792_input");
        const work_order_number = document.getElementById("u793_input");
        const task_card_id = document.getElementById("u794_input");
        const damage_type_other = document.getElementById("u795_input");
        const damage_type = document.getElementById("u796_input");
        const damage_position_station = document.getElementById("u797_input");
        const damage_position_water_line = document.getElementById("u798_input");
        const damage_position_buttock_line = document.getElementById("u799_input");
        const damage_length = document.getElementById("u800_input");
        const damage_width = document.getElementById("u801_input");
        const damage_depth = document.getElementById("u802_input");
        const damaged_part_number = document.getElementById("u803_input");
        const damaged_serial_number = document.getElementById("u804_input");
        const damaged_tsn = document.getElementById("u805_input");
        const damage_description = document.getElementById("u806_input");
        const mechanism = document.getElementById("u807_input");
        const damage_drawing = await canvasRef.current?.exportPaths(); 
        const prepared_by = document.getElementById("u808_input");
        const reviewed_by = document.getElementById("u809_input");
        const damaged_position_button_line_LH = document.getElementById("u810_input");
        const damaged_position_button_line_RH = document.getElementById("u811_input");

        const data = {
            aircraft_type: aircraft_type.value.trim(),
            registration: registration.value.trim(),
            serial_number: serial_number.value.trim(),
            date_submitted: date_submitted.value.trim(),
            total_airframe_time: total_airframe_time.value.trim(),
            airframe_cycles: airframe_cycles.value.trim(),
            work_order_number: work_order_number.value.trim(),
            task_card_id: task_card_id.value.trim(),
            damage_type_other: damage_type_other.value.trim(),
            damage_type: damage_type.value.trim(),
            damage_position_station: damage_position_station.value.trim(),
            damage_position_waterline: damage_position_water_line.value.trim(),
            damage_position_buttock_line: damage_position_buttock_line.value.trim(),
            damage_dimension_length: damage_length.value.trim(),
            damage_dimension_width: damage_width.value.trim(),
            damage_dimension_depth: damage_depth.value.trim(),
            damaged_part_number: damaged_part_number.value.trim(),
            damaged_serial_number: damaged_serial_number.value.trim(),
            damaged_tsn: damaged_tsn.value.trim(),
            damaged_description: damage_description.value.trim(),
            mechanism: mechanism.value.trim(),
            damage_drawing: damage_drawing,
            prepared_by: prepared_by.value.trim(),
            reviewed_by: reviewed_by.value.trim(),
            damage_position_buttock_line_lh: damaged_position_button_line_LH.checked,
            damage_position_buttock_line_rh: damaged_position_button_line_RH.checked,
            document_id: sessionStorage.getItem("document_id")
        };
        try {
            const response = await apiService.apiRequest("update-document-data", "POST", {document_type:"SDR", data:data});
            if (response) {
                alert("Structural Damage Report Saved Successfully");
            }
        } catch (error) {
            alert(error.message);
        }


     }

    return(
        <div id="base" className="">
        {/* Structural_Damage_Report_Style (Group) */}
        <div
            id="u751"
            className="ax_default"
            data-label="Structural_Damage_Report_Style"
            data-left={97}
            data-top={9}
            data-width={1009}
            data-height={1553}
            layer-opacity={1}
        >
            {/* Unnamed (Rectangle) */}
            <div id="u752" className="ax_default box_1 transition notrs">
            <div id="u752_div" className="" />
            <div id="u752_text" className="text ">
                <p>
                <span>WS AVIATION</span>
                </p>
                <p>
                <span>STRUCTURAL DAMAGE REPORT</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u753" className="ax_default box_1 transition notrs">
            <div id="u753_div" className="" />
            <div id="u753_text" className="text ">
                <p>
                <span>AIRCRAFT TYPE</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u754" className="ax_default box_1 transition notrs">
            <div id="u754_div" className="" />
            <div id="u754_text" className="text ">
                <p>
                <span>REGISTRATION</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u755" className="ax_default box_1 transition notrs">
            <div id="u755_div" className="" />
            <div id="u755_text" className="text ">
                <p>
                <span>SERIAL NUMBER</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u756" className="ax_default box_1 transition notrs">
            <div id="u756_div" className="" />
            <div id="u756_text" className="text ">
                <p>
                <span>DATE SUBMITTED</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u757" className="ax_default box_1 transition notrs">
            <div id="u757_div" className="" />
            <div id="u757_text" className="text ">
                <p>
                <span>TOTAL AIRFRAME TIME (HOURS)</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u758" className="ax_default box_1 transition notrs">
            <div id="u758_div" className="" />
            <div id="u758_text" className="text ">
                <p>
                <span>AIRFRAME CYCLES</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u759" className="ax_default box_1 transition notrs">
            <div id="u759_div" className="" />
            <div id="u759_text" className="text ">
                <p>
                <span>WORK ORDER #</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u760" className="ax_default box_1 transition notrs">
            <div id="u760_div" className="" />
            <div id="u760_text" className="text ">
                <p>
                <span>TASK CARD ID #</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u761" className="ax_default box_1 transition notrs">
            <div id="u761_div" className="" />
            <div id="u761_text" className="text ">
                <p>
                <span>DAMAGE TYPE</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u762" className="ax_default box_1 transition notrs">
            <div id="u762_div" className="" />
            <div id="u762_text" className="text ">
                <p>
                <span>EXACT DAMAGE POSITION</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u763" className="ax_default box_1 transition notrs">
            <div id="u763_div" className="" />
            <div id="u763_text" className="text ">
                <p>
                <span>DAMAGE DIMENSION</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u764" className="ax_default box_1 transition notrs">
            <div id="u764_div" className="" />
            <div id="u764_text" className="text ">
                <p>
                <span>MAIN DAMAGED PART</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u765" className="ax_default box_1 transition notrs">
            <div id="u765_div" className="" />
            <div id="u765_text" className="text ">
                <p>
                <span>STATION (MM)</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u766" className="ax_default box_1 transition notrs">
            <div id="u766_div" className="" />
            <div id="u766_text" className="text ">
                <p>
                <span>WATER LINE (MM)</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u767" className="ax_default box_1 transition notrs">
            <div id="u767_div" className="" />
            <div id="u767_text" className="text ">
                <p>
                <span>BUTTOCK LINE</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u768" className="ax_default box_1 transition notrs">
            <div id="u768_div" className="" />
            <div id="u768_text" className="text ">
                <p>
                <span>LENGTH (MM)</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u769" className="ax_default box_1 transition notrs">
            <div id="u769_div" className="" />
            <div id="u769_text" className="text ">
                <p>
                <span>WIDTH (MM)</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u770" className="ax_default box_1 transition notrs">
            <div id="u770_div" className="" />
            <div id="u770_text" className="text ">
                <p>
                <span>DEPTH (MM)</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u771" className="ax_default box_1 transition notrs">
            <div id="u771_div" className="" />
            <div id="u771_text" className="text ">
                <p>
                <span>PART #</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u772" className="ax_default box_1 transition notrs">
            <div id="u772_div" className="" />
            <div id="u772_text" className="text ">
                <p>
                <span>SERIAL #</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u773" className="ax_default box_1 transition notrs">
            <div id="u773_div" className="" />
            <div id="u773_text" className="text ">
                <p>
                <span>TSN/TSO (HOURS)</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u774" className="ax_default box_1 transition notrs">
            <div id="u774_div" className="" />
            <div id="u774_text" className="text ">
                <p>
                <span>DAMAGED DESCRIPTION</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u775" className="ax_default box_1 transition notrs">
            <div id="u775_div" className="" />
            <div id="u775_text" className="text ">
                <p>
                <span>MECHANISM</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u776" className="ax_default box_1 transition notrs">
            <div id="u776_div" className="" />
            <div id="u776_text" className="text ">
                <p>
                <span>DAMAGE SKETCH / DRAWING</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u777" className="ax_default box_1 transition notrs">
                    <div>
                        <DrawingCanvas ref={canvasRef} width={1008} height={722}/>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u778" className="ax_default box_1 transition notrs">
            <div id="u778_div" className="" />
            <div id="u778_text" className="text ">
                <p>
                <span>
                    Include reference points, location, measurements and adject
                    structure as applicable
                </span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u779" className="ax_default box_1 transition notrs">
            <div id="u779_div" className="" />
            <div id="u779_text" className="text ">
                <p>
                <span>Prepared By (Signature and ACA#)</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u780" className="ax_default box_1 transition notrs">
            <div id="u780_div" className="" />
            <div id="u780_text" className="text ">
                <p>
                <span>Reviewed by (Print Name and Signature)</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u781" className="ax_default box_1 transition notrs">
            <div id="u781_div" className="" />
            <div id="u781_text" className="text ">
                <p>
                <span>
                    This report has been prepared in accordance wit the instructions
                    contained within the WS Aviation Maintenance Policy and Procedure
                    Manual
                </span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u782" className="ax_default box_1 transition notrs">
            <div id="u782_div" className="" />
            <div id="u782_text" className="text ">
                <p>
                <span>
                    This report has been reviewed and is ready to submit to manufacture
                    for approved repair data.
                </span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u783" className="ax_default box_1 transition notrs">
            <div id="u783_div" className="" />
            <div
                id="u783_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
        </div>
        {/* Structural_Damage_Report_Inputs (Group) */}
        <div
            id="u784"
            className="ax_default"
            data-label="Structural_Damage_Report_Inputs"
            data-left={97}
            data-top={140}
            data-width={1009}
            data-height={1477}
            layer-opacity={1}
        >
            {/* Save_Button (Rectangle) */}
            <div
            id="u785"
            className="ax_default shape transition notrs"
            data-label="Save_Button"
            onClick={SaveDocument}
            >
            <div id="u785_div" className="" />
            <div id="u785_text" className="text ">
                <p>
                <span>Save</span>
                </p>
            </div>
            </div>
            {/* Back_Button (Rectangle) */}
            <div
            id="u786"
            className="ax_default shape transition notrs"
            data-label="Back_Button"
            onClick={Back_Button}
            >
            <div id="u786_div" className="" />
            <div id="u786_text" className="text ">
                <p>
                <span>Back</span>
                </p>
            </div>
            </div>
            {/* Aircraft_Type (Text field) */}
            <div
            id="u787"
            className="ax_default text_field transition notrs"
            data-label="Aircraft_Type"
            >
            <div id="u787_div" className="" />
            <input
                id="u787_input"
                type="text"
                defaultValue=""
                className="u787_input"
            />
            </div>
            {/* Registration (Text field) */}
            <div
            id="u788"
            className="ax_default text_field transition notrs"
            data-label="Registration"
            >
            <div id="u788_div" className="" />
            <input
                id="u788_input"
                type="text"
                defaultValue=""
                className="u788_input"
            />
            </div>
            {/* Serial_Number (Text field) */}
            <div
            id="u789"
            className="ax_default text_field transition notrs"
            data-label="Serial_Number"
            >
            <div id="u789_div" className="" />
            <input
                id="u789_input"
                type="text"
                defaultValue=""
                className="u789_input"
            />
            </div>
            {/* Date_Submitted (Text field) */}
            <div
            id="u790"
            className="ax_default text_field transition notrs"
            data-label="Date_Submitted"
            >
            <div id="u790_div" className="" />
            <input
                id="u790_input"
                type="date"
                defaultValue=""
                className="u790_input"
            />
            </div>
            {/* Total_Airframe_Time (Text field) */}
            <div
            id="u791"
            className="ax_default text_field transition notrs"
            data-label="Total_Airframe_Time"
            >
            <div id="u791_div" className="" />
            <input
                id="u791_input"
                type="text"
                defaultValue=""
                className="u791_input"
            />
            </div>
            {/* Airframe_Cycles (Text field) */}
            <div
            id="u792"
            className="ax_default text_field transition notrs"
            data-label="Airframe_Cycles"
            >
            <div id="u792_div" className="" />
            <input
                id="u792_input"
                type="text"
                defaultValue=""
                className="u792_input"
            />
            </div>
            {/* Work_Order_Number (Text field) */}
            <div
            id="u793"
            className="ax_default text_field transition notrs"
            data-label="Work_Order_Number"
            >
            <div id="u793_div" className="" />
            <input
                id="u793_input"
                type="text"
                defaultValue=""
                className="u793_input"
            />
            </div>
            {/* Task_Card_ID (Text field) */}
            <div
            id="u794"
            className="ax_default text_field transition notrs"
            data-label="Task_Card_ID"
            >
            <div id="u794_div" className="" />
            <input
                id="u794_input"
                type="text"
                defaultValue=""
                className="u794_input"
            />
            </div>
            {/* Damage_Type_Other (Text field) */}
            <div
            id="u795"
            className="ax_default text_field transition notrs"
            data-label="Damage_Type_Other"
            >
            <div id="u795_div" className="" />
            <input
                id="u795_input"
                type="text"
                defaultValue=""
                className="u795_input"
            />
            </div>
            {/* Damage_Type (Droplist) */}
            <div
            id="u796"
            className="ax_default droplist transition notrs"
            data-label="Damage_Type"
            >
            <div id="u796_div" className="" />
            <select id="u796_input" className="u796_input">
                <option className="u796_input_option" value="Crack">
                Crack
                </option>
                <option className="u796_input_option" value="Dent">
                Dent
                </option>
                <option className="u796_input_option" value="Puncture">
                Puncture
                </option>
                <option className="u796_input_option" value="Debond/Void">
                Debond/Void
                </option>
                <option className="u796_input_option" value="Corrosion">
                Corrosion
                </option>
                <option className="u796_input_option" value="Rupture">
                Rupture
                </option>
                <option className="u796_input_option" value="Buckle">
                Buckle
                </option>
                <option className="u796_input_option" value="Scratch/Nick/Gouge">
                Scratch/Nick/Gouge
                </option>
                <option className="u796_input_option" value="Other">
                Other
                </option>
            </select>
            </div>
            {/* Damage_Position_Station (Text field) */}
            <div
            id="u797"
            className="ax_default text_field transition notrs"
            data-label="Damage_Position_Station"
            >
            <div id="u797_div" className="" />
            <input
                id="u797_input"
                type="text"
                defaultValue=""
                className="u797_input"
            />
            </div>
            {/* Damage_Position_Water_Line (Text field) */}
            <div
            id="u798"
            className="ax_default text_field transition notrs"
            data-label="Damage_Position_Water_Line"
            >
            <div id="u798_div" className="" />
            <input
                id="u798_input"
                type="text"
                defaultValue=""
                className="u798_input"
            />
            </div>
            {/* Damage_Postion_Buttock_Line (Text field) */}
            <div
            id="u799"
            className="ax_default text_field transition notrs"
            data-label="Damage_Postion_Buttock_Line"
            >
            <div id="u799_div" className="" />
            <input
                id="u799_input"
                type="text"
                defaultValue=""
                className="u799_input"
            />
            </div>
            {/* Damage_Length (Text field) */}
            <div
            id="u800"
            className="ax_default text_field transition notrs"
            data-label="Damage_Length"
            >
            <div id="u800_div" className="" />
            <input
                id="u800_input"
                type="text"
                defaultValue=""
                className="u800_input"
            />
            </div>
            {/* Damage_Width (Text field) */}
            <div
            id="u801"
            className="ax_default text_field transition notrs"
            data-label="Damage_Width"
            >
            <div id="u801_div" className="" />
            <input
                id="u801_input"
                type="text"
                defaultValue=""
                className="u801_input"
            />
            </div>
            {/* Damage_Depth (Text field) */}
            <div
            id="u802"
            className="ax_default text_field transition notrs"
            data-label="Damage_Depth"
            >
            <div id="u802_div" className="" />
            <input
                id="u802_input"
                type="text"
                defaultValue=""
                className="u802_input"
            />
            </div>
            {/* Damaged_Part_Number (Text field) */}
            <div
            id="u803"
            className="ax_default text_field transition notrs"
            data-label="Damaged_Part_Number"
            >
            <div id="u803_div" className="" />
            <input
                id="u803_input"
                type="text"
                defaultValue=""
                className="u803_input"
            />
            </div>
            {/* Damaged_Serial_Number (Text field) */}
            <div
            id="u804"
            className="ax_default text_field transition notrs"
            data-label="Damaged_Serial_Number"
            >
            <div id="u804_div" className="" />
            <input
                id="u804_input"
                type="text"
                defaultValue=""
                className="u804_input"
            />
            </div>
            {/* Damaged_TSN (Text field) */}
            <div
            id="u805"
            className="ax_default text_field transition notrs"
            data-label="Damaged_TSN"
            >
            <div id="u805_div" className="" />
            <input
                id="u805_input"
                type="text"
                defaultValue=""
                className="u805_input"
            />
            </div>
            {/* Damage_Description (Text area) */}
            <div
            id="u806"
            className="ax_default text_area transition notrs"
            data-label="Damage_Description"
            >
            <div id="u806_div" className="" />
            <textarea id="u806_input" className="u806_input" defaultValue={""} />
            </div>
            {/* Mechanism (Text area) */}
            <div
            id="u807"
            className="ax_default text_area transition notrs"
            data-label="Mechanism"
            >
            <div id="u807_div" className="" />
            <textarea id="u807_input" className="u807_input" defaultValue={""} />
            </div>
            {/* Prepared_By (Text field) */}
            <div
            id="u808"
            className="ax_default text_field transition notrs"
            data-label="Prepared_By"
            >
            <div id="u808_div" className="" />
            <input
                id="u808_input"
                type="text"
                defaultValue=""
                className="u808_input"
            />
            </div>
            {/* Reviewed_By (Text field) */}
            <div
            id="u809"
            className="ax_default text_field transition notrs"
            data-label="Reviewed_By"
            >
            <div id="u809_div" className="" />
            <input
                id="u809_input"
                type="text"
                defaultValue=""
                className="u809_input"
            />
            </div>
            {/* Damage_Postion_Buttock_Line_LH (Checkbox) */}
            <CustomCheckbox id="u810" label="LH" initialChecked={checkboxes.LH} onChange={handleCheckboxChange}/>
            {/* Damage_Postion_Buttock_Line_RH (Checkbox) */}
            <CustomCheckbox id="u811" label="RH" initialChecked={checkboxes.RH} onChange={handleCheckboxChange} />
        </div>
        </div>  
    );
};

export default StructuralDamageReportPage;