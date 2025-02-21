import { jwtDecode } from "jwt-decode";

export function CheckLoggedIn() {
    const token = localStorage.getItem("token");
    if (!token) {
        window.location.href = "/login";
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
    window.location.href = "/login";
}

export function CheckAccess(role) {
    const userRole = GetRole();
    if (userRole !== role) {
        alert("Access denied");
        window.history.back();
    }
}

export function ServerRequest(url, method, body) {
    return fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });
}