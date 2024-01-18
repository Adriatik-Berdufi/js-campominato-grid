const boxContainer = document.getElementById("boxContainer");
const genera = document.getElementById("genera");
const difficulty = document.getElementById("difficulty");

let valueDifficulty;

genera.addEventListener('click', function(){
    //*svuoto la glriglia
    boxContainer.innerHTML = " ";
    //* converto in intero il value della difficolta
    valueDifficulty = parseInt(difficulty.value);
    //* call all funzione per generare le box
    boxGenerator();
    //* call della funzione griglia 
    generateGrid (boxContainer ,valueDifficulty );
   
    
});







//***** FUNZIONI *****//

//** box generator  */
function boxGenerator(nr) {
    //* vreo l'el e aggiungo la classe box
    const box = document.createElement('div');
    box.classList.add ('box');
    box.innerHTML = nr;
    box.addEventListener('click', function(){
        box.classList.toggle("clicked")
    });
    


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
    const boxElement = boxGenerator(i+ 1);
    boxContainer.append(boxElement);
    };
};
