export function cardSocial() {
   const socialBody = document.createElement("div");
   socialBody.classList.add(
      "d-flex",
      "flex-column",
      "flex-sm-row",
      "gap-2",
      "mt-3",
      "justify-content-sm-around"
   );

   const likeSection = socialSection("fa-regular", "fa-heart", "Like");
   socialBody.appendChild(likeSection);

   const commentSection = socialSection("fa-solid", "fa-comment", "Comments");
   socialBody.appendChild(commentSection);

   const shareSection = socialSection("fa-solid", "fa-share-nodes", "Share");
   socialBody.appendChild(shareSection);

   return socialBody;
}

function socialSection(iconType, iconCategory, section) {
   const button = document.createElement("button");
   button.classList.add(
      "card-link",
      "d-flex",
      "align-items-center",
      "gap-1",
      "border-0",
      "bg-white"
   );

   const icon = document.createElement("i");
   icon.classList.add(iconType, iconCategory);

   const text = document.createElement("span");
   text.classList.add("fw-medium");
   text.textContent = section;

   button.appendChild(icon);
   button.appendChild(text);
   return button;
}
