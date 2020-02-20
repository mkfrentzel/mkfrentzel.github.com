(function () {

"use strict"


document.getElementById("tote").addEventListener("click", openBag);
function openBag(){
    const waterBottle = document.getElementById('water');
    const keyChain = document.getElementById('keys');
    const smellGood = document.getElementById('perfume');
    const container = document.getElementById('container');
            
    waterBottle.setAttribute("class", "visible");
    keyChain.setAttribute("class", "visible");
    smellGood.setAttribute("class", "visible");
    container.setAttribute("class", "visible");
}


//was trying to get each element to close on click with this, but could not figure it out quite yet. I'll keep working on this in the future and for my final.


/* document.getElementById("closeWater").addEventListener("click", closeWater);
function closeWater(){
    const waterBottle = document.getElementById('water');
    waterBottle.setAttribute("class", "invisible");
}

document.getElementById("closeKeys").addEventListener("click", closeKeys);
function closeKeys(){
    const keyChain = document.getElementById('keys');
    keyChain.setAttribute("class", "invisible");
}

document.getElementById("closePerfume").addEventListener("submit", closePerfume);
function closePerfume(){
    const smellBad = document.getElementById('perfume');
    smellBad.setAttribute("class", "invisible");

} */
    









} ());