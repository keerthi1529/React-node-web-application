const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors'); 
const app = express();
const PORT = 5000;
const compression = require('compression');

// Use compression middleware before defining your routes
app.use(compression());
app.use(cors());
app.set('maxHttpHeaderSize', 16384);
// Middleware to parse JSON request body
app.use(express.json());
console.log("hiii")
// Route for fetching data from the public API
app.get('/api/users', async (req, res) => {
    console.log("hello")
   try{ 
    const API_ENDPOINT_URL = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(API_ENDPOINT_URL); // Await the fetch operation
        if (response.ok) {
            const data = await response.json(); // Await the JSON parsing
            console.log('Data retrieved successfully:', data[1].id);
            res.json(data); // Send JSON response to the client
        } else {
            throw new Error('Network response was not ok.');
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    // try {
    //    // const response=await axios.get('https://jsonplaceholder.typicode.com/users');
    //    const response = await fetch(`http://localhost:3000/api/users?timestamp=${new Date().getTime()}`);
    //     const users = response.data;
    //     console.log(users)
    //     res.json(users);
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ error: 'Internal Server Error' });
    // }
});     
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
