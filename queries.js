// Task 1 - Display all customers
db.customers.find()

// Task 2 - Customers from Bangalore
db.customers.find({ city: "Bangalore" })

// Task 3 - Customers not from Hyderabad
db.customers.find({ city: { $ne: "Hyderabad" } })

// Task 4 - Names starting with 'S'
db.customers.find({ name: { $regex: "^S" } })

// Task 5 - Names ending with 'a'
db.customers.find({ name: { $regex: "a$" } })

// Task 6 - Names containing 'ar'
db.customers.find({ name: { $regex: "ar" } })

// Task 7 - From Bangalore or Chennai
db.customers.find({ city: { $in: ["Bangalore", "Chennai"] } })

// Task 8 - From Bangalore and name starts with 'A'
db.customers.find({ city: "Bangalore", name: { $regex: "^A" } })

// Task 9 - City in Bangalore, Hyderabad, or Pune
db.customers.find({ city: { $in: ["Bangalore", "Hyderabad", "Pune"] } })

// Task 10 - Sorted by name
db.customers.find().sort({ name: 1 })

// Task 11 - Total number of customers
db.customers.aggregate([{ $count: "total_customers" }])

// Task 12 - Customers per city
db.customers.aggregate([
  { $group: { _id: "$city", count: { $sum: 1 } } }
])

