# SQL To-Do List


# Description

Duration: 2-3 days

For this project, I designed a Full-Stack To-Do List web application.  I used SQL to design a database for storage of each task.  On the back-end, I used SQL queries to implement a GET, POST, DELETE, and PUT request.  I made complementary ajax requests for each of those requests on the front-end.  



The final product allowed a user to add a task, show all tasks on the DOM, toggle a task from complete to incomplete, and delete a task from their list.  I used styling to make the page more appealing to users and also visually show when a task is complete.

## Screenshots

## List with 3 Tasks

Below is a screenshot of the list with 3 tasks already added.  Each task is incomplete.  The user can add additional tasks or delete existing tasks as well.  They can also mark tasks as complete/incomplete.

<img width="1268" alt="Screen Shot 2022-03-20 at 1 34 32 PM" src="https://user-images.githubusercontent.com/91631646/159177519-6598a65a-2bec-4eca-bcdb-bb17efc0d640.png">

## List with a Complete Task

This is the list from above with a task marked off as complete.  You can see that the color of the row changes as well as the font for the text in the row.

<img width="979" alt="Screen Shot 2022-03-20 at 1 45 06 PM" src="https://user-images.githubusercontent.com/91631646/159177638-1e0c2940-35fc-451d-ab8e-53794e008d02.png">

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Installation

1. Fork the repository and clone it to your machine
2. Create a database in Postico called `weekend-to-do-app`.
3. Insert the queries from the database.sql file and run them to populate the database.
4. Open up your terminal, navigate to the project folder, and run an `npm install`.
5. Start the project with `npm start`.
6. Navigate to localhost:5000 in your browser.

## Usage

1. After starting the application, there will be an empty table with an input and button at the top of the page.
2. You can add a task by typing in the input and clicking the button to add a task.
3. In the table, there will be a button to remove a task.
4. Lastly, you can mark a task as complete or incomplete by clicking the appropriate button.

## Built With

- SQL
- Javascript
- Express
- JQuery
- HTML
- CSS

## Support

If you have suggestions or issues, feel free to contact me at jared.kroke@gmail.com.
