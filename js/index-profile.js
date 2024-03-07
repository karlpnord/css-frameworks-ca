import { getSingleProfile } from "./api/getSingleProfile.js";
import { getUserPosts } from "./api/getUserPosts.js";
import { updateProfileMedia } from "./eventHandlers/updateMediaListener.js";
import { API_BASE_URL } from "./api/endpoints.js";
import { API_PROFILES } from "./api/endpoints.js";

const name = localStorage.getItem("loggedInUser");

const profileUrl = API_BASE_URL + API_PROFILES + name;
const userPostsUrl = API_BASE_URL + API_PROFILES + name + "/posts";
const updateMediaUrl = API_BASE_URL + API_PROFILES + name + "/media";

getSingleProfile(profileUrl);
getUserPosts(userPostsUrl);
updateProfileMedia(updateMediaUrl, profileUrl);
