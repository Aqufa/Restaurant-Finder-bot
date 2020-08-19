const request = require('request');
const axios = require('axios');

const getRestaurants = (address ,callback) =>{
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=Api_key&limit=1`;
    request({url, json:true}, (error, response) =>{
        if(error){
            return callback('Please check your connectivity', undefined);
        }
        else if(response.body.features.length===0){
            return callback('Please enter a correct location', undefined);
        }
        else{
            const latitude = response.body.features[0].center[1];
            const longitude = response.body.features[0].center[0];
            
            axios({
                method: "GET",
                url: `https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}`,
                headers: {
                  "user-key": "Api_key",
                  "content-type": "application/json"
                }
              })
                .then(response => {
                  const resList = response.data.nearby_restaurants;
                  resList.forEach(dhaba =>{
                  const name = dhaba.restaurant.name;
                  const locate= dhaba.restaurant.location.address;

                  const menuLink =  dhaba.restaurant.menu_url;
                  callback(undefined, {name, locate, menuLink});
                })
                
                });
        }
    })
}


module.exports = getRestaurants