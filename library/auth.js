module.exports = {
    verify: function(req, res, next) {
                if (req.query.admin === 'true') {
                    next()
                } else {
                    res.send('No auth')
                }
            }
}