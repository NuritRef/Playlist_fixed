const express = require('express')
const router = express.Router()


const searchLogic = require('../BL/searchLogic')

console.log("router here!!")
router.get('/:query', async (req,res)=>{
    try {
        const searchResult = await searchLogic.getSongs(req.params.query)
        res.send(searchResult)
    }
    catch {
        console.log(err)
    }
})

// post,put
module.exports = router