// Your code here

// let list = document.querySelector("#parentLi")

// let childs = list.childNodes

// childs[3].remove(childs)

let list = document.querySelector("#parentLi")

let childs = list.children

console.log(childs)

childs[1].remove(childs)


// children SOLO trae los elementos dentro del ul, en cambio childNodes trae todo
// incluso cualquier elemento que esté dentro