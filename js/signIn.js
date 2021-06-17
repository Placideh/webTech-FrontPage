let id=document.querySelector('#inputText');
let email=document.querySelector('#inputMail');
let password=document.querySelector('#inputPass');
let confirmPass=document.querySelector('#inputConfirmPass');
let btnSubmit=document.querySelector('.btnSubmit');

let idValue=id.addEventListener('keyup',e=>{e.preventDefault(); idValue=e.target.value });
let emailValue=email.addEventListener('keyup',e=>{e.preventDefault(); emailValue=e.target.value });
let passwordValue=password.addEventListener('keyup',e=>{e.preventDefault(); passwordValue=e.target.value });
let confirmpasswordValue=confirmPass.addEventListener('keyup',e=>{e.preventDefault(); confirmpasswordValue=e.target.value });
btnSubmit.addEventListener('click',getData);
function getData(e) {
  e.preventDefault();
  if(idValue===" " || emailValue===" "||passwordValue===" "||confirmpasswordValue===" "){

    alert('all field must be completed');
    return;
  }

  if(idValue==="Placideh"&& emailValue==="placide@gmail.com"&&passwordValue==="123"&&confirmpasswordValue===passwordValue){
    alert('logged in ');
    
  }else {
    alert("invalid info!");
  }

}
