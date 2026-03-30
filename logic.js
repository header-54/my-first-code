// showlogin

function slogin(){
    document.getElementById("login").style.display="block";
    document.getElementById("signup").style.display="none";
}


// showsignup

function ssignup(){
    document.getElementById("signup").style.display="block";
    document.getElementById("login").style.display="none";
}


// signup

function signup(){
     let username = document.getElementById("signupUser").value;
     let email = document.getElementById("signupEmail").value;
     let password = document.getElementById("signupPass").value;
     if(password === confirm)
        localStorage.setItem("username",username);
}


// login

function login(){
    let username = document.getElementById("loginuser").value;
    let password = document.getElementById("loginpass").value;
    let storeduser = localStorage.getItem("username");
    if(username === storeduser && password === storedpass)
        window.location.href="dasboard.html";
}

