const Discord = require ('discord.js')
const client = new Discord.Client()

const { token } = require ('./config.json')

client.on('ready', async function() {
    console.log(`${client.user.username} is online!`)
    client.user.setActivity(`Hello World!`)
})

client.on('message', message => {
    try {
      // actions here
    } catch(err) {
      console.log(`Looks like there was an error.` + err);
    };
  });
  
  client.login(token);