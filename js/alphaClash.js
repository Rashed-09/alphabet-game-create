function continueGame(){
    const call = setRandomAlphabet();
    const replaces = document.getElementById('current-alphabet');
    replaces.innerText = call;



}


function play(){
   hiddenClass('home');
   showClass('game');
   continueGame();
// randomNumber()
}