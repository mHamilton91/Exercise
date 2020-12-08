/*
    Exercise 27 
*/
$(document).ready(function(){
    /*=======================
        Regular Expressions 
     =======================*/



    $('#btnvalidate').click(function(){
        /*=======================
        RegExp functionality 
        =======================*/
        var rEmail = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)
        var email = document.getElementById('email')
        var output = rEmail.test(email.value)

        output !== true ? email.classList.add('is-invalid') : email.classList.remove('is-invalid')
        // if (output !== true) {
        //     email.classList.add('is-invalid')
        // }

        var rNum = new RegExp(/[a-z]/gi)
        var numeric = document.getElementById('numeric').value
        output = numeric.replace(rNum, '')
        console.log(output)
    });



     /*=======================
       Array Methods 
     =======================*/
    var numbers = [5, 10, 75, 32, 56, 2, 81, 12]

    var newNumbers = numbers.map(function(element, index) {
        return Math.pow(element, 2)
    });

    console.log(newNumbers)

});