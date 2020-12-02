// Imports
const express = require('express')
const router = express.Router()

// Define navigation routes
// Simple text response
router.get('/hello', (req, res) => {
    res.send('<h1>Hello from the app</h1>')
})
// Render a file from the views folder
router.get('/', (req, res) => {
    res.render('home', {
        name: 'Carlos',
        message: '<h2>Hello from rendered file</h2>',
        showText: false,
        data: ['apple', 'banana', 'orange', 'kiwi']
    })
})

module.exports = router