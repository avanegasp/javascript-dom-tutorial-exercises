// If you check the HTML, you will find that the second <li> has the id=secondElement
// You can use that to your advantage like a CSS selector

// Your code here
let elemtRemove = document.querySelector("#secondElement")

elemtRemove.parentNode.removeChild(elemtRemove)