   

function continueGame(){
    const call = setRandomAlphabet();
    const replaces = document.getElementById('current-alphabet');
    replaces.innerText = call;

   setButtonColor(call);

}


function play(){
   hiddenClass('home');
   hiddenClass('score')
   showClass('game');
   continueGame();
   // keyboardButtonEvent()
// randomNumber()
   setElementById('life-score', 5)
   setElementById('point', 0)
}

function gameOver(){
   hiddenClass('game');
   showClass('score');

   const scorePoint = setElementId('point');
   setElementById('final-score', scorePoint);

   // const current = document.getElementById('current-alphabet');
   // const text = current.innerText;
   const text = getElement('current-alphabet');
   removeButtonColor(text)
}