export function logOut() {
   console.log("FAEN DA");
   localStorage.removeItem("accessToken");
   window.location.href = "../";
}
