# Online-Food-Delivery-System-Swiggy-Zomato-Clone-using-MongoDB-NoSQL-

## Project Description
The Online Food Delivery System is a real-world backend application designed to replicate core database functionalities of platforms like Swiggy and Zomato. Using MongoDB (NoSQL), this project tracks the entire lifecycle of food delivery: from user registration and restaurant browsing to order placement, payments, delivery tracking, and reviews. 

## Database Schema
**Database Name:** `food_delivery_db`

The project utilizes 7 primary collections to manage operations:
* **Customers:** Stores user profiles, contact information, and locations.
* **Restaurants:** Catalogs restaurant details, locations, and overall ratings.
* **Menu:** Maps food items to specific restaurants along with pricing.
* **Orders:** Tracks customer orders, item arrays, total amounts, and delivery status.
* **Payments:** Records transaction IDs, payment methods, amounts, and completion status.
* **Delivery Agents:** Manages delivery partner profiles, operational cities, and ratings.
* **Reviews:** Captures customer feedback and ratings for specific restaurants.

## Project Scope
This project contains 119 functional queries demonstrating proficiency in MongoDB, including:
* **CRUD Operations:** Inserting, retrieving, and managing JSON documents.
* **Filtering & Pattern Matching:** RegEx queries, logical operators (`$in`, `$ne`, `$gt`), and range filtering.
* **Aggregation Framework:** Utilizing `$group`, `$match`, `$sort`, `$limit`, and `$project` for complex data analysis.
* **Advanced Data Relationships:** Implementing `$lookup` for relational data manipulation across distinct collections (e.g., calculating average order amounts by customer city).
* **Business Intelligence Metrics:** Queries designed to output revenue generation, performance analytics, operational popularity, and fulfillment percentages. 

## Setup Instructions
1. Ensure MongoDB is installed and running on your local machine.
2. Connect to the Mongo shell or use MongoDB Compass.
3. Switch to the project database: `use food_delivery_db`
4. Insert the provided schema arrays into their respective collections.
5. Execute the `.js` query files to extract specific business data.
