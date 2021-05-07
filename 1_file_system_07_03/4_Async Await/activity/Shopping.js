let search=process.argv[2];
let fs=require("fs");
let puppeteer=require("puppeteer");
let links=["https://www.flipkart.com","https://www.amazon.in","https://www.snapdeal.com"];
let gtab;
(async function(){
    let browser=await puppeteer.launch({headless:false,args:["--start-maximized"]});
    let amazon=await getAmazon(links[1],browser,search);
    let flipkart=await getFlipkart(links[0],browser,search);
    // let snapdeal=await getSnapdeal(links[2],browser,search);
    console.table(amazon)
    console.table(flipkart);
    // console.table(snapdeal);
    console.log("Code Completed");
})();
async function getAmazon(link,browser,search)
{
    let ntab=await browser.newPage();
    await ntab.goto(links[1]);
    await ntab.waitForSelector("#twotabsearchtextbox");
    await ntab.type("#twotabsearchtextbox",search,{delay:10});
    await ntab.click("#nav-search-submit-button");
    
    await ntab.waitForSelector(".sg-col.sg-col-4-of-12.sg-col-8-of-16.sg-col-12-of-20 .a-price-whole",{visible:true});
    // const Nameall = await ntab.evaluate(() =>
    // Array.from(
    // document.querySelectorAll('.sg-col.sg-col-4-of-12.sg-col-8-of-16.sg-col-12-of-20 .a-size-medium.a-color-base.a-text-normal'),
    // (element) => element.textContent
    // ))
    // const Priceall = await ntab.evaluate(() =>
    // Array.from(
    // document.querySelectorAll('.sg-col.sg-col-4-of-12.sg-col-8-of-16.sg-col-12-of-20 .a-price-whole'),
    // (element) => element.textContent
    // ))
    // console.log(Nameall.length);
    function rob(name,price)
    {
        let allname=document.querySelectorAll(name)
        let allprice=document.querySelectorAll(price)
        let xx=[];
        for(let i=0;i<5;i++)
        {
            let name=allname[i].innerText;
            let price=allprice[i].innerText;
            xx.push({name,price});
        }
        return xx;
        
    }
    return await ntab.evaluate(rob,".sg-col.sg-col-4-of-12.sg-col-8-of-16.sg-col-12-of-20 .a-size-medium.a-color-base.a-text-normal",
       ".sg-col.sg-col-4-of-12.sg-col-8-of-16.sg-col-12-of-20 .a-price-whole");
}
async function getFlipkart(link,browser,search)
{
    let ntab=await browser.newPage();
    await ntab.goto(link);
    await ntab.waitForSelector("[title='Search for products, brands and more']")
    await ntab.click("._2KpZ6l._2doB4z");
    await ntab.type("[title='Search for products, brands and more']",search,{delay:10});
    await ntab.click(".L0Z3Pu");
    await ntab.waitForSelector("._4ddWXP .s1Q9rs");
    function sob(name,price)
    {
        let ans=[];
        let nall=document.querySelectorAll(name);
        let pall=document.querySelectorAll(price);
        for(let i=0;i<5;i++)
        {
            let name=nall[i].innerText;
            let price=pall[i].innerText;
            ans.push({name,price});
        }
        return ans;
    }
    return ntab.evaluate(sob,"._4ddWXP .s1Q9rs","._4ddWXP ._30jeq3");
}
async function getSnapdeal(link,browser,search)
{
    let ntab=await browser.newPage();
    await ntab.goto(link);
    await ntab.waitForSelector("[placeholder='Search products & brands']")
    await ntab.type("[placeholder='Search products & brands']",search,{delay:10});
    await ntab.click(".searchTextSpan");
    await ntab.waitForSelector(".product-desc-rating .lfloat.product-price");
    function sob(name,price)
    {
        let ans=[];
        let nall=document.querySelectorAll(name);
        let pall=document.querySelectorAll(price);
        for(let i=0;i<5;i++)
        {
            let name=nall[i].innerText;
            let price=pall[i].innerText;
            ans.push({name,price});
        }
        return ans;
    }
    return ntab.evaluate(sob,".product-desc-rating .product-title",".product-desc-rating .lfloat.product-price");
}