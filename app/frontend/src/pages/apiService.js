const BASE_URL = "http://localhost:5000"; // Change this to your API base URL

export async function apiRequest(endpoint, method = "GET", data = null, authRequired = true) {
    const headers = { "Content-Type": "application/json" };

    // ✅ Add Authorization header if authRequired is true & token exists
    if (authRequired) {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("You are not authorized to access this");
            throw new Error("Unauthorized: No token provided");
        }
        headers["Authorization"] = `Bearer ${token}`;
    }

    const options = {
        method,
        headers,
        body: data ? JSON.stringify(data) : null,
    };

    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`, options);
        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "Server request failed");
        }

        return result; // ✅ Return server response
    } catch (error) {
        console.error("API request error:", error);
        throw error;
    }
}


