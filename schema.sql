DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	Item_ID INTEGER(10) NOT NULL AUTO_INCREMENT,
    Product_Name VARCHAR(20),
    Department_Name VARCHAR(20),
    Price INTEGER(10),
    Stock_Quantity INTEGER(100),
    PRIMARY KEY(Item_ID)
);

USE bamazon;

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUE("Macbook Pro", "Technology", "3500", "60");

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUE("Alienware 17", "Technology", "4300", "34");

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUE("Surface Pro", "Technology", "1588", "133");

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUE("Asus ROG", "Technology", "2799", "99");

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUE("Dell XPS 15", "Technology", "1799", "124");

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUE("RTX 2080", "Technology", "899", "1233");

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUE("GTX Titan", "Technology", "1399", "234");

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUE("Lenovo Y50-70", "Technology", "1899", "324");

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUE("Macbook Air", "Technology", "1299", "623");

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUE("iPad 256GB", "Technology", "1199", "124");

use bamazon;

SELECT * FROM products;

