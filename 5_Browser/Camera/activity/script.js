
let video=document.querySelector("video");
let record=document.querySelector(".record-btn");
let click=document.querySelector(".click");
let capture_btn=document.querySelector(".capture")
let timing=document.querySelector(".timing-container");
let allfilters=document.querySelectorAll(".filter");
let uiFilter=document.querySelector(".ui-filter");
let plusBtn=document.querySelector(".plus")
let minusBtn=document.querySelector(".minus")
let galleryBtn=document.querySelector(".gallery-btn");
let curFilter="";
let scale=0;
for(let i=0;i<allfilters.length;i++)
{
    allfilters[i].addEventListener("click",function(){
        curFilter=allfilters[i].style.backgroundColor;
        if(curFilter)
        {
            uiFilter.style.backgroundColor=curFilter;
            uiFilter.classList.add("ui-active");
        }
        else
        {
            curFilter="";
            uiFilter.style.backgroundColor=curFilter;
            uiFilter.classList.remove("ui-active");
        }
    })
}
// console.log(allfilters.length)
let constraints={
    video:true,
    audio : true
}
let buffer=[];
let f=false;
let rec;
navigator.mediaDevices.getUserMedia(constraints)
.then(function(e){
    video.srcObject=e;
        rec=new MediaRecorder(e);
    rec.addEventListener("dataavailable",function(x){
        buffer.push(x.data);
    })
    rec.addEventListener("stop",function(x){
        let a=document.createElement("a");
        let blob=new Blob(buffer,{type:"video/mp4"});
        // let url=window.URL.createObjectURL(blob);
        // a.download="Video.mp4";
        // a.href=url;
        // a.click();
        SavetoGallery('video',blob);
    })
    
}).catch(function(err){
    console.log(err);
})
record.addEventListener("click",function(data){
        if(!rec)
        {
            alert("Check Permissions")
        }
        else{
            if(f)
            {
                f=false
                rec.stop();
                let red=document.querySelector(".red");
                red.classList.remove("record-animation");
                stoptimer();
            }
            else{
                f=true
                rec.start();
                let red=document.querySelector(".red");
                red.classList.add("record-animation");
                starttimer();
            }
        }
    })
capture_btn.addEventListener("click",function(e){
    let canvas=document.createElement("canvas");
    let white=document.querySelector(".white");
    white.classList.add("cpature-animation");
    let tool=canvas.getContext("2d");
    if(scale==0)
    {
        canvas.width=video.videoWidth;
        canvas.height=video.videoHeight;
        tool.drawImage(video,0,0);
    }
    else
    {
        let xs=(video.videoWidth)*0.1*scale;
        let ys=(video.videoHeight)*0.1*scale;
        canvas.width=video.videoWidth-xs;
        canvas.height=video.videoHeight-ys
        tool.drawImage(video,xs,ys,canvas.width,canvas.height,0,0,canvas.width,canvas.height);
    }
   
    if(curFilter)
    {
        tool.fillStyle=curFilter;
        tool.fillRect(0,0,canvas.width,canvas.height)
    }
    let url=canvas.toDataURL();
    SavetoGallery('img',url);
    // let a=document.createElement("a");
    // a.href=url;
    // a.download="file.png";
    // a.click();
    // a.remove();
    canvas.remove();
    setTimeout(function(){white.classList.remove("cpature-animation");},100)
})   

let runtime;
function starttimer()
{
   timing.classList.add("t-active");
   let count=0;
    runtime=setInterval(function(){
        count++;
        let sec=(count%60)<10?`0${count%60}`:`${count%60}`
        let min=(count/60)<10?`0${Number.parseInt(count/60)}`:`${Number.parseInt(count/60)}`
        let hr=(count/3600)<10?`0${Number.parseInt(count/3600)}`:`${Number.parseInt(count/3600)}`
        timing.innerHTML=`${hr}:${min}:${sec}`;
    },1000)
}
function stoptimer()
{
    clearInterval(runtime);
    timing.classList.remove("t-active");
    timing.innerHTML=`00:00:00`;
}

//--------------Plus-Minus btn----------------
plusBtn.addEventListener("click",function(){
    if(scale<4)
    {
        let str="z"+scale;
        video.classList.remove(str);
        scale++;
        str="z"+scale;
        video.classList.add(str);
    }
})
minusBtn.addEventListener("click",function(){
    if(scale>0)
    {
        let str="z"+scale;
        video.classList.remove(str);
        scale--;
        str="z"+scale;
        video.classList.add(str);
    }
})


galleryBtn.addEventListener("click",function(e)
{
    location.assign("indexedDB.html");
})