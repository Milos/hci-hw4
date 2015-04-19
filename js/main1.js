function validateForm()
{
	var name = document.getElementById('cd-name');
	var email = document.getElementById('cd-email');
	var textarea = document.getElementById('cd-textarea');
	var err = document.getElementById("message");
	err.innerHTML=""; // reset
	// name.innerHTML="<p>Please enter a valid email address</p>";
	//console.log(email);
	console.log(name.value.length);
	if (name.value.length == 0){
	 	name.className = name.className + " error";
	 	err.innerHTML="<p>Please enter a valid name</p>";
	 } else {
	 	name.className = "user";
	 }
	if (email.value.length == 0){
	 	email.className = email.className + " error";
	 	err.innerHTML= err.innerHTML + "<p>Please enter a valid email address</p>";
	 } else {
	 	name.className = "email";
	 	} 	 
	if (textarea.value.length <= 60){
	 	textarea.className = textarea.className + " error";
	 	err.innerHTML= err.innerHTML + "<p>Please write at least 50 characters</p>";
	 } else {
	 	name.className = "message"; 	 
	 }	 
} 
function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}
