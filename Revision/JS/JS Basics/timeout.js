// setTimeout(()=>{
//     console.log("This will be printed after 2 seconds");
// },2000);

// (()=>{
//     console.log("Hiiiiii");
// })();





let id=setInterval(()=>{
    console.log("Hiiiii");
},1000)
setTimeout(() => {
    clearInterval(id)
}, 3018);