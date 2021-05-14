let container=document.querySelector('.container')

const filter=()=>{
        let inputdata=document.getElementById("mysearch").value.toUpperCase()
        let ul = document.getElementById("myMenu");
        let li = ul.getElementsByTagName("li");
        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          if (a.innerHTML.toUpperCase().includes(inputdata)) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }

}

const myFunction=(x)=>{
        x.classList.toggle("change");
        if(x.classList[1] == 'change'){
                x.style.left=30+'%';
                container.style.transform = `translateX(0)`;
                document.body.style.backgroundColor = "rgba(0,0,0,0.5)";

        }else{
                x.style.left=0+'%';
                container.style.transform = `translateX(-100%)`;
                document.body.style.backgroundColor = "white";


        }
}
        
