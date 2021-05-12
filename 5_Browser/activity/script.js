let color1=document.querySelector(".first")
let color2=document.querySelector(".second")
let color3=document.querySelector(".third")
let color4=document.querySelector(".fourth")
let outer=document.body;
let outer2=document.querySelector(".outer2")
let add=document.querySelector(".fas.fa-plus");

let sc;

color1.addEventListener("click",function(data){
    outer2.style.backgroundColor="Red";
})
color2.addEventListener("click",function(data){
    outer2.style.backgroundColor="blue";
})
color3.addEventListener("click",function(data){
    outer2.style.backgroundColor="GreEn";
})
color4.addEventListener("click",function(data){
    outer2.style.backgroundColor="YELLOW";
})
add.addEventListener("click",function(data){
    let nbg=document.createElement("div");
    nbg.setAttribute("class","modal");
    nbg.innerHTML=`<div class="input-box">
    <textarea class="text-box">Enter your text here</textarea>
    </div>
    <div class="colorV">
    <div class="filter first"></div>
    <div class="filter second"></div>
    <div class="filter third"></div>
    <div class="filter fourth"></div>
</div>`;

    outer.appendChild(nbg);
    let co1=document.querySelector(".filter.first")
let co2=document.querySelector(".filter.second")
let co3=document.querySelector(".filter.third")
let co4=document.querySelector(".filter.fourth")
co1.addEventListener("click",function(data){
    removeclass();
    co1.classList.add("border");
    sc="red";
   
})
co4.addEventListener("click",function(data){
    removeclass();
    co4.classList.add("border");
    sc="yellow";
})
co2.addEventListener("click",function(data){
    removeclass();
    co2.classList.add("border");
    sc="blue";
})
co3.addEventListener("click",function(data){
    removeclass();
    co3.classList.add("border");
    sc="green";
})
let tb=document.querySelector(".text-box");
tb.addEventListener("click",function(data){
    tb.innerHTML="";
    })
    tb.addEventListener("keydown",function(data){
        if(data.key=="Enter")
        {
        let nb=document.createElement("div");
    nb.setAttribute("class","todo");
    nb.innerHTML=`<div class="td-head"></div>
    <div class="tdEID">#ExampleID</div>`;
    outer2.appendChild(nb);
    
    let tex=document.querySelector("td-text");
    let xx=document.querySelector(".text-box");
    let parent=document.querySelectorAll(".todo");
    parent=parent[parent.length-1];
    let child=document.createElement("div");
    child.setAttribute("class","td-text");
    child.innerText=xx.value;
    xx.value="";
    parent.appendChild(child);
    let la=document.querySelectorAll(".td-head");
    la=la[la.length-1];
    //head color change
    la.addEventListener("click",function(data){
        let col=la.style.backgroundColor;
        if(col=="red")
        la.style.backgroundColor="blue";
        else if(col=="blue")
        la.style.backgroundColor="green";
        else if(col=="green")
        la.style.backgroundColor="yellow";
        else if(col=="yellow")
        la.style.backgroundColor="red";

        

    });
    la.style.backgroundColor=sc;
    nbg.remove();
        }
    })
})
function removeclass()
{
    
    let filter=document.querySelectorAll(".filter");
    for(let i=0;i<filter.length;i++)
    {
        filter[i].classList.remove("border");
    }
}
let del=document.querySelector(".fa-times");
del.addEventListener("click",function(data){
    let del=document.querySelector(".todo");
    del.remove();
})

