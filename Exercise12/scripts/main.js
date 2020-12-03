function update() {
    /* ===================
        Your code starts here
    =====================*/
	
    //Create new array.
    messages = []
    var errorList = getElm('error-list')
    errorList.innerHTML = "";

    //If first name is empty. Add it to the array
    firstName = getValue('firstName')
    if(firstName.length == 0){
        messages.push("First Name is requred")
    }

    //If last name is empty. Add it to the array
    lastName = getValue('lastName')
    if(lastName.length == 0){
        messages.push("Last Name is requred")
    }

    //Email is empty. Add it to the array
    emailAddress = getValue('emailAddress')
    if(emailAddress.length == 0){
        messages.push("Email is requred")
    }

    //Loop through array
    for (i = 0; i < messages.length; i++) {
        errorList.innerHTML += `${messages[i]}<br>`
    }


    //Create javascript object for the user
    user = {firstname: firstName, 
            lastname: lastName, 
            email: emailAddress, 
            fullname: function() {
                return this.firstname + " " + this.lastname;
        }
    };

    //log the user object to the console
    console.log(user)


    //Check to see if everything is valid
    if(messages.length == 0) {

    //Create string for today's date. Remember, if you hard code this, it will be invalid tomorrow.
        var submittedDate = new Date()

    //Make the alert box.
        alert(`Submitted on ${submittedDate.toDateString()}`)
    }

    /* ===================
        Your code ends here
    =====================*/


}



var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}
