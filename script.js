import Facts from "./fact.js";

let theButton = document.getElementById("randomizer");

const getRandomFact = () => {
    // Fact = [{k:v}]
    let randomHead = Math.floor(Math.random() * Facts.length);
    let randomObject = Facts[randomHead];

    const innerList = Object.values(randomObject)[0] // Arry within arry so we need firs item;    

    let randomInnerIndex = Math.floor(Math.random() * innerList.length);
    
    let temp = innerList[randomInnerIndex];

    //return innerList[randomInnerIndex];
    renderFact(temp);
}


// A function to render the fact in html div
let renderFact = (fact) => {
    document.getElementById("container").innerHTML = fact
}

theButton.addEventListener("click", getRandomFact)


