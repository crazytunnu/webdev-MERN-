let video=document.querySelector("video");
let record=document.querySelector(".record-btn");
let click=document.querySelector(".click");
let capture_btn=document.querySelector(".capture")
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
        let url=window.URL.createObjectURL(blob);
        a.download="Video.mp4";
        a.href=url;
        a.click();
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
    canvas.width=video.videoWidth;
    canvas.height=video.videoHeight;
    let tool=canvas.getContext("2d");
    tool.drawImage(video,0,0);
    let url=canvas.toDataURL();
    let a=document.createElement("a");
    a.href=url;
    a.download="file.png";
    a.click();
    a.remove();
    canvas.remove();
    setTimeout(function(){white.classList.remove("cpature-animation");},100)
})   
let timing=document.querySelector(".timing-container")
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