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
    // function recursion(link,i)
    // {
    //     if(i>3) return;
    //     let obj=codes[i];
    //     let temp= questionSolver(link,obj.qName,obj.soln);
    //     temp.then(function(){
    //         recursion(link,i+1);
    //     })
    // }
    // recursion(link,0);
    let obj=codes[1];
    questionSolver(link,obj.qName,obj.soln);
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
            return waitAndClick(".checkBoxWrapper") //clicking on search so that we can type our solution here
        }).then(function(){
            return gtab.keyboard.type(sol);
        }).then(function(){
            return gtab.keyboard.down("Control");
        }).then(function(){
            return gtab.keyboard.press("A");
        }).then(function(){
            return gtab.keyboard.press("X");
        }).then(function(){
            return gtab.keyboard.up("Control");
        }).then(function(){
                let clickoneditor =gtab.click(".monaco-editor.no-user-select.vs");
                return clickoneditor;
            }).then(function(){
                return gtab.keyboard.down('Control');
            }).then(function(){
                return gtab.keyboard.press("A");
            }).then(function(){
                return gtab.keyboard.press("V");
            }).then(function(){
                return gtab.click(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled");
            })
            .then(function(){
            resolve();
        })
        // questionname-appear-click
        // read-copy-paste
        // submit
    })
}
function settingHandlerr() {
    return new Promise(function (resolve, reject) {

        // wait click
        let settingClickPromise = waitAndClick("button[aria-label='Editor Settings']");
        settingClickPromise
            .then(function () {
                let disableButtonClickPromise = waitAndClick("button[aria-label='Disable Autocomplete']");
                return disableButtonClickPromise;
            }).then(function () {
                // click on setting button
                let settingIsClickedpromise = gtab.click("button[aria-label='Editor Settings']");
                return settingIsClickedpromise;
            }).then(function () {
                resolve();
            }).catch(function () {
                resolve();
            })
        // autocomplete -> wait ,click

    })
}
function settinghandler()//disable and click again on settings to remove the popup
{
    return new Promise(function(resolve,reject){
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

// .then(function(){
//     let shandler=settinghandler();
//     return shandler;
// }).then(function(){
//     let clickoneditor =gtab.click(".monaco-editor.no-user-select.vs");
//     return clickoneditor;
// }).then(function(){
//     return gtab.keyboard.down('Control');
// }).then(function(){
//     return gtab.keyboard.press("A");
// }).then(function(){
//     return gtab.keyboard.up("Control");
// }).then(function(){
//     return gtab.keyboard.press("Backspace");
// }).then(function(){
//     return gtab.keyboard.type(sol);
// })