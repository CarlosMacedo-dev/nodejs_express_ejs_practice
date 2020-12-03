const addTwoNumbers = function addition(one, two){
    let result = parseInt(one) + parseInt(two)
    return result
}

const getViewCount = function (req) {
    if (!req.session.viewCount) {
        req.session.viewCount =1
    } else {
        req.session.viewCount +=1
    }
    return req.session.viewCount
}

exports.addTwoNumbers = addTwoNumbers
exports.getViewCount = getViewCount