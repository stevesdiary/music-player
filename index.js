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

let track_index = 0;
let isPlaying = false;
let updateTimer ;

let currentTrack = document.createElement('audio');

let trackList = [
   {
      name: "Majesty",
      artist:"Michael Smith",
      image:"/Assets/images/imageMajesty.jpeg",
      path: "/Assets/songs/Michael Smith - Majesty.ogg"
   },
   {
      name: "You will be my song",
      artist: "Don Moen",
      image: trackArt,
      path: "/Assets/songs/Don Moen - You Will Be My Song.mp3"
   },
   {
      name:"House of miracles",
      artist: "Bethel music",
      image:trackArt,
      path:"/Assets/songs/Bethel Music - House of Miracles.ogg"
   },
   {
      name: "Is HE worthy",
      artist: "Maveric City",
      image:trackArt,
      path:"/Assets/songs/Maveric City - Is He Worthy.ogg"
   },
   {
      name:"Still",
      artist:"Hillsong",
      image:trackArt,
      path:"/Assets/songs/Hillsong - Still.mp3"
   }
]

function loadTrack(track_index);
   clearInterval(updateTimer);
   resetValues()

   currentTrack.src= trackList[track_index].path;
   currentTrack.load();

   trackArt.style.backgroundImage = "url("+ trackList[track_index].image + ")";
   trackName.textContent = trackList[track_index].name;
   trackArtist.textContent = trackList[track_index].artist;
   nowPlaying.textContent = "PLAYING " + (track_index + 1 )  + " OF " + (trackList.length);
