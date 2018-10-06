    function onSignInGoogleButtonClick(){
      var Gprovider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(Gprovider).then(function(result) {
        console.log(result);
        //Do something when login complete
        nextPage(); // window.location.href="BOsingUpAgreement.html";
      
      }).catch(function(error) {
        //Do something when error
      });
    }
    function nextPage(){
       window.location.href="BOsingUpAgreement.html";
    }
   