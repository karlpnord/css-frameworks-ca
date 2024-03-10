export function logOut() {
   console.log("FAEN DA");
   localStorage.removeItem("accessToken");
   localStorage.removeItem("loggedInUser");
   window.location.href = "../";
}
