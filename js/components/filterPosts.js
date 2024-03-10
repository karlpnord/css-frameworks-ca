import { postHtml } from "./postsHtml.js";

export function filterPostsSelect(posts) {
   const dropdownMenuBtn = document.querySelector("#filterPostsBtn");
   dropdownMenuBtn.onclick = function () {
      const dropdownItem = document.querySelector("#filterPosts").value;
      if (dropdownItem === "Standard") {
         postHtml(posts);
      } else {
         const filterPosts = posts.filter(function (post) {
            for (let i = 0; i < post.tags.length; i++) {
               if (post.tags[i] === dropdownItem) {
                  return true;
               }
            }
         });
         const container = document.querySelector("#postsContainer");
         if (filterPosts.length === 0) {
            container.classList.add("fw-bold", "category-empty");
            container.textContent =
               "No posts in this category! Please try a different one!";
         } else {
            container.classList.remove("fw-bold", "category-empty");
            container.textContent = "";
            postHtml(filterPosts);
         }
      }
   };
}
