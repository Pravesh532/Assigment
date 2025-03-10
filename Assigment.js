Task
You've been given an array and a script.js file with four functions. Your task is to edit the script.js file and write code inside these functions to perform the following tasks:

Print Developers by Map: Console.log all employees with the profession of developer using the map function.
Print Developers by ForEach: Console.log all employees with the profession of developer using the forEach function.
Add Data: Create another employee object and append it to the existing array. For example, add {id:4, name:"susan", age:"20", profession:"intern"} to the array and console.log it.
Remove Admin: Remove the object where the profession is admin from the array. Console.log the changed array.
Concatenate Array: Create another array with 3 objects similar to the ones in the given array but with different ids and parameters. Then concatenate these two arrays and console.log the result.
Relevant Link
GitHub Repo (Starter Template) - Clone this repository and edit the script.js file to complete the tasks.

Evaluation Criteria
Part 1: Print Developer by Map
.map() Function: Correct usage of the .map() function.
Developer Objects Filtering: Proper filtering of developer objects.
Console.log(): Correct usage of console.log().
Part 2: Print Developer by ForEach
.forEach() Function: Proper usage of the .forEach() function.
Developer Objects Filtering: Correct filtering of developer objects.
Console.log(): Appropriate usage of console.log().
Part 3: Add Data
Employee Object Addition: Correct addition of the employee object to the array.
Console.log(): Proper usage of console.log().
Employee Object Formatting: Correct formatting of the employee object.
Part 4: Remove Admin
.filter() Function: Proper usage of the .filter() function.
Admin Objects Filtering: Accurate filtering of admin objects.
Part 5: Concatenate Array
New Array Creation: Creation of a new array with 3 objects.
.concat() Function: Correct usage of the .concat() function.
Console.log(): Appropriate usage of console.log().



Code -------------------------------------------------------------------------------------------------------------------------------------------------------------

let arr = [
   { id: 1, name: "john", age: "18", profession: "developer" },
   { id: 2, name: "jack", age: "20", profession: "developer" },
   { id: 3, name: "karen", age: "19", profession: "admin" },
];

// Function to print all developers using map()
function printDevelopersByMap() {
   arr.map((employee) => {
      if (employee.profession === "developer") {
         console.log(employee);
      }
   });
}

// Function to print all developers using forEach()
function printDevelopersByForEach() {
   arr.forEach((employee) => {
      if (employee.profession === "developer") {
         console.log(employee);
      }
   });
}

// Function to add a new employee object
function addData() {
   let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
   arr.push(newEmployee);
   console.log(arr);
}

// Function to remove all "admin" employees
function removeAdmin() {
   arr = arr.filter((employee) => employee.profession !== "admin");
   console.log(arr);
}

// Function to concatenate another array
function concatenateArray() {
   let newEmployees = [
      { id: 5, name: "alice", age: "22", profession: "designer" },
      { id: 6, name: "bob", age: "25", profession: "developer" },
      { id: 7, name: "charlie", age: "23", profession: "manager" }
   ];
   let combinedArray = arr.concat(newEmployees);
   console.log(combinedArray);
}

// Calling functions to demonstrate functionality
printDevelopersByMap();
printDevelopersByForEach();
addData();
removeAdmin();
concatenateArray();

