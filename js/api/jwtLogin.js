import { registerError } from "../variables.js";

export async function loginToProfile(url, userData) {
   try {
      const postData = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(userData),
      };
      const response = await fetch(url, postData);
      const json = await response.json();

      if (response.status === 401) {
         registerError.style.display = "block";
         throw new Error("NOT WORKING!");
      } else {
         const accessToken = json.accessToken;
         localStorage.setItem("accessToken", accessToken);
         const loggedInUser = json.name;
         localStorage.setItem("loggedInUser", loggedInUser);
         window.location.href = "/feed/";
         return json;
      }
   } catch (error) {
      registerError.style.display = "block";
      registerError.textContent = "An error occurred, please try again.";
   }
}
