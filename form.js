function validateForm() {
    var name1 = document.getElementsByClassName("fullname").value;
    var email = document.getElementsByClassName('email').value;
    var phone1 = document.getElementsByClassName('number').value;

    if (name1 == "") {
        window.alert("Please fill the username field");
        return false;
    }
    if ((name1.length <= 2) || (name1.length > 20)) {
        window.alert("**user length must be between 2 and 20");
        return false;
    }
    if (!isNaN(name1)) {
        window.alert("**only characters are allowed");
        return false;
    }
    
    if (email == "") {
        window.alert("Please enter email");
        return false;
    }
    if (email.indexOf('@') <= 0) {
        window.alert("** @ invalid position");
        return false;
    }
    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        window.alert("** . invalid position");
        return false;
    }
    if (phone1 == "") {
        window.alert("Please enter mobile number");
        return false;
    }
    if (phone1.length != 10) {
        window.alert("**mobile number must be 10 digits");
        return false;
    }
    if (isNaN(phone1)) {
        window.alert("**User must enter digits;not a character");
        return false;
    }

}