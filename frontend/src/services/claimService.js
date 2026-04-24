const API_URL = "http://localhost:8080/api/claim"; // URL local para pruebas

export const claimService = {
  async getStatus() {
    try {
      const response = await fetch(API_URL);
      return await response.json();
    } catch (error) {
      console.error("Error fetching status:", error);
      return { status: "OFFLINE" };
    }
  },

  async executeAction(action) {
    try {
      const response = await fetch(`${API_URL}?action=${action}`, {
        method: "POST",
      });
      return await response.json();
    } catch (error) {
      console.error("Error executing action:", error);
      return { status: "ERROR" };
    }
  }
};