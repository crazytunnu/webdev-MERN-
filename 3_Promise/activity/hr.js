const { fstat } = require("node:fs");
let puppeteer=require("puppeteer");
let browersopen=puppeteer.launch({headless:false, args:["--start-maximized"]});
let gtab; ////https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login
//jonenag175@sumwan.com
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
    let returnlogin=Promise.all([presslogin, gtab.waitForNavigation({waitUntil:"networkidle0"})]);
    return returnlogin;
}).then(function(){
    let pkit=gtab.click(".card-content h3[title='Interview Preparation Kit']");
    let wait=gtab.waitForSelector("[data-attr1='warmup']",{visible:true})
    let returnpkit=Promise.all([pkit,wait, gtab.waitForNavigation({waitUntil:"networkidle0"})]);
    return returnpkit;
}).then(function(){
    let warmupclick=gtab.click("[data-attr1='warmup']");
    let wait=gtab.waitForSelector("a[data-attr1='sock-merchant']",{visible:true});
    let wreturn=Promise.all([warmupclick,wait,gtab.waitForNavigation({waitUntil:"networkidle0"})]);
    return wreturn;
}).then(function(){
   let url=[]
   for(let i=0;i<url.length;i++)
   {
       promisesol(url[i]);
   }
})
function promisesol(link)
{
    return new Promise(function(resolve,reject){
        fs.readFile(path,cb);
    })
}