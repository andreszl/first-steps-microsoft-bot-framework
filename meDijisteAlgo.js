var builder = require('botbuilder')

var connector = new builder.ConsoleConnector().listen()
var bot = new builder.UniversalBot(connector)


bot.dialog('/', [
   (sesion) => {
    let msj = sesion.message.text   
    sesion.send(`Me Dijistes : ${msj}`)
   }
]) 
