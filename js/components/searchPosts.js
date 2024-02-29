import { postHtml } from "./postsHtml.js";

export function searchPosts(posts) {
   const searchInput = document.querySelector("#searchInput");
   const searchButton = document.querySelector("#button-addon2");

   searchButton.addEventListener("click", filterPosts);

   function filterPosts() {
      const searchValue = searchInput.value.trim().toLowerCase();
      const filterPosts = posts.filter(function (post) {
         if (post.title.toLowerCase().includes(searchValue)) {
            return true;
         }
      });
      postHtml(filterPosts);
   }
}
