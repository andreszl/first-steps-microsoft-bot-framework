var restify = require('restify')
var builder = require('botbuilder')

// Levantar Restify 

var server = restify.createServer()
server.listen(process.env.port || process.env.PORT || 3978, () => {
    console.log('%s listening to %s', server.name, server.url)
})

// No te Preocupes por estas credenciales por ahora , luego las usaremos para conectar los canales

var connector = new builder.ChatConnector({
    appId: '',
    appPassword:''
})

// Ahora utilizamos un UniversalBot

var bot  = new builder.UniversalBot(connector)
server.post('/api/messages', connector.listen())


// Dialogos 

bot.dialog('/', [
    function(session){
        builder.Prompts.text(session, '¿Como te llamas?')
    },
    function(session, results){
        let msj = results.response  
        session.send(`Hola ${msj}`)
    }
])
