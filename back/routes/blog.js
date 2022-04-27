const express = require ('express')
const router = express.Router ()
const { time } = require ('../controllers/blog')

router.get('/blogs', time)

router.get('/post', (req, res) => {
    console.log('hello post')
})

module.exports = router