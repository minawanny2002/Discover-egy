function addData(){
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;


localStorage.useremail = email;
localStorage.userpass = pass;
}