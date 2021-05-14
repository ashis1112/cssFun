const container=document.querySelector('.container')
const seats=document.querySelectorAll('.row .seat:not(.occupied)')
const count=document.getElementById('count')
const total=document.getElementById('total')
const movieSelect=document.getElementById('movie')

let ticketprice=+movieSelect.value;

populateUi()

// populate Ui
function populateUi(){
    const seletedseat=JSON.parse(localStorage.getItem('selectedSeats'))
    if(seletedseat !== null && seletedseat.length > 0){
        seats.forEach((seat,index)=>{
            if(seletedseat.indexOf(index) > -1){
                seat.classList.add('selected')
            }
        })
    }
    const selectedmovieindex=localStorage.getItem('movieIndex')
    movieSelect.selectedIndex=selectedmovieindex

}


// set movie data to localStorage
function setMovieData(movieIndex,moviePrice){
    localStorage.setItem('movieIndex',movieIndex)
    localStorage.setItem('moviePrice',moviePrice)
}

// Update total and count
function updateSeletedCount(){
    const selectedSeats=document.querySelectorAll('.row .seat.selected')
    let seatLength=selectedSeats.length
    let seatindex=[...selectedSeats].map(seat=>{
        return [...seats].indexOf(seat)
    })
    localStorage.setItem('selectedSeats',JSON.stringify(seatindex))
    count.innerText=seatLength
    total.innerText=seatLength*ticketprice 
}

// Movie select event
movieSelect.addEventListener('change',(e)=>{
    ticketprice=+movieSelect.value;
    setMovieData(e.target.selectedIndex,e.target.value)
    updateSeletedCount()
})
container.addEventListener('click',(e)=>{
    if(
        e.target.classList.contains('seat') && 
        !e.target.classList.contains('occupied')
    ){
        e.target.classList.toggle('selected')
        updateSeletedCount()
    }
})


// initial loads data

updateSeletedCount()