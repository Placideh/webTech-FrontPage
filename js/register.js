let parkcar=document.querySelector('.parkCar');
let btnShowcase=document.querySelector('.btnShowcase');
parkcar.addEventListener('submit',e=>{e.preventDefault();});
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
