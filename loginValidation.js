 // Login Form Validation and Redirection
 document.getElementById('loginForm').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var messageSuccess = document.getElementById('messageSuccess');

    var isValid = true;

    // Validate email
    if (!isValidEmail(email)) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Validate password
    if (password.trim() === '') {
        passwordError.textContent = 'Password is required';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }else if(isValid){
        event.preventDefault();
        messageSuccess.textContent = "Submitted Sucessfully"
    }
});



// Function to validate email format using regex
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}