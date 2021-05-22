let add_sheet_container=document.querySelector(".add-sheet_container");
let sheets_list=document.querySelector(".sheets-list");
let firstSheet=document.querySelector(".sheet")
let Allcells=document.querySelectorAll(".grid .col");
let alignBtn=document.querySelectorAll(".alb")
let adbox=document.querySelector(".address-box");
let fontbox=document.querySelector(".font-family")  
let sizebox=document.querySelector(".font-size") 
let bbtn=document.querySelector(".bold")
let ibtn=document.querySelector(".italic")
let ubtn=document.querySelector(".underline")
let slist=[];
let currSheet=0;
let updateList=[];


firstSheet.addEventListener("click",selected_sheet)
let sheet1=[]
slist.push(sheet1);



function createSheet()
{
    let row=[];
    for(let i=0;i<100;i++)
    {
        let arr=[]
        for(let j=0;j<26;j++)
        {
            arr.push("");
        }
        row.push(arr);
    }
    return row;
}






add_sheet_container.addEventListener("click",addSheet)
function addSheet(e)
{
    let allsheet=document.querySelectorAll(".sheet");
    allsheet=allsheet[allsheet.length-1];
    let id=allsheet.getAttribute("sheetIdx");
    id=Number(id);
    let sheet=document.createElement("div");
    sheet.setAttribute("class","sheet");
    sheet.setAttribute("sheetIdx",id+1);
    sheet.innerText=`Sheet ${id+2}`
    sheets_list.appendChild(sheet);
    let newSheet=[];
    slist.push(newSheet);
    sheet.addEventListener("click",selected_sheet)
    sheet.click();
}
function updatePrev()
{
    let csheet=slist[currSheet];
    for(let i=0;i<updateList.length;i++)
    {
        let addr=updateList[i];
        let rid=updateList[i].charAt(0);
        let cid=updateList[i].slice(1);
        let k=cid-1;
        let j=getInt(rid);
        let data=document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`)
        let xdata=data.innerText;
        csheet[addr]=xdata;
        
    }
    for (let [key, value] of Object.entries(csheet)){
        let k=key;
        let v=value;
        let rid=k.charAt(0);
        let cid=Number(k.slice(1));
        let j=getInt(rid);
        let data=document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`)
        data.innerText="";
    }
    updateList=[];
    // let csheet=slist[currSheet];
    // for(let i=0;i<100;i++)
    // {
    //     for(let j=0;j<26;j++)
    //     {
    //         let data=document.querySelector(`.col[rid="${String.fromCharCode(65+j)}"][cid="${i+1}"]`)
    //         data=data.innerText;
    //         csheet[i][j]=data;
    //     }
    // }
    slist[currSheet]=csheet;
}
function updateNext()
{
    let csheet=slist[currSheet];
    // for(let i=0;i<100;i++)
    // {
    //     for(let j=0;j<26;j++)
    //     {
    //         let data=document.querySelector(`.col[rid="${String.fromCharCode(65+j)}"][cid="${i+1}"]`)
    //         data.innerText=csheet[i][j];
    //     }
    // }
    // 
    for (let [key, value] of Object.entries(csheet)) {
        let k=key;
        let v=value;
        let rid=k.charAt(0);
        let cid=Number(k.slice(1));
        let j=getInt(rid);
        let data=document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`)
        data.innerText=v;
      }
    //   slist[currSheet]=csheet;
}
function selected_sheet(e)
{
    updatePrev()
    currSheet=e.currentTarget.getAttribute("sheetIdx");
    updateNext();
    let sheet=document.querySelectorAll(".sheet");
    sheet.forEach(function(sheet){
        sheet.classList.remove("active-sheet")
    })
    e.currentTarget.classList.add("active-sheet");
}
function getInt(ch)
{
    for(let i=0;i<26;i++)
    {
        if(String.fromCharCode(65+i)==ch)
        {
            return i;
        }
    }
}
for(let i=0;i<Allcells.length;i++)
{
    Allcells[i].addEventListener("click",function(e){
        let row=Allcells[i].getAttribute("rid");
        let col=Allcells[i].getAttribute("cid");
        let address=row+col;
        adbox.value=address;
        updateList.push(address);
        let rid=getInt(row);
        let cid=col-1;
        let obj=sheetDB[cid][rid]
        fontbox.value=obj.fontFamily;
        sizebox.value=obj.fontSize
        if(obj.bold=="normal")
        {
            bbtn.classList.remove("active-btn");
        }
        else{
            bbtn.classList.add("active-btn");
        }
        if(obj.italic=="normal")
        {
            ibtn.classList.remove("active-btn");
        }
        else{
            ibtn.classList.add("active-btn");
        }
        if(obj.underline=="none")
        {
            ubtn.classList.remove("active-btn");
        }
        else{
            ubtn.classList.add("active-btn");
        }
        ///////////Alignment///////////
        for(let i=0;i<3;i++)
        {
            alignBtn[i].classList.remove("active-btn");
        }
        if(obj.halign=="left")
        alignBtn[0].classList.add("active-btn");
        else if(obj.halign=="center")
        alignBtn[1].classList.add("active-btn");
        else
        alignBtn[2].classList.add("active-btn");

    })
}
Allcells[0].click(); 
for(let i=0;i<3;i++)
{
    alignBtn[i].addEventListener("click",alignFuntion)
}
function alignFuntion(data)
{
    alignBtn[0].classList.remove("active-btn")
    alignBtn[1].classList.remove("active-btn")
    alignBtn[2].classList.remove("active-btn")
    
    let alignment=data.currentTarget.value;
    let xx=adbox.value;
    let row=xx.charAt(0);
    let col=Number(xx.slice(1));
    let rid=getInt(row);
    let cid=col-1;
    let obj=sheetDB[cid][rid]
    let box=document.querySelector(`[rid='${row}'][cid='${col}']`);
   //conn
    if(data.currentTarget.value=="L")
    {
        data.currentTarget.classList.add("active-btn")
        obj.halign="left";
        box.style.textAlign="left"
    }
    else if(data.currentTarget.value=="C")
    {
        data.currentTarget.classList.add("active-btn")
        obj.halign="center";
        box.style.textAlign="center"
    }
    else if(data.currentTarget.value=="R")
    {
        data.currentTarget.classList.add("active-btn")
        obj.halign="right";
        box.style.textAlign="right"
    }
}
//////////////////////Managing font size/font-------------------------------------------
sizebox.addEventListener("change",function(e){
    let xx=adbox.value;
    let row=xx.charAt(0);
    let col=Number(xx.slice(1));
    let size=e.target.value;
    let cell=document.querySelector(`.col[rid="${row}"][cid="${col}"]`)
    console.log(cell.innerText)
    cell.style.fontSize=size +"px";
    let rid=getInt(row);
    let cid=col-1;
    let obj=sheetDB[cid][rid]
    obj.fontSize=size;
    

})

fontbox.addEventListener("change",function(e){
    let cfont=fontbox.value;
    let xx=adbox.value;
    let row=xx.charAt(0);
    let col=Number(xx.slice(1));
    let cell=document.querySelector(`[rid="${row}"][cid="${col}"]`)
    cell.style.fontFamily=cfont;
    let rid=getInt(row);
    let cid=col-1;
    let obj=sheetDB[cid][rid]
    obj.fontFamily=cfont;
})


//-------------------------BUI-----------------------------
bbtn.addEventListener("click",function(e){
    let xx=adbox.value;
    let row=xx.charAt(0);
    let col=Number(xx.slice(1));
    let cell=document.querySelector(`[rid="${row}"][cid="${col}"]`) 
    let status=bbtn.classList.contains("active-btn");
    let rid=getInt(row);
    let cid=col-1;
    let obj=sheetDB[cid][rid]
    if(status)
    {
        cell.style.fontWeight = "normal";
        bbtn.classList.remove("active-btn");
        obj.bold="normal";
    }
    else
    {
        cell.style.fontWeight="bold";
        bbtn.classList.add("active-btn");
        obj.bold="bold";
    }
})
ibtn.addEventListener("click",function(e){
    let xx=adbox.value;
    let row=xx.charAt(0);
    let col=Number(xx.slice(1));
    let cell=document.querySelector(`[rid="${row}"][cid="${col}"]`) 
    let status=ibtn.classList.contains("active-btn");
    let rid=getInt(row);
    let cid=col-1;
    let obj=sheetDB[cid][rid]
    if(status)
    {
        cell.style.fontStyle = "normal";
        ibtn.classList.remove("active-btn");
        obj.italic="normal";
    }
    else
    {
        cell.style.fontStyle="italic";
        ibtn.classList.add("active-btn");
        obj.italic="italic";
    }
})
ubtn.addEventListener("click",function(e){
    let xx=adbox.value;
    let row=xx.charAt(0);
    let col=Number(xx.slice(1));
    let cell=document.querySelector(`[rid="${row}"][cid="${col}"]`) 
    let status=ubtn.classList.contains("active-btn");
    let rid=getInt(row);
    let cid=col-1;
    let obj=sheetDB[cid][rid]
    if(status)
    {
        cell.style.textDecoration = "none";
        ubtn.classList.remove("active-btn");
        obj.underline="none";
    }
    else
    {
        cell.style.textDecoration="underline";
        ubtn.classList.add("active-btn");
        obj.underline="underline";
    }
})