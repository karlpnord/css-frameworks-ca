export function createElement(postContent, element, classes, text) {
   const newElement = document.createElement(element);
   const elementClasses = classes.split(" ").toString();
   const classReplace = elementClasses.replace(",", " ");
   newElement.className = classReplace;
   if (text === true) {
      newElement.textContent = postContent;
   }
   return newElement;
}
