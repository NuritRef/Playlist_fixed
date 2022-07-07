const { default: mongoose } = require('mongoose')
const MONGO_URL = process.env.MONGO_URL

async function connect(){
    try{
        await mongoose.connect(MONGO_URL,(err)=>{
            if (err) throw err;
            console.log("Connection successed")
        })

    }
    catch{
        console.log("my error: ",err)
    }
}
// connect()

exports.myConnect = connect