let input=document.querySelector(".input-box")
let ul=document.querySelector(".task-list");
input.addEventListener("keydown",function(data)
{
    let kk=data.key;
    if(data.key=="Enter")
    {
        let vv=input.value;
        let li=document.createElement("li");
        li.innerText=vv;
        li.addEventListener("dblclick",function(data){
            li.remove();
        })
        li.setAttribute("class","task");
        ul.appendChild(li);
        erasetext();
    }
    else if(data.key=="Backspace")
    {
        document.removeChild(".tasks");
    }
})
function erasetext()
{
    input.value="";
}
