let axios = require('axios');
let URl = "https://restcountries.com/v3.1/all";


axios.get(URl).then(function (response) {

    let countryData = response.data;
    let statusCode = response.status;

    console.log(response);
}).catch(function (error) {
    console.log(error);
})

