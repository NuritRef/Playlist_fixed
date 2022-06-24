const axios = require('axios')

async function getSongs(query){

    const options = {
        method: 'GET',
        url: 'https://simple-youtube-search.p.rapidapi.com/search',
        params: {query: query, safesearch: 'false'},
        headers: {
          'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
        }
      };

    //   axios.request(options).then(function (response) {
    //     console.log(response.data);
    // }).catch(function (error) {
    //     console.error(error);
    // });
    try{
        const result = await axios.request(options)
        return result.data.results
    }
    catch (error){
        console.log(error);
    }
}

module.exports = { getSongs }

