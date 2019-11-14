var songs = ["Song1.mp3", "Song2.mp3"];
var covers = ["poster1.jpg", "poster2.jpg"];

var songTitle = document.getElementById("SongTitle");
var fillBar = document.getElementById("fill");

var song = new Audio();
var currentSong = 0; // Points to current song

window.onload = playSong; // Call the play function playSong

function playSong(){
    song.src =songs[currentSong];
    song.textContent = songs[currentSong]; // Song title
    song.play();
}

// Play and Pause function //

function playPauseSong(){

    if(song.paused){
        song.play();
        $("#play img").attr("src", "Pause.png");
    }
    else{
        song.pause();
        $("#play img").attr("src", "Play.png");
    }

    // Progress bar function

    song.addEventListener('timeupdate', function(){

        var position = song.currentTime / song.duration;
        fillBar.style.width = position * 100 + '%';
    });

    // Next button function

    function next(){
        currentSong++;
        if(currentSong > 2){
            currentSong = 0;
        }
        playSong();
        $("#play img").attr("src", "Pause.png");
        $("#image img").attr("src", poster[currentSong]);
    }


    
}