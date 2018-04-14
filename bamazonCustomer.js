//required node packages
var mysql = require("mysql");
var inquirer = require("inquirer");

//create connection information for the sql database
var connection = mysql.createConnection ({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "root"
	database: "bamazon_DB"
});

//connect to mysql server and sql databases
connection.connect(function(err)) {
	if (err) throw err;
	//run the start function after the connection is made to prompt the user
	start();
});

function start(){
	//display items in products database: id's, names, and prices of products for sale
	connection.query("SELECT * FROM products", function(err, results) {
		if (err) throw err;
		//once items are displayed, prompt the user for which item they would like to buy
		inquirer
		.prompt([
			{
				name: "itemChoice",
				type: "rawlist",
				choices: function() {
					var choiceArray = [];
					for (var i = 0; i < results.length; i++) {
						choiceArray.push(results[i].product_name);
					}
					return choiceArray;
				},
				message: "What is the id number of the item you would like to purchase?"
			},
			{
				name: "quantity",
				type: "input"
				message: "How many would you like to purchase?"
			}
		])
		.then(function(answer) {
			//get the information of the chosen item
		})


		}])



	})


}

//using customer input, check if there is enough in stock to fulfill order

//If not app should state "Insufficient quantity" - and prevent order from going through.

//If the store does have enough of the product, fulfill customer order




// var chosenItem;
//         for (var i = 0; i < results.length; i++) {
//           if (results[i].item_name === answer.choice) {
//             chosenItem = results[i];
//           }
//         }

//         // determine if bid was high enough
//         if (chosenItem.highest_bid < parseInt(answer.bid)) {
//           // bid was high enough, so update db, let the user know, and start over
//           connection.query(
//             "UPDATE auctions SET ? WHERE ?",
//             [
//               {
//                 highest_bid: answer.bid
//               },
//               {
//                 id: chosenItem.id
//               }
//             ],
//             function(error) {
//               if (error) throw err;
//               console.log("Bid placed successfully!");
//               start();
//             }
//           );
//         }
//         else {
//           // bid wasn't high enough, so apologize and start over
//           console.log("Your bid was too low. Try again...");
//           start();
//         }
//       });
//   });
// }