let nowPlaying = document.querySelector('.now-playing');
let trackArt = document.querySelector('.track-art');
let trackName = document.querySelector('.track-name');
let trackArtist = document.querySelector('.track-artist');

let prevBtn = document.querySelector('.prev-track');
let playpauseBtn = document.querySelector('.playpause-track');
let nextBtn = document.querySelector('.next-track');

let currentTime = document.querySelector('.current-time');
let totalDuration = document.querySelector('.total-duration');

let seekSlider = document.querySelector('.seek-slider');
let volumeSlider = document.querySelector('.volume-slider');

let trackIndex = 0;
let isPlaying = false;
let updateTimer ;

let currentTrack = document.createElement('audio');

let trackList = [
   {
      name: "Majesty",
      artist:"Michael Smith",
      image:"https://imageio.forbes.com/blogs-images/pamwindsor/files/2019/04/Michael-W.-Smith-Revised-Top.jpg?format=jpg&width=1200",
      path: "/Assets/songs/Michael Smith - Majesty.ogg"
   },
   
   {
      name:"House of miracles",
      artist: "Bethel music",
      image:"https://i.ytimg.com/vi/HuTdgcD-o8Q/maxresdefault.jpg",
      path:"/Assets/songs/Bethel Music - House of Miracles.ogg"
   },
   {
      name: "Is HE worthy",
      artist: "Maveric City",
      image:"https://i.ytimg.com/vi/EJl8mBzcPeM/maxresdefault.jpg",
      path:"/Assets/songs/Maveric City - Is He Worthy.ogg"
   }
]

function loadTrack(trackIndex){
   clearInterval(updateTimer);
   resetValues()

   currentTrack.src= trackList[trackIndex].path;
   currentTrack.load();

   trackArt.style.backgroundImage = "url("+ trackList[trackIndex].image + ")";
   trackName.textContent = trackList[trackIndex].name;
   trackArtist.textContent = trackList[trackIndex].artist;
   nowPlaying.textContent = "PLAYING " + (trackIndex + 1 )  + " OF " + (trackList.length);

   updateTimer= setInterval(seekUpdate, 1000)
   
   currentTrack.addEventListener("ended", nextBtn);  //the nextBtn does not trigger automatically yet.
   // console.log('audio stopped because it ended or end of list')
}


function resetValues(){
   currentTime.textContent = "00:00";
   totalDuration.textContent = "00:00";
   seekSlider.value = 0;
}

function playpauseTrack(){
   if (!isPlaying) playTrack();
   else pauseTrack();
}

function playTrack(){
   currentTrack.play();
   isPlaying = true;
   playpauseBtn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack(){
   currentTrack.pause();
   isPlaying = false;
   playpauseBtn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack(){
   if (trackIndex < trackList.length - 1)
   trackIndex += 1;
   else trackIndex = 0;

   loadTrack(trackIndex);
   playTrack();
}

function prevTrack(){
   if (trackIndex > 0)
   trackIndex -= 1;
   else trackIndex -= trackList.length - 1;
   loadTrack(trackIndex);
   playTrack();
}

function seekTo(){

      // seekSlider.value = currentTime;
      seekto = currentTrack.duration * (seekSlider.value / 100);
      currentTrack.currentTime = seekto;   
}



function setVolume(){
   currentTrack.volume = volumeSlider.value / 100;
}

function seekUpdate(){
   let seekPosition = 0;
   if (!isNaN(currentTrack.duration)){
      seekPosition = currentTrack.currentTime * (100 / currentTrack.duration);
      seekSlider.value = seekPosition;

      
      let currentMinutes = Math.floor(currentTrack.currentTime / 60);
      let currentSeconds = Math.floor(currentTrack.currentTime - currentMinutes * 60);
      let durationMinutes = Math.floor(currentTrack.duration /60);
      let durationSeconds = Math.floor(currentTrack.duration - durationMinutes * 60);
      
      if ( currentSeconds < 10) {currentSeconds = '0'  + currentSeconds};
      if ( durationSeconds < 10) {durationSeconds = '0' + durationSeconds};
      if ( currentMinutes < 10){currentMinutes = '0' + currentMinutes};
      if ( durationMinutes < 10) {durationMinutes = '0' + durationMinutes};

      currentTime.textContent = currentMinutes + ':' + currentSeconds;
      totalDuration.textContent = durationMinutes + ':' + durationSeconds;


      currentTime.textContent = currentMinutes + ':' + currentSeconds;
      totalDuration.textContent = durationMinutes + ':' + durationSeconds;
   }
}

loadTrack(trackIndex);