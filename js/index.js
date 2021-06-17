let signInPage=document.querySelector('.btnHeader');
let myForm=document.querySelector('.my-form');
let btnShowcase=document.querySelector('.btnShowcase');

signInPage.addEventListener('click',getSignIn);

function getSignIn(e) {
  let datas='';
   datas+=`
  <form action="../pages/register.html">
  <div>
    <label for="username">UserName</label>
    <input type="text" placeholder="Placide hakiz">
  </div>
  <div>
    <label for="email">Email</label>
    <input type="email" placeholder="placideh@gmail.com">
  </div>
  <div>
    <label for="password">Password</label>
    <input type="password" placeholder="***Burn3rb0!***">
  </div>
  <div>
    <label for="password">Confirm Password</label>
    <input type="password"placeholder="***Burn3rb0!***" >
  </div>
  <input class="btnSubmit"type="submit" name="SignIn" value="SignIn">
  </form>
    `
myForm.innerHTML=datas;

}
btnShowcase.addEventListener('click',getDetails);
function getDetails(e){
  e.preventDefault();
  let dTag=document.querySelector('.detailTag');
  let detail='';
  detail+=`
    <p>
      This Company is Reliable and We are Customer Care Driven , and Our Team are certified on
      Internation level .so Your are really IN Good Hands!.
    </p>
  `
  dTag.innerHTML=detail;
}
