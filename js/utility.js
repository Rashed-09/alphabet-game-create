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

// set keyboard button color 
function setButtonColor(buttonId){
    const Id = document.getElementById(buttonId);
    Id.classList.add('bg-white');
    Id.classList.add('bg-yellow-400');
}

// random alphabet create 
function setRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const toArry = alphabetString.split('');
    
    const value = Math.floor(Math.random()*26);
    const randomAlphabet = toArry[value];

    return randomAlphabet;
}


// match latter with random latter 
function keyboardButtonEvent(event){
    const suggestedKeyword = event.key;


    const currentAllphabet = document.getElementById('current-alphabet');
    const displayLatter = currentAllphabet.innerText.toLowerCase();


if(displayLatter === suggestedKeyword){
    console.log('you will got 10 point')
}
else{
    console.log('you loss one life')
}
 }
 document.addEventListener('keyup',keyboardButtonEvent);

    



