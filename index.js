
var regex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

function check(){
	var formEmail = document.getElementById("formEmail");
	var emailCheck = document.getElementById("emailCheck");
	
	if(formEmail.value==""){
		changeStyle(emailCheck,"Whoops! It looks like you forgot to add your email");

	}else if(!regex.test(formEmail.value)){
		changeStyle(emailCheck,"Please provide a valid email address");
		formEmail.value="";
	}
	else{
		changeStyle(emailCheck,"Thank you!");
		emailCheck.style.color="hsl(0, 0%, 59%)";
		formEmail.style.borderColor="hsl(0, 0%, 59%)";
	}
}
// id = emailCheck
function changeStyle(id,info){
	id.style.color = "hsl(354, 100%, 66%)";
	id.innerHTML=info;
	formEmail.style.borderColor="hsl(354, 100%, 66%)";
	formEmail.setAttribute("placeholder","example@email.com");
}
