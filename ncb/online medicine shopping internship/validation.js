let email=document.getElementById("email").value;
let password=document.getElementById("password").value;
console.log(email)
function validation(){
     let emailvalidate=false;
     let passwordvalidate=false;
    if(email!=""){
        emailvalidate=true;
    }
    else{
         emailvalidate=false;
    }
    if(password!=""){
        passwordvalidate=true;
    }
    else{
        passwordvalidate=false;
    }
    if( passwordvalidate && emailvalidate){
        return true
    }
    else{
        return false
    }

}