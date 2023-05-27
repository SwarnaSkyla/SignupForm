const user=JSON.parse(localStorage.getItem('user')) || {};


function displayUser(){
    const userNmae=document.getElementById('fullName');
    const userEmail=document.getElementById('email');
    const password=document.getElementById('password');



    userNmae.innerHTML=`Full name: ${user.name}`;
    userEmail.innerHTML=`Email : ${user.email}`;
    password.innerHTML=`Password : ${user.password}`;
}


displayUser();


//Log out


const logOut=document.getElementById('log-out');

logOut.addEventListener('click',()=>{
    localStorage.removeItem('user');
    document.getElementById('successMessage').style.display='block';
    setTimeout(()=>{
        window.location.href="../index.html";
    },1000);
});



//signup


const signUp=document.getElementById('signUp');

signUp.addEventListener('click',()=>{
    if(JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).accessToken!=""){
        window.location.href="../profile/profile.html";
    }
    else{
        window.location.href="../index.html";
    }
});