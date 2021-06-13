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