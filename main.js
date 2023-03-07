const pronounceButton = document.querySelector('#pronounce');
const audio = document.querySelector('#audio');

pronounceButton.addEventListener('click', () => {
  audio.currentTime = 0;
  audio.play();
});
