Challenge 1

Given the tables above, find the following using MySQL queries:

a) The names of all salesperson that do not have an order with Samsonic.

SELECT salesperson.name FROM salesperson WHERE salesperson.id NOT IN (
    SELECT orders.salesperson_id
    FROM orders JOIN customer ON orders.customer_id = customers.id
    WHERE customer.name == 'Samsonic'
  );

b) The names of salesperson that have 2 or more orders.

SELECT salesperson.name FROM salesperson JOIN orders ON salesperson.id = orders.salesperson_id GROUP BY orders.salesperson_id HAVING COUNT(* ) >= 2;

c) The names and ages of all salesperson having a salary of 100,000 or greater.

SELECT salesperson.name, salesperson.age FROM salesperson WHERE salesperson.salary >= 100000;

d) When was the earliest and the latest order made to Samony.

SELECT min(orders.order_date), max(orders.order_date) FROM orders JOIN customer ON orders.customer_id = customer.id WHERE customer.id = 7;

Given the collection above, answer the following using MongoDB queries:

a) Find drivers that was last seen between 2018-11-27 and 2018-12-27.

db.driver.find( { lastSeen: { $gt: ISODate('2018-11-27'), $lt: ISODate('2018-12-27') } } )


b) Find a driver who's first name is Johnny and johnny.

db.driver.find( { name: { $in: ['Johnny', 'johnny'] } } )

c) Find the drivers that drives a Toyota.

db.driver.find( { vehicleData.make: { $eq: 'Toyota' } } )

Challenge 2

a) I am 1 billion seconds old today. On what day was I born?

1 year = 365 days
1 day = 24 hours
1 hour = 60 mins
1 min = 60 seconds

1 year = 365 x 24 X 60 X 60 = 31,536 million seconds

1 billion seconds = 1,000,000,000 / 31,536,000 = 31.7097919837 years

Today's date = Feb 1st 2020
1 billion seconds ago = May 13th 1988

b)  PST 3 PM
    Switzerland  Central European Standard Time(GMT+1) 12 AM
    Jordan Eastern European Standard Time(GMT+2)  1 AM

  I would tell her to be sure to schedule the delivery by 16.00 GMT+1 of the day before the delivery. This is also assuming that the Jordanian drivers are operating on a schedule where 17.00 GMT+2 is considered close of business.

  I would expect to see a timestamp of 06.00.

  Challenge 3

  For this question I decided to create a distance class to calculate the distance between 2 points. Within the distanceTo function I calculated (x2 - x1)^2 + (y2 - y1)^2. Every time you want to calculate the distance you create a new instance of Distance with the desired coordinates and console.log the results. 
