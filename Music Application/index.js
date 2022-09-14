const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
    {
        name:"music-1",
        title:"Light 'em up",
        artist:"Fall out boy"
    },
    {
        name:"music-2",
        title:"All my friends are toxic",
        artist:"BoyWithUke"
    },
    {
        name:"music-3",
        title:"Enemy",
        artist:"Imagine Dragons"
    }
]

let isPlaying = false;

// for play function 
const playMusic = ()=>{
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
};

// for pause function 
const pauseMusic = ()=>{
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
};

play.addEventListener("click",() =>{
    isPlaying ? pauseMusic() : playMusic();
})

// changing music data

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    img.src = "images/" + songs.name + ".jpg";
};


songIndex = 0;
// NEXT SONG
const nextSong = () =>{
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}
// PREVIOUS SONG 
const prevSong = () =>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);


