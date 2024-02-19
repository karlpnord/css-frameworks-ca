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
      console.log(response);
      const json = await response.json();
      console.log(json);

      if (response.status === 401) {
         registerError.style.display = "block";
         throw new Error("NOT WORKING!");
      } else {
         const accessToken = json.accessToken;
         localStorage.setItem("accessToken", accessToken);
         window.location.href = "/feed/";
         return json;
      }
   } catch (error) {
      console.log(error);
      registerError.style.display = "block";
      registerError.textContent = "An error occurred, please try again.";
   }
}
