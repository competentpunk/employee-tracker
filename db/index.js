const connection = require("./connection");
const cTable = require('console.table');

const db = {
    getAllEmployees(){
        console.log("Getting all employees");
    },

    createNewEmployee(employee = {}) {
        console.log("creating employee");
        return connection.promise().query("INSERT INTO employee VALUES ?", employee)
    }
}

const table = cTable.getTable([
    {
      name: employee.name,
      email: employee.email
    },
  ]);
  
  console.log(table);