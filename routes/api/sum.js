// Imports
const express = require('express')
const router = express.Router()
const doMath = require('../../library/models')

// Navigation
// Handle a POST request with two parameters in the body
// e.g.: http://localhost:3000/sum-test.html
router.post('/', async (req, res) => {
    let viewCount = doMath.getViewCount(req)   
    let result = await doMath.addTwoNumbers(req.body.addendone, req.body.addendtwo)
    res.render('result', {
        result: result,
        message: 'This result was calculated using a POST request with two parameters in the body',
        viewCount: viewCount
    })
})
// Handle a GET request with two parameters in the URL after the ? mark
// e.g.: http://localhost:3000/api/sum?addendone=2&addendtwo=3
router.get('/', async (req, res) => {
    let viewCount = doMath.getViewCount(req)
    let result = await doMath.addTwoNumbers(req.query.addendone, req.query.addendtwo)
    res.render('result', {
        result: result,
        message: 'This result was calculated using a GET request with two parameters after the ? mark in the URL',
        viewCount: viewCount
    })
})
// Handle a GET request with two parameters in the URL separated by the / sign
// e.g.: http://localhost:3000/api/sum/2/3
router.get('/:addendone/:addendtwo', async (req, res) => {
    let viewCount = doMath.getViewCount(req)
    let result = await doMath.addTwoNumbers(req.params.addendone, req.params.addendtwo)
    res.render('result', {
        result: result,
        message: 'This result was calculated using a GET request with two parameters in the URL separated by the / sign',
        viewCount: viewCount
    })
})




// I moved this function into a module in the library folder
// function addition(one, two){
//     let result = parseInt(one) + parseInt(two)
//     return result
// }

module.exports = router