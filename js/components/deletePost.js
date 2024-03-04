import { API_BASE_URL } from "../api/endpoints.js";
import { API_SOCIAL_POSTS } from "../api/endpoints.js";
import { fetchApi } from "../api/fetchApi.js";

export function deletePost(id) {
   const deleteButton = document.querySelector("#deletePostBtn");
   const url = API_BASE_URL + API_SOCIAL_POSTS + id;
   const token = localStorage.getItem("accessToken");

   deleteButton.addEventListener("click", function () {
      const requestOptions = {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
         },
      };
      fetchApi(url, requestOptions);
      window.location.href = "../feed/";
   });
}
