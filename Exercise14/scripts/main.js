var submit = document.getElementById("btnSubmit")
var reset = document.getElementById("btnReset")
var message = document.getElementById("message")
var errorMsg = []


function invalidInput(elem) {
    elem.classList.add('invalid')
    switch(elem.type) {
        default:
            errorMsg.push(`*${elem.placeholder} Invalid`)
            break;
        case 'select-one':
            errorMsg.push(`*No Time Zone Selected`)
            break;
        case 'checkbox':
            errorMsg.push('*Terms and Conditions not Accepted')
            break;
    }
}


function resetInputs(elem) {
    elem.value = ''
    elem.classList.remove('invalid')
    switch(elem.type) {
        case 'select-one':
            elem.value = 'none'
            break;
        case 'checkbox':
            elem.checked = false
            break;
    }
    errorMsg = []
    message.innerHTML = ''
}


function errorOutput(msg, errNum = -1) {
    var errorList = errorMsg.join('<br>')
    if(errNum === 0) {
        msg.innerHTML = "Thank you for filling out our form"
        msg.style.color = '#000'
    } else {
        msg.innerHTML = errorList
        msg.style.color = '#F00'
    }
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

    errorMsg.length == 0 ? errorOutput(message, 0) : errorOutput(message)
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




