const boxContainer = document.getElementById("boxContainer");
const genera = document.getElementById("genera");

genera.addEventListener('click', function(){
    boxGenerator(); 
    generateGrid (boxContainer);
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
generateGrid (boxContainer) {
    for (let i = 0; i < 100; i++) {
    const boxElement = boxGenerator();
    boxContainer.append(boxElement);
    };
};
