let fs=require("fs");
let puppeteer=require("puppeteer");
let link="https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login";
let gtab;
// node hrpromise
function waitAndClickk(selector) {
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
let nbrowser=puppeteer.launch({headless:false, args:["--start-maximized"]});
nbrowser.then(function(browser){
    let ntab=browser.newPage();
    return ntab;
}).then(function(ntab){
    gtab=ntab;
    let hrank=gtab.goto(link);
    return hrank;
}).then(function(){
    let username=gtab.type("[name='username']",'jonenag175@sumwan.com',{delay:10})
    return username;
}).then(function(){
    let password=gtab.type("[name='password']",'jonenag175@sumwan.com',{delay:10})
    return password;
}).then(function(){
    let login=gtab.click("button[data-analytics='LoginPassword']")
    return login
}).then(function () {
    let clickIPKIt = waitandclick
        (".card-content h3[title='Interview Preparation Kit']");
    return clickIPKIt;
}).then(function () {
    let warmupClick =
    waitAndClick("a[data-attr1='warmup']");
    return warmupClick;
})

function waitAndClick(selector){
    return new Promise(function(resolve, reject){
        let wwait=gtab.waitForSelector(selector,{visible:true});
        wwait.then(function(){
            cclick=gtab.click(selector);
            return cclick;
        }).then(function(){
            resolve();
        })
    })
}