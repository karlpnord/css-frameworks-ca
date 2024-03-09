import { commentOnPost } from "../api/getComments.js";

export function postComment(id) {
   const form = document.querySelector(".commentForm");
   const commentComplete = document.querySelector(".commentComplete");
   commentComplete.textContent = "";
   form.addEventListener("submit", (event) => {
      event.preventDefault();

      const comment = document.querySelector("#floatingComment").value;
      commentOnPost(id, comment);
      commentComplete.textContent = "Comment added to post!";
   });
}
