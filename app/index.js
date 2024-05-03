// Import the express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route handler for the root endpoint
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

