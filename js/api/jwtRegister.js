import { registerError } from "../variables.js";

export async function registerProfile(url, data) {
   try {
      const postData = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(data),
      };

      const response = await fetch(url, postData);

      const json = await response.json();

      if (response.status === 400) {
         registerError.style.display = "block";
      } else if (response.status === 404) {
         registerError.style.display = "block";
         registerError.textContent = "Something went wrong, please contact us.";
      } else {
         window.location.href = "../";
         return json;
      }
   } catch (error) {
      registerError.style.display = "block";
      registerError.textContent = "An error occurred, please try again.";
   }
}
