/*
Maintenance request system for apartment management

Features:
    Tenants can:
        Submit a maintenance request (describe the issue, provide contact info).
        View their submitted requests.
    Managers can:
        View all requests.
        Update the status of a request (Pending, In Progress, Completed).
*/
// A real app would be a website integrated with a database to store the data,
// and it would have html forms for taking user's input. But for the code expamples
// to get the user's input I will use the readline-sync learned from Values, Data Types, and Operations module
const readline = require('readline-sync');

// submit a new maintenance request
function submitRequest() {
    // Values, Data Types, and Operations module: all variables names are meaningful and in camelCase
    console.log("\n~ Submit a request ~");
    tenantName = readline.question("Enter your name: ");
    apartmentNum = readline.questionInt("Enter your apartment number: ");
    issue = readline.question("Describe the issue: ");

    const request = {
        id: requests.length + 1,
        tenantName: tenantName,
        apt: apartmentNum,
        issue: issue,
        status: "new"
    };
    // A real app would save the new request in a DB

    // Using Arrays module: adding a new element to an array
    requests.push(request);
    console.log("Request submitted successfully!\n");
}

// update request status
function updateRequest() {
    console.log("\n~ Update request status ~");
    const requestId = readline.questionInt("Enter request ID: ");
    // Using Arrays module: using Array methods
    let request = requests.find(req => req.id === requestId); 
    // Control Structures and Logic module: using if statement
    if (!request) {
        console.log("Request not found.\n");
        return;
    }
    const newStatus = readline.question("Enter new status (Pending/In progress/Completed): ").toLowerCase();
    request.status = newStatus;
    // A real app would save the new request status in a DB
    console.log("Status updated!\n");
}

// display all requests
function viewRequests() {
    console.log("\n~ View all requests ~");
    if (requests.length == 0) {
        console.log("No requests found.\n");
        return;
    }
    // Working with Loops module: using a for loop to iterate through an array of objects
    for (req of requests) {
        console.log(`ID: ${req.id} | Name: ${req.tenantName} | Apt: ${req.apt} | Issue: ${req.issue} | Status: ${req.status}`);
    }
    console.log();
}

// Skill from the modules Building Arrays and Using Arrays
// In a real app we would load the requests from a DB but for now it's just an empty array
let requests = [];

// Working with Loops module:
// The while loop to create a text-based interface for my app prototype
while (true) {
    // Stringing characters together module: 
    // Printing menue options
    console.log("~~ Maintenance Request System ~~");
    console.log("1.\tSubmit a request");
    console.log("2.\tView requests");
    console.log("3.\tUpdate request status");
    console.log("4.\tExit");

    let option = readline.questionInt("Choose a menu option: ");

    // Control Structures and Logic module: using if-else statement
    if (option == 1) {
        submitRequest();
    } else if (option == 2) {
        viewRequests();
    } else if (option == 3) {
        updateRequest();
    } else if (option == 4) {
        console.log("Goodbye!")
        break;
    } else {
        console.log("Please enter a valid option.\n");
    }
}

/* In case if my text submission got lost I also include it here:
1. Description:
My application is a maintenance request tracking website for apartment management.
Features:
    Tenants can:
        Submit a maintenance request (describe the issue, provide some additional info).
        View their submitted requests.
    Managers can:
        View all requests.
        Update the status of a request (Pending, In Progress, Completed).
2. 
- Organization and Time Management
    I would write down all the requirements and features the app should have, design the user interface, and make a prototype. 
    After that, I would break the project into small tasks (user stories) and prioritize the tasks based on how critical they are for the app. 
    Then I would define milestones and set a deadline for each milestone. 
- Values, Data Types, and Operations
    I would use the skills from this module to avoid errors due to unexpected results from implicit type conversions. 
- The Growth Mindset
    This module encourages new experiences and challenges. 
    When working on my app, I would research and try new frameworks and libraries that I haven’t used before.
- Stringing Characters Together
    Knowledge of the String methods is essential for processing user input, displaying messages for users, etc.  
    Template strings help incorporate variable values into a message.
- Control Structures and Logic
    I can use if-else statements to make decisions in my app. 
    For example, if a user entered an invalid value into a form field, then the app would show an error message. 
    Or, if my app is supposed to display a list of maintenance requests but the list is empty (length == 0) then it would display a message “no requests found” instead. 
- Working with Loops
    I can use loops to go through an array and to process each element. 
    For example, to loop through a list of maintenance requests and display each of them to a user. 
- Building Arrays
    I can create an array to store multiple pieces of similar data, like all maintenance requests in my app.
- Using Arrays
    I can use the Array methods such as filter, find, map, forEach, etc. 
    For example, when I want to find a maintenance request by its ID in an array of requests.
*/