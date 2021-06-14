let db;
let req=indexedDB.open('camera',1);
req.onupgradeneeded=function (e)
{
    db=req.result;
    db.createObjectStore('gallery',{keyPath:'mId'});
}
req.onsuccess=function (e)
{
    db=req.result;
}
req.onerror=function(e)
{
    alert(e.target.value);
}
function SavetoGallery(type,data)
{
    let tx=db.transaction('gallery','readwrite');
    let store=tx.objectStore('gallery');
    store.add({mId:Date.now(),type,media:data});
}
function ViewData()
{
    let body=document.querySelector('body');
    let tx=db.transaction('gallery','readonly');
    let store=tx.objectStore('gallery');
    let request=store.openCursor();
    request.onsuccess=function(e)
    {
        let cursor=request.result;
        if(cursor)
        {
            if(cursor.value.type=='video')
            {
                let vidC=document.createElement('div');
                vidC.setAttribute('mId',cursor.value.mId);
                vidC.classList.add("gallery-vid-container");
                let download=document.createElement('button');
                download.setAttribute('id',"gallery-download");
                download.innerText="Download";
                let del=document.createElement('button');
                del.setAttribute('id',"gallery-delete");
                del.innerText='Delete';
                let video=document.createElement('video');
                video.src=URL.createObjectURL(cursor.value.media);
                vidC.appendChild(video);
                vidC.appendChild(download);
                vidC.appendChild(del);
                video.controls=true;
                video.autoplay=true;
                body.appendChild(vidC);
                del.addEventListener("click",function(e){delFun(e)});
                download.addEventListener("click",function(e){downloadFun(e)});
            }
            else{
                let imgC=document.createElement('div');
                imgC.setAttribute('mId',cursor.value.mId);
                imgC.classList.add("gallery-img-container");
                let download=document.createElement('button');
                download.setAttribute('id',"gallery-download");
                download.innerText="Download";
                let del=document.createElement('button');
                del.setAttribute('id',"gallery-delete");
                del.innerText='Delete';
                let img=document.createElement('img');
                img.src=cursor.value.media
                imgC.appendChild(img);
                imgC.appendChild(download);
                imgC.appendChild(del);
                body.appendChild(imgC);
                del.addEventListener("click",function(e){delFun(e)});
                download.addEventListener("click",function(e){downloadFun(e)});
            }
        }
        cursor.continue();
    }
}
function DeleteFromDB(mId)
{
    let tx=db.transaction('gallery','readwrite');
    let store=tx.objectStore('gallery');
    store.delete(Number(mId));
}
function delFun(e)
{
    let mId=e.currentTarget.parentNode.getAttribute('mId');
    e.currentTarget.parentNode.remove();
    DeleteFromDB(mId);
}
function downloadFun(e)
{
    let imgUrl=e.currentTarget.parentNode.children[0];
    console.log(imgUrl);
    let a=document.createElement('a');
    a.href=imgUrl.src;
    if(e.currentTarget.parentNode.getAttribute('class')=='gallery-img-container')
    a.download="File.png"
    else
    a.download="File.mp4";
    a.click();
    a.remove();

}
let backbtn=document.querySelector('.backToCam');
backbtn.addEventListener("click",function(){
    location.assign('index.html')
})