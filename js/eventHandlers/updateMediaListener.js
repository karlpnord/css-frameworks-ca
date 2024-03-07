import { fetchApi } from "../api/fetchApi.js";
import { getSingleProfile } from "../api/getSingleProfile.js";

export function updateProfileMedia(url, profileUrl) {
   const form = document.querySelector("#updateMediaForm");

   form.addEventListener("submit", (event) => {
      event.preventDefault();
      const token = localStorage.getItem("accessToken");

      const requestOptions = {
         method: "PUT",
         body: JSON.stringify({
            banner: document.querySelector("#floatingBanner").value,
            avatar: document.querySelector("#floatingAvatar").value,
         }),
         headers: {
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
         },
      };
      fetchApi(url, requestOptions);
      getSingleProfile(profileUrl);
   });
}
