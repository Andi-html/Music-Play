const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");

playBtn.addEventListener("click", (event) => {
  event.preventDefault();
  audio.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
});

pauseBtn.addEventListener("click", (event) => {
  event.preventDefault();
  audio.pause();
  pauseBtn.style.display = "none";
  playBtn.style.display = "inline-block";
});

audio.addEventListener("ended", () => {
  pauseBtn.style.display = "none";
  playBtn.style.display = "inline-block";
});
