let video=document.querySelector("video");
let record=document.querySelector(".record-btn");
let click=document.querySelector(".click");
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
            record.innerHTML="Record"
            rec.stop();
        }
        else{
            f=true
            record.innerHTML="Recording"
            rec.start();
        }
        }
    })