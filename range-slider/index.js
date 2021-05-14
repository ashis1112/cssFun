const range=document.querySelector('#ranges')
const label=document.querySelector('label')
range.addEventListener('input',(e)=>{
    let value=e.target.value
    label.innerText=value
    label.style.left=(value/3.8)+"%"
})