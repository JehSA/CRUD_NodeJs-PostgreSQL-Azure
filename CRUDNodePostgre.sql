CREATE TABLE products(
	productId SERIAL PRIMARY KEY,
	product_name VARCHAR(255) NOT NULL,
	quantity INTEGER NOT NULL,
	price NUMERIC(5,2)	
)

SELECT * FROM products

SELECT * FROM products ORDER BY product_name ASC
