let txtin=document.querySelector(".eb .txt-in")
let levelsEn=document.querySelectorAll(".eb .level");
let encryptBtn=document.querySelector(".eb .encrypt-btn")
let modal=document.querySelector(".modal-container");
let outputAns=document.querySelector(".output-ans")
let levelNum=document.querySelector(".level-number")
let levelDetails=document.querySelector(".level-detail")
let 
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
        let dir=0;
       for(let i=0;i<str.length;i++)
       {
        let ch=str.charCodeAt(i);
        let extra=Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0,1);
        ch+=5;
        ch=String.fromCharCode(ch);
        if(dir==0)
        {
            ans+=ch;
            
            ans+=extra;
        }
        else{
            ans=ch+ans;
           
            ans=extra+ans;
        }
        dir=(dir+1)%2;
       }
       levelNum.innerHTML="Level "+(level+1);
       levelDetails.innerHTML=`Your Password contains the use of followings : - Alphabets only. It is not secure.`
       return ans;

    }
    else if(level==1)
    {
        let dir=0;
       for(let i=0;i<str.length;i++)
       {
        let ch=str.charCodeAt(i);
        let extra=Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0,2);
        ch+=5;
        ch=String.fromCharCode(ch);
        if(dir==0)
        {
            ans+=ch;
            ans+=Math.floor(Math.random() * 10);
            ans+=extra;
        }
        else{
            ans=ch+ans;
            ans=Math.floor(Math.random() * 10)+ans;
            ans=extra+ans;
        }
        dir=(dir+1)%2;
       }
       levelNum.innerHTML="Level "+(level+1);
       levelDetails.innerHTML=`Your Password contains the use of followings : - Alphabets and Numbers. It is secure.`
       return ans;
        
    }
    else
    {
        let dir=0;
       for(let i=0;i<str.length;i++)
       {
        let ch=str.charCodeAt(i);
        let extra=Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0,2);
        ch+=5;
        ch=String.fromCharCode(ch);
        if(dir==0)
        {
            ans+=ch;
            ans+=Math.floor(Math.random() * 10);
            ans+=randomSymbol();
            ans+=extra;
        }
        else{
            ans=ch+ans;
            ans=Math.floor(Math.random() * 10)+ans;
            ans=randomSymbol()+ans;
            ans=extra+ans;
        }
        dir=(dir+1)%2;
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
randomSymbol();

