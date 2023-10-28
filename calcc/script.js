document.querySelector('#btn_sub').addEventListener('click',() =>{
	let first_gpa=document.querySelector('#first-gpa').value;
	let first_gpa_per=(first_gpa /10);
	let first_gpa_per_result=Math.trunc(first_gpa_per+1);
	let two_gpa=document.querySelector("#two-gpa").value;
	let two_gpa_per=(two_gpa / 10);
	let two_gpa_per_result=Math.trunc(two_gpa_per+1);
	let three_gpa=document.querySelector("#three-gpa").value;
	let three_gpa_per=(three_gpa / 10);
	let three_gpa_per_result=Math.trunc(three_gpa_per+1);
	let four_gpa=document.querySelector("#four-gpa").value;
	let four_gpa_per=(four_gpa / 10);
	let four_gpa_per_result=Math.trunc(four_gpa_per+1);
	let five_gpa=document.querySelector("#five-gpa").value;
	let five_gpa_per=(five_gpa / 10);
	let five_gpa_per_result=Math.trunc(five_gpa_per+1);
	let six_gpa=document.querySelector("#six-gpa").value;
	let six_gpa_per=(six_gpa / 10);
	let six_gpa_per_result=Math.trunc(six_gpa_per+1);
	let seven_gpa=document.querySelector("#seven-gpa").value;
	let seven_gpa_per=(seven_gpa / 10);
	let seven_gpa_per_result=Math.trunc(seven_gpa_per+1);
	let eight_gpa=document.querySelector("#eight-gpa").value;
	let eight_gpa_per=(eight_gpa / 10);
	let eight_gpa_per_result=Math.trunc(eight_gpa_per+1);
let total =
parseFloat(first_gpa_per_result*4)+
parseFloat(two_gpa_per_result*4)+
parseFloat(three_gpa_per_result*3)+
parseFloat(four_gpa_per_result*3)+
parseFloat(five_gpa_per_result*3)+
parseFloat(six_gpa_per_result)+
parseFloat(seven_gpa_per_result)+
parseFloat(eight_gpa_per_result);
if(total==20)
{
	total=0;
}	
let total_sgpa=total/20;
let total_sgpa1=total_sgpa.toPrecision(3);
document.querySelector('.cgpa_output h1').innerHTML=`TOTAL SGPA = ${total_sgpa1}`
})

document.querySelector('#btn_re').addEventListener('click',() =>{
  document.querySelector('.cgpa_output h1').innerHTML=`TOTAL SGPA =`
  document.querySelector('#first-gpa').value='';
  document.querySelector('#two-gpa').value='';
  document.querySelector('#three-gpa').value='';
  document.querySelector('#four-gpa').value='';
  document.querySelector('#five-gpa').value='';
  document.querySelector('#six-gpa').value='';
  document.querySelector('#seven-gpa').value='';
  document.querySelector('#eight-gpa').value='';
})

document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeypress = function (event) {
  event = (event || window.event);
  if (event.keyCode == 123) {
    return false;
  }
}
document.onmousedown = function (event) {
  event = (event || window.event);
  if (event.keyCode == 123) {
    return false;
  }
}
document.onkeydown = function (event) {
  event = (event || window.event);
  if (event.keyCode == 123) {
    return false;
  }
}


jQuery(document).ready(function($){
  $(document).keydown(function(event) {
    var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();

    if (event.ctrlKey && (pressedKey == "c" || pressedKey == "u")) {
      alert('Sorry, This Functionality Has Been Disabled!');
      
      return false;
    }
  });
});
