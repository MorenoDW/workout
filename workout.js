
function gestoreCerca() {
	try {
		var categoria = nodoCategorie.value;
		var esercizi = ricercaCategoria(categoria);
		var listaEsercizi = calcolaListaEsercizi (esercizi);
		creaLista (nodoRisultato, listaEsercizi);
		ricercaImmagine(esercizi);
		nodoRisultato.style.fontSize = "27px";
	} catch (e) {
		alert ("gestoreCerca" + e);
	}
}
function ricercaCategoria (categoria) {
	var esercizi = [];
	for (var i = 0; i < workout.length; i++) {
		var esercizio = workout[i];
		if (esercizio.categoria == categoria) {
			esercizi.push(esercizio);
		}
	}
	return esercizi;
}
function ricercaImmagine (esercizio) {
	var sourceImg = esercizio[0].immagine;
	var nodoImg = document.createElement("img");
	nodoImg.src = sourceImg;
	rimuoviFigli(nodoImgRisultato);
	nodoImgRisultato.appendChild(nodoImg);
}

function calcolaCategorie () {
	var categorie = {};
	for (var i = 0; i < workout.length; i++) {
		var esercizio = workout[i];
		categorie[esercizio.categoria] = true;
	}
	return categorie;
}
function calcolaListaEsercizi(esercizi) {
	try {
		var listaEsercizi=[];
		for (var i = 0; i < esercizi.length; i++) {
			var esercizio = esercizi[i];
			var s = "-Il " + esercizio.categoria + " il tipo di workout è: " + esercizio.tipo  + ". Livello di intensità " + esercizio.intensità + ", con tempo di esecuzione di " + esercizio.tempo + ". Il workout si sviluppa così: " + esercizio.allenamento;
			listaEsercizi.push(s);
			}
		console.log(listaEsercizi);
		return listaEsercizi;
	} catch (e) {
		alert ("calcolaListaEsercizi" + e );
	}
}
function creaLista(nodoLista, elementi) {
	try {
		rimuoviFigli(nodoLista);
		for (var i = 0; i < elementi.length; i++) {
			var elemento = elementi [i];
			var nodoElemento = document.createElement("li");
			nodoLista.appendChild(nodoElemento);
			var nodoTesto = document.createTextNode(elemento);
			nodoElemento.appendChild(nodoTesto);
		}
	} catch (e) {
		alert ("creaLista" + e );
  }
}
function rimuoviFigli (nodo) {
	while (nodo.childNodes.length > 0) {
		nodo.removeChild(nodo.firstChild);
	}
}
function creaSelect (nodoSelect, opzioni) { 
	rimuoviFigli(nodoSelect);
	for (var opzione in opzioni) {
		var nodoOpzione = document.createElement("option");
		nodoOpzione.value = opzione;
		var nodoTesto = document.createTextNode (opzione);
		nodoOpzione.appendChild(nodoTesto);
		nodoSelect.appendChild(nodoOpzione);
	}
}
function gestoreTempo () {
	try {
		var oggi = new Date();
		var arrayGiorni = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]; 
		var GiornoGiovanna = oggi.getDay();
		var time = arrayGiorni[GiornoGiovanna] + " " +oggi.getDate() + "/" + oggi.getMonth() + "/" + oggi.getFullYear() + " ore " + oggi.getHours() + ":" + oggi.getMinutes();
		nodoLogTempo.value = time;
		document.getElementById("tempo").style.visibility = "visible"; 		
	} catch (e) {
		alert ("gestoreTempo" + e);
	}
}

var nodoCategorie;
var nodoRisultato;
var nodoCerca;
var nodoTempo;
var nodoLogTempo;

