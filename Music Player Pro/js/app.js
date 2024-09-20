const wrapper = document.querySelector(".wrapper"),
musicImg = wrapper.querySelector(".img-area img"),
musicName = wrapper.querySelector(".song-details .name"),
musicArtist = wrapper.querySelector(".song-details .artist"),
mainAudio = wrapper.querySelector("#main-audio"),
playPauseBtn = wrapper.querySelector(".play-pause"),
prevBtn = wrapper.querySelector("#prev"),
nextBtn = wrapper.querySelector("#next"),
progressArea = wrapper.querySelector(".progress-area"),
progressBar = wrapper.querySelector(".progress-bar"),
musicList = wrapper.querySelector(".music-list"),
showMoreBtn = wrapper.querySelector("#more-music"),
hideMusicBtn = musicList.querySelector("#close");


let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);

window.addEventListener("load", () => {
    loadMusic(musicIndex);
    playingNow();
});

function loadMusic(indexNumb) {
    musicName.innerText = allMusic[indexNumb - 1].name;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    musicImg.src = `images/${allMusic[indexNumb - 1].img}.jpg`;
    mainAudio.src = `songs/${allMusic[indexNumb - 1].src}.mp3`;
}

function playMusic() {
    wrapper.classList.add("paused");
    playPauseBtn.querySelector("i").innerText = "pause";
    mainAudio.play();
}

function pauseMusic() {
    wrapper.classList.remove("paused");
    playPauseBtn.querySelector("i").innerText = "play_arrow";
    mainAudio.pause();
}

function nextMusic() {
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
    playingNow()
}

function prevMusic() {
    musicIndex--;
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
    playingNow()
}

playPauseBtn.addEventListener("click", () => {
    const isMusicPaused = wrapper.classList.contains("paused");
    isMusicPaused ? pauseMusic() : playMusic();  // Fixed function call
    playingNow()
});

nextBtn.addEventListener("click", () => {
    nextMusic();
});

prevBtn.addEventListener("click", () => {
    prevMusic();
});

// Update progress bar width according to music current time
mainAudio.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime; // getting current time of song
    const duration = e.target.duration; // getting total duration of the song
    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;

    let musicCurrentTime = wrapper.querySelector(".current"),
        musicDuration = wrapper.querySelector(".duration");

    mainAudio.addEventListener("loadeddata", () => {
        // Update song total duration
        let audioDuration = mainAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if (totalSec < 10) { // adding 0 if sec is less than 10
            totalSec = `0${totalSec}`;
        }
        musicDuration.innerText = `${totalMin}:${totalSec}`;
    });

    // Update playing song current time
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
        currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});

// Update playing song current time according to the progress width
progressArea.addEventListener("click", (e) => {
    let progressWidthval = progressArea.clientWidth; // getting width
    let clickedOffSetX = e.offsetX; // getting offset x value
    let songDuration = mainAudio.duration; // getting song total duration

    mainAudio.currentTime = (clickedOffSetX / progressWidthval) * songDuration;
    playMusic();
});

//let work on repeat , suffle song according to the icon
const repeatBtn = wrapper.querySelector("#repeat-plist");
repeatBtn.addEventListener("click", ()=>{
    //first we get the inner text of the icon then we will change accordingly 
    let getText = repeatBtn.innerText;//getting innerText of icon
    //let do diffrent change on diffrent icon click using switch 
    switch(getText){
        case "repeat"://if this icon is repeat then change it to repeat-one
            repeatBtn.innerText = "repeat_one";
            repeatBtn.setAttribute("title", "Song looped");
            break;
        case "repeat_one"://if icon is repeat one then change it to  shuffle
            repeatBtn.innerText = "shuffle";
            repeatBtn.setAttribute("title", "Playback shuffle");
            break;
        case "shuffle"://if icon is shuffle then change it to repeat
            repeatBtn.innerText = "repeat";
            repeatBtn.setAttribute("title", "Playlist looped");
            break;
    }
});

//above we just changed the icon , now lets work on what to do 
//after the song ended

mainAudio.addEventListener("ended", ()=>{
    //we'll do according to the icon means if user has set icon to loop song then we'll repeat
    //the current song and will do further accordingly

    let getText = repeatBtn.innerText;//getting innerText of icon
        switch(getText){
            case "repeat":// if this icon is repeat then simply we call the nextMusic function so th next song will be play 
                nextMusic();
                break;
            case "repeat_one": //if the icon is repeat one the we'll change the current playing song current time  to  0 song will play from beginning
                mainAudio.currentTime = 0;
                loadMusic(musicIndex);
                playMusic();
                break;
            case "shuffle":
                let randIndex = Math.floor((Math.random() * allMusic.length) +1);
                do{
                    randIndex = Math.floor((Math.random() * allMusic.length) +1);
                }while(musicIndex == randIndex);
                musicIndex = randIndex;
                loadMusic(musicIndex);
                playMusic();
                playingNow()
                break;
        }

});

showMoreBtn.addEventListener("click", () => {
    musicList.classList.toggle("show");
});

hideMusicBtn.addEventListener("click", ()=>{
    showMoreBtn.click();
});

const ulTag = wrapper.querySelector("ul");


for(let i = 0; i < allMusic.length; i++)
{
    let liTag = `<li li-index="${i + 1}">
                <div class="row">
                <span>${allMusic[i].name}</span>
                <p>${allMusic[i].artist}</p>
                </div>
                <audio class="${allMusic[i].src}" src="songs/${allMusic[i].src}.mp3"></audio>
                <span id="${allMusic[i].src}" class="audio-duration">3:40</span>
            </li>`;
    ulTag.insertAdjacentHTML("beforeend", liTag);


    let liAudioDuration = ulTag.querySelector(`#${allMusic[i].src}`);
    let liAudioTag = ulTag.querySelector(`.${allMusic[i].src}`);

    liAudioTag.addEventListener("loadeddata", ()=>{
        let audioDuration = liAudioTag.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if (totalSec < 10) { // adding 0 if sec is less than 10
            totalSec = `0${totalSec}`;
        }
        liAudioDuration.innerText = `${totalMin}:${totalSec}`;
        liAudioDuration.setAttribute("t-duration", `${totalMin}:${totalSec}`);
    });
}

//lets works on play particular song on click 
const allLiTags = ulTag.querySelectorAll("li");
function playingNow(){
    for(let j=0; j < allLiTags.length; j++)
        {
            let audioTag = allLiTags[j].querySelector(".audio-duration");
            if(allLiTags[j].classList.contains("playing")){
                allLiTags[j].classList.remove("playing");
                let adDuration = audioTag.getAttribute("t-duration");
                audioTag.innerText = adDuration;
            }
            if(allLiTags[j].getAttribute("li-index") == musicIndex){
                allLiTags[j].classList.add("playing");
                audioTag.innerText = "Playing";
            }
        
            allLiTags[j].setAttribute("onclick", "clicked(this)");
        }
}
//lets play song on li click
function clicked(element){
    //getting li index of particular clicked li tag 
    let getLiIndex = element.getAttribute("li-index");
    musicIndex = getLiIndex;//passing that liIndex to musicIndex
    loadMusic(musicIndex);
    playMusic();
    playingNow();
}