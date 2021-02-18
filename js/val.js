var form1=document.getElementById("form1");

function val(callback){
    var uname=document.getElementById("uname").value;
    var pass=document.getElementById("pass").value; 
if(uname=="admin" && pass=="12345"){ 

 
        callback();
}
else{
    alert("invalid password or username");
   
}
}
function redirect(){
    // window.location.href = "welcome.html";
    form1.setAttribute("action","welcome.html");
}




