const BASE_URL = "http://localhost:5000"; // Change this to your server URL

export async function apiRequest(endpoint, method = "GET", data = null, authRequired = true) {
    const headers = { "Content-Type": "application/json" };

    // Add authorization token if required
    const token = localStorage.getItem("token");
    if (authRequired && token) {
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

        return result; // Return the server response
    } catch (error) {
        console.error("API request error:", error);
        throw error;
    }
}