var workout= [ 
   {
	categoria    : "Lunedì",
	tipo         : "Corsa",
	intensità    : "Medio",
	tempo        : "30 minuti",
	allenamento  : "Iniziare con un riscaldamento muscolare di 5 minuti, facendo attenzione ad attivare tutti i gruppi muscolari. Successivamente iniziare la corsa per 20 minuti, cercando di variare l'andamento. Infine, concludere l'allenamento con 5 minuti di defaticamento seguiti da stretching.",
    immagine     : "run.png",
   },{
    categoria    : "Martedì",
	tipo         : "Lavoro muscolare",
	intensità    : "Alto",
	tempo        : "45 minuti",
	allenamento  : "Iniziare con un riscaldamento muscolare di 5 minuti, facendo attenzione ad attivare tutti i gruppi muscolari. Successivamente iniziare con : one arm dumbell (4 x 8-10), arnold press (4 x 8-10), push up (3 until failure), floor press (3 until failure) e standing triceps extenction (3 x 8-12). Concludere l'allenamento con 5 minuti di defaticamento seguiti da stretching.",
    immagine     : "Train.jpg",
  },{
	categoria    : "Mercoledì",
	tipo         : "HIIT",
	intensità    : "Alto",
	tempo        : "25 minuti",
	allenamento  : "Iniziare con un riscaldamento muscolare di 5 minuti, facendo attenzione ad attivare tutti i gruppi muscolari. I seguenti esercizi andranno eseguiti in coppia, ciò vuol dire che ci sarà un minuto di riposo ogni due esercizi. 1. Squat (16 x 3) + V-core (30 secondi x 1). 2. Push up (15 x 3) + plank (1 minuto x 1). 3. Affondi Jump (20 x 3) + plank push up(10 x 1). 4. Burpees (30 x 1) + plank (1 minuto x 1). 5. Skip (30 secondi x 1) + jumping jacks (30 secondi x 1). Concludere l'allenamento con 5 minuti di defaticamento seguiti da stretching.",
    immagine     : "HIIT.jpg",
   },{
	categoria    : "Giovedì",
	tipo         : "Lavoro muscolare",
	intensità    : "Molto alto",
	tempo        : "50 minuti",
	allenamento  : "Iniziare con un riscaldamento muscolare di 5 minuti, facendo attenzione ad attivare tutti i gruppi muscolari. Oggi lavoreremo in 'superset'! Che significa? Vuol dire che ogni gruppo di esercizi dovrà essere eseguito consecutivamente per ogni set. Ovvero se il gruppo è composto da due esercizi si farà un set del primo e poi un set del secondo, per poi fare 30 secondi di riposo;(Ah, dimenticavo, ogni set dovrà essere eseguito until failure!). Pront*? Iniziamo: 1. Diamond push-ups (4 sets, 2 flat, due decline) + inverted row (4 sets). 2. Pike push-ups (3 sets) + lat pulldown on floor (3 sets). 3. Biceps bed scheet curl (2 sets) + triceps bodyweight extensions (2 sets). 4. Assisted pistol squad (3 sets each side) + bulgarian split squat (3 sets each side) + hamstring leg curl (4 sets). Concludere l'allenamento con 5 minuti di defaticamento seguiti da stretching.",
    immagine     : "Muscle3.jpg",
   }, {
	categoria    : "Venerdì",
	tipo         : "Cardio",
	intensità    : "Medio",
	tempo        : "30 minuti", 
	allenamento  : "Iniziare con un riscaldamento muscolare di 5 minuti, facendo attenzione ad attivare tutti i gruppi muscolari. Oggi l'allenamento prevede cardio! Puoi scegliere se fare una corsa all'aperto oppure su un treadmill, oppure va bene anche una cyclette o una bici. Concludere l'allenamento con 5 minuti di defaticamento seguiti da stretching.",
    immagine     : "Muscle2.jpg",
   },{
	categoria    : "Sabato",
	tipo         : "Stretching",
	intensità    : "Basso",
	tempo        : "15 minuti",
	allenamento  : "Iniziare con un riscaldamento muscolare di 5 minuti, facendo attenzione ad attivare tutti i gruppi muscolari. Mai fare stretching senza aver riscaldato i muscoli, o rischierai infortuni! Dopo il riscaldamento iniziare con lo stretching partendo dai gruppi muscolari della parte inferiore del corpo fino ad arrivare alla parte superiore. Rimanere su ogni muscolo per circa 10 secondi. E ricordati di rilassarti con questi esercizi, respirando adeguatamente. ",
    immagine     : "Muscle.jpg",
   },{
	categoria    : "Domenica",
	tipo         : "Riposo!",
	intensità    : "Molto alto",
	tempo        : "tutta la giornata",
	allenamento  : "Iniziare con lo svegliarsi tardi, senza sveglia. Proseguire arrivando alla postazione del workout di oggi, il divano. Eseguire almeno 3 sets di Netflix, seguiti da 'pranzo domenicale'. Continuare raggiungendo di nuovo la postazione divano e continuare con il workout mattutino. ",
    immagine     : "Rest.jpg",
   }
]
function gestoreLoad() {
	try {
		nodoCategorie = document.getElementById("categorie"); 
		nodoRisultato = document.getElementById("risultato");
		nodoCerca=document.getElementById("imposta");
		nodoImgRisultato = document.getElementById("imgRisultato");
		nodoTempo = document.getElementById("time");
		nodoLogTempo = document.getElementById("tempo");
		nodoLogTempo.value = "";
		document.getElementById("tempo").style.visibility = "hidden";
		var categorie = calcolaCategorie();
		creaSelect(nodoCategorie, categorie);
		nodoCerca.onclick=gestoreCerca; 
		nodoTempo.onclick=gestoreTempo;
	} catch (e) {
		alert ("gestoreLoad" + e);
	}
}

window.onload = gestoreLoad;