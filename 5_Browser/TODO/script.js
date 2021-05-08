let input=document.querySelector(".input-box")
let ul=document.querySelector(".tasks");
input.addEventListener("keydown",function(data)
{
    let kk=data.key;
    if(data.key=="Enter")
    {
        let vv=input.value;
        let li=document.createElement("li");
        li.innerText=vv;
        ul.appendChild(li);
    }
})
