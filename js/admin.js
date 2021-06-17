let btnShowcase=document.querySelector('.btnShowcase');
let users=[
  {
    carPlateNo:'RAA234T',
    ownerName:'Billy',
    email:'bill@yahoo.com',
    password:'12345',
    status:'parkedIn',
    bookTime:'21.07.2021 02:23 PM',
    location:'MakuzaBlock',
    startTime:'02:45 PM',
    endTime:'04:12 PM',
    amount:'400'

  },
  {
    carPlateNo:'RAA234T',
    ownerName:'Billy',
    email:'bill@yahoo.com',
    password:'12345',
    status:'parkedIn',
    bookTime:'21.07.2021 02:23 PM',
    location:'MakuzaBlock',
    startTime:'02:45 PM',
    endTime:'04:12 PM',
    amount:'400'

  },
  {
    carPlateNo:'RAA234T',
    ownerName:'Billy',
    email:'bill@yahoo.com',
    password:'12345',
    status:'parkedIn',
    bookTime:'21.07.2021 02:23 PM',
    location:'MakuzaBlock',
    startTime:'02:45 PM',
    endTime:'04:12 PM',
    amount:'400'
  },
  {
    carPlateNo:'RAA234T',
    ownerName:'Billy',
    email:'bill@yahoo.com',
    password:'12345',
    status:'parkedIn',
    bookTime:'21.07.2021 02:23 PM',
    location:'MakuzaBlock',
    startTime:'02:45 PM',
    endTime:'04:12 PM',
    amount:'400'
  },
  {
    carPlateNo:'RAA234T',
    ownerName:'Billy',
    email:'bill@yahoo.com',
    password:'12345',
    status:'parkedIn',
    bookTime:'21.07.2021 02:23 PM',
    location:'MakuzaBlock',
    startTime:'02:45 PM',
    endTime:'04:12 PM',
    amount:'400'
  }

]
display(users);
function display(array) {

			let rowData=document.querySelector('#row-data');
			let datas='';
			let carPlateNo='';
			let ownerName='';
			let email='';
			let password='';
			let status='';
			let bookTime='';
      let location='';
			let startTime='';
			let endTime='';
			let amount='';

			for(let d of array){
				carPlateNo=d.carPlateNo;
				ownerName=d.ownerName;
				email=d.email;
				password=d.password;
				status=d.status;
				bookTime=d.bookTime;
        location=d.location;
				startTime=d.startTime;
				endTime=d.endTime;
				amount=d.amount;
				datas+=	`

					<tr>
					<td>${carPlateNo}</td>
					<td>${ownerName}</td>
					<td>${email}</td>
					<td>${password}</td>
					<td>${status}</td>
					<td>${bookTime}</td>
					<td>${location}</td>
					<td>${startTime}</td>
					<td>${endTime}</td>
					<td>${amount}</td>
          <button type="button" class="btnTable1">edit</button>
          <button type="button" class="btnTable2">X</button>
					</tr>
				`
			}
			rowData.innerHTML=datas;
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
