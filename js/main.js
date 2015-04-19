jQuery(document).ready(function($){
	if( $('.floating-labels').length > 0 ) floatLabels();

	function floatLabels() {
		var inputFields = $('.floating-labels .cd-label').next();
		inputFields.each(function(){
			var singleInput = $(this);
			//check if user is filling one of the form fields 
			checkVal(singleInput);
			singleInput.on('change keyup', function(){
				checkVal(singleInput);	
			});
		});
	}

	function checkVal(inputField) {
		( inputField.val() == '' ) ? inputField.prev('.cd-label').removeClass('float') : inputField.prev('.cd-label').addClass('float');
	}
});

// Validate 

// function validateForm()
// {
// 	console.log("hey");

// 	var name = document.getElementsByName('cd-name');
// 	var email = document.getElementsByName('cd-email');
// 	var textarea = document.getElementsByName('cd-textarea');
// 	var err = document.getElementsByClassName("error-message");
// 	err.innerHTML="<p>Please enter a valid email address</p>";
// 	name.innerHTML="<p>Please enter a valid email address</p>";
// 	console.log('he1');
// 	if (name==null || name==""){
// 	 	err.innerHTML="<p>Please enter a valid email address</p>";
// 	 	name.className = name.className + " error";
// 	 	console.log('jeste');
// 	 }

// } 
// function validateEmail(email) {
//     var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
//     return re.test(email);
// }