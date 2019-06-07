const config = require('../../config')

module.exports = (app) => {
    app.post('/api/stripe/account/get', function (req, res, next) {
        const stripeAccountId = '';
        if (!stripeAccountId){
            res.send({
                sucesss: 'true',
                message: 'Missing stripe account',
                setupBegan: 'false'
            })
        }
    })
}