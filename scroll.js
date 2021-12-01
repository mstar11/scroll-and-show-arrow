// window.scrollY
let btn =document.querySelector(".btn")
let btn2 =document.querySelector(".btn2")



window.addEventListener("scroll", (e) => {
    
//   console.log(window.scrollY);
     if(window.scrollY > 300 & window.scrollY < 2000){
         btn.classList.add("show")
     }else{
         btn.classList.remove("show")
     }
   
});
btn.addEventListener("click",(e)=>{
    if(btn.classList.contains("show")){
        window.scrollTo({top:0,behavior:"smooth"})
    }
})
window.addEventListener("scroll", e=>{

    if(window.scrollY>2000)
    {
        btn2.classList.add("show")
    }else{
        btn2.classList.remove("show")
    }
})
btn2.addEventListener("click",e=>{
    if(btn2.classList.contains("show")){
        document.querySelector("#one").scrollIntoView({top:0,behavior:"smooth"})
    }
})