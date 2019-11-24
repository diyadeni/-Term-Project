//function for enlarging text on the "Get TO Know Me" page
function myFunction() {
    document.getElementById("info").style.fontSize = "xx-large";
  }  

//function for alerting message on the "Contact" page 
function thankYou(){
    var object;
    object = document.getElementById("firstName");  
    object1 = document.getElementById("lastName"); 
    alert("Thank you " + object.value + " for visting my website!" );
}