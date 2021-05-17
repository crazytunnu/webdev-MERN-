let add_sheet_container=document.querySelector(".add-sheet_container");
let sheets_list=document.querySelector(".sheets-list");
let firstSheet=document.querySelector(".sheet")
firstSheet.addEventListener("click",selected_sheet)
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
    sheet.addEventListener("click",selected_sheet)
}
function selected_sheet(e)
{
    let sheet=document.querySelectorAll(".sheet");
    sheet.forEach(function(sheet){
        sheet.classList.remove("active-sheet")
    })
    e.currentTarget.classList.add("active-sheet");
}