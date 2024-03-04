import { API_BASE_URL } from "../api/endpoints.js";
import { API_SOCIAL_POSTS } from "../api/endpoints.js";
import { fetchApi } from "../api/fetchApi.js";
import { getSinglePost } from "../api/getSinglePost.js";

export function updatePost(id) {
   const updateForm = document.querySelector("#updatePost");

   updateForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const token = localStorage.getItem("accessToken");
      const url = API_BASE_URL + API_SOCIAL_POSTS + id;

      const titleUpdate = document.querySelector("#floatingTitle").value;
      const bodyUpdate = document.querySelector("#floatingBody").value;
      const imageUpdate = document.querySelector("#floatingImage").value;

      const requestOptions = {
         method: "PUT",
         body: JSON.stringify({
            title: titleUpdate,
            body: bodyUpdate,
            media: imageUpdate,
         }),
         headers: {
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
         },
      };
      fetchApi(url, requestOptions);
      getSinglePost(url);
   });
}
