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

router.post('/', async (req,res)=>{
    try {
        const playlistResult = await playlistLogic.addSong(req.body)
        res.send({code:200, msg:playlistResult})
    }
    catch (error){
        console.log(error)
    }
})


module.exports = router

// req.params.query