import { loadStyle, unloadStyle } from './Components/styleUtils.js';
import { useEffect , useRef } from 'react';
import * as authUtils from './Components/authUtils.js';
import * as apiService from './Components/apiService.js';
import DrawingCanvas from "./Components/DrawingCanvas.js";
import dayjs from 'dayjs';

function EngineReportPage() {

    useEffect(() => {
        async function LoadData() {
            const data = {
                document_id: sessionStorage.getItem("document_id"),
                table: "engine_reports"
            };
        
            try {
                const response = await apiService.apiRequest(
                    `get-document-data?table=${data.table}&document_id=${data.document_id}`
                );
        
                if (response && typeof response === "object") {
                    const form = response;
                    document.getElementById("u733_input").value = form.engine_type || "";
                    document.getElementById("u734_input").value = form.serial_number || "";
                    document.getElementById("u735_input").value = form.engine_running_hours || "";
                    document.getElementById("u736_input").value = form.work_order_number || "";
                    document.getElementById("u737_input").value = form.task_card_id || "";
                    document.getElementById("u738_input").value = dayjs(form.date_submitted).format('YYYY-MM-DD');
                    document.getElementById("u739_input").value = form.damage_type || "";
                    document.getElementById("u740_input").value = form.damage_dimension_length || "";
                    document.getElementById("u741_input").value = form.damage_dimension_width || "";
                    document.getElementById("u742_input").value = form.damage_dimension_depth || "";
                    document.getElementById("u743_input").value = form.damaged_item || "";
                    document.getElementById("u744_input").value = form.damaged_part_number || "";
                    document.getElementById("u745_input").value = form.damaged_serial_number || "";
                    document.getElementById("u746_input").value = form.damage_description || "";
                    document.getElementById("u747_input").value = form.reviewed_by || "";
                    document.getElementById("u748_input").value = form.prepared_by || "";

                    if (response && response.damage_drawing && canvasRef.current) {
                          const drawingData = typeof response.damage_drawing === 'string'
                            ? JSON.parse(response.damage_drawing)
                            : response.damage_drawing;
                  
                          canvasRef.current.loadPaths(drawingData);
                    }
                }   
            } catch (error) {
                console.error("Error loading data:", error);
            }
        
        }

        authUtils.CheckLoggedIn();
        authUtils.CheckAccess();
        authUtils.CheckSession();
        LoadData();
        const cssFile = '/css/EngineReport.css';
        loadStyle(cssFile);

        return () => {
        unloadStyle(cssFile); // clean up when navigating away
        };
     }, []);

     const canvasRef = useRef();

     function Back_Button() {
        sessionStorage.removeItem("document_id");
        authUtils.Back();
     }

     async function saveDocument() {
        const engine_type = document.getElementById("u733_input");
        const serial_number = document.getElementById("u734_input");
        const engine_running_hours = document.getElementById("u735_input");
        const work_order_number = document.getElementById("u736_input");
        const task_card_id = document.getElementById("u737_input");
        const date_submitted = document.getElementById("u738_input");
        const damage_type = document.getElementById("u739_input");
        const damage_length = document.getElementById("u740_input");
        const damage_width = document.getElementById("u741_input");
        const damage_depth = document.getElementById("u742_input");
        const damage_item = document.getElementById("u743_input");
        const damage_part_number = document.getElementById("u744_input");
        const damage_serial_number = document.getElementById("u745_input");
        const damage_description = document.getElementById("u746_input");
        const reviewed_by = document.getElementById("u747_input");
        const prepared_by = document.getElementById("u748_input");
        const damage_drawing = await canvasRef.current?.exportPaths();  // Get drawing data
        const document_id = sessionStorage.getItem("document_id");
    
        const data = {
            document_id: document_id,
            engine_type: engine_type.value.trim(),
            serial_number: serial_number.value.trim(),
            engine_running_hours: engine_running_hours.value.trim(),
            work_order_number: work_order_number.value.trim(),
            task_card_id: task_card_id.value.trim(),
            date_submitted: date_submitted.value.trim(),
            damage_type: damage_type.value.trim(),
            damage_dimension_length: damage_length.value.trim(),
            damage_dimension_width: damage_width.value.trim(),
            damage_dimension_depth: damage_depth.value.trim(),
            damaged_item: damage_item.value.trim(),
            damaged_part_number: damage_part_number.value.trim(),
            damaged_serial_number: damage_serial_number.value.trim(),
            damage_description: damage_description.value.trim(),
            reviewed_by: reviewed_by.value.trim(),
            prepared_by: prepared_by.value.trim(),
            damage_drawing: damage_drawing  // Include the drawing data in the request
        }
    
        try {
            const response = await apiService.apiRequest("update-document-data", "POST", {document_type:"ER", data:data});
            if (response) {
                alert("Engine Report Saved Successfully");
            }
        } catch (error) {
            alert(error.message);
        }
    }

    return(
        <div id="base" className="">
        {/* Engine_Report_Style (Group) */}
        <div
            id="u707"
            className="ax_default"
            data-label="Engine_Report_Style"
            data-left={96}
            data-top={10}
            data-width={1009}
            data-height={1531}
            layer-opacity={1}
        >
            {/* Unnamed (Rectangle) */}
            <div id="u708" className="ax_default box_1 transition notrs">
                    <div>
                        <DrawingCanvas ref={canvasRef} width={1007} height={721}/>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u709" className="ax_default box_1 transition notrs">
            <div id="u709_div" className="" />
            <div id="u709_text" className="text ">
                <p>
                <span>WS AVIATION</span>
                </p>
                <p>
                <span>ENGINE REPORT</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u710" className="ax_default box_1 transition notrs">
            <div id="u710_div" className="" />
            <div id="u710_text" className="text ">
                <p>
                <span>ENGINE TYPE</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u711" className="ax_default box_1 transition notrs">
            <div id="u711_div" className="" />
            <div id="u711_text" className="text ">
                <p>
                <span>SERIAL NUMBER</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u712" className="ax_default box_1 transition notrs">
            <div id="u712_div" className="" />
            <div id="u712_text" className="text ">
                <p>
                <span>ENGINE RUNNING HOURS</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u713" className="ax_default box_1 transition notrs">
            <div id="u713_div" className="" />
            <div id="u713_text" className="text ">
                <p>
                <span>WORK ORDER #</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u714" className="ax_default box_1 transition notrs">
            <div id="u714_div" className="" />
            <div id="u714_text" className="text ">
                <p>
                <span>DATE SUBMITTED</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u715" className="ax_default box_1 transition notrs">
            <div id="u715_div" className="" />
            <div id="u715_text" className="text ">
                <p>
                <span>TASK CARD ID #</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u716" className="ax_default box_1 transition notrs">
            <div id="u716_div" className="" />
            <div id="u716_text" className="text ">
                <p>
                <span>DAMAGE </span>
                </p>
                <p>
                <span>TYPE</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u717" className="ax_default box_1 transition notrs">
            <div id="u717_div" className="" />
            <div id="u717_text" className="text ">
                <p>
                <span>DAMAGE DIMENSION</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u718" className="ax_default box_1 transition notrs">
            <div id="u718_div" className="" />
            <div id="u718_text" className="text ">
                <p>
                <span>LENGTH</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u719" className="ax_default box_1 transition notrs">
            <div id="u719_div" className="" />
            <div id="u719_text" className="text ">
                <p>
                <span>WIDTH</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u720" className="ax_default box_1 transition notrs">
            <div id="u720_div" className="" />
            <div id="u720_text" className="text ">
                <p>
                <span>DEPTH</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u721" className="ax_default box_1 transition notrs">
            <div id="u721_div" className="" />
            <div id="u721_text" className="text ">
                <p>
                <span>DAMAGE DESCRIPTION</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u722" className="ax_default box_1 transition notrs">
            <div id="u722_div" className="" />
            <div id="u722_text" className="text ">
                <p>
                <span>DAMAGE SKETCH / DRAWING</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u723" className="ax_default box_1 transition notrs">
            <div id="u723_div" className="" />
            <div id="u723_text" className="text ">
                <p>
                <span>ITEM</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u724" className="ax_default box_1 transition notrs">
            <div id="u724_div" className="" />
            <div id="u724_text" className="text ">
                <p>
                <span>SERIAL #</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u725" className="ax_default box_1 transition notrs">
            <div id="u725_div" className="" />
            <div id="u725_text" className="text ">
                <p>
                <span>MAIN DAMAGED PART</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u726" className="ax_default box_1 transition notrs">
            <div id="u726_div" className="" />
            <div id="u726_text" className="text ">
                <p>
                <span>Prepared By (Signature and ACA#)</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u727" className="ax_default box_1 transition notrs">
            <div id="u727_div" className="" />
            <div id="u727_text" className="text ">
                <p>
                <span>Reviewed by (Print Name and Signature)</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u728" className="ax_default box_1 transition notrs">
            <div id="u728_div" className="" />
            <div id="u728_text" className="text ">
                <p>
                <span>
                    Include reference points, location, measurements and adject
                    structure as applicable
                </span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u729" className="ax_default box_1 transition notrs">
            <div id="u729_div" className="" />
            <div id="u729_text" className="text ">
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
            <div id="u730" className="ax_default box_1 transition notrs">
            <div id="u730_div" className="" />
            <div id="u730_text" className="text ">
                <p>
                <span>
                    This report has been reviewed and is ready to submit to manufacture
                    for approved repair data.
                </span>
                </p>
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u731" className="ax_default box_1 transition notrs">
            <div id="u731_div" className="" />
            <div id="u731_text" className="text ">
                <p>
                <span>PART #</span>
                </p>
            </div>
            </div>
        </div>
        {/* Engine Report_Inputs (Group) */}
        <div
            id="u732"
            className="ax_default"
            data-label="Engine Report_Inputs"
            data-left={96}
            data-top={140}
            data-width={1009}
            data-height={1367}
            layer-opacity={1}
        >
            {/* Engine_Type (Text field) */}
            <div
            id="u733"
            className="ax_default text_field transition notrs"
            data-label="Engine_Type"
            >
            <div id="u733_div" className="" />
            <input
                id="u733_input"
                type="text"
                defaultValue=""
                className="u733_input"
            />
            </div>
            {/* Serial_Number (Text field) */}
            <div
            id="u734"
            className="ax_default text_field transition notrs"
            data-label="Serial_Number"
            >
            <div id="u734_div" className="" />
            <input
                id="u734_input"
                type="text"
                defaultValue=""
                className="u734_input"
            />
            </div>
            {/* Engine_Running_Hours (Text field) */}
            <div
            id="u735"
            className="ax_default text_field transition notrs"
            data-label="Engine_Running_Hours"
            >
            <div id="u735_div" className="" />
            <input
                id="u735_input"
                type="text"
                defaultValue=""
                className="u735_input"
            />
            </div>
            {/* Work_Order_Number (Text field) */}
            <div
            id="u736"
            className="ax_default text_field transition notrs"
            data-label="Work_Order_Number"
            >
            <div id="u736_div" className="" />
            <input
                id="u736_input"
                type="text"
                defaultValue=""
                className="u736_input"
            />
            </div>
            {/* Task_Card_ID (Text field) */}
            <div
            id="u737"
            className="ax_default text_field transition notrs"
            data-label="Task_Card_ID"
            >
            <div id="u737_div" className="" />
            <input
                id="u737_input"
                type="text"
                defaultValue=""
                className="u737_input"
            />
            </div>
            {/* Date_Submitted (Text field) */}
            <div
            id="u738"
            className="ax_default text_field transition notrs"
            data-label="Date_Submitted"
            >
            <div id="u738_div" className="" />
            <input
                id="u738_input"
                type="date"
                defaultValue=""
                className="u738_input"
            />
            </div>
            {/* Damage_Type (Text field) */}
            <div
            id="u739"
            className="ax_default text_field transition notrs"
            data-label="Damage_Type"
            >
            <div id="u739_div" className="" />
            <input
                id="u739_input"
                type="text"
                defaultValue=""
                className="u739_input"
            />
            </div>
            {/* Damage_Length (Text field) */}
            <div
            id="u740"
            className="ax_default text_field transition notrs"
            data-label="Damage_Length"
            >
            <div id="u740_div" className="" />
            <input
                id="u740_input"
                type="text"
                defaultValue=""
                className="u740_input"
            />
            </div>
            {/* Damage_Width (Text field) */}
            <div
            id="u741"
            className="ax_default text_field transition notrs"
            data-label="Damage_Width"
            >
            <div id="u741_div" className="" />
            <input
                id="u741_input"
                type="text"
                defaultValue=""
                className="u741_input"
            />
            </div>
            {/* Damage_Depth (Text field) */}
            <div
            id="u742"
            className="ax_default text_field transition notrs"
            data-label="Damage_Depth"
            >
            <div id="u742_div" className="" />
            <input
                id="u742_input"
                type="text"
                defaultValue=""
                className="u742_input"
            />
            </div>
            {/* Damage_Item (Text field) */}
            <div
            id="u743"
            className="ax_default text_field transition notrs"
            data-label="Damage_Item"
            >
            <div id="u743_div" className="" />
            <input
                id="u743_input"
                type="text"
                defaultValue=""
                className="u743_input"
            />
            </div>
            {/* Damage_Part_Number (Text field) */}
            <div
            id="u744"
            className="ax_default text_field transition notrs"
            data-label="Damage_Part_Number"
            >
            <div id="u744_div" className="" />
            <input
                id="u744_input"
                type="text"
                defaultValue=""
                className="u744_input"
            />
            </div>
            {/* Damage_Serial_Number (Text field) */}
            <div
            id="u745"
            className="ax_default text_field transition notrs"
            data-label="Damage_Serial_Number"
            >
            <div id="u745_div" className="" />
            <input
                id="u745_input"
                type="text"
                defaultValue=""
                className="u745_input"
            />
            </div>
            {/* Damage_Description (Text area) */}
            <div
            id="u746"
            className="ax_default text_area transition notrs"
            data-label="Damage_Description"
            >
            <div id="u746_div" className="" />
            <textarea id="u746_input" className="u746_input" defaultValue={""} />
            </div>
            {/* Reviewed_By (Text field) */}
            <div
            id="u747"
            className="ax_default text_field transition notrs"
            data-label="Reviewed_By"
            >
            <div id="u747_div" className="" />
            <input
                id="u747_input"
                type="text"
                defaultValue=""
                className="u747_input"
            />
            </div>
            {/* Prepared_By (Text field) */}
            <div
            id="u748"
            className="ax_default text_field transition notrs"
            data-label="Prepared_By"
            >
            <div id="u748_div" className="" />
            <input
                id="u748_input"
                type="text"
                defaultValue=""
                className="u748_input"
            />
            </div>
        </div>
        {/* Save_Button (Rectangle) */}
        <div
            id="u749"
            className="ax_default shape transition notrs"
            data-label="Save_Button"
            onClick={saveDocument}
        >
            <div id="u749_div" className="" />
            <div id="u749_text" className="text ">
            <p>
                <span>Save</span>
            </p>
            </div>
        </div>
        {/* Back_Button (Rectangle) */}
        <div
            id="u750"
            className="ax_default shape transition notrs"
            data-label="Back_Button"
            onClick={Back_Button}
        >
            <div id="u750_div" className="" />
            <div id="u750_text" className="text ">
            <p>
                <span>Back</span>
            </p>
            </div>
        </div>
        </div>
    );
};

export default EngineReportPage;