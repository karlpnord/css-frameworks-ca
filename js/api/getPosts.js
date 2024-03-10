import { postHtml } from "../components/postsHtml.js";
import { searchPosts } from "../components/searchPosts.js";
import { filterPostsSelect } from "../components/filterPosts.js";

export async function getPosts(url) {
   try {
      const token = localStorage.getItem("accessToken");
      const getData = {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
         },
      };
      const response = await fetch(url, getData);
      const json = await response.json();
      postHtml(json);
      searchPosts(json);
      filterPostsSelect(json);
   } catch (error) {
      const container = document.querySelector("#postsContainer");
      const errorDiv = document.createElement("div");
      errorDiv.classList.add(
         "text-danger",
         "fw-bold",
         "error-container",
         "p-2"
      );
      errorDiv.textContent =
         "An error occurred, could not display posts. Please try again later.";
      container.appendChild(errorDiv);
   }
}
