let color1=document.querySelector(".first")
let color2=document.querySelector(".second")
let color3=document.querySelector(".third")
let color4=document.querySelector(".fourth")
let outer=document.querySelector(".outer2")
color1.addEventListener("click",function(data){
    outer.style.backgroundColor="Red";
})
color2.addEventListener("click",function(data){
    outer.style.backgroundColor="blue";
})
color3.addEventListener("click",function(data){
    outer.style.backgroundColor="GreEn";
})
color4.addEventListener("click",function(data){
    outer.style.backgroundColor="YELLOW";
})
let add=document.querySelector(".fas.fa-plus");
add.addEventListener("click",function(data){
    // let nb=document.createElement("div");
    // nb.setAttribute("class","todo-box");
    // nb.style.background="Red";
    // nb.style.width="25%";
    // nb.style.height="40%";
    // outer.appendChild(nb);
})

