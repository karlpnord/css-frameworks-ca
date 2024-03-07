import { defaultImgUrl } from "../variables.js";

export function updateProfile(profileData) {
   const profileName = document.querySelector("#profileUsername");
   profileName.textContent = profileData.name;
   const followersCount = document.querySelector("#followersCount");
   followersCount.textContent = profileData._count.followers;

   const profileAvatar = document.querySelector("#profileAvatar");
   const profileBanner = document.querySelector("#profileBanner");

   profileAvatar.src = null;
   profileBanner.src = null;

   profileAvatar.src = profileData.avatar;
   profileBanner.src = profileData.banner;

   if (profileData.avatar === null) {
      profileAvatar.src = defaultImgUrl;
   }

   if (profileData.banner === null) {
      profileBanner.src = defaultImgUrl;
   }
}
