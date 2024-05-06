let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// Your code here
window.onload = function loadFunction(){

    const ulElem = document.getElementById("mySelect")

    for(let i=0; i < countries.length; i++){
        let options = countries[i]
        
        const elem = document.createElement("option")
        elem.innerHTML = options
        ulElem.appendChild(elem)

    }

    ulElem.addEventListener("change", (event) => {
        alert(`${event.target.value}`);
      });

}