const video = document.getElementById('video');
const play = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play & pause video functions 
const toggleVideoStatus= ()=>{
  if(video.paused){
    video.play();

  } else {
    video.pause();
  }
}

// update play/pause icon 
const updatePlayIcon = ()=>{
  if(video.paused){
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`;
  }
}

// Update progress & timestamp
const updateProgress=()=>{
  progress.value = (video.currentTime / video.duration) * 100;
  
  // Get minutes
  let mins = Math.floor(video.currentTime / 60); 
  if(mins < 10) {
    mins = `0` + String(mins);
  }

    // Get seconds
    let secs = Math.floor(video.currentTime % 60); 
    if(secs < 10) {
      secs = `0` + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`;
}

// set video time to progress
const setVideoProgress = (e)=>{
  console.log({e})
  video.currentTime = (+progress.value * video.duration) / 100
}

// Stop video 
const stopVideo = ()=>{
  video.currentTime = 0;
  video.pause();
}

// Event listeners 
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stopBtn.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);



