import { postHtml } from "../components/postsHtml.js";

export async function getUserPosts(url) {
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
   } catch (error) {
      const container = document.querySelector("#postsContainer");
      container.textContent = "";
      const errorDiv = document.createElement("div");
      errorDiv.classList.add(
         "text-danger",
         "fw-bold",
         "error-container",
         "p-2"
      );
      errorDiv.textContent =
         "An error occurred when loading your posts, please try again later!";
      container.appendChild(errorDiv);
   }
}
