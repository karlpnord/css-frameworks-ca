import { loginToProfile } from "../api/jwtLogin.js";
import { API_BASE_URL } from "../api/endpoints.js";
import { API_LOGIN_ENDPOINT } from "../api/endpoints.js";

const url = API_BASE_URL + API_LOGIN_ENDPOINT;

export function loginForm() {
   const form = document.querySelector("#registerForm");

   form.addEventListener("submit", (event) => {
      event.preventDefault();

      const userLoginData = {
         email: document.querySelector("#floatingEmail").value,
         password: document.querySelector("#floatingPassword").value,
      };

      console.log(userLoginData);
      loginToProfile(url, userLoginData);
   });
}
