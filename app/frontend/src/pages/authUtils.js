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
        ADMIN: ["/dashboard-admin", "/parts-consumable-request", "/tool-calibration-record", "/create-atl"],
        EXPERT: ["/dashboard-expert", "/parts-consumable-request", "/tool-calibration-record", "/create-atl"],
        COMPETITOR: ["/dashboard-competitor", "/parts-consumable-request", "/tool-calibration-record"],
    };
    const decodedToken = jwtDecode(token);
    const role = decodedToken.role;
    const currentPage = window.location.pathname;
    if (!AllowedPages[role].includes(currentPage)) {
        alert("You are not authorized to access this page");
        window.history.back();
    }
}
