const textEl=document.getElementById('text')
const speedEl=document.getElementById('speed')
const text="programming"
let snap=document.getElementById('snap')
let speed=300/speedEl.value
let idx=1
let len=text.length
writeText()

function writeText(){
    snap.innerText=text.slice(0,idx)
    idx++


    if(idx >len){
        idx=1
    }
    setTimeout(writeText,speed)
}