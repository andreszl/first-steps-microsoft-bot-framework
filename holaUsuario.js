var builder = require('botbuilder')

var connector = new builder.ConsoleConnector().listen()
var bot = new builder.UniversalBot(connector)


bot.dialog('/', [
   (session) => {
       builder.Prompts.text(session, '¿Como te llamas?')
   },
   (session, results) => {
    let msj = results.response  
    session.send(`Hola ${msj}`)
   }
]) 
