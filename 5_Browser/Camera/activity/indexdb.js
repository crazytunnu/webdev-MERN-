

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
                let download=document.createElement('div');
                download.setAttribute('id',"gallery-download");
                download.innerText="Download";
                let del=document.createElement('div');
                del.setAttribute('id',"gallery-download");
                del.innerText='Delete';
                let video=document.createElement('video');
                video.src=URL.createObjectURL(cursor.value.media);
                vidC.appendChild(video);
                vidC.appendChild(download);
                vidC.appendChild(del);
                video.controls=true;
                video.autoplay=true;
                body.appendChild(vidC);
            }
            else{
                let imgC=document.createElement('div');
                imgC.setAttribute('mId',cursor.value.mId);
                imgC.classList.add("gallery-img-container");
                let download=document.createElement('div');
                download.setAttribute('id',"gallery-download");
                download.innerText="Download";
                let del=document.createElement('div');
                del.setAttribute('id',"gallery-download");
                del.innerText='Delete';
                let img=document.createElement('img');
                img.src=cursor.value.media
                imgC.appendChild(img);
                imgC.appendChild(download);
                imgC.appendChild(del);
                body.appendChild(imgC);

            }
        }
        cursor.continue();
    }
}