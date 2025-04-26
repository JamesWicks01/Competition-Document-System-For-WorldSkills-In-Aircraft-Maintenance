import { useEffect, useState } from 'react';
import { loadStyle, unloadStyle } from './Components/styleUtils.js';
import * as authUtils from './Components/authUtils.js';
import * as apiService from './Components/apiService.js';

function PartsConsumableRequestPage() {
    const [rows, setRows] = useState([{ item: 1, id_number: '', description: '', quantity: '' }]);
    const [formData, setFormData] = useState({
        name: '',
        aca_number: '',
        work_order_summary_id: '',
        task_card_id: '',
    });
    // const [readOnly, setReadOnly] = useState(false); // 🆕 Add readOnly state

    useEffect(() => {
        authUtils.CheckLoggedIn();
        authUtils.CheckAccess();
        authUtils.CheckSession();

        const requestId = sessionStorage.getItem('request_id');
        if (requestId) {
            apiService.apiRequest(`load-parts-consumable-request?request_id=${requestId}`, 'GET')
                .then(data => {
                    if (data) {
                        setFormData({
                            name: data.name || '',
                            aca_number: data.aca_number || '',
                            work_order_summary_id: data.work_summary_order_id || '',
                            task_card_id: data.task_card_id || ''
                        });

                        try {
                            const parsedItems = JSON.parse(data.items);
                            if (Array.isArray(parsedItems)) {
                                setRows(parsedItems.map((item, index) => ({
                                    item: index + 1,
                                    id_number: item.id_number || '',
                                    description: item.description || '',
                                    quantity: item.quantity || ''
                                })));
                            }
                        } catch (err) {
                            console.error('Failed to parse items:', err);
                        }
                    }
                })
                .catch(err => {
                    console.error('Failed to load request:', err);
                });
        }

        const cssFile = '/css/PartsConsumableRequest.css';
        loadStyle(cssFile);

        const userRole = authUtils.GetRole();
        if (userRole === 'Expert' || userRole === 'Admin') {
            const submit = document.getElementById('submit');
            const addRow = document.getElementById('add-row-btn');
            if (submit) submit.style.display = 'none';
            if (addRow) addRow.style.display = 'none';
        }

        return () => {
            unloadStyle(cssFile);
        };
    }, []);

    const handleAddRow = () => {
        const newItemNumber = rows.length + 1;
        const newRow = { item: newItemNumber, id_number: '', description: '', quantity: '' };
        setRows([...rows, newRow]);
    };

    const handleInputChange = (index, field, value) => {
        const updatedRows = [...rows];
        updatedRows[index][field] = value;
        setRows(updatedRows);
    };

    const handleFormChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    function handleBack() {
        sessionStorage.removeItem('request_id');
        authUtils.Back();
    }

    async function handleSubmit() {
        try {
            const data = {
                ...formData,
                items: Array.isArray(rows) ? rows : [],
                user_id: authUtils.GetUserId()
            };

            console.log('Submitting data:', data);

            const response = await apiService.apiRequest("submit-parts-consumable-request", "POST", data);

            if (response) {
                alert("Request submitted successfully.");
                window.location.reload();
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert("Failed to submit request.");
        }
    }

    return (
        <div id="base" className="">
            <div id="u105" className="ax_default box_1 transition notrs">
                <div id="u105_div" />
                <div id="u105_text" className="text ">
                    <p><span>PARTS AND CONSUMABLE REQUISITION</span></p>
                </div>
            </div>

            {/* Input Labels */}
            <div id="u106" class="ax_default box_1 transition notrs">
                <div id="u106_div" class=""></div>
                <div id="u106_text" class="text ">
                <p><span>Name</span></p>
                </div>
            </div>

            <div id="u107" class="ax_default box_1 transition notrs">
                <div id="u107_div" class=""></div>
                <div id="u107_text" class="text ">
                <p><span>ACA#</span></p>
                </div>
            </div>

            <div id="u108" class="ax_default box_1 transition notrs">
                <div id="u108_div" class=""></div>
                <div id="u108_text" class="text ">
                <p><span>Work Order #</span></p>
                </div>
            </div>

            <div id="u109" class="ax_default box_1 transition notrs">
                <div id="u109_div" class=""></div>
                <div id="u109_text" class="text ">
                <p><span>Task Card ID#</span></p>
                </div>
            </div>

            <div id="u110" class="ax_default box_1 transition notrs">
                <div id="u110_div" class=""></div>
                <div id="u110_text" class="text ">
                <p><span></span></p>
                </div>
            </div>
            {/* Input Fields */}
            <div id="u115" className="ax_default text_field transition notrs">
                <div id="u115_div" />
                <input
                    id="u115_input"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleFormChange('name', e.target.value)}
                    className="u115_input"
                />
            </div>
            <div id="u117" className="ax_default text_field transition notrs">
                <div id="u117_div" />
                <input
                    id="u117_input"
                    type="text"
                    value={formData.aca_number}
                    onChange={(e) => handleFormChange('aca_number', e.target.value)}
                    className="u117_input"
                />
            </div>
            <div id="u116" className="ax_default text_field transition notrs">
                <div id="u116_div" />
                <input
                    id="u116_input"
                    type="text"
                    value={formData.work_order_summary_id}
                    onChange={(e) => handleFormChange('work_order_summary_id', e.target.value)}
                    className="u116_input"
                />
            </div>
            <div id="u118" className="ax_default text_field transition notrs">
                <div id="u118_div" />
                <input
                    id="u118_input"
                    type="text"
                    value={formData.task_card_id}
                    onChange={(e) => handleFormChange('task_card_id', e.target.value)}
                    className="u118_input"
                />
            </div>

            {/* Table */}
            <div id="u119" className="ax_default">
                <table className="table-binder w-full">
                    <thead>
                        <tr className="table-header">
                            <th>Item</th>
                            <th>Part/Identification #</th>
                            <th>Description</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => (
                            <tr key={index}>
                                <td>{row.item}</td>
                                <td>
                                    <input
                                        value={row.id_number}
                                        onChange={(e) => handleInputChange(index, 'id_number', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        value={row.description}
                                        onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        value={row.quantity}
                                        onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div
                    id="add-row-btn"
                    className="button"
                    onClick={handleAddRow}
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
                    <div id="back" className="button" onClick={handleBack}>
                        <p><span>Back</span></p>
                    </div>
                    <div
                        id="submit"
                        className="button"
                        onClick={handleSubmit}
                    >
                        <p><span>Submit</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PartsConsumableRequestPage;