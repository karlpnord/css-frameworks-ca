import { createElement } from "./createElement.js";
import { cardSocial } from "./postsSocialSection.js";

const postsContainer = document.querySelector("#postsContainer");

export function postHtml(posts) {
   postsContainer.innerHTML = "";
   posts.forEach((post) => {
      const card = createElement(post, "div", "card shadow", false);
      postsContainer.appendChild(card);

      const body = createElement(post, "div", "card-body", false);
      card.appendChild(body);

      const title = createElement(post.title, "h5", "card-title mt-2", true);
      body.appendChild(title);

      const text = createElement(post.body, "p", "card-text pt-2", true);
      body.appendChild(text);

      const line = createElement(post, "hr", "my-1 border-2", false);
      body.appendChild(line);

      const social = cardSocial();
      body.appendChild(social);
   });
}
