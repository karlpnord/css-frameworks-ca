import { API_BASE_URL } from "../api/endpoints.js";
import { API_SOCIAL_POSTS } from "../api/endpoints.js";
import { fetchApi } from "../api/fetchApi.js";

export function commentOnPost(id, comment) {
   const token = localStorage.getItem("accessToken");
   const url = API_BASE_URL + API_SOCIAL_POSTS + id + "/comment";

   const requestOptions = {
      method: "POST",
      body: JSON.stringify({
         body: comment,
      }),
      headers: {
         "Content-Type": "application/json; charset=UTF-8",
         Authorization: `Bearer ${token}`,
      },
   };
   fetchApi(url, requestOptions);
}
