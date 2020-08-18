const Telegraf = require('telegraf');
const axios = require('axios');
const request = require('request');
const getRestaurants = require('./utils/getRestaurants');


const bot = new Telegraf('1233420128:AAHliiaWVLSev3N41YW__l4Y8KPvcVP25U8');



bot.on('text', ctx => {
    // ctx object holds the Update object from Telegram API
    // So you can use everything you see there
  
    // get the text message sent by user
    const subreddit = ctx.message.text;
  
    // GET the data from Reddit API
    getRestaurants(subreddit, (error, data) =>{
        ctx.reply(data)
    })
  });

bot.launch();




