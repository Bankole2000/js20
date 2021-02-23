const video = document.getElementById('video');
const play = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play & pause video functions 
const toggleVideoStatus= ()=>{
  return true;
}

// update play/pause icon 
const updatePlayIcon = ()=>{
  return true;
}

// Update progress & timestamp
const updateProgress=()=>{
  return true;
}

// set video time to progress
const setVideoProgress = ()=>{
  return true;
}

// Stop video 
const stopVideo = ()=>{
  return true;
}

// Event listeners 
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stopBtn.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);



