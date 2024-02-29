import { API_BASE_URL } from "./api/endpoints.js";
import { API_SOCIAL_POSTS } from "./api/endpoints.js";
import { getPosts } from "./api/getPosts.js";
import { logOut } from "./cta/logOut.js";
import { searchPosts } from "./components/searchPosts.js";
import { createPost } from "./eventHandlers/createPost.js";

const url = API_BASE_URL + API_SOCIAL_POSTS;

getPosts(url);

createPost();

const logOutButton = document.querySelector("#logOutButton");
logOutButton.onclick = function () {
   logOut();
};
