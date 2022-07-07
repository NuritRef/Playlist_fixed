const express = require('express')
const router = express.Router()


const playlistLogic = require('../BL/playlistLogic')

console.log("router here!!")

router.get('/', async (req,res)=>{
    try {
        const playlistResult = await playlistLogic.getSongs()
        res.send(playlistResult)
    }
    catch {
        console.log(err)
    }
})


module.exports = router

// req.params.query