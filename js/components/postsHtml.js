import { createElement } from "./createElement.js";
import { defaultImgUrl } from "../variables.js";

const postsContainer = document.querySelector("#postsContainer");

export function postHtml(posts) {
   postsContainer.innerHTML = "";
   posts.forEach((post) => {
      const card = createElement(post, "div", "card shadow", false);
      postsContainer.appendChild(card);

      let postImgUrl = post.media;
      if (!post.media) {
         postImgUrl = defaultImgUrl;
      }
      const image = createElement(post, "img", "card-img-top", false);
      image.src = postImgUrl;
      card.appendChild(image);

      const body = createElement(post, "div", "card-body", false);
      card.appendChild(body);

      const title = createElement(post.title, "a", "card-title mt-2", true);
      title.href = `/post/?id=${post.id}`;
      body.appendChild(title);

      const text = createElement(post.body, "p", "card-text pt-2", true);
      body.appendChild(text);

      const line = createElement(post, "hr", "my-1 border-2", false);
      body.appendChild(line);
   });
}
