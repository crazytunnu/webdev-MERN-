let search=process.argv.slice(2)[0];
let fs=require("fs");
let puppeteer=require("puppeteer");
let links=["https://www.flipkart.com","https://www.amazon.in","https://www.snapdeal.com"];
let gtab;
(async function(){
    let browser=await puppeteer.launch({headless:false,args:["--start-maximized"]});
    let ntab=await browser.newPage();
    await getAmazon(links[1],ntab,search);
    
})();
async function getAmazon(link,ntab,search)
{
    await ntab.goto(links[1]);
    await ntab.waitForSelector("#twotabsearchtextbox");
    await ntab.type("#twotabsearchtextbox",search,{delay:10});
    await ntab.click("#nav-search-submit-button");
    
    await ntab.waitForSelector(".a-size-medium.a-color-base.a-text-normal",{visible:true});
    const Nameall = await ntab.evaluate(() =>
    Array.from(
    document.querySelectorAll('.a-size-medium.a-color-base.a-text-normal'),
    (element) => element.textContent
    ))
    const Priceall = await ntab.evaluate(() =>
    Array.from(
    document.querySelectorAll('.a-price-whole'),
    (element) => element.textContent
    ))
    console.log(Nameall.length);
    for(let i=0;i<Nameall.length;i++)
    {
        console.log(Nameall[i]);
        console.log(Priceall[i+1]);
    }
}