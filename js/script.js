
function changeTitle() {
  const title = document.querySelector("h1");


  title.textContent = "Ride the Sinapse";

  setTimeout(function () {
    title.textContent = "Sinapse Universal";
  }, 5000);
}

const player = document.querySelector("#music-player");
const songs = document.querySelectorAll("#playlist li");

let currentSong = 0;

function highlightSong() {
  songs.forEach(function (song, index) {
    song.classList.toggle("active", index === currentSong);

  })
}

songs.forEach(function (song, index) {
  song.addEventListener("click", function () {
    currentSong = index;
    player.src = song.dataset.src;
    highlightSong();
    player.play();
  });
});

player.addEventListener("ended", function () {
  currentSong = (currentSong + 1) % songs.length;

  player.src = songs[currentSong].dataset.src;
  highlightSong();
  player.play();
});

highlightSong();
