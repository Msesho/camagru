let insert = document.getElementsByTagName('label')[1];

function formValidationSignUp() {
    let login = document.forms["create-form"]["login"].value.trim();
    let email = document.forms["create-form"]["email"].value;
    let password = document.forms["create-form"]["password"].value;
    let repeatedPassword = document.forms["create-form"]["repeat_password"].value;

    let filterEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let filterPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    let compare = password.localeCompare(repeatedPassword);

    let errorDiv = document.getElementsByClassName("error_div")[0];
    let div = document.createElement("div");

    if (errorDiv) {
        errorDiv.parentElement.removeChild(errorDiv);
    }
    if (login.length < 8 || login.length > 16) {
        div.className = "error_div";
        div.innerHTML = "Login must be between 8 and 16 symbols";
        insert.insertBefore(div, insert.firstChild);
        return (false);
    }
    if (!filterEmail.test(email)) {
        div.className = "error_div";
        div.innerHTML = "Please provide a valid email address";
        insert.insertBefore(div, insert.firstChild);
        return (false);
    }
    if (!filterPassword.test(password)) {
        div.className = "error_div";
        div.innerHTML = "Password must include minimum 8 symbols at least 1 uppercase alphabet, 1 lowercase alphabet and 1 number";
        insert.insertBefore(div, insert.firstChild);
        return (false);
    }
    if (compare) {
        document.forms["create-form"]["password"].style = "background: #D78A8A;";
        document.forms["create-form"]["repeat_password"].style = "background: #D78A8A;";

        div.className = "error_div";
        div.innerHTML = "Please provide a valid password";
        insert.insertBefore(div, insert.firstChild);
        return (false);
    }
    return (true);
}
