let puppeteer = require("puppeteer");

let fs = require("fs");
let gtab;
console.log("Before");
let browserPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized",]
})
let username='jonenag175@sumwan.com';
let password='jonenag175@sumwan.com'
// /pages
browserPromise
    .then(function (browserInstance) {
        let newTabPromise = browserInstance.newPage();
        return newTabPromise;
    })
    .then(function (newTab) {
        // console.log(newTab);
        let loginPageWillBeopenedPromise = newTab.goto("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
        gtab = newTab;
        return loginPageWillBeopenedPromise;
    })
    .then(function () {
        // console.log("login Page opened");
        let emailWillBeTypedPromise = gtab.type("#input-1", email, { delay: 10 });
        return emailWillBeTypedPromise;
    }).then(function () {
        let passwordWillBeTypedPromise = gtab.type("#input-2", password, { delay: 10 });
        return passwordWillBeTypedPromise;
    }).then(function () {
        let loginPageWillBeClickedpromise = gtab.
            click("button[data-analytics='LoginPassword']");
        return loginPageWillBeClickedpromise;
    }).then(function () {
        let clickIPKIt = waitAndClick
            (".card-content h3[title='Interview Preparation Kit']");
        return clickIPKIt;
    }).then(function () {
        let warmupClick =
            waitAndClick("a[data-attr1='warmup']");
        return warmupClick;
    })
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