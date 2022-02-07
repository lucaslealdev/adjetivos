"use strict";
import clipboard from 'clipboardy';
const adjetivos = [
	'inoxidável',
	'nobre edil',
	'magnânim_', //o,a
	'lest_',
	'díspar',
	'epistêmic_',
	'cornucópi_',
	'longânime',
	'indulgente',
	'esclarecid_',
	'genial',
	'preemptiv_',
	'industrios_',
	'judicios_',
	'luminar',
	'cativante',
	'afável',
	'prazenteir_',
	'burlesc_',
	'folgaz+', //ão,ona
	'patusc_',
	'êufon_',
	'agradável',
	'asseverativ_',
	'lhan_',
	'lídim_',
	'cios_',
	'brios_',
	'magnétic_',
	'indulgente',
	'credível',
	'circunspect_',
	'desenvolt_',
	'eloquente',
	'doctíloqu_',
	'facund_',
	'homilétic_',
	'altiloquente',
	'metafísic_',
	'internacional',
	'jovial',
	'parenétic_',
	'preternatural',
	'fádic_',
	'prodigios_',
	'deífic_',
	'hiperbólic_',
	'exuberante',
	'supin_',
	'episódic_',
	'adventíci_',
	'fortuit_',
	'memorios_',
	'urban_',
	'indelével',
	'cônsci_',
	'filantrop_',
	'perene',
	'imperecível',
	'incorruptível',
	'indefectível',
	'indeteriorável',
	'de sabedoria macróbia',
];
const args = process.argv.slice(2);
const genero = (args[0] || 'm').toLowerCase() === 'm' ? 'm' : 'f';
const qtd = parseInt(args[1] || 3);

if(isNaN(qtd)){
	console.error('The second parameter must be an integer number.');
	process.exit(1);
}

function gerar(){
	const elogiosSelecionados = (shuffle(adjetivos)).slice(0, qtd).map((v) => {
		v = v.replace('_',genero==='f'?'a':'o');
		v = v.replace('+',genero==='f'?'ona':'ão');
		return v;
	});

	const textoFinal = elogiosSelecionados.join(', ').replace(/,(?=[^,]*$)/, ' e');

	return textoFinal;
}

const result = gerar();
clipboard.writeSync(result);
console.log(`Texto '${result}' copiado para a área de transferência`);

//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array#:~:text=algorithm%20is%20the-,Fisher%2DYates,-(aka%20Knuth)%20Shuffle
function shuffle(array) {
	let currentIndex = array.length,  randomIndex;
	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]
		];
	}
	return array;
}
