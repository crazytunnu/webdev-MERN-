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
            }
            else{
                f=true
                rec.start();
                let red=document.querySelector(".red");
                red.classList.add("record-animation");
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