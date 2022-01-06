
const piano = document.querySelector('.piano');
const pianoKeys = document.querySelectorAll(".piano-key")
const body = document.querySelector('body');

const startSound = (e) => {
    e.target.classList.add("piano-key-active");
    //e.target.classList.add('.piano-key-active-pseudo');
    let audio = document.getElementsByClassName(e.target.dataset.note)[0];
    audio.currentTime = 0;
    audio.play();
};
const stopSound = (e) => {
    e.target.classList.remove("piano-key-active");
};

const aimMouse = (e) => {
    startSound(e);
    pianoKeys.forEach((e) => {
        e.addEventListener('mouseover', startSound);
        e.addEventListener('mouseout', stopSound);
    })
};

const unAimMouse = () => {
    pianoKeys.forEach((e) => {
        e.classList.remove("piano-key-active");

        e.removeEventListener('mouseover', startSound);
        e.removeEventListener('mouseout', stopSound);
    })
};

piano.addEventListener("mousedown", aimMouse);
body.addEventListener("mouseup", unAimMouse);




const btn = document.querySelector('.btn-container');
const btNotes = document.querySelector('.btn-notes');
const btLetters = document.querySelector('.btn-letters');

btn.addEventListener('click', (e) => {
    const buttonClasses = e.target.classList;

    if (buttonClasses.contains('btn-letters')) {
        buttonClasses.add('btn-active');
        btNotes.classList.remove('btn-active');
        console.log(pianoKeys);
        pianoKeys.forEach((key) => key.classList.add('piano-key-letter'));

    }

    if (buttonClasses.contains('btn-notes')) {
        buttonClasses.add('btn-active');
        btLetters.classList.remove('btn-active');
        pianoKeys.forEach((key) => key.classList.remove('piano-key-letter'));
    }

}
)
window.addEventListener('keydown', (event) => {
    //if (lettersButton.classList.contains('btn-active')) {
    const key = event.key.toLowerCase();
    console.log('key ', key);
    console.log(event.target);
    startSound(event)

    //}
});
const fullScreen = document.querySelector('.fullscreen');

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        body.requestFullscreen().catch(err => {
            alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    } else {
        document.exitFullscreen();
    }
}

fullScreen.addEventListener('click', toggleFullscreen)