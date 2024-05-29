document.getElementById('leaveMessageForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var subjectError = document.getElementById('subjectError');
    var messageError = document.getElementById('messageError');
    var messageSuccess = document.getElementById('messageSuccess');
    var isValid = true;

    // Validate name
    if (name.trim() === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Validate email
    if (email.trim() === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Validate subject
    if (subject.trim() === '') {
        subjectError.textContent = 'Subject is required';
        isValid = false;
    } else {
        subjectError.textContent = '';
    }

    // Validate message
    if (message.trim() === '') {
        messageError.textContent = 'Message is required';
        isValid = false;
    } else {
        messageError.textContent = '';
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