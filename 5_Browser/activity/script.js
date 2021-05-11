let color1=document.querySelector(".first")
let color2=document.querySelector(".second")
let color3=document.querySelector(".third")
let color4=document.querySelector(".fourth")
let outer=document.querySelector(".outer2")
let add=document.querySelector(".fas.fa-plus");
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
add.addEventListener("click",function(data){
    let nb=document.createElement("div");
    nb.setAttribute("class","modal");
    nb.innerHTML=`<div class="input-box">
    <textarea class="text-box">Enter your text here</textarea>
    </div>
    <div class="colorV">
    <div class="filter first"></div>
    <div class="filter second"></div>
    <div class="filter third"></div>
    <div class="filter fourth"></div>
</div>`;
    outer.appendChild(nb);
})

