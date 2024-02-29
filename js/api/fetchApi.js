export function fetchApi(url, options) {
   fetch(url, options)
      .then((response) => response.json())
      .then((json) => console.log(json));
}
