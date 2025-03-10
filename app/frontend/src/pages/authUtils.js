import { jwtDecode } from "jwt-decode";

export function CheckLoggedIn() {
    const token = localStorage.getItem("token");
    if (!token) {
        alert("You need to be logged in to access this page");
        window.location.href = "/";
    }
}

export function GetRole() {
    const token = localStorage.getItem("token");
    if (token) {
        const decodedToken = jwtDecode(token);
        return decodedToken.role;
    }
    return null;
}

export function Signout() {
    localStorage.removeItem("token");
    window.location.href = "/";
}

export function CheckAccess() {
    const token = localStorage.getItem("token");
    const AllowedPages = {
        Admin: [
            "/account-management",
            "/aircraft-technical-log",
            "/aircraft-technical-log-create",
            "/change-user-password",
            "/dashboard-admin",
            "/document-binder",
            "/end-of-shift-report",
            "/parts-consumable-request",
            "/structure-damage-report",
            "/task-card",
            "/technical-dispatch-report",
            "/tool-calibration-record",
            "/view-all-document-binders",
            "/work-order-summary"
        ],
        Expert: [
            "/aircraft-technical-log",
            "/aircraft-technical-log-create",
            "/change-user-password",
            "/dashboard-expert",
            "/document-binder",
            "/end-of-shift-report",
            "/parts-consumable-request",
            "/structure-damage-report",
            "/task-card",
            "/technical-dispatch-report",
            "/tool-calibration-record",
            "/view-all-document-binders",
            "/work-order-summary"
        ],
        Competitor: [
            "/aircraft-technical-log",
            "/change-user-password",
            "/dashboard-competitor",
            "/document-binder",
            "/end-of-shift-report",
            "/parts-consumable-request",
            "/structure-damage-report",
            "/task-card",
            "/technical-dispatch-report",
            "/tool-calibration-record",
            "/work-order-summary"
        ],
    };
    const decodedToken = jwtDecode(token);
    const role = decodedToken.role;
    const currentPage = window.location.pathname;
    if (!AllowedPages[role].includes(currentPage)) {
        alert("You are not authorized to access this page");
        window.history.back();
    }
}

export function Back() {
    window.history.back();
}

