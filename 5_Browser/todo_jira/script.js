let input=document.querySelector(".input-box")
let ul=document.querySelector(".task-list");
let arr=[];
if(localStorage.getItem("allTask"))
{
    arr=JSON.parse(localStorage.getItem("allTask"))
    for(let i=0;i<arr.length;i++)
    {
        let li=document.createElement("li");
        li.innerText=arr[i];
        li.addEventListener("dblclick",function(data){
            li.remove();
        })
        li.setAttribute("class","task");
        ul.appendChild(li);
    }
}
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
        arr.push(vv);
        let strArr=JSON.stringify(arr);
        localStorage.setItem("allTask",strArr);
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
