var $ = function(id){
   return document.getElementById(id);
}
var reg = function(){
  var firstname = $("firstname").value;
  var lastname = $("lastname").value;
  var resadd = $("resadd").value;
  var email = $("email").value;
  var phoneno = $("phoneno").value;
  var user = $("user").value;
  var pass = $("pass").value;
  var cpass = $("cpass").value;
  var validated = true;
  var atIndex = email.indexOf("@");
  if(firstname == "")
  {
    //alert("Required field.");
    $("empty_firstname").textContent = "Required field.";
    validated = false;
  }
  else { $("empty_firstname").textContent = ""; }

  if(lastname == "")
  {
    $("empty_lastname").textContent = "Required field.";
    validated = false;
  }
  else { $("empty_lastname").textContent = ""; }

  if(resadd == "")
  {
    $("empty_resadd").textContent = "Required field.";
    validated = false;
  }
  else { $("empty_resadd").textContent = ""; }

  if(email == "")
  {
    $("empty_email").textContent = "Required field.";
    validated = false;
  }
  else if(atIndex == -1)
  {
    $("empty_email").textContent = "Invalid email.";
     validated = false;
  }
  else { $("empty_email").textContent = ""; }
  
  if(phoneno == "")
  {
    $("empty_phoneno").textContent = "Required field.";
    validated = false;
  }
  else { $("empty_phoneno").textContent = ""; }

  if(user == "")
  {
    $("empty_user").textContent = "Required field.";
    validated = false;
  }
  else { $("empty_user").textContent = ""; }

  if(pass == "")
  {
     $("empty_pass").textContent = "Required field.";
     validated = false;
  }
  else { $("empty_pass").textContent = ""; }

  if(cpass == "")
  {
    $("empty_cpass").textContent = "Required field.";
    validated = false;
  }
  else { $("empty_cpass").textContent = ""; }

  if(pass !== cpass)
  {
    $("empty_cpass").textContent = "Password and confirm password mismatch";
    validated = false;
  }
  else { $("empty_cpass").textContent = ""; }

  if(validated)
  {
    $("regform").submit();
	alert("You have successfully registered");
  }


  //return validated;
}
window.onload = function() {
  $("register").onclick = reg;
  $("firstname").focus();
}