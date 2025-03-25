const audio = document.getElementById('audioFile');

function toggleControls() {
    if (audio.hasAttribute('controls')) {
        audio.removeAttribute('controls');
    }
    else {
        audio.setAttribute('controls','controls');
    }
}

const openButton = document.getElementById('.oppenbttn');

openButton.addEventListener('click', event() {
    
})
