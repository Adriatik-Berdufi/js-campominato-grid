const boxContainer = document.getElementById("boxContainer");
const genera = document.getElementById("genera");
const difficulty = document.getElementById("difficulty");
let oldContainerClass;
let valueDifficulty;

genera.addEventListener('click', function(){
    //*svuoto la glriglia
    boxContainer.innerHTML = " ";

    //* converto in intero il value della difficolta
    valueDifficulty = parseInt(difficulty.value);
    
    //* call della funzione griglia 
    oldContainerClass = generateGrid (boxContainer ,valueDifficulty, oldContainerClass );

    //* call all funzione per generare le box
    boxGenerator();
    
    
});






//***** FUNZIONI *****//

//** box generator  */
function boxGenerator(nr) {
    
    //* vreo l'el e aggiungo la classe box
    const box = document.createElement('div');
    box.classList.add ('box');
    
    box.addEventListener('click', function(){
        box.classList.toggle("clicked");
        box.innerHTML = nr;
    });
    
    return box;
};
//** Grid generator */

function generateGrid (boxContainer , difficulty ,oldContainerClass) {
    //* calc della radice del value della diffioclta
    let x = Math.sqrt(difficulty)

    //* rimuovo la classe precedente se ce
    boxContainer.classList.remove(oldContainerClass);

    //* creo la classe da usare per quella diffioclta 
    let newContainerClass = "container-" + x ;
    
    //* aggiungo la classe al boxContainer
    boxContainer.classList.add(newContainerClass);

    //* aggingo l'el box nel boxContainer
    for (let i = 0; i < difficulty; i++) {
    const boxElement = boxGenerator(i+ 1);
    boxContainer.append(boxElement);
    };
    oldContainerClass = newContainerClass;
    return(oldContainerClass);
};
