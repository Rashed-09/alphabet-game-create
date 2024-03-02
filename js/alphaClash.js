

function continueGame(){
    const call = setRandomAlphabet();
    const replaces = document.getElementById('current-alphabet');
    replaces.innerText = call;

   setButtonColor(call);

}


function play(){
   hiddenClass('home');
   showClass('game');
   continueGame();
   // keyboardButtonEvent()
// randomNumber()
}