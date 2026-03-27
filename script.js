function checkPassword() {
    
    let password = document.getElementById("password").value;
    //code some code taken from Mr. Ruz
    const digits=['0','1','2','3','4','5','6','7','8','9'];
    const specials=['!','@','#','$','%','^','&','*'];
    const upper=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    
    let containDigits=false;
    let containSpecials=false;
    let containUpper=false;

    for (let i = 0; i < password.length; i++) {
        char=password[i];
        if (digits.indexOf(char)>-1){
            containDigits=true;
        }

        if (specials.indexOf(char)>-1){
            containSpecials=true;
        }
        if (upper.indexOf(char)>-1){
            containUpper=true;
        }
        
    }

    if (password.length<8) {
        document.getElementById("result").innerText = "Password should be at least 8 characters long!";
        return;
        }
   else if (containDigits==false || containSpecials==false || containUpper==false) {
        document.getElementById("result").innerText = "Password should contain at least 1 digit, 1 special character !@#$%^&*), and one upper case letter.";
        return;  
        }
    else {
        document.getElementById("result").innerText = "Password is strong enough.";
        return;
    }
}

