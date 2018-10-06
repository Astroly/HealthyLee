function saveData(){
    var name =document.getElementById('name');
    var lastname =document.getElementById('lastname');
    var email =document.getElementById('emailRegis');
    var password =document.getElementById('passwordRegis');
    var confirmPassword =document.getElementById('confirmPasswordRegis');
    
    
    insertData(name.value,lastname.value,email.value,password.value,confirmPassword.value)
    }
    
    window.onload=function(){
        showData();
     
    }
    function showData(){
        var firebaseRef = firebase.database().ref("BO");
        firebaseRef.once('value').then(function(dataSnapshot){
        console.log(dataSnapshot.val())
        
        });
    }
    function insertData(name,lastname,email,password,confirmPassword){
            var firebaseRef =firebase.database().ref("BO");
            firebaseRef.push({
                firstName:name,
                lastName:lastname,
                email:email,
                password:password,
                confirmPassword:confirmPassword,
               
    
               
            });
            console.log("Insert Success");
            signUpAuth();
            alert('Success back to Login');
            window.location.href="login.html"; 
        }
       function signUpAuth(){
            var email =document.getElementById('emailRegis').value;
            var password =document.getElementById('passwordRegis').value;
          
            firebase.auth().createUserWithEmailAndPassword(email,password).catch(function(error){
                var errorCode =error.code;
                var errorMessage =error.message;
                if(errorCode === 'auth/weak-password'){
                    alert('The password is too week');
                }else{
                    alert(errorMessage);
                }
                console.log(error);
            });
         }

     