const container=document.querySelector('.container')

let limit=4;
let pageCount=1;
let postCount=1;

const getPost=async()=>{
   const res=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`)
   const data=await res.json()

   data.map(curElm=>{
       const htmlData=`
        <div class="post">
            <p class="post-id">${postCount++}</p>
            <h2 class="title">${curElm.title}</h2>
            <p class="post-info">${curElm.body}</p>
       </div>
       `
       container.insertAdjacentHTML('beforeend',htmlData)
   })
}

getPost()

const showdata=()=>{
    setTimeout(()=>{
        pageCount++
        getPost()
    },300)
}

window.addEventListener('scroll',()=>{
    const {scrollHeight,scrollTop,clientHeight}=document.documentElement
    if(scrollTop + clientHeight >= scrollHeight-100){
        showdata()        
    }
})