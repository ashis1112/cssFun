const imgs=document.querySelector('#imgs')
const leftbtn=document.querySelector('.left')
const rightbtn=document.querySelector('.right')
const imagecontainer=document.querySelector(".image-container")

const img=document.querySelectorAll('.imgs')

console.log(img)
let idx=0

let interval=setInterval(run,2000)

function run(){
    idx++
    changeImage()
}

function changeImage(){
    if(idx > img.length -1){
        idx=0
    }else if(idx < 0){
        idx=img.length -1
    }
    imagecontainer.style.transform=`translateY(${-idx*535}px)`
}

function resetInterval(){
    clearInterval(interval)
    interval=setInterval(run,2000)
}

rightbtn.addEventListener('click',()=>{
    idx++
    changeImage()
    resetInterval()
})

leftbtn.addEventListener('click',()=>{
    idx--
    changeImage()
    resetInterval()
})
