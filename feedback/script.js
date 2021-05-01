const ratings=document.querySelectorAll('.rating')
const sendBtn=document.querySelector('#send')
const panel=document.querySelector('#panel')
const ratingsContainer=document.querySelector('.rating-container')

let selectedRating='Satisfied'

ratingsContainer.addEventListener('click',function(e){

  if(e.target.parentNode.classList.contains('rating')){
    removeClass()
    e.target.parentNode.classList.add('active')
    selectedRating=e.target.nextElementSibling.innerText
  } 
})

sendBtn.addEventListener('click',function(e){
    panel.innerHTML=`
        <i class="fas fa-heart"></i>
        <strong>Thank You</strong>
        <br/>
        <strong>Feedback:  ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
})

function removeClass(){
    for(i=0;i<ratings.length;i++){
        ratings[i].classList.remove('active')
    }
}