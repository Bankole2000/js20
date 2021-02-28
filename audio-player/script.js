const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev'); 
const nextBtn = document.getElementById('next'); 
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Song titles
const songs = ['Dance With A Stranger', 'Never Too Late', 'November Sky', 'Playing By Heart', 'Renegade', 'Southern Exposure', 'Until The Last Moment', 'Waltz In 7 8', 'With An Orchid'];

// Keep track of songs
let songIndex = songs.length - 1;

// update song details
const loadSong = (song) => {
  title.innerText = song;
  audio.src = `music/${song}.mp3`; 
  cover.src = `images/${song}.webp`;
}

// Play song 
const playSong = () => {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fa').classList.remove('fa-play');
  playBtn.querySelector('i.fa').classList.add('fa-pause');
  
  audio.play();
}

// Pause Song
const pauseSong = () => {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fa').classList.add('fa-play');
  playBtn.querySelector('i.fa').classList.remove('fa-pause');
  
  audio.pause();
}

// Previous song 
const prevSong = () => {
  songIndex--;

  if(songIndex < 0){
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Next song
const nextSong = () => {
  songIndex++;

  if(songIndex > songs.length - 1){
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// update progress bar 
const updateProgress = (e) => {
  const {duration, currentTime} = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar 
function setProgress (e) {
  const width = this.clientWidth; // total width of element; 
  const clickX = e.offsetX;

  const {duration} = audio;
  console.log({clickX, width, duration, e});
  audio.currentTime = (clickX / width) * duration;
}

// Initially load song details into the DOM
loadSong(songs[songIndex]);

// Event listeners 
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');
  if(isPlaying){
    pauseSong();
  } else {
    playSong();
  }
})

// Change Song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time song update
audio.addEventListener('timeupdate', updateProgress)

// Click on progress bar 
progressContainer.addEventListener('click', setProgress);

// Song ends 
audio.addEventListener('ended', nextSong);