const paralex=document.querySelector('.paralex')

window.addEventListener("scroll",function(){
    let offset=window.pageYOffset
    paralex.style.backgroundPositionY=offset * 0.4 +"px"
    
})