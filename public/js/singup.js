   $(function () {
    
        //$('#alert').hide();
    
        $('#singup').click(function () {
    
            var formdata = {
                ID_dealer:1,
                name_dealer: $('#name').val(),
                lastname_dealer: $('#lastname').val(),
                email_dealer: $('#emailRegis').val(),
                password: $('#passwordRegis').val(),
                confirmPassword: $('#confirmPasswordRegis').val()
          
            }
    
            console.log(formdata);
    
    
            $(function () {
    
                $.ajax({
    
                    //CP2. Complete Ajax Code to INSERT new pin data 
                    url: 'https://healthyleedb.firebaseio.com/dealer',
                    type: 'POST',
                    data: formdata
                }).then(function (data) {
    
                    //$('#alert').show();
                    $('#ID_dealer').val('');
                    $('#name_dealer').val('');
                    $('#lastname_dealer').val('');
                    $('#emailRegis').val('');
                    $('#passwordRegis').val('');
                    $('#confirmPasswordRegis').val('');
                    console.log('Added');
    
                });
            });
        });
    });