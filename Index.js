'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = undefined;

const SKILL_NAME = 'Costituzione Italiana';
const GET_FACT_MESSAGE = 'Ecco fatto';
const HELP_MESSAGE = 'Posso aiutarti dicendoti gli articoli della costituzione se vuoi. Chiedimi di elencarti gli articoli oppore chiedimi larticolo che vuoi tu';
const HELP_REPROMPT = 'Come posso aiutarti?'
const STOP_MESSAGE = 'ok, alla prossima.';

const data = [
	', Articolo 1 litalia è una repubblica democratica, fondata sul lavoro. la sovranità appartiente al popolo, che la esercita nelle forme e nei limiti della costituzione' , ', Articolo 2, la repubblica riconosce e garantisce i diritti inviolabili dell uomo, sia come singolo sia nelle formanzioni sociali ove si svolge la sua personalità, e richiede ladempimento dei doveri inderogabili di solidarietà politica, economica e sociale.' , 'Articolo 3, tutti i cittadini hanno pari dignità sociale e sono tutti eguali davanti alla legge, senza distinzione di sesso, di razza, di lingua, di religione, di opinioni politiche, di condizioni personali e sociali. è compito della repubblica rimuovere gli ostacoli di ordine economico e sociale, che, limidando di fatto la libertà e leuguaglianza dei cittadini, impediscono il pieno sviluppo della persona umana e leffettiva partecipazione di tutti i lavori all organizzazione politica, economica e sociale del paese'
	
];

const handlers = {
	‘LaunchRequest’ : function () {
		this.emit('Benvenutointent');
	},
	’Benvenutointent’ : function () {
		this.emit(':chiedi','Benvenuto in Costituzione italiana, ti aiutero ad imparare la costituzione italiana, cosi che tu possa superare lesame di diritto pubblico alluniversità e soprattuto che tu possa imparare i tuoi diritti e i tuoi doveri per essere un ottimo cittadino italiano');
		
	},
	‘Articoliintent’ : function () {
		const factArr = data;
		const factIndex = Math.floor(Math.random() + factArr.length);
		const randomData = factArr[factIndex];
		const speechOutput = randomData;
		this.emit(‘ ,`${speechOutput}`);
		
	},
	
	’AMAZON.HelpIntent’: function () {
	const speechOutput = HELP_MESSAGE;
	const reprompt = HELP_REPROMPT
	
	this.response.speak(speechOutput).listen(reprompt);
	this.emit(‘:responseReady’);
    },
    
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
