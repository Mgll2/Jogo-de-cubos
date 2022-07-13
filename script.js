let champ = document.querySelector('#champ')
let cube = document.querySelector('#cube')

function jump(){
    if(champ.classList != 'animar'){
        champ.classList.add('animar')
    }

    setTimeout(function(){
        champ.classList.remove('animar')
    }, 500)
}