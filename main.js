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

    //* call della funzione array con valori random 
    arrayBMB =  random(valueDifficulty);
    
    //* call della funzione griglia 
    oldContainerClass = generateGrid (boxContainer ,valueDifficulty, oldContainerClass, arrayBMB  );
   
    
    //* call all funzione per generare le box
    boxGenerator(valueDifficulty, arrayBMB);
    
    
});






//***** FUNZIONI *****//
//** 16 nr casuali senza ripetterli  */
function random(range){
   
    let randomNr = [];
    while(randomNr.length < 16){
        x = Math.floor(Math.random() * range + 1);
        //controllo se non e gia presente in tal caso agggiungo
        xPresente = randomNr.includes(x);
        if(!xPresente){randomNr.push(x);};
    };   
    return randomNr;
    
}; 

//** box generator  */
function boxGenerator(nr,bmb) {
    
    //* vreo l'el e aggiungo la classe box
    const box = document.createElement('div');
    box.classList.add ('box');
    box.classList.add("unclicked");
    box.innerHTML = nr;
    
  
    
    
    box.addEventListener('click', function(){
        if(nr == "bomba"){
            box.classList.add("bomb");
            box.innerHTML = nr;
            const endGame = document.querySelectorAll('.box');
    
            endGame.forEach(function(element) {
                element.classList.remove('unclicked');
                if (element.innerHTML === "bomba") {
                    element.classList.add('bomb');
                } else {
                    element.classList.add('punto');
                };
               
            });
        } else {
            box.classList.add("punto");
            console.log(nr);
        }
    
        console.log(box.classList);
    });
 
     
    
    return box;
};
//** Grid generator */

function generateGrid (boxContainer , difficulty ,oldContainerClass ,bmb) {
    //* calc della radice del value della diffioclta
    let x = Math.sqrt(difficulty)

    //* rimuovo la classe precedente se ce
    boxContainer.classList.remove(oldContainerClass);

    //* creo la classe da usare per quella diffioclta 
    let newContainerClass = "container-" + x ;
    
    //* aggiungo la classe al boxContainer
    boxContainer.classList.add(newContainerClass);
    console.log(bmb);
    //* aggingo l'el box nel boxContainer
    for (let i = 1; i <= difficulty; i++) {
        if(bmb.includes(i)){
            a = "bomba";
        }else{
            a = 1;
        };

    const boxElement = boxGenerator(a);
    boxContainer.append(boxElement);

    };
    oldContainerClass = newContainerClass;
    return(oldContainerClass);
    
};






