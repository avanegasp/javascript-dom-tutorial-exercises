// Your code here


document.getElementById("addToDo").addEventListener("keypress", function(event){
    if(event.key === 'Enter'){
        let currentWord = document.getElementById("addToDo").value 
        console.log(currentWord)
        document.getElementById("addToDo").value = ""

        const readyUl = document.querySelector("ul")
        let createUl = document.createElement("li")
        createUl.innerHTML = currentWord
        readyUl.appendChild(createUl)
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

