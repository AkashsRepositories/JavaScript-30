
function remove_transition(elem){
    if(elem.propertyName !== 'transform')
        return;
    elem.target.classList.remove("playing");
}


function play_sound(elem) {
    const key = document.querySelector(`div[data-key = "${elem.keyCode}"]`)
    const audio = document.querySelector(`audio[data-key= "${elem.keyCode}"]`);
    
    if(!audio) 
        return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
    key.addEventListener("transitionend", remove_transition);
}


let keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key => {
    key.addEventListener("transitionend", remove_transition);
});


window.addEventListener("keydown", play_sound);