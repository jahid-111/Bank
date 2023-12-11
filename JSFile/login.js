// console.log("hello From Log in File")







const logBtn=document.getElementById('log-btn');
logBtn.addEventListener('click', function(){
    
    const emailInput=document.getElementById('email-input');
    const email=emailInput.value;
    // console.log(email);

    const passInput=document.getElementById('pass-input');
    const passValue=passInput.value;
    // console.log(passValue);


    if(email==="myemail@mail.com" && passValue==="123456")
    
    window.location.href="bank.html";
    // alert('ok');
    else{
    alert('User Not Valid Please enter Valid Information')
}


})


// console.log(logBtn)