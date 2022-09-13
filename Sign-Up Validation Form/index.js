const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confipassword = document.getElementById('confipassword');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    Validate();
})

const SuccessMsg = (firstnameVal) =>{
    let formContr = document.getElementsByClassName('form-control');
    var Count = formContr.length - 1;
    for(var i = 0; i < formContr.length; i++){
        if(formContr[i].className === "form-control success"){
            var sRate = 0 + i;
            console.log(sRate);
            sendData(firstnameVal, sRate, Count);
        }
        else{
            return false;
        }
    }
}

const isEmail = (emailVal) =>{
    var atSymbol = emailVal.indexOf('@');
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length -1) return false;
    return true;
}
function Validate(){
    const firstnameVal = firstname.value.trim();
    const lastnameVal = lastname.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const confipasswordVal = confipassword.value.trim();

    // First Name 
    if(firstnameVal === ""){
        setErrorMsg(firstname,"First Name cannot be blank");
    }
    else if(firstnameVal.length <=2){
        setErrorMsg(firstname,"Minimum 3 characters required");
    }
    else{
        setSuccessMsg(firstname);
    }
    
    // Last Name 
    if(lastnameVal === ""){
        setErrorMsg(lastname,"Last Name cannot be blank");
    }
    else if(lastnameVal.length <=2){
        setErrorMsg(lastname,"Minimum 3 characters required");
    }
    else{
        setSuccessMsg(lastname);
    }

    // Email 
    if(emailVal === ""){
        setErrorMsg(email,"Email cannot be blank");
    }
    else if(!isEmail(emailVal)){
        setErrorMsg(email,"Email is not valid");
    }
    else{
        setSuccessMsg(email);
    }

    // Password
    if(passwordVal === ""){
        setErrorMsg(password,"enter password");
    }
    else if(passwordVal.length <=7){
        setErrorMsg(password,"Minimum 8 characters required");
    }
    else{
        setSuccessMsg(password);
    }

    // CONFIRM PASSWORD 
    if(confipasswordVal === ""){
        setErrorMsg(confipassword,"Confirm password");
    }
    else if(passwordVal != confipasswordVal){
        setErrorMsg(confipassword,"Password not macthed");
    }
    else{
        setSuccessMsg(confipassword);
    }
    SuccessMsg(firstnameVal);
}

function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}
function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}