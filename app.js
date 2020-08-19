const { Composer } = require('micro-bot');
const Telegraf = require('telegraf');
const axios = require('axios');
const request = require('request');
const getRestaurants = require('./utils/getRestaurants');


const bot = new Telegraf('Bot_token');
//const bot = new Composer;



bot.on('text', ctx => {
    
    const city = ctx.message.text;
  
    
    getRestaurants(city, (error, data) =>{
      if(error){
        return ctx.reply('Sorry this loction is not in my directory!! Please try another one')
      }
        ctx.reply('Name: '+ data.name + '\nLocation: '+data.locate+ '\nmenu-Link: '+data.menuLink)
    })
  });

bot.launch();
//module.exports = bot




