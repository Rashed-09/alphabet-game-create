function hiddenClass(hiddenElementId){
    const hiddenId = document.getElementById(hiddenElementId);
    hiddenId.classList.add('hidden');
}

function showClass(showElementId){
    const showId = document.getElementById(showElementId);
    showId.classList.remove('hidden')
}

function setRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const toArry = alphabetString.split('');
    
    const value = Math.floor(Math.random()*26);
    const randomAlphabet = toArry[value];

    return randomAlphabet;
}


    