// Task 13 - City with maximum customers
db.customers.aggregate([
  { $group: { _id: "$city", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
])

// Task 14 - Cities with more than one customer
db.customers.aggregate([
  { $group: { _id: "$city", count: { $sum: 1 } } },
  { $match: { count: { $gt: 1 } } }
])

// Task 15 - Cities sorted by customer count
db.customers.aggregate([
  { $group: { _id: "$city", count: { $sum: 1 } } },
  { $sort: { count: -1 } }
])


// Task 16 - All restaurants
db.restaurants.find()

// Task 17 - Restaurants in Bangalore
db.restaurants.find({ city: "Bangalore" })

// Task 18 - Rating greater than 4.3
db.restaurants.find({ rating: { $gt: 4.3 } })

// Task 19 - Rating between 4.2 and 4.5
db.restaurants.find({ rating: { $gte: 4.2, $lte: 4.5 } })

// Task 20 - Names starting with 'P'
db.restaurants.find({ restaurant_name: { $regex: "^P" } })

// Task 21 - Names containing 'King'
db.restaurants.find({ restaurant_name: { $regex: "King" } })

// Task 22 - In Chennai or Hyderabad
db.restaurants.find({ city: { $in: ["Chennai", "Hyderabad"] } })

// Task 23 - Not in Pune
db.restaurants.find({ city: { $ne: "Pune" } })

// Task 24 - Sorted by rating descending
db.restaurants.find().sort({ rating: -1 })

// Task 25 - Top 3 by rating
db.restaurants.find().sort({ rating: -1 }).limit(3)

// Task 26 - Average rating
db.restaurants.aggregate([
  { $group: { _id: null, avgRating: { $avg: "$rating" } } }
])

// Task 27 - Highest rating
db.restaurants.aggregate([
  { $group: { _id: null, maxRating: { $max: "$rating" } } }
])

// Task 28 - Lowest rating
db.restaurants.aggregate([
  { $group: { _id: null, minRating: { $min: "$rating" } } }
])

// Task 29 - Restaurants per city
db.restaurants.aggregate([
  { $group: { _id: "$city", count: { $sum: 1 } } }
])

// Task 30 - Cities with more than one restaurant
db.restaurants.aggregate([
  { $group: { _id: "$city", count: { $sum: 1 } } },
  { $match: { count: { $gt: 1 } } }
])

// Task 31 - All menu items
db.menu.find()

// Task 32 - Price greater than 250
db.menu.find({ price: { $gt: 250 } })

// Task 33 - Price between 200 and 400
db.menu.find({ price: { $gte: 200, $lte: 400 } })

// Task 34 - Restaurant ID 101
db.menu.find({ restaurant_id: 101 })

// Task 35 - Names starting with 'C'
db.menu.find({ item_name: { $regex: "^C" } })

// Task 36 - Names containing 'Pizza'
db.menu.find({ item_name: { $regex: "Pizza" } })

// Task 37 - Sorted by price ascending
db.menu.find().sort({ price: 1 })

// Task 38 - Top 3 expensive items
db.menu.find().sort({ price: -1 }).limit(3)

// Task 39 - Price less than 300
db.menu.find({ price: { $lt: 300 } })

// Task 40 - Price not equal to 350
db.menu.find({ price: { $ne: 350 } })

// Task 41 - Average price
db.menu.aggregate([
  { $group: { _id: null, avgPrice: { $avg: "$price" } } }
])

// Task 42 - Maximum price
db.menu.aggregate([
  { $group: { _id: null, maxPrice: { $max: "$price" } } }
])

// Task 43 - Minimum price
db.menu.aggregate([
  { $group: { _id: null, minPrice: { $min: "$price" } } }
])

// Task 44 - Total price of all items
db.menu.aggregate([
  { $group: { _id: null, totalPrice: { $sum: "$price" } } }
])

// Task 45 - Items per restaurant
db.menu.aggregate([
  { $group: { _id: "$restaurant_id", itemCount: { $sum: 1 } } }
])

// Task 46 - All orders
db.orders.find()

// Task 47 - Delivered orders
db.orders.find({ status: "Delivered" })

// Task 48 - Pending orders
db.orders.find({ status: "Pending" })

// Task 49 - Total amount greater than 400
db.orders.find({ total_amount: { $gt: 400 } })

// Task 50 - Amount between 300 and 600
db.orders.find({ total_amount: { $gte: 300, $lte: 600 } })

// Task 51 - Orders by customer ID 1
db.orders.find({ customer_id: 1 })

// Task 52 - Sorted by amount descending
db.orders.find().sort({ total_amount: -1 })

// Task 53 - Top 3 highest orders
db.orders.find().sort({ total_amount: -1 }).limit(3)

// Task 54 - Status not Delivered
db.orders.find({ status: { $ne: "Delivered" } })

// Task 55 - Amount > 300 and status Delivered
db.orders.find({ total_amount: { $gt: 300 }, status: "Delivered" })

// Task 56 - Total revenue
db.orders.aggregate([
  { $group: { _id: null, totalRevenue: { $sum: "$total_amount" } } }
])

// Task 57 - Average order amount
db.orders.aggregate([
  { $group: { _id: null, avgAmount: { $avg: "$total_amount" } } }
])

// Task 58 - Highest order amount
db.orders.aggregate([
  { $group: { _id: null, maxAmount: { $max: "$total_amount" } } }
])

// Task 59 - Lowest order amount
db.orders.aggregate([
  { _id: null, minAmount: { $min: "$total_amount" } }
])

// Task 60 - Count by status
db.orders.aggregate([
  { $group: { _id: "$status", count: { $sum: 1 } } }
])

// Task 61 - Statuses with more than one order
db.orders.aggregate([
  { $group: { _id: "$status", count: { $sum: 1 } } },
  { $match: { count: { $gt: 1 } } }
])

// Task 62 - Statuses sorted by order count
db.orders.aggregate([
  { $group: { _id: "$status", count: { $sum: 1 } } },
  { $sort: { count: -1 } }
])

// Task 63 - Revenue from delivered orders
db.orders.aggregate([
  { $match: { status: "Delivered" } },
  { $group: { _id: null, totalRevenue: { $sum: "$total_amount" } } }
])

// Task 64 - Average amount of delivered orders
db.orders.aggregate([
  { $match: { status: "Delivered" } },
  { $group: { _id: null, avgAmount: { $avg: "$total_amount" } } }
])

// Task 65 - Orders per customer
db.orders.aggregate([
  { $group: { _id: "$customer_id", orderCount: { $sum: 1 } } }
])

// Task 66 - All payments
db.payments.find()

// Task 67 - Successful payments
db.payments.find({ status: "Success" })

// Task 68 - Pending payments
db.payments.find({ status: "Pending" })

// Task 69 - UPI payments
db.payments.find({ payment_method: "UPI" })

// Task 70 - Amount greater than 300
db.payments.find({ amount: { $gt: 300 } })

// Task 71 - Sorted by amount
db.payments.find().sort({ amount: 1 })

// Task 72 - Top 3 payments
db.payments.find().sort({ amount: -1 }).limit(3)

// Task 73 - Status not Success
db.payments.find({ status: { $ne: "Success" } })

// Task 74 - Cash or UPI
db.payments.find({ payment_method: { $in: ["Cash", "UPI"] } })

// Task 75 - Amount between 300 and 500
db.payments.find({ amount: { $gte: 300, $lte: 500 } })

// Task 76 - Total amount received
db.payments.aggregate([
  { $group: { _id: null, totalAmount: { $sum: "$amount" } } }
])

// Task 77 - Average payment amount
db.payments.aggregate([
  { $group: { _id: null, avgAmount: { $avg: "$amount" } } }
])

// Task 78 - Highest payment
db.payments.aggregate([
  { $group: { _id: null, maxAmount: { $max: "$amount" } } }
])

// Task 79 - Lowest payment
db.payments.aggregate([
  { $group: { _id: null, minAmount: { $min: "$amount" } } }
])

// Task 80 - Count by payment method
db.payments.aggregate([
  { $group: { _id: "$payment_method", count: { $sum: 1 } } }
])

// Task 81 - Count by status
db.payments.aggregate([
  { $group: { _id: "$status", count: { $sum: 1 } } }
])

// Task 82 - Payment methods with more than one transaction
db.payments.aggregate([
  { $group: { _id: "$payment_method", count: { $sum: 1 } } },
  { $match: { count: { $gt: 1 } } }
])

// Task 83 - Total amount via UPI
db.payments.aggregate([
  { $match: { payment_method: "UPI" } },
  { $group: { _id: null, totalUPI: { $sum: "$amount" } } }
])

// Task 84 - Average amount via Credit Card
db.payments.aggregate([
  { $match: { payment_method: "Credit Card" } },
  { $group: { _id: null, avgAmount: { $avg: "$amount" } } }
])

// Task 85 - Payment methods sorted by total amount
db.payments.aggregate([
  { $group: { _id: "$payment_method", totalAmount: { $sum: "$amount" } } },
  { $sort: { totalAmount: -1 } }
])

// Task 86 - All agents
db.delivery_agents.find()

// Task 87 - Agents from Bangalore
db.delivery_agents.find({ city: "Bangalore" })

// Task 88 - Rating greater than 4.7
db.delivery_agents.find({ rating: { $gt: 4.7 } })

// Task 89 - Names starting with 'A'
db.delivery_agents.find({ agent_name: { $regex: "^A" } })

// Task 90 - Sorted by rating
db.delivery_agents.find().sort({ rating: -1 })

// Task 91 - Average rating
db.delivery_agents.aggregate([
  { $group: { _id: null, avgRating: { $avg: "$rating" } } }
])

// Task 92 - Highest rating
db.delivery_agents.aggregate([
  { $group: { _id: null, maxRating: { $max: "$rating" } } }
])

// Task 93 - Lowest rating
db.delivery_agents.aggregate([
  { $group: { _id: null, minRating: { $min: "$rating" } } }
])

// Task 94 - Count agents city-wise
db.delivery_agents.aggregate([
  { $group: { _id: "$city", count: { $sum: 1 } } }
])

// Task 95 - Cities with more than one agent
db.delivery_agents.aggregate([
  { $group: { _id: "$city", count: { $sum: 1 } } },
  { $match: { count: { $gt: 1 } } }
])

// Task 96 - All reviews
db.reviews.find()

// Task 97 - Rating 5
db.reviews.find({ rating: 5 })

// Task 98 - Rating greater than 4
db.reviews.find({ rating: { $gt: 4 } })

// Task 99 - Reviews by customer ID 1
db.reviews.find({ customer_id: 1 })

// Task 100 - Sorted by rating
db.reviews.find().sort({ rating: -1 })

// Task 101 - Average review rating
db.reviews.aggregate([
  { $group: { _id: null, avgRating: { $avg: "$rating" } } }
])

// Task 102 - Highest review rating
db.reviews.aggregate([
  { $group: { _id: null, maxRating: { $max: "$rating" } } }
])

// Task 103 - Lowest review rating
db.reviews.aggregate([
  { $group: { _id: null, minRating: { $min: "$rating" } } }
])

// Task 104 - Reviews per restaurant
db.reviews.aggregate([
  { $group: { _id: "$restaurant_id", reviewCount: { $sum: 1 } } }
])

// Task 105 - Restaurants with more than one review
db.reviews.aggregate([
  { $group: { _id: "$restaurant_id", reviewCount: { $sum: 1 } } },
  { $match: { reviewCount: { $gt: 1 } } }
])

// Task 106 - Average rating per restaurant
db.reviews.aggregate([
  { $group: { _id: "$restaurant_id", avgRating: { $avg: "$rating" } } }
])

// Task 107 - Restaurants sorted by average rating
db.reviews.aggregate([
  { $group: { _id: "$restaurant_id", avgRating: { $avg: "$rating" } } },
  { $sort: { avgRating: -1 } }
])

// Task 108 - Total 5-star reviews
db.reviews.aggregate([
  { $match: { rating: 5 } },
  { $count: "fiveStarCount" }
])

// Task 109 - Count by rating
db.reviews.aggregate([
  { $group: { _id: "$rating", count: { $sum: 1 } } }
])

// Task 110 - Ratings with more than one review
db.reviews.aggregate([
  { $group: { _id: "$rating", count: { $sum: 1 } } },
  { $match: { count: { $gt: 1 } } }
])

// Task 111 - Restaurant generating highest revenue
db.orders.aggregate([
  { $group: { _id: "$restaurant_id", totalRevenue: { $sum: "$total_amount" } } },
  { $sort: { totalRevenue: -1 } },
  { $limit: 1 }
])

// Task 112 - Customer with maximum orders
db.orders.aggregate([
  { $group: { _id: "$customer_id", orderCount: { $sum: 1 } } },
  { $sort: { orderCount: -1 } },
  { $limit: 1 }
])

// Task 113 - Most popular payment method
db.payments.aggregate([
  { $group: { _id: "$payment_method", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
])

// Task 114 - City with maximum customers
db.customers.aggregate([
  { $group: { _id: "$city", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
])

// Task 115 - City with highest number of restaurants
db.restaurants.aggregate([
  { $group: { _id: "$city", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
])

// Task 116 - Top 3 restaurants by average rating
db.reviews.aggregate([
  { $group: { _id: "$restaurant_id", avgRating: { $avg: "$rating" } } },
  { $sort: { avgRating: -1 } },
  { $limit: 3 }
])

// Task 117 - Top 5 customers by order count
db.orders.aggregate([
  { $group: { _id: "$customer_id", orderCount: { $sum: 1 } } },
  { $sort: { orderCount: -1 } },
  { $limit: 5 }
])

// Task 118 - Percentage of delivered orders
db.orders.aggregate([
  { $group: { _id: "$status", count: { $sum: 1 } } },
  { $group: { _id: null, statuses: { $push: { status: "$_id", count: "$count" } }, total: { $sum: "$count" } } },
  { $unwind: "$statuses" },
  { $match: { "statuses.status": "Delivered" } },
  { $project: { percentage: { $multiply: [ { $divide: ["$statuses.count", "$total"] }, 100 ] } } }
])

// Task 119 - Average order amount city-wise
db.orders.aggregate([
  { $lookup: { from: "customers", localField: "customer_id", foreignField: "customer_id", as: "customerInfo" } },
  { $unwind: "$customerInfo" },
  { $group: { _id: "$customerInfo.city", avgOrderAmount: { $avg: "$total_amount" } } },
  { $sort: { avgOrderAmount: -1 } }
])