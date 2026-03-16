const बटन = document.querySelector('button');
const रात = document.querySelector('#रात');
const ध्वनि = new Audio("bright.mp3");

बटन.addEventListener('click', () => {
    ध्वनि.playbackRate = 0.8 + Math.random() * 0.4;
    const घंटी = ध्वनि.cloneNode();
    घंटी.play();
    for (let i = 0; i < 20; i++) {
        const तारा = document.createElement('div');
        तारा.classList.add('तारा');
        तारा.innerText = '✨';
        तारा.style.top = Math.random() * 100 + "%";
        तारा.style.left = Math.random() * 100 + "%";
        तारा.style.animationDuration = getRandomBetween(1, 3) + 's';
        रात.appendChild(तारा);

        तारा.addEventListener('animationend', () => {
            तारा.remove();
        });
    }
});

function getRandomBetween(min, max) {
  return Math.random() * (max - min) + min;
}
