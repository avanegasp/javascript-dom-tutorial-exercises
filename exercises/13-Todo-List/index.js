// Your code here


document.getElementById("addToDo").addEventListener("keypress", function(event){
    if(event.key === 'Enter'){
        let currentWord = document.getElementById("addToDo").value 
        console.log(currentWord)
        document.getElementById("addToDo").value = ""

        let readyUl = document.querySelector("ul")
        let createLi = document.createElement("li")

        let spanElement = document.createElement("span")
        spanElement.innerHTML = `<i class="fa fa-trash"></i>`

        createLi.textContent = currentWord

        createLi.insertBefore(spanElement, createLi.firstChild);
        
        console.log(readyUl.appendChild(createLi))

    }
})

// remove child
const button = document.querySelector("ul")

function action(){
    const child = document.querySelector("li")
    const removeNode = button.removeChild(child)
    console.log(removeNode)
}

button.addEventListener("click", action)

