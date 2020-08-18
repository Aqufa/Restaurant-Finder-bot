const { Composer } = require('micro-bot');
const Telegraf = require('telegraf');
const axios = require('axios');
const request = require('request');
const getRestaurants = require('./utils/getRestaurants');


//const bot = new Telegraf('1233420128:AAHliiaWVLSev3N41YW__l4Y8KPvcVP25U8');
const bot = new Composer;



bot.on('text', ctx => {
    
    const city = ctx.message.text;
  
    
    getRestaurants(city, (error, data) =>{
        ctx.reply(data)
    })
  });

//bot.launch();
const bot = new Composer




