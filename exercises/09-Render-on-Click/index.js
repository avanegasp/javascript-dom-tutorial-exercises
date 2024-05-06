let button = document.getElementById("superDuperButton");
button.addEventListener("click", function(){
	// Your code here
	const content = document.createElement("div")
	content.innerHTML = "Hello World"
	content.style.background = "yellow";
	document.body.appendChild(content)
});
