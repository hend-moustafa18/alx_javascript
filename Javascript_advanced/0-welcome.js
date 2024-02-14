function welcome(firstName, lastName) {
    // Concatenate first name and last name with a space in between
    var fullName = firstName + ' ' + lastName;

    // Inner function to display the welcome message
    function displayFullName() {
        alert('Welcome ' + fullName + '!');
    }

    // Call the inner function to display the welcome message
    displayFullName();
}

// Example usage:
welcome('John', 'Doe');


