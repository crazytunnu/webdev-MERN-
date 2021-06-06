let txtin=document.querySelector(".eb .txt-in")
let levelsEn=document.querySelectorAll(".eb .level");
let encryptBtn=document.querySelector(".eb .encrypt-btn")
let modal=document.querySelector(".modal-container");
let outputAns=document.querySelector(".output-ans")
let levelNum=document.querySelector(".level-number")
let levelDetails=document.querySelector(".level-detail")
let close=document.querySelector(".fas");

let level=undefined;
txtin.addEventListener("click",function(e){
    e.currentTarget.value="";
})
for(let i=0;i<levelsEn.length;i++)
{
    levelsEn[i].addEventListener("click",function(e){
        level=i;
        for(let i=0;i<3;i++)
        {levelsEn[i].style.backgroundColor="red";}
        levelsEn[i].style.backgroundColor="rgb(158, 17, 17)"
    })
}
encryptBtn.addEventListener("click",function(e)
{
    if(txtin.value==`Type password to encrypt`||txtin.value.length==0)
    alert("Plese Enter Password");
    else if(level==undefined)
    alert("Please select a level of security");
    else
    {
        let levelT=document.querySelector(".level-temp");
        let txtC=document.querySelector(".text-container")
        txtC.innerHTML=`Your Encrypted Password is :`;
        levelT.innerHTML=`Your Password is Encrypted at :-`;
        let encryptedPass=encryptFun(String(txtin.value));
        txtin.value="******************";
        outputAns.innerHTML=encryptedPass;
        
        modal.style.display="flex";
    }
})
function encryptFun(password)
{
    let str=password;
    let ans=""
    if(level==0)
    {
       for(let i=0;i<str.length;i++)
       {
        let ch=str.charCodeAt(i);
        let extra=Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0,1);
        ch+=5;
        ch=String.fromCharCode(ch);
        ans+=ch;
        ans+=extra;
       }
       levelNum.innerHTML="Level "+(level+1);
       levelDetails.innerHTML=`Your Password contains the use of followings : - Alphabets only. It is not secure.`
       return ans;

    }
    else if(level==1)
    {
       for(let i=0;i<str.length;i++)
       {
        let ch=str.charCodeAt(i);
        let extra=Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0,2);
        ch+=5;
        ch=String.fromCharCode(ch);
        ans+=ch;
        ans+=Math.floor(Math.random() * 10);
        ans+=extra;
       }
       levelNum.innerHTML="Level "+(level+1);
       levelDetails.innerHTML=`Your Password contains the use of followings : - Alphabets and Numbers. It is secure.`
       return ans;
        
    }
    else
    {
       for(let i=0;i<str.length;i++)
       {
        let ch=str.charCodeAt(i);
        let extra=Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0,2);
        ch+=5;
        ch=String.fromCharCode(ch);
        ans+=ch;
        ans+=Math.floor(Math.random() * 10);
        ans+=randomSymbol();
        ans+=extra;
       }
       levelNum.innerHTML="Level "+(level+1);
       levelDetails.innerHTML=`Your Password contains the use of followings : - Alphabets, Numbers and Symbols. It is very secure.`
       return ans;
        
    }
    
}
function randomSymbol()
{
    let symbols=`!@#$%^&*()_+<>?/.,":;'{}[]=-~`
    let idx=Math.floor(Math.random() * 29);
    return symbols[idx];
}
let txtinD=document.querySelector(".db .txt-in")
close.addEventListener("click",function(e){
    txtin.value=`Type password to encrypt`;
    txtinD.value=`Type password to decrypt`
    modal.style.display="none";
})
//----------------------------Decryption Code--------------------------------------
let levelsDe=document.querySelectorAll(".db .level");
let decryptBtn=document.querySelector(".db .encrypt-btn")
let levelD=undefined;
txtinD.addEventListener("click",function(e)
{
    txtinD.value="";
})
for(let i=0;i<levelsDe.length;i++)
{
    levelsDe[i].addEventListener("click",function(e){
        levelD=i;
        for(let i=0;i<3;i++)
        {levelsDe[i].style.backgroundColor="red";}
        levelsDe[i].style.backgroundColor="rgb(158, 17, 17)"
    })
}
decryptBtn.addEventListener("click",function(e)
{
    if(txtinD.value==`Type password to decrypt`||txtinD.value.length==0)
    alert("Plese Enter Password");
    else if(levelD==undefined)
    alert("Please select a level of security");
    else
    {
        let levelT=document.querySelector(".level-temp");
        let txtC=document.querySelector(".text-container")
        txtC.innerHTML=`Your Decrypted Password is :`;
        levelT.innerHTML=`Your Password is Decrypted at :-`;
        let decryptedPass=decryptFun(String(txtinD.value));
        txtinD.value="******************";
        outputAns.innerHTML=decryptedPass;
        modal.style.display="flex";
    }
})
function decryptFun(pass)
{
    let str=pass;
    let ans="";
    while(str.length>0)
    {
        if(levelD==0)
        {
            let ch=str.charCodeAt(0);
            ch-=5;
            ch=String.fromCharCode(ch);
            ans+=ch;
            str=str.substring(2);
        }
        else if(levelD==1)
        {
            let ch=str.charCodeAt(0);
            ch-=5;
            ch=String.fromCharCode(ch);
            ans+=ch;
            str=str.substring(4);
        }
        else{
            let ch=str.charCodeAt(0);
            ch-=5;
            ch=String.fromCharCode(ch);
            ans+=ch;
            str=str.substring(5);
        }
    }
    return ans;
}


