const audio = document.getElementById('audioFile');

function toggleControls() {
    if (audio.hasAttribute('controls')) {
        audio.removeAttribute('controls');
    }
    else {
        audio.setAttribute('controls','controls');
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

document.getElementById("openButton").addEventListener("click", openNav);
document.getElementById("closeButton").addEventListener("click", closeNav);