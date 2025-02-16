import './css/ToolCalibrationRecord.css';

function ToolCalibrationRecordPage() {

    const Back_Button = () => {
        window.history.back();
    };

    const NewRecord_Button = () => {
        document.getElementById("u92").style.display = "block";
        document.getElementById("u92").style.visibility = "visible";
    };

    const Cancel_Button = () => {
        document.getElementById("u92").style.display = "none";
        document.getElementById("u92").style.visibility = "hidden";
    };

    const NewRecord = () => {
        const description = document.getElementById("u98_input");
        const partNumber = document.getElementById("u102_input");
        const serialNumber = document.getElementById("u106_input");
        const calibrationDate = document.getElementById("u110_input");
        const calibrationDueDate = document.getElementById("u114_input");
    
        if (!description.value || !partNumber.value || !serialNumber.value || !calibrationDate.value || !calibrationDueDate.value) {
            alert("Please fill in all fields");
            return null; // Stop execution if validation fails
        }
    
        const Record = {
            Description: description.value,
            PartNumber: partNumber.value,
            SerialNumber: serialNumber.value,
            CalibrationDate: calibrationDate.value,
            CalibrationDueDate: calibrationDueDate.value
        };
    
        // Clear input fields
        description.value = "";
        partNumber.value = "";
        serialNumber.value = "";
        calibrationDate.value = "";
        calibrationDueDate.value = "";
    
        return Record;
    };
    
    const Submit_Button = () => {
        const record = NewRecord();
        if (!record) return; // Stop execution if validation failed
    
        console.log(record);
        document.getElementById("u92").style.display = "none";
        document.getElementById("u92").style.visibility = "hidden";
    };
    


    return(
        <div id="base" className="">
        {/* Unnamed (Rectangle) */}
        <div id="u73" className="ax_default box_1 transition notrs">
            <div id="u73_div" className="" />
            <div id="u73_text" className="text ">
            <p>
                <span>TOOL CALIBRATION RECORD</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u74" className="ax_default box_1 transition notrs">
            <div id="u74_div" className="" />
            <div id="u74_text" className="text ">
            <p>
                <span>&nbsp;Search By:</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u75" className="ax_default box_1 transition notrs">
            <div id="u75_div" className="" />
            <div
            id="u75_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        {/* Search_Type (Droplist) */}
        <div
            id="u76"
            className="ax_default droplist transition notrs"
            data-label="Search_Type"
        >
            <div id="u76_div" className="" />
            <select id="u76_input" className="u76_input">
            <option className="u76_input_option" value="Part Number">
                Part Number
            </option>
            <option className="u76_input_option" value="Serial Number">
                Serial Number
            </option>
            </select>
        </div>
        {/* Search_Input (Text field) */}
        <div
            id="u77"
            className="ax_default text_field transition notrs"
            data-label="Search_Input"
        >
            <div id="u77_div" className="" />
            <input id="u77_input" type="text" defaultValue="" className="u77_input" />
        </div>
        {/* Search_Button (Rectangle) */}
        <div
            id="u78"
            className="ax_default shape transition notrs"
            data-label="Search_Button"
        >
            <div id="u78_div" className="" />
            <div id="u78_text" className="text ">
            <p>
                <span>Search</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Table) */}
        <div id="u79" className="ax_default">
            {/* Unnamed (Table cell) */}
            <div id="u80" className="ax_default table_cell transition notrs">
            <svg
                data="images/tool_calibration_record/u80.svg"
                id="u80_img"
                className="img generatedImage"
                viewBox="0 0 224 30"
            >
                <path
                d="M 3 3  L 224 3  L 224 30  L 3 30  L 3 3  Z "
                fillRule="nonzero"
                fill="rgba(238, 236, 225, 0.9921568627450981)"
                stroke="none"
                className="fill"
                />
                <path
                d="M 1.5 3  L 1.5 30  "
                strokeWidth={3}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                className="stroke"
                />
                <path
                d="M 0 1.5  L 224 1.5  "
                strokeWidth={3}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                className="stroke"
                />
            </svg>
            <div id="u80_text" className="text ">
                <p>
                <span>Description</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u81" className="ax_default table_cell transition notrs">
            <svg
                data="images/tool_calibration_record/u81.svg"
                id="u81_img"
                className="img generatedImage"
                viewBox="224 0 224 30"
            >
                <path
                d="M 3 3  L 224 3  L 224 30  L 3 30  L 3 3  Z "
                fillRule="nonzero"
                fill="rgba(238, 236, 225, 0.9921568627450981)"
                stroke="none"
                transform="matrix(1 0 0 1 224 0 )"
                className="fill"
                />
                <path
                d="M 1.5 3  L 1.5 30  "
                strokeWidth={3}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 224 0 )"
                className="stroke"
                />
                <path
                d="M 0 1.5  L 224 1.5  "
                strokeWidth={3}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 224 0 )"
                className="stroke"
                />
            </svg>
            <div id="u81_text" className="text ">
                <p>
                <span>Part Number</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u82" className="ax_default table_cell transition notrs">
            <svg
                data="images/tool_calibration_record/u82.svg"
                id="u82_img"
                className="img generatedImage"
                viewBox="448 0 224 30"
            >
                <path
                d="M 3 3  L 224 3  L 224 30  L 3 30  L 3 3  Z "
                fillRule="nonzero"
                fill="rgba(238, 236, 225, 0.9921568627450981)"
                stroke="none"
                transform="matrix(1 0 0 1 448 0 )"
                className="fill"
                />
                <path
                d="M 1.5 3  L 1.5 30  "
                strokeWidth={3}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 448 0 )"
                className="stroke"
                />
                <path
                d="M 0 1.5  L 224 1.5  "
                strokeWidth={3}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 448 0 )"
                className="stroke"
                />
            </svg>
            <div id="u82_text" className="text ">
                <p>
                <span>Serial Number</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u83" className="ax_default table_cell transition notrs">
            <svg
                data="images/tool_calibration_record/u83.svg"
                id="u83_img"
                className="img generatedImage"
                viewBox="672 0 224 30"
            >
                <path
                d="M 3 3  L 224 3  L 224 30  L 3 30  L 3 3  Z "
                fillRule="nonzero"
                fill="rgba(238, 236, 225, 0.9921568627450981)"
                stroke="none"
                transform="matrix(1 0 0 1 672 0 )"
                className="fill"
                />
                <path
                d="M 1.5 3  L 1.5 30  "
                strokeWidth={3}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 672 0 )"
                className="stroke"
                />
                <path
                d="M 0 1.5  L 224 1.5  "
                strokeWidth={3}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 672 0 )"
                className="stroke"
                />
            </svg>
            <div id="u83_text" className="text ">
                <p>
                <span>Calibration Date</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u84" className="ax_default table_cell transition notrs">
            <svg
                data="images/tool_calibration_record/u84.svg"
                id="u84_img"
                className="img generatedImage"
                viewBox="896 0 224 30"
            >
                <path
                d="M 3 3  L 221 3  L 221 30  L 3 30  L 3 3  Z "
                fillRule="nonzero"
                fill="rgba(238, 236, 225, 0.9921568627450981)"
                stroke="none"
                transform="matrix(1 0 0 1 896 0 )"
                className="fill"
                />
                <path
                d="M 1.5 3  L 1.5 30  "
                strokeWidth={3}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 896 0 )"
                className="stroke"
                />
                <path
                d="M 0 1.5  L 224 1.5  "
                strokeWidth={3}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 896 0 )"
                className="stroke"
                />
                <path
                d="M 222.5 3  L 222.5 30  "
                strokeWidth={3}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 896 0 )"
                className="stroke"
                />
            </svg>
            <div id="u84_text" className="text ">
                <p>
                <span>Calibration Due Date</span>
                </p>
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u85" className="ax_default table_cell transition notrs">
            <svg
                data="images/tool_calibration_record/u85.svg"
                id="u85_img"
                className="img generatedImage"
                viewBox="0 30 224 69"
            >
                <path
                d="M 3 3  L 224 3  L 224 66  L 3 66  L 3 3  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 0 30 )"
                className="fill"
                />
                <path
                d="M 1.5 3  L 1.5 66  "
                strokeWidth={3}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 0 30 )"
                className="stroke"
                />
                <path
                d="M 0 1.5  L 224 1.5  "
                strokeWidth={3}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 0 30 )"
                className="stroke"
                />
                <path
                d="M 0 67.5  L 224 67.5  "
                strokeWidth={3}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 0 30 )"
                className="stroke"
                />
            </svg>
            <div
                id="u85_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u86" className="ax_default table_cell transition notrs">
            <svg
                data="images/tool_calibration_record/u86.svg"
                id="u86_img"
                className="img generatedImage"
                viewBox="224 30 224 69"
            >
                <path
                d="M 3 3  L 224 3  L 224 66  L 3 66  L 3 3  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 224 30 )"
                className="fill"
                />
                <path
                d="M 1.5 3  L 1.5 66  "
                strokeWidth={3}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 224 30 )"
                className="stroke"
                />
                <path
                d="M 0 1.5  L 224 1.5  "
                strokeWidth={3}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 224 30 )"
                className="stroke"
                />
                <path
                d="M 0 67.5  L 224 67.5  "
                strokeWidth={3}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 224 30 )"
                className="stroke"
                />
            </svg>
            <div
                id="u86_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u87" className="ax_default table_cell transition notrs">
            <svg
                data="images/tool_calibration_record/u87.svg"
                id="u87_img"
                className="img generatedImage"
                viewBox="448 30 224 69"
            >
                <path
                d="M 3 3  L 224 3  L 224 66  L 3 66  L 3 3  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 448 30 )"
                className="fill"
                />
                <path
                d="M 1.5 3  L 1.5 66  "
                strokeWidth={3}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 448 30 )"
                className="stroke"
                />
                <path
                d="M 0 1.5  L 224 1.5  "
                strokeWidth={3}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 448 30 )"
                className="stroke"
                />
                <path
                d="M 0 67.5  L 224 67.5  "
                strokeWidth={3}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 448 30 )"
                className="stroke"
                />
            </svg>
            <div
                id="u87_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u88" className="ax_default table_cell transition notrs">
            <svg
                data="images/tool_calibration_record/u88.svg"
                id="u88_img"
                className="img generatedImage"
                viewBox="672 30 224 69"
            >
                <path
                d="M 3 3  L 224 3  L 224 66  L 3 66  L 3 3  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 672 30 )"
                className="fill"
                />
                <path
                d="M 1.5 3  L 1.5 66  "
                strokeWidth={3}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 672 30 )"
                className="stroke"
                />
                <path
                d="M 0 1.5  L 224 1.5  "
                strokeWidth={3}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 672 30 )"
                className="stroke"
                />
                <path
                d="M 0 67.5  L 224 67.5  "
                strokeWidth={3}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 672 30 )"
                className="stroke"
                />
            </svg>
            <div
                id="u88_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Table cell) */}
            <div id="u89" className="ax_default table_cell transition notrs">
            <svg
                data="images/tool_calibration_record/u89.svg"
                id="u89_img"
                className="img generatedImage"
                viewBox="896 30 224 69"
            >
                <path
                d="M 3 3  L 221 3  L 221 66  L 3 66  L 3 3  Z "
                fillRule="nonzero"
                fill="rgba(255, 255, 255, 1)"
                stroke="none"
                transform="matrix(1 0 0 1 896 30 )"
                className="fill"
                />
                <path
                d="M 1.5 3  L 1.5 66  "
                strokeWidth={3}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 896 30 )"
                className="stroke"
                />
                <path
                d="M 0 1.5  L 224 1.5  "
                strokeWidth={3}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 896 30 )"
                className="stroke"
                />
                <path
                d="M 222.5 3  L 222.5 66  "
                strokeWidth={3}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 896 30 )"
                className="stroke"
                />
                <path
                d="M 0 67.5  L 224 67.5  "
                strokeWidth={3}
                strokeDasharray={0}
                stroke="rgba(0, 0, 0, 1)"
                fill="none"
                transform="matrix(1 0 0 1 896 30 )"
                className="stroke"
                />
            </svg>
            <div
                id="u89_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
        </div>
        {/* Save_And_Submit_Button (Rectangle) */}
        <div
            id="u90"
            className="ax_default shape transition notrs"
            data-label="NewRecord_Button"
            onClick={NewRecord_Button}
        >
            <div id="u90_div" className="" />
            <div id="u90_text" className="text ">
            <p>
                <span>Insert New Record</span>
            </p>
            </div>
        </div>
        {/* Back (Rectangle) */}
        <div id="u91" className="ax_default shape transition notrs" data-label="Back" onClick={Back_Button}>
            <div id="u91_div" className="" />
            <div id="u91_text" className="text ">
            <p>
                <span>Back</span>
            </p>
            </div>
        </div>
        {/* New_Record (Group) */}
        <div
            id="u92"
            className="ax_default ax_default_hidden"
            data-label="New_Record"
            style={{ display: "none", visibility: "hidden" }}
            data-left={397}
            data-top={124}
            data-width={400}
            data-height={527}
            layer-opacity={1}
        >
            {/* Unnamed (Rectangle) */}
            <div id="u93" className="ax_default box_3 transition notrs">
            <div id="u93_div" className="" />
            <div
                id="u93_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u94" className="ax_default heading_2 transition notrs">
            <div id="u94_div" className="" />
            <div id="u94_text" className="text ">
                <p>
                <span>Insert Tool Calibration Record</span>
                </p>
            </div>
            </div>
            {/* Cancel_Button (Rectangle) */}
            <div
            id="u95"
            className="ax_default shape transition notrs"
            data-label="Cancel_Button"
            onClick={Cancel_Button}
            >
            <div id="u95_div" className="" />
            <div id="u95_text" className="text ">
                <p>
                <span>Cancel</span>
                </p>
            </div>
            </div>
            {/* Submit_Button (Rectangle) */}
            <div
            id="u96"
            className="ax_default shape transition notrs"
            data-label="Submit_Button"
            onClick={Submit_Button}
            >
            <div id="u96_div" className="" />
            <div id="u96_text" className="text ">
                <p>
                <span>Submit</span>
                </p>
            </div>
            </div>
            {/* Text field & labels (filled) (Group) */}
            <div
            id="u97"
            className="ax_default"
            data-label="Text field & labels (filled)"
            data-left={454}
            data-top={206}
            data-width={287}
            data-height={91}
            layer-opacity={1}
            >
            {/* Input field (Text field) */}
            <div
                id="u98"
                className="ax_default text_field transition notrs"
                data-label="Input field"
            >
                <div id="u98_div" className="" />
                <input
                id="u98_input"
                type="text"
                defaultValue=""
                className="u98_input"
                />
            </div>
            {/* Input label (Rectangle) */}
            <div
                id="u99"
                className="ax_default label transition notrs"
                data-label="Input label"
            >
                <div id="u99_div" className="" />
                <div id="u99_text" className="text ">
                <p>
                    <span>Description</span>
                </p>
                </div>
            </div>
            {/* Helper text (Rectangle) */}
            <div
                id="u100"
                className="ax_default label transition notrs"
                data-label="Helper text"
            >
                <div id="u100_div" className="" />
                <div
                id="u100_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
                >
                <p />
                </div>
            </div>
            </div>
            {/* Text field & labels (filled) (Group) */}
            <div
            id="u101"
            className="ax_default"
            data-label="Text field & labels (filled)"
            data-left={454}
            data-top={277}
            data-width={287}
            data-height={91}
            layer-opacity={1}
            >
            {/* Input field (Text field) */}
            <div
                id="u102"
                className="ax_default text_field transition notrs"
                data-label="Input field"
            >
                <div id="u102_div" className="" />
                <input
                id="u102_input"
                type="number"
                defaultValue=""
                className="u102_input"
                />
            </div>
            {/* Input label (Rectangle) */}
            <div
                id="u103"
                className="ax_default label transition notrs"
                data-label="Input label"
            >
                <div id="u103_div" className="" />
                <div id="u103_text" className="text ">
                <p>
                    <span>Part Number</span>
                </p>
                </div>
            </div>
            {/* Helper text (Rectangle) */}
            <div
                id="u104"
                className="ax_default label transition notrs"
                data-label="Helper text"
            >
                <div id="u104_div" className="" />
                <div
                id="u104_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
                >
                <p />
                </div>
            </div>
            </div>
            {/* Text field & labels (filled) (Group) */}
            <div
            id="u105"
            className="ax_default"
            data-label="Text field & labels (filled)"
            data-left={454}
            data-top={348}
            data-width={287}
            data-height={91}
            layer-opacity={1}
            >
            {/* Input field (Text field) */}
            <div
                id="u106"
                className="ax_default text_field transition notrs"
                data-label="Input field"
            >
                <div id="u106_div" className="" />
                <input
                id="u106_input"
                type="number"
                defaultValue=""
                className="u106_input"
                />
            </div>
            {/* Input label (Rectangle) */}
            <div
                id="u107"
                className="ax_default label transition notrs"
                data-label="Input label"
            >
                <div id="u107_div" className="" />
                <div id="u107_text" className="text ">
                <p>
                    <span>Serial Number</span>
                </p>
                </div>
            </div>
            {/* Helper text (Rectangle) */}
            <div
                id="u108"
                className="ax_default label transition notrs"
                data-label="Helper text"
            >
                <div id="u108_div" className="" />
                <div
                id="u108_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
                >
                <p />
                </div>
            </div>
            </div>
            {/* Text field & labels (filled) (Group) */}
            <div
            id="u109"
            className="ax_default"
            data-label="Text field & labels (filled)"
            data-left={454}
            data-top={419}
            data-width={287}
            data-height={91}
            layer-opacity={1}
            >
            {/* Input field (Text field) */}
            <div
                id="u110"
                className="ax_default text_field transition notrs"
                data-label="Input field"
            >
                <div id="u110_div" className="" />
                <input
                id="u110_input"
                type="date"
                defaultValue=""
                className="u110_input"
                />
            </div>
            {/* Input label (Rectangle) */}
            <div
                id="u111"
                className="ax_default label transition notrs"
                data-label="Input label"
            >
                <div id="u111_div" className="" />
                <div id="u111_text" className="text ">
                <p>
                    <span>Calibration Date</span>
                </p>
                </div>
            </div>
            {/* Helper text (Rectangle) */}
            <div
                id="u112"
                className="ax_default label transition notrs"
                data-label="Helper text"
            >
                <div id="u112_div" className="" />
                <div
                id="u112_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
                >
                <p />
                </div>
            </div>
            </div>
            {/* Text field & labels (filled) (Group) */}
            <div
            id="u113"
            className="ax_default"
            data-label="Text field & labels (filled)"
            data-left={454}
            data-top={490}
            data-width={287}
            data-height={91}
            layer-opacity={1}
            >
            {/* Input field (Text field) */}
            <div
                id="u114"
                className="ax_default text_field transition notrs"
                data-label="Input field"
            >
                <div id="u114_div" className="" />
                <input
                id="u114_input"
                type="date"
                defaultValue=""
                className="u114_input"
                />
            </div>
            {/* Input label (Rectangle) */}
            <div
                id="u115"
                className="ax_default label transition notrs"
                data-label="Input label"
            >
                <div id="u115_div" className="" />
                <div id="u115_text" className="text ">
                <p>
                    <span>Calibration Due Date</span>
                </p>
                </div>
            </div>
            {/* Helper text (Rectangle) */}
            <div
                id="u116"
                className="ax_default label transition notrs"
                data-label="Helper text"
            >
                <div id="u116_div" className="" />
                <div
                id="u116_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
                >
                <p />
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default ToolCalibrationRecordPage;