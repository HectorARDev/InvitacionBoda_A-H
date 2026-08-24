const music = document.getElementById('bg-music');
const toggleBtn = document.getElementById('music-toggle');
const icon = document.getElementById('music-icon');

function setPlayingUI(isPlaying) {
  toggleBtn.classList.toggle('playing', isPlaying);
  toggleBtn.setAttribute('aria-label', isPlaying ? 'Pausar música' : 'Reproducir música');
  icon.textContent = isPlaying ? '♪' : '♫';
}

music.addEventListener('play', () => setPlayingUI(true));
music.addEventListener('pause', () => setPlayingUI(false));

toggleBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
});

// La mayoría de navegadores bloquean el autoplay con sonido hasta que
// el usuario interactúa con la página, así que lo intentamos al cargar
// y, si falla, arrancamos en cuanto ocurra la primera interacción.
music.play().catch(() => {
  const startOnFirstInteraction = () => {
    music.play();
    document.removeEventListener('click', startOnFirstInteraction);
    document.removeEventListener('keydown', startOnFirstInteraction);
    document.removeEventListener('touchstart', startOnFirstInteraction);
  };
  document.addEventListener('click', startOnFirstInteraction);
  document.addEventListener('keydown', startOnFirstInteraction);
  document.addEventListener('touchstart', startOnFirstInteraction);
});
