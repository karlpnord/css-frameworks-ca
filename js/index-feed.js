import { API_BASE_URL } from "./api/endpoints.js";
import { API_SOCIAL_POSTS } from "./api/endpoints.js";
import { getPosts } from "./api/getPosts.js";
import { logOut } from "./cta/logOut.js";

const url = API_BASE_URL + API_SOCIAL_POSTS;

getPosts(url);

const logOutButton = document.querySelector("#logOutButton");
logOutButton.onclick = function () {
   logOut();
};
