const inquirer = require("inquirer");
const database = require("./db");

function employeePrompt() {
  inquirer.prompt([
    {
      type: "list",
      name: "selection",
      message: "Welcome! Please make a selection.",
      choices: [
        {
          name: "See all employees",
          value: "ALL_EMPLOYEES",
          // Add the rest of the things
        },
      ],
    },
  ])
  .then((answers) => {
    console.log(answers);
    // Do database operations here, based on selection
  }) .catch((err) => console.error(err))
}

employeePrompt();