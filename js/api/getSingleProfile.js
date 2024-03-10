import { updateProfile } from "../components/updateProfile.js";

export async function getSingleProfile(url) {
   try {
      const token = localStorage.getItem("accessToken");
      const getData = {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
         },
      };
      const response = await fetch(url, getData);
      const json = await response.json();
      updateProfile(json);
   } catch (error) {
      const container = document.querySelector("#profileCard");
      container.textContent = "";
      const errorDiv = document.createElement("div");
      errorDiv.classList.add(
         "text-danger",
         "fw-bold",
         "error-container",
         "p-2"
      );
      errorDiv.textContent =
         "An error occurred when loading your profile, please try again later!";
      container.appendChild(errorDiv);
   }
}
