import { updateProfile } from "../components/updateProfile.js";

export async function getSingleProfile(url) {
   try {
      const token = localStorage.getItem("accessToken");
      const getData = {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
         },
      };
      const response = await fetch(url, getData);
      console.log(response);
      const json = await response.json();
      console.log(json);
      updateProfile(json);
   } catch (error) {
      console.log(error);
   }
}
