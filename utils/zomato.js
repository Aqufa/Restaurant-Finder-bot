const axios = require('axios');

axios({
    method: "GET",
    url: "https://developers.zomato.com/api/v2.1/geocode?lat=27.902268&lon=78.083478",
    headers: {
      "user-key": "e817e176add64cb95a322155317ba478",
      "content-type": "application/json"
    }
  })
    .then(response => {
      console.log(response.data.link);
    })
    .catch(error => {
      console.log(error);
    });