const postsContainer = document.querySelector("#postsContainer");

export function postHtml(posts) {
   console.log(posts);
   posts.forEach((post) => {
      const card = createCard();
      postsContainer.appendChild(card);

      const body = cardBody(post);
      card.appendChild(body);

      const title = cardTitle(post);
      body.appendChild(title);
   });
}

function createCard() {
   const card = document.createElement("div");
   card.classList.add("card", "shadow");
   return card;
}

function cardBody(post) {
   const body = document.createElement("div");
   body.classList.add("card-body");
   return body;
}

function cardTitle(post) {
   const title = document.createElement("h5");
   title.classList.add("card-title", "mt-2");
   title.textContent = post.title;
   return title;
}
