function hiddenClass(hiddenElementId){
    const hiddenId = document.getElementById(hiddenElementId);
    hiddenId.classList.add('hidden');
}

function showClass(showElementId){
    const showId = document.getElementById(showElementId);
    showId.classList.remove('hidden')
}


function randomNumber(){
    const alphabets =  'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabet = alphabets.split('');
    
    const random = Math.random()*25;
    const indexNumber = Math.round(random);

    const randomAlphabet = alphabets[indexNumber];
    console.log('Random alphabet is ',randomAlphabet);
    
    
}

