
function enableSubmit(){
    const fname = document.getElementById('fname').value;
    if(fname.toString().length == 0){
        return false;
    }
    const lname = document.getElementById('lname').value;
    if(lname.toString().length == 0){
        return false;
    }
    const age = document.getElementById('age').value;
    if(age.toString().length == 0){
        return false;
    }
    const notify = document.getElementById('notify-email').value;
    if(notify.toString().length == 0){
        return false;
    }
    if(!validateAge()){
        document.getElementById("submit-button").setAttribute("disabled","true");
        return false;
    }
    if(!checkElevenDigit()){
        document.getElementById("submit-button").setAttribute("disabled","true");
        return false;
    }
    else if(!validateCSEmails){
        document.getElementById("submit-button").setAttribute("disabled","true");
        return false;
    }
    else if(!addingPassword() || !comparePassword()){
        document.getElementById("submit-button").setAttribute("disabled","true");
        return false;
    }
    else{
        document.getElementById("submit-button").removeAttribute("disabled");
    }
}

function validateAge(){
    const age = document.getElementById('age').value;
    if(age == ''){
        return false;
    }
    else if(age < 18 || age > 150){
        document.getElementById('age').style.backgroundColor = 'rgb(247,181,181)';
        document.getElementById('age-warn').innerText = 'Age must be >= 18 and <=150';
        return false;
    }
    else{
        document.getElementById('age').style.backgroundColor = 'rgb(195, 236, 168)';
        document.getElementById('age-warn').innerText = '';
        return true;
    }
}

function validatePassword(pwd1){
    if(pwd1.length < 8){
        return false;
    }
    else{
        if(/[a-z]/.test(pwd1) && /[0-9]/.test(pwd1) && /[A-Z]/.test(pwd1)){
            return true;
        }
        return false;

    }
}

function addingPassword(){
    const pswd = document.getElementById('pwd').value;
    if(pswd.toString().length == 0){
        return false;
    }
    else if(!validatePassword(pswd)){
        document.getElementById('pwd').style.backgroundColor = 'rgb(247,181,181)';
        document.getElementById('pwd-notifi').innerHTML = 'Password Requirements: 1 numeric & 1 lowercase & uppercase alphabet at least. Min Length = 8'
        document.getElementById('pwd-notifi').style.color ='red';
        return false;
    }
    else{
        document.getElementById('pwd').style.backgroundColor = 'rgb(195, 236, 168)';
        document.getElementById('pwd-notifi').innerHTML = "";
        return true;
    }
}


function checkElevenDigit(){
    const num = document.getElementById('contact').value;
    if(num.toString().length == 0){
        return false;
    }
    else if (num.toString().length == 11){
        document.getElementById('contact').style.backgroundColor = 'rgb(195, 236, 168)';
        document.getElementById('contact-warn').innerText = '';
        return true;
    }
    else{
        document.getElementById('contact').style.backgroundColor = 'rgb(247,181,181)';
        document.getElementById('contact-warn').innerText = 'Must contain only 11 digits';
        return false;
    }
}

function validateCSEmails(){
    const text = document.getElementById('notify-email').value;
    if(text.toString().length == 0){
        return false;
    }
    const emails = text.split(',');
    var valid = false;
    for (let i of emails){
        if(!/^[\s\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(i)){
            document.getElementById('notify-email').style.backgroundColor = 'rgb(247,181,181)';
            valid = false;
        }
        else{
            document.getElementById('notify-email').style.backgroundColor = 'rgb(195, 236, 168)';
            valid = true;
        }
    }

    return valid;

}

function validEmail(){
    const email = document.getElementById('email').value;
    if(!/^[\s\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
        document.getElementById('email').style.backgroundColor = 'rgb(247,181,181)';
    }
    else{
        document.getElementById('email').style.backgroundColor = 'rgb(195, 236, 168)';
    }
}


function comparePassword(){
    const pswd = document.getElementById('c-pwd').value;
    const pswd1 = document.getElementById('pwd').value;
    if(pswd1 != pswd){
        document.getElementById('c-pwd').style.backgroundColor = 'rgb(247,181,181)';
        document.getElementById('pwdconfirm-notifi').innerHTML = "Both password doesn't match";
        document.getElementById('pwdconfirm-notifi').style.color ='red';
        return false;
    }
    else{
        document.getElementById('c-pwd').style.backgroundColor = 'rgb(195, 236, 168)';
        document.getElementById('pwd').style.backgroundColor = 'rgb(195, 236, 168)';
        document.getElementById('pwdconfirm-notifi').innerHTML = "";
        return true;
        
    }
}