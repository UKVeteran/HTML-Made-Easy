function send()
{
  var address = document.getElementById("adr").value;
  var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
  if( ! pattern.test(address)) alert("Invalid Email Address");
  else document.getElementById("form1").submit();  
}
