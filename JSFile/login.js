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


document.getElementById('data').addEventListener('click', function(){



const data=document.getElementById('data');

data.style.color="red";
data.innerText="Click Again For More"
// console.log(data);
alert("Log In Email: myemail@mail.com")
alert("Log In Pass: 123456")



})