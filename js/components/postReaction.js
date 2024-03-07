import { API_BASE_URL } from "../api/endpoints.js";
import { API_SOCIAL_POSTS } from "../api/endpoints.js";
import { fetchApi } from "../api/fetchApi.js";

export function postReaction(id) {
   const likeBtn = document.querySelector("#likePostBtn");
   const likeBtnIcon = document.querySelector("#likePostBtn i");
   const likeBtnText = document.querySelector("#likePostBtn span");
   const token = localStorage.getItem("accessToken");
   const url = API_BASE_URL + API_SOCIAL_POSTS + id + "/react/👍";

   likeBtn.addEventListener("click", function () {
      const requestOptions = {
         method: "PUT",
         headers: {
            Authorization: `Bearer ${token}`,
         },
      };
      fetchApi(url, requestOptions);
      likeBtn.classList.add("bg-primary");
      likeBtn.classList.remove("bg-white");
      likeBtnIcon.style.color = "black";
      likeBtnText.style.color = "black";
      likeBtnText.textContent = "Liked";
   });
}
