var emailField = document.getElementById('emailInput');
var passwordField = document.getElementById('passwordInput');
var form = document.getElementById('signin-form1');

var x = "";
var y = "";


form.addEventListener('submit',function(){

    if(!emailField.value || !passwordField.value){
        alert("Please enter values in the fields");
    }else{
        var x = emailField.value;
        var y = passwordField.value;
        alert("message" + x);
      
    }
   
});
