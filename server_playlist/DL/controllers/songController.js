const songModel = require('../models/songModel')
// const myConnect = require('../db')
// myConnect.myConnect()


async function create(data){
    const res = await songModel.create(data)
    console.log(res)
    return res
}

async function read(filter){
    const res = await songModel.find({filter,isActive:true})
    console.log(res)
    return res
}

async function del(filter){
    const res = await update(filter,{isActive:false})
    return res
}


module.exports = {create,read,del}


// async function readOne(filter,proj){
//     const res = await songModel.findOne(filter,proj)
//     return res
// }

