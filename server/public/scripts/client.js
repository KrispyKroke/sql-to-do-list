$(onReady);

function onReady() {
    console.log('JQuery is loaded.');
    // Shows all tasks in the database when the application is booted up
    showTasks();
    // Waits for a task to be submitted before initiating the addTask function
    $('#submitTask').on('click', addTask);
}
// Function which makes an ajax GET request to the server to retrieve all tasks stored in the database.
function showTasks() {
    $.ajax({
        method: 'GET',
        url: '/list',
    }).then((response) => {
        // Initializes a count variable to give each task a numeric value for ordering on the DOM. Did not
        // use the id because this can get out of order when deleting from and adding tasks to the database.
        let count = 1;
        $('#toDoList').empty();
        for (task of response) {
            // Gives each task an 'N' or 'Y' depending on completion status in the database
            let status = 'N';
            if (task.completionStatus === true) {
                status = 'Y';
            }
            // Appends all tasks in the database to the DOM
            $('#toDoList').append(`<tr>
                <td>${count}</td>
                <td>${task.task}</td>
                <td>${status}</td>
                <td><button class="endButton" id="completionButton" data-id="${task.id}">Mark as Complete/Incomplete</button></td>
                <td><button class="endButton" id="deleteButton" data-id="${task.id}">Delete Task</button></td>
            </tr>`);
            count++;
        }
    }).catch((error) => {
        alert(error);
    });
}
// Function makes an ajax POST request to the back-end to add a new task to the database
function addTask() {
    let newTask = $('#newTask').val();
    // Form validation which checks for empty inputs
    if (newTask === '') {
        alert('Please fill out the input form before submitting!');
        return;
    }
    $.ajax({
        method: 'POST',
        url: '/list',
        data: {
            task: newTask
        }
    }).then(() => {
        // Empties inputs on successful addition of task. 
        // Calls the showTasks function to show all tasks on the DOM, including the recently added task.
        $('#newTask').val('');
        showTasks();
    }).catch((error) => {
        alert(error);
    });
}