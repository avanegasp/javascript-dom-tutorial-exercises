let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here

	const ulElem = document.getElementById("myList")
	const elem = document.createElement("li")
	elem.innerHTML = "Forth element"
	ulElem.appendChild(elem)

});
