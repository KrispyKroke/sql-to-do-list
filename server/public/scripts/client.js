$(onReady);

function onReady() {
    console.log('JQuery is loaded.');
    // Shows all tasks in the database when the application is booted up
    showTasks();
    // Waits for a task to be submitted before initiating the addTask function
    $('#submitTask').on('click', addTask);
    // Waits for the user to click on a delete button before calling the removeTask function to delete that row
    $('#toDoList').on('click', '#deleteButton', removeTask);
    $('#toDoList').on('click', '#completionButton', updateTask);
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
            // Gives tasks a class of 'completed' if they have been completed and takes away that class
            // if they have not been completed. Adds additional styling to the front-end if they have been completed.
            let newClass = '';
            if (task.completionStatus === true) {
                status = 'Y';
                newClass = 'completed';
            }
            // Appends all tasks in the database to the DOM
            $('#toDoList').append(`<tr class=${newClass}>
                <td class=${newClass}>${count}</td>
                <td class=${newClass}>${task.task}</td>
                <td class=${newClass}>${status}</td>
                <td><button class="endButton ${newClass}" id="completionButton" data-id="${task.id}" data-status="${task.completionStatus}">Mark as Complete/Incomplete</button></td>
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
// Function which uses event.target to target a task by ID in relation to the row in which the delete
// button is clicked.  Makes an ajax request to delete that task from the database and then refreshes the task list on the DOM.
function removeTask(event) {
    let targetedTask = $(event.target).data('id');
    $.ajax({
        method: 'DELETE',
        url: `/list/${targetedTask}`
    }).then(() => {
        showTasks();
    }).catch((error) => {
        alert(error);
    });
}
// Function which handles the updating of status of a task when the update status button is clicked.
// Uses event.target to change the status of the targeted task and calls the showTasks function afterwards
// to refresh the task list on the DOM.
function updateTask(event) {
    let targetedTask = $(event.target).data('id');
    let currentStatus = $(event.target).data('status');
    const newStatus = !currentStatus;
    $.ajax({
        method: 'PUT',
        url: `/list/${targetedTask}`,
        data: {
            completionStatus: newStatus
        }
    }).then(() => {
        showTasks();
    }).catch((error) => {
        alert(error);
    });
}