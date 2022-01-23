$(onReady);

function onReady() {
    console.log('JQuery is loaded.');
    showTasks();
}
// Function which makes an ajax GET request to the server to retrieve all tasks stored in the database.
function showTasks() {
    $.ajax({
        method: 'GET',
        url: '/list',
    }).then((response) => {
        // Initializes a count variable to give each task a numeric value for ordering on the DOM
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