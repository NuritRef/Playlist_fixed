const express = require('express')
// this will be like a mini server which rum in the large one.
const router = express.Router()


router.use('/search',require('./searchRouter'))
router.use('/playlist',require('./playlistRouter'))

// router.use('/users' , require('./userRouter'))
// router.use('/items' , require('./itemRouter'))
// router.use('/orders' , require('./orderRouter'))

// router.use('/songs' , require('./songRouter'))

module.exports = router;
