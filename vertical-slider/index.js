const sliderContainer=document.querySelector('.slider-container')
const sliderRight=document.querySelector('.right-slide')
const sliderLeft=document.querySelector('.left-slide')
const upButton=document.querySelector('.up-button')
const downButton=document.querySelector('.down-button')
const slidesLength=sliderRight.querySelectorAll('div').length

let activeSlideIndex=0
console.log(sliderLeft)

sliderLeft.style.top=`-${(slidesLength - 1 * 100)}vh`

upButton.addEventListener('click',()=>{changeSlide('up')})
downButton.addEventListener('click',()=>{changeSlide('down')})


const changeSlide=(direction)=>{
    const slideHeight=sliderContainer.clientHeight

    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex > slidesLength -1){
            activeSlideIndex=0
        }
        sliderRight.style.transform=`translateY(-${slidesLength-1 * slideHeight}px)`
    }
}