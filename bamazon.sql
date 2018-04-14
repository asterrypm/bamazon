DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
id INTEGER AUTO_INCREMENT NOT NULL,
product_name VARCHAR (100) NOT NULL,
department_name VARCHAR (50),
price DECIMAL (6, 2) default 0,
stock_quantity INTEGER default 0,
PRIMARY KEY (id)
);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (1, "Coffee", "Grocery", 6.98, 100);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (2, "Deer Park Spring Water, 16.9 oz (40 Pack)", "Grocery", 17.83, 100);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (3, "Ham Sandwich", "Grocery", 5.35, 100);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (4, "COFFEE-MATE Creamer", "Grocery", 30.50, 50);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (5, "Bananas", "Grocery", 8.06, 50);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (6, "Paper Mate Pens", "Office", 4.66, 150);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (7, "Bike Tire", "Sporting Goods", 17.66, 30);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (8, "Ski Wax", "Sporting Goods", 3.89, 30);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (9, "Roku Smart LED TV", "Electronics", 349.99, 500);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (10, "Dress", "Clothing", 15.99, 100);







