// Import the express module
import express from "express"
// Create an instance of express
const app = express();

// Define a port to listen on
const PORT = process.env.PORT || 3000;



const recipes = [
  { id: 1, name: 'Spaghetti Bolognese' },
  { id: 2, name: 'Chicken Curry' },
  { id: 3, name: 'Beef Stew' },
  // Add more recipes for testing
  { id: 4, name: 'Salmon Teriyaki' },
  { id: 5, name: 'Vegetable Stir Fry' },
  { id: 6, name: 'Apple Pie' },
  { id: 7, name: 'Grilled Cheese Sandwich' },
  { id: 8, name: 'Caesar Salad' },
  { id: 9, name: 'Tomato Soup' },
  { id: 10, name: 'Chicken Alfredo' },
  // ... add more recipes as needed
];


// Define a route for the root URL
app.get('/recipes', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};

  if (endIndex < recipes.length) {
      results.next = {
          page: page + 1,
          limit: limit
      };
  }

  if (startIndex > 0) {
      results.previous = {
          page: page - 1,
          limit: limit
      };
  }

  results.results = recipes.slice(startIndex, endIndex);

  res.json(results);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
