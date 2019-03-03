const router = require('express').Router()

router.get('/', (req, res) => {
	res.send(`Get Hackin'`)
})

module.exports = router
