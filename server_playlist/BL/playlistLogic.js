const songController = require('../DL/controllers/songController')

async function getSongs(){
    // validations:
    const allSongs = await songController.read()
    if (!allSongs) throw ({code:410,message:"songs not found"})
    return allSongs
}

async function addSong(data) {
    const {title,img,src} = data
    if (!title || !img || !src) 
        throw ({code:400,message:"missing data"})

    const song = await userController.create(data)
    if (!song) throw ({code:420,message:"cannot add song to playlist"})
    return song
}


// async function deleteSong(id){
//     const filter = id?
//     await
// }
module.exports = { getSongs,addSong }