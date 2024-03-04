import { getSinglePost } from "./api/getSinglePost.js";
import { API_BASE_URL } from "./api/endpoints.js";
import { API_SOCIAL_POSTS } from "./api/endpoints.js";
import { updatePost } from "./components/updateSinglePost.js";
import { deletePost } from "./components/deletePost.js";

const searchParams = new URLSearchParams(window.location.search);
const postId = searchParams.get("id");

const url = API_BASE_URL + API_SOCIAL_POSTS + postId;

getSinglePost(url);
updatePost(postId);
deletePost(postId);
