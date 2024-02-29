import { fetchApi } from "../api/fetchApi.js";
import { API_BASE_URL } from "../api/endpoints.js";
import { API_SOCIAL_POSTS } from "../api/endpoints.js";
import { getPosts } from "../api/getPosts.js";

export function createPost() {
   const form = document.querySelector("#createPost");

   form.addEventListener("submit", (event) => {
      event.preventDefault();

      const token = localStorage.getItem("accessToken");
      const url = API_BASE_URL + API_SOCIAL_POSTS;

      const postTitle = document.querySelector("#floatingTitle").value;
      const postBody = document.querySelector("#floatingBody").value;
      const postImage = document.querySelector("#floatingImage").value;

      const requestOptions = {
         method: "POST",
         body: JSON.stringify({
            title: postTitle,
            body: postBody,
            media: postImage,
         }),
         headers: {
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
         },
      };
      fetchApi(url, requestOptions);
      getPosts(url);
   });
}
