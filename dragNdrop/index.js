const fill=document.querySelector('.fill')
const empties=document.querySelectorAll('.empty')
const body=document.querySelector('body')

fill.addEventListener('dragstart',dragStart)
fill.addEventListener('dragend',dragEnd)

for(const empty of empties){
    empty.addEventListener('dragover',dragOver)
    empty.addEventListener('dragenter',dragEnter)
    empty.addEventListener('dragleave',dragLeave)
    empty.addEventListener('drop',dragDrop)
}

function dragStart() {
    console.log("Drag Start")
    body.className += 'hold'
    setTimeout(()=> this.className='invisible',0)
}

function dragEnd() {
    console.log("Drag End")
    body.classList.remove('hold')
    this.className='fill'   
}
function dragOver(e) {
    e.preventDefault()
}
function dragEnter(e) {
    e.preventDefault()

}
function dragLeave() {
    console.log("Drag Leave")

}
function dragDrop() {
    this.className='empty'
    this.append(fill)
    

}