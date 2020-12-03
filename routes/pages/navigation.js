// Imports
const express = require('express')
const router = express.Router()
const auth = require('../../library/auth')

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
router.get('/users', auth.verify, (req, res) => {
    res.send('Users Page')
})

// Middleware used in this case to verify is user is admin before showing the content
// I moved this function to the library inside the auth.js file
// function verify(req, res, next) {
//     if (req.query.admin === 'true') {
//         next()
//     } else {
//         res.send('No auth')
//     }
// }

module.exports = router