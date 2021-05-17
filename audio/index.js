const musicContainer=document.getElementById("music-container")
const playBtn=document.getElementById('play')
const prevBtn=document.getElementById('prev')
const nextBtn=document.getElementById('next')

const audio=document.getElementById('audio')
const progress=document.getElementById('progress')
const progressContainer=document.getElementById('progress-container')
const title=document.getElementById('title')
const cover=document.getElementById('cover')

console.log(audio)
// Songs titles
const songs=['hey','summer','ukulele'];
// keep track of song
let songIndex=1
// Initially load song details into dom
loadSong(songs[songIndex])

// Update song details
function loadSong(song){
    title.innerText=song
    audio.src=`./music/${song}.mp3`
    cover.src=`./images/${song}.jpg`
}

function playSong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')
    audio.play()
}

function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    audio.pause()
}
function nextsong(){
    songIndex++
    console.log(songIndex)
    if(songIndex > songs.length - 1){
        songIndex=0 
    }
    loadSong(songs[songIndex])
    playSong()
}

function prevsong(){
    songIndex--
    if(songIndex < 0){
        songIndex=songs.length - 1 
    }
    loadSong(songs[songIndex])
    playSong()
}

// Update Progress 
function updateProgress(e){
    const {duration,currentTime}=e.srcElement
    const progressPercent=(currentTime / duration) * 100
    progress.style.width=`${progressPercent}%`
}

// setProgress
function setProgress(e){
    const width=this.clientWidth /* Hole width of container */
    const clientX=e.offsetX /* where we click in the progress bar  */
    const duration=audio.duration 
    audio.currentTime=(clientX / width) * duration
}

// Prev btn
prevBtn.addEventListener('click',()=>{
    prevsong()
    playSong()

})
// Next btn 
nextBtn.addEventListener('click',()=>{
    nextsong()
    playSong()

})

// Event listners
playBtn.addEventListener('click',()=>{
    const isPlaying=musicContainer.classList.contains('play')
    if(isPlaying){
        pauseSong()
    }else{
        playSong()
    }
})

// Time/Song update

audio.addEventListener('timeupdate',updateProgress)
progressContainer.addEventListener('click',setProgress)
audio.addEventListener('ended',nextsong)