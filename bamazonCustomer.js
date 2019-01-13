var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,

    user: 'root',

    password: 'Yclam19950828',
    database: 'bamazon'
});

connection.connect(function(err) {
    if (err) throw err;
    run();
})

function run() {
    inquirer
    .prompt({
        name: "action",
        type: "list",
        message: "Dear value customer, what would like to do?",
        choices: [
            "Check the inventory",
            "Purchase item"
        ]
    })
    .then(function(answer) {
        switch (answer.action) {
            case "Check the inventory":
            runInventory();
            break;

            case "Purchase item":
            itemSearch();
            break;
        }
    });
}

function runInventory() {
    var query = "SELECT * FROM products";
    connection.query(query, function(err, res) {
        console.table(res);
    });
    run();
}

function itemSearch() {
    inquirer
    .prompt({
        name: "select",
        type: "input",
        message: "Please enter the ID number that you would like to purchase?",
        validate: function(value) {
            if (isNaN(value) === false) {
                return true;
            }
            return false;
        }
    })
    .then(function(answer) {
    inquirer
    .prompt({
        name: "buy",
        type: "input",
        message: "How many items would you like to purchase?",
        validate: function(value) {
            if (isNaN(value) === false) {
                return true;
            }
            return false;
        }
    })
    .then(function(ans) {
        var query = "SELECT Product_Name, Department_Name, Price, Stock_Quantity FROM products WHERE Item_ID = ?"
        connection.query(query, [answer.select], function(err, res) {
            if (ans.buy < res[0].Stock_Quantity) {
                console.log("Your order is " + "Product: " + res[0].Product_Name + " || Department: " + res[0].Department_Name + " || Total cost: " + res[0].Price * ans.buy + " Thank you!")
                var query1 = "UPDATE products SET Stock_Quantity = Stock_Quantity - ? WHERE Item_ID = ?"
                connection.query(query1, [ans.buy, answer.select])
            }else {
                console.log("Sorry we don't have enough quantities for you to order")
            }
            run();
        })
    })
    })
}
