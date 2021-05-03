let puppeteer=require("puppeteer");
let fs=require("fs");
let gtab;
let {codes}=require("./solution");
let brower=puppeteer.launch({headless:false,args:["--start-maximized"]})
brower.then(function(brower){
    return ntab=brower.newPage();
}).then(async function(ntab){
    gtab=ntab;
    await gtab.goto("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
    await gtab.type("[name='username']",'jonenag175@sumwan.com',{delay:10});
    await gtab.type("[name='password']",'jonenag175@sumwan.com',{delay:10});
    await gtab.click("button[data-analytics='LoginPassword']");
    await gtab.waitForNavigation({waitUntil:"networkidle0"})
    await waitAndClick(".card-content h3[title='Interview Preparation Kit']");
    await waitAndClick("[data-attr1='warmup']")
    let link=gtab.url();
    for(let i=0;i<codes.length;i++)
    {
        await qSolver(link,codes[i].qName,codes[i].soln);
        console.log(codes[i].qName, " : Completed");
    }
})
async function waitAndClick(css){
    await gtab.waitForSelector(css,{ visible: true });
    await gtab.click(css);
}
async function qSolver(link,que,sol){
    await gtab.goto(link);
    let Q=[];
    async function runonbrowser(question){
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
    let clickonQ=await gtab.evaluate(runonbrowser,que);
    await gtab.waitForNavigation({waitUntil:"networkidle0"})
    await waitAndClick("[type='checkbox']");
    await gtab.type(".custominput",sol);
    await gtab.keyboard.down("Control");
    await gtab.keyboard.press("A");
    await gtab.keyboard.press("X");
    await gtab.keyboard.up("Control");
    await gtab.click(".monaco-editor.no-user-select.vs");
    await gtab.keyboard.down("Control");
    await gtab.keyboard.press("A");
    await gtab.keyboard.press("V");
    await gtab.keyboard.up("Control");
    await gtab.click(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled");
    await gtab.waitForSelector("h6.congrats-heading",{visible:true});
}
