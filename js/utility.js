// hide page to change page 
function hiddenClass(hiddenElementId){
    const hiddenId = document.getElementById(hiddenElementId);
    hiddenId.classList.add('hidden');
}
// show page to change page 
function showClass(showElementId){
    const showId = document.getElementById(showElementId);
    showId.classList.remove('hidden')
}

function getElement(elements){
    const element = document.getElementById(elements);
    const text = element.innerText;
    return text;
}

// set keyboard button color 
function setButtonColor(buttonId){
    const Id = document.getElementById(buttonId);
    Id.classList.add('bg-yellow-400');
}
function removeButtonColor(buttonId){
    const Id = document.getElementById(buttonId);
    Id.classList.remove('bg-yellow-400');
}



// random alphabet create 
function setRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const toArry = alphabetString.split('');
    
    const value = Math.floor(Math.random()*26);
    const randomAlphabet = toArry[value];

    return randomAlphabet;
}

// down function work is here 
function setElementId(elementId){
    const element = document.getElementById(elementId);
    const elementValue = parseInt(element.innerText);
    return elementValue;
}
function setElementById(elementId, updateValue){
    const element = document.getElementById(elementId);
    element.innerText = updateValue;

}


// match latter with random latter 
function keyboardButtonEvent(event){
    const keyboardKeyword = event.key;

    if(keyboardKeyword === 'Escape'){
        gameOver()
    }

    const currentAllphabet = document.getElementById('current-alphabet');
    const displayLatter = currentAllphabet.innerText.toLowerCase();


if(displayLatter === keyboardKeyword){
    const event = document.getElementById(displayLatter);

    const pointValue = setElementId('point');
    const newPoint = pointValue + 1;
    
    setElementById('point', newPoint)
    
    
    // // start here part by part 
    // const pointScore = document.getElementById('point');
    // const pointValue = parseInt(pointScore.innerText);
    
    // const newLife = pointValue + 1;

    // pointScore.innerText = newLife;
    // // end here part by part 

    event.classList.remove('bg-yellow-400');
    continueGame()
}
else{

    const lifeValue = setElementId('life-score');
    const updateLife = lifeValue - 1;
    setElementById('life-score', updateLife);

    if(updateLife === 0){
        gameOver()
    }


    // const lifeScore = document.getElementById('life-score');
    // const lifeValue = parseInt(lifeScore.innerText);
    
    // const newLifeValue = lifeValue - 1;
     
    // lifeScore.innerText = newLifeValue;

}
 }
 document.addEventListener('keyup',keyboardButtonEvent);

    



