import { loadStyle, unloadStyle } from './Components/styleUtils.js';
import * as authUtils from './Components/authUtils.js';
import * as apiService from './Components/apiService.js';
import React, { useEffect, useState } from "react";

function DocumentBinderPage() {

    useEffect(() => {
        async function fetchCompetitorsBinder(data) {
            
            try{
                const response = await apiService.apiRequest(`load-document-binder?user_id=${data}`);
                if (!response || response.length === 0) {
                    alert("There is No Document Binder Assigned To You.");
                    window.location.href = "/dashboard-competitor";
                }
                setData(response);
                const name = response[0];
                sessionStorage.setItem('binderID', response[0].binder_id);
                document.getElementById('u71_spam').innerHTML = `${name.user_name} Document Binder`;
            }   catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        async function fetchSpecificBinder(data) {
            try {
                const response = await apiService.apiRequest(`get-document-binder?binder_id=${data}`);
                if (!response || response.length === 0) {
                    alert("There is Document Binder Dosen't Exist.");
                    authUtils.Back();
                }
                setData(response);
                const name = response[0];
                sessionStorage.setItem('binderID', response[0].binder_id);
                document.getElementById('u71_spam').innerHTML = `${name.user_name} Document Binder`;
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        const userRole = authUtils.GetRole();
        if (userRole === "Competitor") {
            const data = authUtils.GetUserId();
            fetchCompetitorsBinder(data);
        } else if (userRole === "Admin" || userRole === "Admin") {
            const binderID = sessionStorage.getItem('binderID');
            if (!binderID) {
                alert("No binder ID Has Been Found. Redirecting to Back");
                authUtils.Back();
            } else {
                document.getElementById('u72').style.visibility = "hidden";
                document.getElementById('u72').style.display = "none";
                document.getElementById('u74').style.visibility = "hidden";
                document.getElementById('u74').style.display = "none";
                fetchSpecificBinder(binderID);
            }


        }
        authUtils.CheckLoggedIn();
        authUtils.CheckAccess();
        authUtils.CheckSession();
        const cssFile = '/css/DocumentBinder.css';
        loadStyle(cssFile);

        return () => {
        unloadStyle(cssFile); // clean up when navigating away
        };
    }, []);

    const [data, setData] = useState([]);
    const userRole = authUtils.GetRole();

    function Back_Button() {
        authUtils.Back();
        sessionStorage.removeItem('binderID');
    };

    async function Submit_Button() {
        if (window.confirm("Are you sure? Your won't be able to edit or view any documents in this binder after you submit")) {
            const binderID = sessionStorage.getItem('binderID');
            const data = {
                binder_id: binderID,
            };
            try {
                const response = await apiService.apiRequest('submit-document-binder', 'POST', data);
                if (response) {
                    console.log("Document binder submitted successfully:", response);
                    alert("Document binder submitted successfully!");
                    sessionStorage.removeItem('binderID');
                    window.location.href = "/dashboard-competitor";
                } else {
                    alert("Error submitting document binder:", response);
                }
            } catch (error) {
                console.error("Error submitting document binder:", error);
                alert("Error submitting document binder:", error);
            }
        };
    };

    function Show_NewDocument_Button() {
        document.getElementById("u96").style.display = "block";
        document.getElementById("u96").style.visibility = "visible";
    };

    function Cancel_Button() {
        document.getElementById("u96").style.display = "none";
        document.getElementById("u96").style.visibility = "hidden";
    };

    async function DeleteDocument_Button(docID, docType) {
        if (window.confirm("Are you sure? This action cannot be undone.")) {
            const data = {
                document_id: docID,
                document_type: docType,
            };
            if (data.document_type === "ATL") {
                alert("You cannot delete this document type.");
                return null;
            };
            try {
                const response = await apiService.apiRequest('delete-document', 'DELETE', data);
                if (response) {
                    console.log("Document deleted successfully:", response);
                }
            } catch (error) {
                console.error("Error deleting document:", error);
                alert("Error deleting document:", error);
                return null;
            };
            try {
                const response = await apiService.apiRequest('delete-document-from-binder', 'DELETE', data);
                if (response) {
                    console.log("Documentdeleted successfully:", response);
                    alert("Document deleted successfully");
                    window.location.reload();
                }
            } catch (error) {
                console.error("Error deleting document:", error);
                alert("Error deleting document:", error);
                return null;
            }
        };
    };

    async function Add_NewDocument_Button() {
        const selectedOption = document.getElementById("u104_input").value;
        const binderID = sessionStorage.getItem('binderID');
        const documentName = prompt("Enter the name of the document:");
        if (!documentName) {
            alert("Document name cannot be empty.");
            return;
        }

        const data = {
            binder_id: binderID,
            document_name: documentName,
            document_type: selectedOption,
        };
        try {
            const newDocumentResponse = await apiService.apiRequest('new-document', 'POST', data);
            if (newDocumentResponse) {
                console.log("New document added successfully:", newDocumentResponse);
                console.log("Document ID:", newDocumentResponse.document_id);
                const createDocumentResponse = await apiService.apiRequest('create-document', 'POST', {document_id:newDocumentResponse.documentId, document_type:data.document_type});
                if (createDocumentResponse) {
                    console.log("Document created successfully:", createDocumentResponse);
                    alert("Document created successfully!");
                    window.location.reload();
                }
            } 
        } catch (error) {
            console.error("Error adding new document:", error);
            alert("Error adding new document:", error);
            return null;
        }    
    }

    async function EditDocumentName_Button(docID) {
        const newName = prompt("Enter the new name for the document:");
        if (!newName) {
            alert("Document name cannot be empty.");
            return;
        }
        const data = {
            document_id: docID,
            document_name: newName,
        };
        try {
            const response = await apiService.apiRequest('edit-document-name', 'POST', data);
            if (response) {
                console.log("Document name updated successfully:", response);
                alert("Document name updated successfully!");
                window.location.reload();
            } else {
                alert("Error updating document name:", response);
            }
        } catch (error) {
            console.error("Error updating document name:", error);
            alert("Error updating document name:", error);
        }
    };

    function OpenDocument_Button(docID,docType) {
        if (docType === "ATL") {
            sessionStorage.setItem("document_id", docID);
            window.location.href = "/aircraft-technical-log";
        } else if (docType === "EOW") {
            sessionStorage.setItem("document_id", docID);
            window.location.href = "/end-of-work-shift-report";
        } else if (docType === "TC") {
            sessionStorage.setItem("document_id", docID);
            window.location.href = "/task-card";
        } else if (docType === "ER") {
            sessionStorage.setItem("document_id", docID);
            window.location.href = "/engine-report";
        } else if (docType === "SDR") {
            sessionStorage.setItem("document_id", docID);
            window.location.href = "/structural-damage-report";
        } else if (docType === "TDR") {
            sessionStorage.setItem("document_id", docID);
            window.location.href = "/technical-dispatch-report";
        } else if (docType === "WOS") {
            sessionStorage.setItem("document_id", docID);
            window.location.href = "/work-order-summary";
        } else {
            alert("Unknown document type:", docType);
        }

    };

    return(
        <div id="base" className="">
        {/* Unnamed (Rectangle) */}
        <div id="u71" className="ax_default box_1 transition notrs">
            <div id="u71_div" className="" />
            <div id="u71_text" className="text ">
            <p>
                <span id="u71_spam">Document Binder</span>
            </p>
            </div>
        </div>
        {/* Add_New_Document (Rectangle) */}
        <div
            id="u74"
            className="ax_default shape transition notrs"
            data-label="Add_New_Document"
            onClick={Show_NewDocument_Button}
        >
            <div id="u74_div" className="" />
            <div id="u74_text" className="text ">
            <p>
                <span>Add New Document</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Table) */}
        <div id="u75" className="ax_default">
        <table className="table-binder w-full">
            <thead>
            <tr className="table-header">
                <th className="table-header text-left">Document Name</th>
                <th className="table-header text-left">Last Updated</th>
                <th className="table-header text-left">Actions</th>
            </tr>
            </thead>
            <tbody>
            {data.map((row, rowIndex) => (
                <tr key={rowIndex} className="table-row">
                <td className="table-cell">{row.document_name}</td>
                <td className="table-cell">{row.last_updated}</td>
                <td className="table-cell">
                    <button id="open" onClick={() => OpenDocument_Button(row.document_id, row.document_type)}>Open</button>
                    {userRole === "Competitor" && (
                        <>
                            <button onClick={() => EditDocumentName_Button(row.document_id)}>Edit Name</button>
                            <button onClick={() => DeleteDocument_Button(row.document_id, row.document_type)}>Delete</button>
                        </>
                    )}
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        <div className="buttons-container">
        <div id="u73" className="button" onClick={Back_Button}>
            <p><spam>Back</spam></p>
        </div>
        <div id="u72" className="button" onClick={Submit_Button}>
            <p><spam>Submit</spam></p>
        </div>
        </div>
        </div>
        {/* New_Document (Group) */}
        <div
            id="u96"
            className="ax_default ax_default_hidden"
            data-label="New_Document"
            style={{ display: "none", visibility: "hidden" }}
            data-left={397}
            data-top={124}
            data-width={400}
            data-height={257}
            layer-opacity={1}
        >
            {/* Unnamed (Rectangle) */}
            <div id="u97" className="ax_default box_3 transition notrs">
            <div id="u97_div" className="" />
            <div
                id="u97_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
            {/* Unnamed (Rectangle) */}
            <div id="u98" className="ax_default heading_2 transition notrs">
            <div id="u98_div" className="" />
            <div id="u98_text" className="text ">
                <p>
                <span>Add New Document</span>
                </p>
            </div>
            </div>
            {/* Cancel_Button (Rectangle) */}
            <div
            id="u99"
            className="ax_default shape transition notrs"
            data-label="Cancel_Button"
            onClick={Cancel_Button}
            >
            <div id="u99_div" className="" />
            <div id="u99_text" className="text ">
                <p>
                <span>Cancel</span>
                </p>
            </div>
            </div>
            {/* Submit_Button (Rectangle) */}
            <div
            id="u100"
            className="ax_default shape transition notrs"
            data-label="Submit_Button"
            onClick={Add_NewDocument_Button}
            >
            <div id="u100_div" className="" />
            <div id="u100_text" className="text ">
                <p>
                <span>Add</span>
                </p>
            </div>
            </div>
            {/* Text field & labels (filled) (Group) */}
            <div
            id="u101"
            className="ax_default"
            data-label="Text field & labels (filled)"
            data-left={454}
            data-top={203}
            data-width={286}
            data-height={91}
            layer-opacity={1}
            >
            {/* Input label (Rectangle) */}
            <div
                id="u102"
                className="ax_default label transition notrs"
                data-label="Input label"
            >
                <div id="u102_div" className="" />
                <div id="u102_text" className="text ">
                <p>
                    <span>Document Type</span>
                </p>
                </div>
            </div>
            {/* Helper text (Rectangle) */}
            <div
                id="u103"
                className="ax_default label transition notrs"
                data-label="Helper text"
            >
                <div id="u103_div" className="" />
                <div
                id="u103_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
                >
                <p />
                </div>
            </div>
            {/* Unnamed (Droplist) */}
            <div id="u104" className="ax_default droplist transition notrs">
                <div id="u104_div" className="" />
                <select id="u104_input" className="u104_input">
                <option className="u104_input_option" value="WOS">
                    Work Order Summary
                </option>
                <option className="u104_input_option" value="TC">
                    Task Card
                </option>
                <option className="u104_input_option" value="ER">
                    Engine Report
                </option>
                <option className="u104_input_option" value="SDR">
                    Structural Damage Report
                </option>
                <option
                    className="u104_input_option"
                    value="TDR"
                >
                    Technical Dispatch Report
                </option>
                <option className="u104_input_option" value="EOW">
                    End-Of-Work-Shift Report
                </option>
                </select>
            </div>
            </div>
        </div>
        </div>
    );
};

export default DocumentBinderPage;