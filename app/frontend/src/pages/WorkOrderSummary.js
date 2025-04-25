import { loadStyle, unloadStyle } from './Components/styleUtils.js';
import { useEffect, useState } from 'react';
import * as authUtils from './Components/authUtils.js';

function WorkOrderSummaryPage() {
    const [taskCards, setTaskCards] = useState([
        createNewTaskCard() // Start with one row
    ]);

    useEffect(() => {
        authUtils.CheckLoggedIn();
        authUtils.CheckAccess();
        authUtils.CheckSession();
        const cssFile = '/css/WorkOrderSummary.css';
        loadStyle(cssFile);

        return () => {
            unloadStyle(cssFile); // clean up when navigating away
        };
    }, []);

    function createNewTaskCard() {
        return {
            id: '',
            title: '',
            reviewedBy: '',
            deferredDefect: false,
            followOn: {
                FunctionCheck: false,
                LeakCheck: false,
                Other: false,
                NA: false
            },
            icComplete: {
                Yes: false,
                NA: false
            },
            testFlight: {
                Yes: false,
                NA: false
            }
        };
    }

    const addTaskCardRow = () => {
        setTaskCards([...taskCards, createNewTaskCard()]);
    };

    const deleteTaskCardRow = (index) => {
        const updated = [...taskCards];
        updated.splice(index, 1);
        setTaskCards(updated);
    };

    const handleChange = (index, field, value) => {
        const updated = [...taskCards];
        updated[index][field] = value;
        setTaskCards(updated);
    };

    const handleNestedCheckbox = (index, section, key, checked) => {
        const updated = [...taskCards];
        updated[index][section][key] = checked;
        setTaskCards(updated);
    };

    function NextPage() {
        window.location.href = "/work-order-summary-2";
    }

    function Back_Button() {
        sessionStorage.removeItem("document_id");
        authUtils.Back();
    }

    return(
        <div id="base" className="">
        {/* Unnamed (Rectangle) */}
        <div id="u469" className="ax_default box_1 transition notrs">
            <div id="u469_div" className="" />
            <div id="u469_text" className="text ">
            <p>
                <span>WORK ORDER SUMMARY</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u470" className="ax_default box_1 transition notrs">
            <div id="u470_div" className="" />
            <div id="u470_text" className="text ">
            <p>
                <span>WORK ORDER #</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u471" className="ax_default box_1 transition notrs">
            <div id="u471_div" className="" />
            <div id="u471_text" className="text ">
            <p>
                <span>SUBJECT</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u472" className="ax_default box_1 transition notrs">
            <div id="u472_div" className="" />
            <div id="u472_text" className="text ">
            <p>
                <span>SUMMARY PAGE</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u473" className="ax_default box_1 transition notrs">
            <div id="u473_div" className="" />
            <div id="u473_text" className="text ">
            <p>
                <span>AIRCRAFT TYPE</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u474" className="ax_default box_1 transition notrs">
            <div id="u474_div" className="" />
            <div id="u474_text" className="text ">
            <p>
                <span>REGISTRATION</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u475" className="ax_default box_1 transition notrs">
            <div id="u475_div" className="" />
            <div id="u475_text" className="text ">
            <p>
                <span>SERIAL NUMBER</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u476" className="ax_default box_1 transition notrs">
            <div id="u476_div" className="" />
            <div id="u476_text" className="text ">
            <p>
                <span>TOTAL TASK CARDS</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u477" className="ax_default box_1 transition notrs">
            <div id="u477_div" className="" />
            <div id="u477_text" className="text ">
            <p>
                <span>of</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u478" className="ax_default box_1 transition notrs">
            <div id="u478_div" className="" />
            <div id="u478_text" className="text ">
            <p>
                <span>TOTAL AIRFRAME TIME (HOURS)</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u479" className="ax_default box_1 transition notrs">
            <div id="u479_div" className="" />
            <div id="u479_text" className="text ">
            <p>
                <span>TOTAL CYCLES</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u480" className="ax_default box_1 transition notrs">
            <div id="u480_div" className="" />
            <div id="u480_text" className="text ">
            <p>
                <span>OPENED BY</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u481" className="ax_default box_1 transition notrs">
            <div id="u481_div" className="" />
            <div id="u481_text" className="text ">
            <p>
                <span>DATE OPENED</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Rectangle) */}
        <div id="u482" className="ax_default box_1 transition notrs">
            <div id="u482_div" className="" />
            <div id="u482_text" className="text ">
            <p>
                <span>TASK CARDS INCLUDED</span>
            </p>
            </div>
        </div>
        {/* Aircraft_Type (Text field) */}
        <div
            id="u484"
            className="ax_default text_field transition notrs"
            data-label="Aircraft_Type"
        >
            <div id="u484_div" className="" />
            <input id="u484_input" type="text" defaultValue="" className="u484_input" />
        </div>
        {/* Registration (Text field) */}
        <div
            id="u485"
            className="ax_default text_field transition notrs"
            data-label="Registration"
        >
            <div id="u485_div" className="" />
            <input id="u485_input" type="text" defaultValue="" className="u485_input" />
        </div>
        {/* Serial_Number (Text field) */}
        <div
            id="u486"
            className="ax_default text_field transition notrs"
            data-label="Serial_Number"
        >
            <div id="u486_div" className="" />
            <input id="u486_input" type="text" defaultValue="" className="u486_input" />
        </div>
        {/* Total_Task_Cards (Text field) */}
        <div
            id="u487"
            className="ax_default text_field transition notrs"
            data-label="Total_Task_Cards"
        >
            <div id="u487_div" className="" />
            <input id="u487_input" type="text" defaultValue="" className="u487_input" />
        </div>
        {/* Work_Order_Number (Text field) */}
        <div
            id="u488"
            className="ax_default text_field transition notrs"
            data-label="Work_Order_Number"
        >
            <div id="u488_div" className="" />
            <input id="u488_input" type="text" defaultValue="" className="u488_input" />
        </div>
        {/* Subject (Text field) */}
        <div
            id="u489"
            className="ax_default text_field transition notrs"
            data-label="Subject"
        >
            <div id="u489_div" className="" />
            <input id="u489_input" type="text" defaultValue="" className="u489_input" />
        </div>
        {/* Summary_Page_Part1 (Text field) */}
        <div
            id="u490"
            className="ax_default text_field transition notrs"
            data-label="Summary_Page_Part1"
        >
            <div id="u490_div" className="" />
            <input id="u490_input" type="text" defaultValue="" className="u490_input" />
        </div>
        {/* Summary_Page_Part2 (Text field) */}
        <div
            id="u492"
            className="ax_default text_field transition notrs"
            data-label="Summary_Page_Part2"
        >
            <div id="u492_div" className="" />
            <input id="u492_input" type="text" defaultValue="" className="u492_input" />
        </div>
        {/* Total_Airframe_Time (Text field) */}
        <div
            id="u493"
            className="ax_default text_field transition notrs"
            data-label="Total_Airframe_Time"
        >
            <div id="u493_div" className="" />
            <input id="u493_input" type="text" defaultValue="" className="u493_input" />
        </div>
        {/* Total_Cycles (Text field) */}
        <div
            id="u494"
            className="ax_default text_field transition notrs"
            data-label="Total_Cycles"
        >
            <div id="u494_div" className="" />
            <input id="u494_input" type="text" defaultValue="" className="u494_input" />
        </div>
        {/* Opened_By (Text field) */}
        <div
            id="u495"
            className="ax_default text_field transition notrs"
            data-label="Opened_By"
        >
            <div id="u495_div" className="" />
            <input id="u495_input" type="text" defaultValue="" className="u495_input" />
        </div>
        {/* Date_Opened (Text field) */}
        <div
            id="u496"
            className="ax_default text_field transition notrs"
            data-label="Date_Opened"
        >
            <div id="u496_div" className="" />
            <input id="u496_input" type="date" defaultValue="" className="u496_input" />
        </div>
        {/* Unnamed (Table) */}

            <div id="u499" className="ax_default">
                <table className="table-binder w-full">
                    <thead>
                        <tr className="table-header">
                            <th>ID#</th>
                            <th>Title</th>
                            <th>Follow-On Maintenance</th>
                            <th>IC Complete</th>
                            <th>Test Flight</th>
                            <th>Reviewed By</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {taskCards.map((row, index) => (
                            <tr className="table-row" key={index}>
                                <td>
                                    <input
                                        type="text"
                                        value={row.id}
                                        onChange={(e) => handleChange(index, 'id', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={row.title}
                                        onChange={(e) => handleChange(index, 'title', e.target.value)}
                                    />
                                    <br />
                                    <input
                                        type="checkbox"
                                        checked={row.deferredDefect}
                                        onChange={(e) => handleChange(index, 'deferredDefect', e.target.checked)}
                                    />
                                    <label>Deferred Defect</label>
                                </td>
                                <td>
                                    {['FunctionCheck', 'LeakCheck', 'Other', 'NA'].map((key) => (
                                        <div key={key}>
                                            <input
                                                type="checkbox"
                                                checked={row.followOn[key]}
                                                onChange={(e) =>
                                                    handleNestedCheckbox(index, 'followOn', key, e.target.checked)
                                                }
                                            />
                                            <label>{key.replace(/([A-Z])/g, ' $1')}</label>
                                        </div>
                                    ))}
                                </td>
                                <td>
                                    {['Yes', 'NA'].map((key) => (
                                        <div key={key}>
                                            <input
                                                type="checkbox"
                                                checked={row.icComplete[key]}
                                                onChange={(e) =>
                                                    handleNestedCheckbox(index, 'icComplete', key, e.target.checked)
                                                }
                                            />
                                            <label>{key.toUpperCase()}</label>
                                        </div>
                                    ))}
                                </td>
                                <td>
                                    {['Yes', 'NA'].map((key) => (
                                        <div key={key}>
                                            <input
                                                type="checkbox"
                                                checked={row.testFlight[key]}
                                                onChange={(e) =>
                                                    handleNestedCheckbox(index, 'testFlight', key, e.target.checked)
                                                }
                                            />
                                            <label>{key.toUpperCase()}</label>
                                        </div>
                                    ))}
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={row.reviewedBy}
                                        onChange={(e) => handleChange(index, 'reviewedBy', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <button onClick={() => deleteTaskCardRow(index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div
                id="add-row-btn"
                className="button"
                onClick={addTaskCardRow}
                style={{
                    marginTop: '10px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    width: '100%',
                    fontWeight: 'bold',
                    height: '40px',
                }}
                >
                <p style={{ margin: 0 }}><span>Add Row</span></p>
                </div>

                <div className="buttons-container">
                <div id="back" className="button" onClick={Back_Button}>
                    <p><span>Back</span></p>
                </div>
                <div id="next" className="button" onClick={NextPage}>
                    <p><span>Next Page</span></p>
                </div>
                <div id="save" className="button">
                    <p><span>Save</span></p>
                </div>
                </div>
            </div>
            </div>
    );
};

export default WorkOrderSummaryPage;