/**
 * Creates a new HTML element with optional content, class, and textContent.
 *
 * @param {string} postContent - The content to be inserted into the created element.
 * @param {string} element - The type of HTML element to be created (e.g., 'div', 'span', 'p').
 * @param {string} classes - Space-separated string of CSS classes to be applied to the element.
 * @param {boolean} text - Indicates whether to set the textContent of the element with postContent.
 * @returns {HTMLElement} - The newly created HTML element.
 * @example
 * // Use this function to create a new HTML element
 * const card = createElement(post, "div", "card shadow", false);
 * // returns a div with the classes "card" and "shadow".
 * // no text content in this element because of the false value
 */

export function createElement(postContent, element, classes, text) {
   // Create a new HTML element of the specified type
   const newElement = document.createElement(element);

   // Splits the the string into an array and then back to seperate strings
   const elementClasses = classes.split(" ").toString();

   // Removes the comma between the strings to format the classes correctly
   const classReplace = elementClasses.replace(",", " ");

   // Applying the classes to the new element
   newElement.className = classReplace;

   // Check if textContent should be set and assign the postContent if true
   if (text === true) {
      newElement.textContent = postContent;
   }

   // Return the newly created HTML element
   return newElement;
}
