function checkData(){
    var enteremail = document.getElementById('email').value;
    var enterpass = document.getElementById('pass').value;
      

    var getemail = localStorage.getItem('useremail');
    var getpass = localStorage.getItem('userpass');
    if(enteremail == getemail)
    {
        if(enterpass == getpass)
        {
            alert("login successful");
        }
        else
        {
            alert("wrong password");
        }
    }
    else
    {
        alert("invalid data");
    }

}