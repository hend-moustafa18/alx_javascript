// Write a function named welcomeMessage
function welcomeMessage(fullName) {
    // Closure for an alert displaying Welcome <fullName>
        alert('Welcome ' + fullName);
}

// Create three variables with different names, each containing a call to welcomeMessage
var guillaume = welcomeMessage('Guillaume');
var alex = welcomeMessage('Alex');
var fred = welcomeMessage('Fred');
