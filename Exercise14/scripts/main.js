var submit = document.getElementById("btnSubmit")
var reset = document.getElementById("btnReset")
var message = document.getElementById("message")
var errorMsg = []


function invalidInput(elem) {
    switch(elem.type) {
        default:
            elem.classList.add('invalid')
            errorMsg.push(`${elem.placeholder} Invalid`)
            break;
        case 'select-one':
            elem.classList.add('invalid')
            errorMsg.push(`No Time Zone Selected`)
            break;
        case 'checkbox':
            elem.classList.add('invalid')
            errorMsg.push('Terms and Conditions not Accepted')
            break;
    }
}


function resetInputs(elem) {
    elem.value = ''
    if (elem.type == 'checkbox') {
        elem.checked == false
        elem.classList.remove('invalid')
    } else {
        elem.classList.remove('invalid')
    }
    errorMsg = []
    message.innerHTML = ''
}


function errorOutput(msg) {
    var errorList = errorMsg.join('<br>')
    msg.innerHTML = errorList
}


submit.addEventListener('click', function() {
    var name = document.getElementById("userName")
    var email = document.getElementById("email")
    var password = document.getElementById("pass")
    var select = document.getElementById("timeZone")
    var check = document.getElementById("accept")

    var rEmail = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)
    var output = rEmail.test(email.value)

    errorMsg = []
    name.value != '' ? name.classList.remove('invalid') : invalidInput(name)
    output == true ? email.classList.remove('invalid') : invalidInput(email)
    password.value != '' ? password.classList.remove('invalid') : invalidInput(password)
    select.value != 'none' ? select.classList.remove('invalid') : invalidInput(select)
    check.checked ? check.classList.remove('invalid') : invalidInput(check)

    errorMsg.length == 0 ? message.innerHTML = "Thank you for filling out our form" : errorOutput(message)
})


reset.addEventListener('click', function() {
    var name = document.getElementById("userName")
    var email = document.getElementById("email")
    var password = document.getElementById("pass")
    var select = document.getElementById("timeZone")
    var check = document.getElementById("accept")
    elements = [name, email, password, select, check]

    elements.forEach(function(element) {
        resetInputs(element);
    })
})




