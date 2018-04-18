//required node packages
const mysql = require("mysql");
const inquirer = require("inquirer");

//create connection information for the sql database
const connection = mysql.createConnection ({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "root",
	database: "bamazon_DB"
});

//connect to mysql server and sql databases
connection.connect(function(err) {
	if (err) throw err;
	//run the start function after the connection is made to prompt the user
	start();
});

function start(){ 
	//display items in products database: id's, names, and prices of products for sale
	connection.query("SELECT * FROM products", function(err, results) {
		if (err) throw err;

		for (var i = 0; i < results.length; i++) {
		console.log("ID:", results[i].id, "     Price", results[i].price, "     Name:", results[i].product_name);
		//once items are displayed, prompt the user for which item they would like to buy
		}
		inquirer
		.prompt([
			{
				name: "itemChoice",
				//type: "rawlist",				
				message: "What is the id number of the item you would like to purchase?"
			},
			{
				name: "quantity",
				//type: "input"
				message: "How many would you like to purchase?"
			},
		])
		.then(function(answer) {
			validateChoice(answer.itemChoice, answer.quantity);
			
		})
})
}
function validateChoice(itemChoice, quantity) {
	// take answer.itemChoice + answer.quantity [x]
	// pass them as arguments [x]
	// query our database with those arguments []
	connection.query(`SELECT * FROM products WHERE id = ${itemChoice}`, function(err, result) {
		if (err) throw err;
		console.log(result[0].stock_quantity);	
		if(result[0].stock_quantity > quantity)	{
			console.log("There is enough in stock, proceed to update database.");
			updateDB();
		//UPDATE  SET stock_quantity = stock_quantity - quantity;
		} else {
			console.log("There is not enough left in stock, please update order");
			start();
		}
   
 });
}
	// verify that answer.quantity < quantity
	// if true update database
	// console.log('You've purchased quantity itemChoice )
	// if false
	// console.log('There is not enough of item in stock, would you like to order less?')

function updateDB() {
 console.log('synchronicity checks out');
}

