import { registerProfile } from "../api/jwtRegister.js";
import { API_BASE_URL } from "../api/endpoints.js";
import { API_REGISTER_ENDPOINT } from "../api/endpoints.js";

const url = API_BASE_URL + API_REGISTER_ENDPOINT;

export function registerForm() {
   const form = document.querySelector("#registerForm");

   form.addEventListener("submit", (event) => {
      event.preventDefault();

      const userData = {
         username: document.querySelector("#floatingUsername").value,
         email: document.querySelector("#floatingEmail").value,
         password: document.querySelector("#floatingPassword").value,
      };

      console.log(userData);
      registerProfile(url, userData);
   });
}
