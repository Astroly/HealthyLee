function signIn(){
    var email =document.getElementById('email').value;
    var password =document.getElementById('password').value;
  
    firebase.auth().signInWithEmailAndPassword(email,password).catch(function(error){
        var errorCode =error.code;
        var errorMessage =error.message;
        if(errorCode === 'auth/worng-password'){
            alert('Worng E-mail or Password');
        }else{
            alert(errorMessage);
        }
        console.log(error);
    });
    alert('loged In')


 }