//....................................to do..............................................................
// View
// total videos
//watch time
//list of videos
//.....................................TO LEARN.........................................................
//TO MANAGE INFINTE SCROLLS
//.....................................CODE..............................................................
let puppeteer=require("puppeteer");
(async function(){
    let browser=await puppeteer.launch({headless:false,args:["--start-maximized"]});
    let ntab=await browser.newPage();
    await ntab.goto("https://www.youtube.com/playlist?list=PLRBp0Fe2GpgnIh0AiYKh7o7HnYAej-5ph")
    let arr=await ntab.evaluate(rob);
    console.log(arr);
    let arr2=await ntab.evaluate(nameandlength,"#video-title","span.style-scope.ytd-thumbnail-overlay-time-status-renderer");
    console.table(arr2);
})();
function rob()
{
    let doc=document.querySelectorAll("#stats .style-scope.ytd-playlist-sidebar-primary-info-renderer")
    let arr=[];
    let x=doc[0].innerText
    let y=doc[1].innerText
    arr.push(x,y);
    return arr;
}
function nameandlength(name,duration){
    let doc=document.querySelectorAll(name);
    let doc2=document.querySelectorAll(duration);
    let arr=[];
    for(let i=0;i<doc2.length;i++)
    {
        let Title=doc[i].innerText;
        let Duration=doc2[i].innerText;
        arr.push({Title,Duration});
    }
    return arr;
}
