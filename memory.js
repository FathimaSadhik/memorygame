const login=()=>
    {
        const username=exampleInputEmail1.value;
        const password=exampleInputPassword1.value;
        if(username && password){
    // store username & passwrd permananetly
    localStorage.setItem("username",username)
    localStorage.setItem("password",password)
    // navigate to homsec
    window.location="newgame.html"
        }
        else{
            alert("please fill the form completely!!")
        }
    }