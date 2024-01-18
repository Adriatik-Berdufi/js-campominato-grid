const boxContainer = document.getElementById("boxContainer");
const genera = document.getElementById("genera");
const difficulty = document.getElementById("difficulty");

let valueDifficulty;
console.log(valueDifficulty);
genera.addEventListener('click', function(){
    //*svuoto la glriglia
    boxContainer.innerHTML = " ";
    //* converto in intero il value della difficolta
    valueDifficulty = parseInt(difficulty.value);
    //* call all funzione per generare le box
    boxGenerator();
    //* call della funzione griglia 
    generateGrid (boxContainer ,valueDifficulty );
    
})


//***** FUNZIONI *****//

//** box generator  */
function boxGenerator() {
    //* vreo l'el e aggiungo la classe box
    const box = document.createElement('div');
    box.classList.add ('box');
    return box;
};
//** Grid generator */
function
generateGrid (boxContainer , difficulty) {
    //* calc della radice del value della diffioclta
    let x = Math.sqrt(difficulty)
    
    //* creo la classe da usare per quella diffioclta 
    let y = "container-" + x ;

    //* aggiungo la classe al boxContainer
    boxContainer.classList.toggle(y)

    //* aggingo l'el box nel boxContainer
    for (let i = 0; i < difficulty; i++) {
    const boxElement = boxGenerator();
    boxContainer.append(boxElement);
    };
};
