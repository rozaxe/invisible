(function() {

/*
 * Invisible
 * ---------
 * GPL - Copyright (c) 2014 Rozaxe
 */

/*
 * Globales Variables
 */

// Dom variables
var DOM = {}

// Konstantes
var K = {}

// Scene
//   state
//     1 Choice
//     2 Search
var Scene = {}

// Data
var Data = {}

// Pieces declaration
Data.pieces = []

Data.pieces.push({
	colorStart: '#C9DE55',
	colorEnd:   '#7E9101',
	maskName: 'apple',
	solved: false,
	helped: false,
	clue: 'Marque d\'informatique',
	category: 3
})

Data.pieces.push({
	colorStart: '#EEE8D6',
	colorEnd:   '#9F9A77',
	maskName: 'zelda',
	solved: false,
	helped: false,
	clue:'Princesse d\'Hyrule',
	category: 2
})

Data.pieces.push({
	colorStart: '#FBD856',
	colorEnd:   '#F5B219',
	maskName: 'pikachu',
	solved: false,
	helped: false,
	clue:'Meilleur ami de Sacha',
	category: 1
})

Data.pieces.push({
	colorStart: '#3F2443',
	colorEnd:   '#2A1526',
	maskName: 'rayman',
	solved: false,
	helped: false,
	clue: 'Héros d\'une série éponyme',
})

Data.pieces.push({
	colorStart: '#181818',
	colorEnd:   '#000000',
	maskName: 'batman',
	solved: false,
	helped: false,
	clue: 'Justicier masqué',
})

Data.pieces.push({
	colorStart: '#7F9781',
	colorEnd:   '#3E4637',
	maskName: 'link',
	solved: false,
	helped: false,
	clue: 'Non ! Je ne suis pas Zelda !',
})

Data.pieces.push({
	colorStart: '#FBEC92',
	colorEnd:   '#BAAB51',
	maskName: 'aurore',
	solved: false,
	helped: false,
	clue: 'Elle se pique le doigt au fuseau d\'un rouet',
	category: 2
})

Data.pieces.push({
	colorStart: '#FD8C45',
	colorEnd:   '#2E1A1B',
	maskName: 'diablo',
	solved: false,
	helped: false,
	clue: 'Seigneur de la Terreur',
	category: 1
})

Data.pieces.push({
	colorStart: '#026DAC',
	colorEnd:   '#0F0E0D',
	maskName: 'eve',
	solved: false,
	helped: false,
	clue: 'Extraterrestrial Vegetation Evaluator',
})

Data.pieces.push({
	colorStart: '#F2BA01',
	colorEnd:   '#B56A06',
	maskName: 'voltali',
	solved: false,
	helped: false,
	clue: 'Évolution d\'Évoli',
	category: 1
})

Data.pieces.push({
	colorStart: '#6D3040',
	colorEnd:   '#171017',
	maskName: 'ganondorf',
	solved: false,
	helped: false,
	clue: 'Seigneur des Gerudos',
	category: 2
})

Data.pieces.push({
	colorStart: '#FEF071',
	colorEnd:   '#E9A561',
	maskName: 'walle',
	solved: false,
	helped: false,
	clue: 'Waste Allocation Load Lifter Earth',
})

Data.pieces.push({
	colorStart: '#EC814B',
	colorEnd:   '#C96737',
	maskName: 'pyroli',
	solved: false,
	helped: false,
	clue: 'Évolution d\'Évoli',
	category: 1
})

Data.pieces.push({
	colorStart: '#F81F1D',
	colorEnd:   '#C02323',
	maskName: 'mario',
	solved: false,
	helped: false,
	clue: 'Plombier Italien moustachu',
})

Data.pieces.push({
	colorStart: '#00ADEF',
	colorEnd:   '#0071CC',
	maskName: 'windows',
	solved: false,
	helped: false,
	clue: 'Système d\'exploitation',
	category: 3
})

Data.pieces.push({
	colorStart: '#A5A3C8',
	colorEnd:   '#231C48',
	maskName: 'spyro',
	solved: false,
	helped: false,
	clue: 'Dragon',
})

Data.pieces.push({
	colorStart: '#FF79AF',
	colorEnd:   '#8B2A4B',
	maskName: 'boo',
	solved: false,
	helped: false,
	clue: 'Fantôme qui fait bouh',
	category: 1
})

Data.pieces.push({
	colorStart: '#D3F3C3',
	colorEnd:   '#9CA683',
	maskName: 'globox',
	solved: false,
	helped: false,
	clue: 'Ami de Rayman',
})

Data.pieces.push({
	colorStart: '#181818',
	colorEnd:   '#000000',
	maskName: 'darkvador',
	solved: false,
	helped: false,
	clue: 'Je suis ton père',
})

Data.pieces.push({
	colorStart: '#38C82A',
	colorEnd:   '#004004',
	maskName: 'florapiranha',
	solved: false,
	helped: false,
	clue: 'Grosse piranha mutante',
	category: 1
})

Data.pieces.push({
	colorStart: '#F79AD3',
	colorEnd:   '#F95395',
	maskName: 'peach',
	solved: false,
	helped: false,
	clue: 'Princesse du monde Champignon',
	category: 2
})

Data.pieces.push({
	colorStart: '#FDF29A',
	colorEnd:   '#D64217',
	maskName: 'firefox',
	solved: false,
	helped: false,
	clue: 'Navigateur Internet',
	category: 3
})

Data.pieces.push({
	colorStart: '#E8B562',
	colorEnd:   '#BE6C44',
	maskName: 'toad',
	solved: false,
	helped: false,
	clue: 'Habitant du monde Champignon',
})

Data.pieces.push({
	colorStart: '#EBB13D',
	colorEnd:   '#EAB132',
	maskName: 'raiponce',
	solved: false,
	helped: false,
	clue: 'Princesse aux longs cheveux',
	category: 2
})

Data.pieces.push({
	colorStart: '#77CDE0',
	colorEnd:   '#5A889C',
	maskName: 'aquali',
	solved: false,
	helped: false,
	clue: 'Évolution d\'Évoli',
	category: 1
})
// Stamp declaration
Data.stamps = []

Data.stamps.push({
	maskName: 'circle',
	needed: []
})

Data.stamps.push({
	maskName: 'target',
	needed: []
})

Data.stamps.push({
	maskName: 'splash',
	needed: [1]
})

Data.stamps.push({
	maskName: 'donut',
	needed: [2]
})

Data.stamps.push({
	maskName: 'pokeball',
	needed: [3]
})

Data.stamps.push({
	maskName: 'heart',
	needed: [1, 2, 3]
})

// Category declaration
Data.categories = []

Data.categories[1] = {
	maskName: 'monster',
	content: []
}

Data.categories[2] = {
	maskName: 'royal',
	content: []
}

Data.categories[3] = {
	maskName: 'tm',
	content: []
}

Data.tuto = [false, false, false, false]

/*
 * Data Manager
 */

// Init load variables
K.nbToLoad = 1
K.nbLoaded = 0

// Load images
Data.images = {}
;(function() {

	var tab = []

	for (var x in Data.pieces)
		tab.push(Data.pieces[x].maskName)

	for (var y in Data.stamps)
		tab.push(Data.stamps[y].maskName)

	for (var z in Data.categories)
		tab.push(Data.categories[z].maskName)

	tab.forEach(function(x) {
		++K.nbToLoad

		var img = new Image()
		img.src = 'img/mask/' + x + '.png'
		img.onload = function() {
			++K.nbLoaded
			start()
		}

		Data.images[x] = img
	})
})()


// Save data to local Session
function save_data() {
	sessionStorage.setItem('pieces', JSON.stringify(Data.pieces))
	sessionStorage.setItem('stamps', JSON.stringify(Data.stamps))
	sessionStorage.setItem('categories', JSON.stringify(Data.categories))
	sessionStorage.setItem('tuto', JSON.stringify(Data.tuto))
}


// Load data from local Session or init data
function load_data() {
	if (sessionStorage.getItem('pieces')) {
		try {
			Data.pieces     = JSON.parse(sessionStorage.getItem('pieces'))
			Data.stamps     = JSON.parse(sessionStorage.getItem('stamps'))
			Data.categories = JSON.parse(sessionStorage.getItem('categories'))
			Data.tuto       = JSON.parse(sessionStorage.getItem('tuto'))
		} catch (e) {}
	} else {
		// Create Categories
		for (var x in Data.pieces)
			if (Data.pieces[x].category)
				Data.categories[Data.pieces[x].category].content.push(x)
	}
}

// Erase data from local Session
function reset_save() {
	sessionStorage.clear()
	window.location.reload()
}

/*
 * Game Functions
 */

function goodAnswer() {

	Data.pieces[Scene.maskId].solved = true

	// Check if piece has a category and if it's finished
	var tmp = false
	var cat = Data.pieces[Scene.maskId].category
	if (cat) {
		Data.categories[cat].content.splice(0, 1)

		// If category empty
		if (!Data.categories[cat].content.length) {
			for (var i in Data.stamps) {
				var index = Data.stamps[i].needed.indexOf(cat)
				if (index != -1) {
					Data.stamps[i].needed.splice(index, 1)

					if (!Data.stamps[i].needed.length) {
						tmp = true
						DOM.new.style.opacity = '1'
						init_stamps()
					}
				}
			}
		}
	}

	save_data()

	if (tmp)
		DOM.applause.play()
	else
		DOM.win.play()

	backToMenu()
}

function badAnswer() {
	DOM.submit.className = 'wrong'
	DOM.buzz.play()
}

function validName(event) {
	event.preventDefault()

	if (format(DOM.answer.value) == Scene.nameToFind)
		goodAnswer()
	else
		badAnswer()

}

function format(str) {
	return str.toLowerCase().replace(/\s/g, '')
}

function backToMenu() {
	// MàJ piece
	writeInner(Scene.maskId)

	// Menu choice
	Scene.state = 1

	if (!Data.tuto[2]) {
		DOM.t2.className = ''
		DOM.t3.className = 'hidden'
		DOM.t4.className = 'hidden'
		Data.tuto[2] = true
		Data.tuto[3] = true
	}

	new_background()

	hiddenClue()
	hideBoard()
}

function click_tile(e) {
	var rr = parseInt(e.target.id.substr(1))
	start_piece(rr)
}

function set_image() {
	// Image is 500px
	Scene.dx = (K.width / 2) - 250
	Scene.dy = (K.height / 2) - 250
}

function start_piece(id) {
	// Put scene into search state
	Scene.state = 2

	Scene.sStamp = Scene.stamp.width / 2
	Scene.piece = Data.images[Data.pieces[id].maskName]

	set_image()

	Scene.maskId = id
	Scene.nameToFind = Data.pieces[id].maskName

	change_dom(id)
}

function click_stamp(e) {
	if (!Data.tuto[1]) {
		DOM.t2.className = 'hidden'
		Data.tuto[1] = true
	}

	var id = e.target.id.substr(1)

	// Can't choice it because not unlocked
	if (Data.stamps[id].needed.length) {
		return
	}

	choice_stamp(id)
}

function choice_stamp(id) {
	for (var i in Data.stamps)
		document.getElementById('s' + i).style.backgroundColor = 'transparent'
	document.getElementById('s' + id).style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
	Scene.stampId = id
	Scene.stamp = Data.images[Data.stamps[id].maskName]
}

function hover_stamp(e) {
	var id = e.target.id.substr(1)
	if (Data.stamps[id].needed.length) {
		var text = 'Vous devez finir '
		for (var i in Data.stamps[id].needed)
			text += '<img src="img/mask/' + Data.categories[Data.stamps[id].needed[i]].maskName + '.png" />'
		DOM.desc.innerHTML = text
	}
}

function out_stamp() {
	DOM.desc.innerHTML = ''
}

function clear() {
	// Clear canvas
	DOM.context.globalCompositeOperation = 'source-over';
	DOM.context.clearRect(0, 0, K.width, K.height);

}

// Draw circle under mask
function redraw(event) {
	if (Scene.state != 2)
		return

	// Clear canvas
	clear()

	// Draw circle
	var x = event.clientX - Scene.sStamp
	var y = event.clientY - Scene.sStamp
	DOM.context.drawImage(Scene.stamp, x, y)

	// Apply mask
	DOM.context.globalCompositeOperation = 'destination-out';
	DOM.context.drawImage(Scene.piece, Scene.dx, Scene.dy);
}


// Init
function start() {
	if (K.nbLoaded != K.nbToLoad)
		return

	Scene.stampId = 0
	load_data()

	init_dom()
	get_size()
	prepare_dom()
}

/*
 * DOM Manipulation
 */

function init_dom() {
	// Remember DOM elements
	;['load','board','bonus','menu','canvas','tiles','back','submit','answer','clue','help','cancel','sign','stamps','new','reset','t1','t2','t3','t4','player','music','buzz','applause','win'].forEach(function(x) {
		DOM[x] = document.getElementById(x)
	})
}

function init_tiles() {
	// Add all tile to tiles
	for (var i in Data.pieces) {
		DOM.tiles.innerHTML += '<div class="tile" style="background-color: ' + Data.pieces[i].colorStart + '"><div class="dummy"></div><div class="inner" id="i' + i + '"></div><div class="catch" id="r' + i + '"></div></div>'
		writeInner(i)
	}

	// Attach click on childs
	var childs = DOM.tiles.childNodes
	for (var j = 0 ; j < childs.length ; ++j) {
		//console.log(childs[j])
		childs[j].addEventListener('click', click_tile, false)

	}
}

function init_stamps() {
	DOM.stamps.innerHTML = ''

	for (var i in Data.stamps) {
		var text = '<div>'
		if (Data.stamps[i].needed.length)
			text += '<img src="img/lock.png" class="lock" />'

		DOM.stamps.innerHTML += text + '<img src="img/mask/' + Data.stamps[i].maskName + '.png" id="s' + i + '" /><div id="c' + i + '" class="catch"></div></div>'
	}

	DOM.stamps.innerHTML += '<br/><div id="desc"></div>'

	for (var j in Data.stamps) {
		document.getElementById('c' + j).addEventListener('click', click_stamp, false)
		document.getElementById('c' + j).addEventListener('mouseover', hover_stamp, false)
		document.getElementById('c' + j).addEventListener('mouseout', out_stamp, false)
		DOM.desc = document.getElementById('desc')
	}

	choice_stamp(Scene.stampId)
}

// Get body width and height
function get_size() {
	K.height = document.body.clientHeight
	K.width = document.body.clientWidth
}

// Change bonus background
function new_background() {
	// New bonus background color
	var colors = ['#C00303', '#3CB878', '#3E4033', '#FF415B', '#FF971A', '#9A992D', '#7F0033', '#00ADEC', '#004A65']
	DOM.bonus.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
}

// Hide the board
function hideBoard() {
	DOM.board.style.left = '100%'
}

// Write inner for current piece
function writeInner(id) {
	var node = document.getElementById('i' + id)
	var piece = Data.pieces[id]
	var text = ''

	// If piece helped add marker
	if (piece.category)
		text += '<img src="img/mask/' + Data.categories[piece.category].maskName + '.png" class="category" />'

	// If piece helped add marker
	if (piece.helped)
		text += '<img src="img/help.png" class="help" />'

	// If piece solved add marker
	if (piece.solved)
		text += '<img src="img/solve.png" class="solve" />'

	node.innerHTML = text

}

function music_setting() {
	if (DOM.music.paused) {
		DOM.music.play()
		DOM.player.src = 'img/play.png'
	} else {
		DOM.music.pause()
		DOM.player.src = 'img/stop.png'
	}
}

// Display a clue for player
function showClue() {

	if (!Data.pieces[Scene.maskId].solved)
	Data.pieces[Scene.maskId].helped = true

	DOM.clue.style.display = 'none'
	DOM.back.style.display = 'none'
	DOM.help.className = 'show'
}

function hiddenClue() {
	DOM.clue.style.display = 'inline'
	DOM.back.style.display = 'inline'
	DOM.help.className = 'hidden'

	// Give focus to input
	DOM.answer.focus()
}

function reset_answer() {
	DOM.submit.className = 'ok'
}

function make_gradient(start, end) {
	function getCssValuePrefix() {
		var prefixes = ['', '-moz-', '-webkit-', '-o-', '-ms-']
		// Create a temporary DOM object for testing
		var dom = document.createElement('div')

		for (var i = 0; i < prefixes.length; ++i) {
			// Attempt to set the style
			dom.style.background = prefixes[i] + 'radial-gradient(50% 50%, ellipse farthest-corner, #fff 0%, #fff 100%)'

			// Detect if the style was successfully set
			if (dom.style.background)
				return prefixes[i]
			dom.style.background = '' // Reset the style
		}
		return ''
	}
	DOM.canvas.style.background = getCssValuePrefix() + 'radial-gradient(50% 50%, ellipse farthest-corner, ' + start + ' 0%, ' + end + ' 100%)'
}

// Piece selected, change dom
function change_dom(id) {
	if (!Data.tuto[0]) {
		DOM.t1.className = 'hidden'
		Data.tuto[0] = true
		DOM.t3.className = ''
		DOM.t4.className = ''
	}

	// Setting the gradient later on
	make_gradient(Data.pieces[id].colorStart, Data.pieces[id].colorEnd)

	// Update clue
	DOM.sign.innerHTML = Data.pieces[id].clue

	// Empty answer and give focus
	reset_answer()
	DOM.answer.value = ''
	DOM.answer.focus()

	// When ready, move the board
	DOM.board.style.left = '0'

	// Hide new bonus
	DOM.new.style.opacity = '0'
}

function set_canvas() {
	DOM.canvas.width = K.width
	DOM.canvas.height = K.height * 0.94
}

function prepare_dom() {
	// Put scene into choice state
	Scene.state = 1

	// Prepare canvas and its context
	set_canvas()
	DOM.canvas.addEventListener('mousemove', redraw, false)
	DOM.canvas.addEventListener('mouseout', clear, false)

	DOM.context = DOM.canvas.getContext('2d')

	// Prepare others
	DOM.back.addEventListener('click', backToMenu, false)
	DOM.submit.addEventListener('click', validName, false)
	DOM.clue.addEventListener('click', showClue, false)
	DOM.cancel.addEventListener('click', hiddenClue, false)
	DOM.answer.addEventListener('keydown', reset_answer, false)
	DOM.reset.addEventListener('click', reset_save, false)
	DOM.player.addEventListener('click', music_setting, false)

	new_background()
	if (!Data.tuto[0])
		DOM.t1.className = ''

	init_tiles()
	init_stamps()

	// When ready, show menu
	DOM.load.style.top = '-100%'
}

// MàJ new dimension
window.onresize = function() {
	get_size()
	try {
		set_canvas()
		set_image()
	} catch(e) {}
}

// Inform DOM is loaded
window.onload = function() {
	++K.nbLoaded
	start()
}

})()
