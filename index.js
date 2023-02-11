/* eslint-disable func-style */
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
// Prints out the provided task's details
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

// Marks the provided task as completed
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box"); // task 1
const task2 = newTask("Do Laundry"); // task 2
const tasks = [task1, task2];


task1.logState();
task1.markCompleted();
task1.logState();

console.log(tasks);
