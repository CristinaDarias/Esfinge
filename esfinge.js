// Constante para la librería de Discord:
const Discord = require('discord.js');

// Nuestro bot
const bot = new Discord.Client();

//-------------------------------------------------------------------------
// Arrancamos el bot:
bot.on('ready', () => {
    console.log("La Esfinge ha sido invocada")
});

// Cuando un nuevo usuario entre al canal:
bot.on('guildMemberAdd', member => {

    //Esto abre un mensaje privado. Tener en cuenta.
    member.send('Bienvenid@ human@, antes de que te aventures en esto, te recomiendo que leas el canal de notas para que sepas cómo funciono. ;)');
})

// Respondiendo mensajes:
bot.on('message', (msg) => {
    if(msg.content=='ping')
    {
        msg.reply('Pong!');
    }

    if(msg.content=='quien eres?')
    {
        msg.reply('Soy la Esfinge y he sido creada para someterte a una serie de acertijos, serás capaz de resolverlos todos, humana?');
    }

    if(msg.content=='quien es la mejor novia del mundo mundial?')
    {
        msg.reply('Por supuesto que @CristinaDarias');
    }
//--------------------------------------------------------------------------------------------------------
    // Preguntas de los acertijos:
    if(msg.content=='Acertijo 1')
    {
        msg.reply("1. ¿De quién es esta frase?: Sólo con el corazón se puede ver bien; lo esencial es invisible a los ojos.");
    }    
    if(msg.content.includes('principito'))
    {
        msg.reply(" pista = d ");
    }

    if(msg.content=='Acertijo 2')
    {
        msg.reply("2. Mi creador dijo: Reconozco que con X en realidad lo que quería era hacer una buena secuela de Tiburón pero en tierra firme. No me avergüenzo. ¿Quién soy?");
    }
    if(msg.content.includes('jurassic park'))
    {
        msg.reply(" pista = m ");
    }

    if(msg.content=='Acertijo 3')
    {
        msg.reply("3. ¿Qué resucita a los muertos, qué te devuelve la infancia y te hace reír o llorar? ¿Qué nace en un solo instante y dura una eternidad?");
    }
    if(msg.content.includes('recuerdos'))
    {
        msg.reply(" pista = V ");
    }

    if(msg.content=='Acertijo 4')
    {
        msg.reply("4. Suelen llamarme El elixir de Dioses. Bajo las estrellas de una noche marcada te fui otorgado, hago ruborizar mejillas, me extiendo alrededor del mundo, todo mortal e inmortal conoce de mi existencia y se ha rendido a mis pies. ¿Quien soy?");
    }
    if(msg.content.includes('el vino'))
    {
        msg.reply(" pista = p ");
    }

    if(msg.content=='Acertijo 5')
    {
        msg.reply("5. Has visto el anochecer sobre mi templo en ruinas, todos los habitantes de las aguas deben obedecerme, originalmente soy griego, sin embargo, quiero que me reclames en La Ciudad Eterna. ¿Quién soy?");
    }
    if(msg.content.includes('neptuno'))
    {
        msg.reply(" pista = b ");
    }

    if(msg.content=='Acertijo 6')
    {
        msg.reply("6. Podemos brotar y crear ríos caudalosos en cuestión de segundos, podemos estar derramándonos durante horas o segundos. Podemos nacer a partir de sentimientos y algunas veces nuestra presencia hace derrumbarse al alma más osada. ¿Qué somos?");
    }
    if(msg.content.includes('lagrimas'))
    {
        msg.reply(" pista = n ");
    }

    if(msg.content=='Acertijo 7')
    {
        msg.reply("Mis ojos brillan bajo el manto de la noche, he sido adorado durante siglos por los habitantes del Nilo y desciendo de reyes, ¿qué soy?");
    }
    if(msg.content.includes('gato'))
    {
        msg.reply(" pista = R ");
    }

    if(msg.content=='Acertijo 8')
    {
        msg.reply("Los mayas descubrieron mi forma más pura, curo los males del alma, me consideran uno de los mayores placeres de la vida y puedo reemplazar al pecado que condena almas al segundo círculo del Infierno. ¿Qué soy?.");
    }
    if(msg.content.includes('chocolate'))
    {
        msg.reply(" pista = p ");
    }

    if(msg.content=='Acertijo 9')
    {
        msg.reply("9. Antaño reyes y dioses disfrutaban en mis estancias buscando armonía y paz. Palacio de agua y burbujas. Curo los males de cuerpo y alma. ¿Qué soy?");
    }
    if(msg.content.includes('spa'))
    {
        msg.reply(" pista = Z ");
    }

    if(msg.content=='Acertijo 10')
    {
        msg.reply("10. Me tomaste sin aviso  y sin permiso, soy capaz de congelar el momento de un recuerdo, para siempre. ¿Qué soy?");
    }
    if(msg.content.includes('foto'))
    {
        msg.reply(" pista = M ");
    }

    if(msg.content=='Acertijo 11')
    {
        msg.reply("11. A tus manos llegó un esbozo de mi, me encanta nadar en ríos y lagos, para sobrevivir y mantener el calor abrazo a mis parientes. ¿Qué soy?");
    }
    if(msg.content.includes('nutria'))
    {
        msg.reply(" pista = O ");
    }

    if(msg.content=='Acertijo 12')
    {
        msg.reply("12. Un día, un mes, un año.?");
    }
    if(msg.content.includes('22,03,2018'))
    {
        msg.reply(" pista = zcw== ");
    }

    if(msg.content=='clave = dmVpbnRpZMOzcw==')
    {
        msg.reply("Si me dices el autor que más veces ha sido llevado al cine, te diré donde puedes conseguir lo que deseas:");
    }
    if(msg.content.includes('william shakespeare'))
    {
        msg.reply("http://www.convertstring.com/es/EncodeDecode/Base64Decode aquí tienes donde desencriptarlo. :sunglasses: Ahora, como seguramente habrás intentado introducir claves aleatorias, para introducir esta, debes poner cLaV3 = (y aquí la clave sin paréntesis)");
    }

    if(msg.content=='cLaV3 = veintidós')
    {
        msg.reply(" https://drive.google.com/open?id=1IO2DG_oZPrxLPr04t4zjJqUp9HjRabWL ");
    }

    // dmVpbnRpZMOzcw== (encriptado base64 = veintidós)
    //-----------------------------------------------------------------------------------------------
});
// Obtienes el token secreto en la siguiente página:
// https://discordapp.com/developers/applications/
// application -> Bot -> Token -> "Click to Reveal Token"
tokenbot = "NjA5MDc2NTQyMjg2NTk0MDc0.XUxdTQ.1G5-_111iLa3VrdPNiWeDYWqxkI";
bot.login(tokenbot);