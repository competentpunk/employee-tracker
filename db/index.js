const connection = require("./connection");

const db = {
    getAllEmployees(){
        console.log("Getting all employees");
    },

    createNewEmployee(employee = {}) {
        console.log("creating employee");
        return connection.promise().query("INSERT INTO employee VALUES ?", employee)
    }
}

module.exports = db;