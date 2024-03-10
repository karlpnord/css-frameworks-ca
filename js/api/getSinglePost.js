import { singlePostHtml } from "../components/singlePostHtml.js";

export async function getSinglePost(url) {
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
      singlePostHtml(json);
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
         "An error occurred, could not display the current post. Please try again later.";
      container.appendChild(errorDiv);
   }
}
