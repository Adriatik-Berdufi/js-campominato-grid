const boxContainer = document.getElementById("boxContainer");
const genera = document.getElementById("genera");
const difficulty = document.getElementById("difficulty");

let valueDifficulty;
console.log(valueDifficulty);
genera.addEventListener('click', function(){
    valueDifficulty = parseInt(difficulty.value);
    boxGenerator(); 
    generateGrid (boxContainer ,valueDifficulty );
    
    console.log(valueDifficulty);
})


//***** FUNZIONI *****//

//** box generator  */
function boxGenerator() {
    const box = document.createElement('div');
    box.classList.add ('box');
    return box;
};
//** Grid generator */
function
generateGrid (boxContainer , difficulty) {
    let x = Math.sqrt(difficulty)
    let y = "container-" + x ;
    boxContainer.classList.toggle(y)
    console.log(x);
    for (let i = 0; i < difficulty; i++) {
    const boxElement = boxGenerator();
    boxContainer.append(boxElement);
    };
};
