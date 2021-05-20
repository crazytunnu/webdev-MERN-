let toprow=document.querySelector(".top-row")
        let leftcol=document.querySelector(".left-col");
        let grid=document.querySelector(".grid");
        let str="";
        for(let i=0;i<100;i++)
        {
            str+=`<div class="left-col-box" >${i+1}</div>`
        }
        leftcol.innerHTML=str;
        str="";
        for(let i=0;i<26;i++)
        {
            str+=`<div class="col">${String.fromCharCode(65+i)}</div>`
        }
        toprow.innerHTML=str;
        str="";
        for(let i=0;i<100;i++)
        {
            str+=`<div class="row">`
            for(j=0;j<26;j++)
            {
                str+=`<div class="col" rid='${String.fromCharCode(65+j)}' cid='${i+1}' contenteditable="true"></div>`
            }
            str+="</div>"
        }
        grid.innerHTML=str;