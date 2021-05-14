const codes=document.querySelectorAll(".code")
const len=codes.length
console.log(codes)
codes[0].focus()

codes.forEach((code,idx)=>{
    code.addEventListener('keydown',(e)=>{
        if(e.key >=0 && e.key <=9 && idx != len-1){
            setTimeout(()=>codes[idx+1].focus(),10)
            codes[idx].value=''

        }else if(e.key == 'Backspace' && idx > 0){
            setTimeout(()=>codes[idx-1].focus())
        }else if(codes[idx-1] == 'undefined'){
            codes[0].focus()

        }
    })
})