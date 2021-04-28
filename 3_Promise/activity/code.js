let fs=require("fs");
let puppeteer=require("puppeteer");
let browersopen=puppeteer.launch({headless:false, args:["--start-maximized"]});
let gtab; 
let {codes}=require("./solution");
////https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login
//jonenag175@sumwan.com
// function waitandclick(selector){
//     return new Promise(function(resolve,reject)
//     {
//         let wait=gtab.waitForSelector(selector,{visible:true});
//         wait.then(function(){
//             let click=gtab.click(selector);
//             return click;
//         }).then(function(){
//             resolve();
//         }).catch(function(){
//             reject();
//         })
//     }
// }
function waitAndClick(selector) {
    return new Promise(function (resolve, reject) {
        let selectorWaitPromise = gtab.waitForSelector(selector,
            { visible: true });
        selectorWaitPromise
            .then(function () {
                let selectorClickPromise = gtab.click(selector);
                return selectorClickPromise;
            }).then(function () {
                resolve();
            }).catch(function () {
                reject(err);
            })
    })
}
browersopen.then(function(brower){
    let ntab=brower.newPage();
    return ntab;
}).then(function(tab){
    gtab=tab;
    let hrank=gtab.goto("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
    return hrank;
}).then(function(){
    let username=gtab.type("[name='username']",'jonenag175@sumwan.com',{delay:10});
    return username;

}).then(function(){
    let password=gtab.type("[name='password']",'jonenag175@sumwan.com',{delay:10});
    return password;
}).then(function(){
    let presslogin=gtab.click("button[data-analytics='LoginPassword']");
    let returnlogin=Promise.all([presslogin, gtab.waitForNavigation({waitUntil:"networkidle0"})]);//this line cost me 2 hours
    return returnlogin;
}).then(function(){
    let pkit=waitAndClick(".card-content h3[title='Interview Preparation Kit']");
    return pkit;
}).then(function(){
    let warmup=waitAndClick("[data-attr1='warmup']");
    return warmup;
}).then(function(){
    return gtab.url();
}).then(function(link){
    let obj=codes[0];
    questionSolver(link,"Counting Valleys",obj.soln);
})
function questionSolver(link,que,sol)
{
    return new Promise(function(resolve,reject){
        // goto page
        let gotopage=gtab.goto(link);
        gotopage
        .then(function (){
            function runonbrowser(question){
                let docall=document.querySelectorAll("h4");
                let Ques=[];
                for(let i=0;i<docall.length;i++)
                {
                    let name=docall[i].innerText.split("\n")[0];
                    Ques.push(name);
                }
                let idx=Ques.indexOf(question);
                docall[idx].click();
            }
            let clickonQ=gtab.evaluate(runonbrowser,que);
            return clickonQ;
        }).then(function(){
            let shandler=settinghandler();
            return shandler;
        }).then(function(){
            resolve();
        })
        // questionname-appear-click
        // read-copy-paste
        // submit
    })
}
function settinghandler()//disable and click again on settings to remove the popup
{
    return new Promise(function(resolev,reject){
        let wandc=waitAndClick("button[aria-label='Editor Settings']")
        wandc.then(function(){
            return waitAndClick("button[aria-label='Disable Autocomplete']");
        }).then(function(){
            return waitAndClick("button[aria-label='Editor Settings']");
        }).then(function(){
            resolve();
        })
    })
}