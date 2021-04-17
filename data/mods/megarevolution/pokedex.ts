export const Pokedex: {[nameid: string]: nameData} = {
	venusaur: {
		inherit: true,
		evos: ["Arbosaur"],
	},
	arbosaur: {
		num: 270001,
		name: "Arbosaur",
		types: ["Grass","Dragon"],
		baseStats: {hp: 85, atk: 93, def: 85, spa: 115, spd: 110, spe: 88},
		abilities: {0: "Overgrow", H: "Thick Fat"},
		heightm: 2.4,
		weightkg: 155.5,
		prevo: "venusaur",
	},
	charizard:  {
		inherit: true,
		evos: ["Charbarian", "Chargaryen"],
	},
	charbarian: {
		num: 270002,
		name: "Charbarian",
		types: ["Fire","Dragon"],
		baseStats: {hp: 93, atk: 114, def: 83, spa: 109, spd: 85, spe: 100},
		abilities: {0: "Blaze", H: "Tough Claws"},
		heightm: 1.7,
		weightkg: 110.5,
		prevo: "charizard",
	},
	chargaryen: {
		num: 270003,
		name: "Chargaryen",
		types: ["Fire","Flying"],
		baseStats: {hp: 83, atk: 89, def: 93, spa: 124, spd: 95, spe: 100},
		abilities: {0: "Blaze", H: "Drought"},
		heightm: 1.7,
		weightkg: 100.5,
		prevo: "charizard",
	},
	blastoise: {
		inherit: true,
		evos: ["Galapagon"],
	},
	galapagon: {
		num: 270004,
		name: "Galapagon",
		types: ["Water","Rock"],
		baseStats: {hp: 89, atk: 93, def: 110, spa: 100, spd: 120, spe: 68},
		abilities: {0: "Torrent", H: "Mega Launcher"},
		heightm: 1.6,
		weightkg: 101.1,
		prevo: "blastoise",
	},
	pinsir: {
		inherit: true,
		evos: ["Coleoptyran"],
	},
	coleoptyran: {
		num: 270005,
		name: "Coleoptyran",
		types: ["Bug","Flying"],
		baseStats: {hp: 75, atk: 155, def: 70, spa: 65, spd: 95, spe: 90},
		abilities: {0: "Hyper Cutter", 1: "Unnerve", H: "Aerilate"},
		heightm: 1.7,
		weightkg: 59,
		prevo: "pinsir",
	},
	heracross: {
		inherit: true,
		evos: ["Herascarab"],
	},
	herascarab: {
		num: 270006,
		name: "Herascarab",
		types: ["Bug","Fighting"],
		baseStats: {hp: 90, atk: 165, def: 75, spa: 50, spd: 115, spe: 55},
		abilities: {0: "Swarm", 1: "Justified", H: "Skill Link"},
		heightm: 1.7,
		weightkg: 62.5,
		prevo: "heracross",
	},
	scyther: {
		inherit: true,
		evos: ["Scizor", "Scibrawl"],
	},
	scibrawl: {
		num: 270007,
		name: "Scibrawl",
		types: ["Bug","Dark"],
		baseStats: {hp: 70, atk: 130, def: 60, spa: 55, spd: 60, spe: 125},
		abilities: {0: "Swarm", 1: "Technician", H: "Defiant"},
		heightm: 2,
		weightkg: 125,
		prevo: "scyther",
	},
	ampharos: {
		inherit: true,
		evos: ["Ramjestic"],
	},
	ramjestic: {
		num: 270008,
		name: "Ramjestic",
		types: ["Electric","Fairy"],
		baseStats: {hp: 95, atk: 95, def: 100, spa: 125, spd: 90, spe: 45},
		abilities: {0: "Fluffy", H: "Mold Breaker"},
		heightm: 1.4,
		weightkg: 61.5,
		prevo: "ampharos",
	},
	houndoom: {
		inherit: true,
		evos: ["Houndread"],
	},
	houndread: {
		num: 270009,
		name: "Houndread",
		types: ["Dark","Fire"],
		baseStats: {hp: 85, atk: 100, def: 50, spa: 120, spd: 80, spe: 105},
		abilities: {0: "Strong Jaw", 1: "Flash Fire", H: "Solar Power"},
		heightm: 1.9,
		weightkg: 49.5,
		prevo: "houndoom",
	},
	banette: {
		inherit: true,
		evos: ["Zipette"],
	},
	zipette: {
		num: 270010,
		name: "Zipette",
		types: ["Ghost","Dark"],
		baseStats: {hp: 74, atk: 115, def: 75, spa: 93, spd: 93, spe: 75},
		abilities: {0: "Prankster", 1: "Frisk", H: "Cursed Body"},
		heightm: 1.2,
		weightkg: 13,
		prevo: "banette",
	},
	medicham: {
		inherit: true,
		evos: ["Mediscend"],
	},
	mediscend: {
		num: 270011,
		name: "Mediscend",
		types: ["Fighting","Psychic"],
		baseStats: {hp: 70, atk: 75, def: 80, spa: 65, spd: 80, spe: 100},
		abilities: {0: "Pure Power", H: "Telepathy"},
		heightm: 1.3,
		weightkg: 31.5,
		prevo: "medicham",
	},
	pupitar: {
		inherit: true,
		evos: ["Tyranitar", "Stalagmitar"],
	},
	stalagmitar: {
		num: 270012,
		name: "Stalagmitar",
		types: ["Rock","Ground"],
		baseStats: {hp: 100, atk: 100, def: 95, spa: 134, spd: 120, spe: 51},
		abilities: {0: "Sand Stream", H: "Sturdy"},
		heightm: 2.5,
		weightkg: 255,
		prevo: "pupitar",
	},
	shelgon: {
		inherit: true,
		evos: ["Salamence", "Starietta"],
	},
	starietta: {
		num: 270013,
		name: "Starietta",
		types: ["Dragon","Flying"],
		baseStats: {hp: 95, atk: 80, def: 105, spa: 95, spd: 125, spe: 100},
		abilities: {0: "Aerilate", H: "Overcoat"},
		heightm: 1.8,
		weightkg: 112.6,
		prevo: "shelgon",
	},
	metang: {
		inherit: true,
		evos: ["Metagross", "Metamalgam"],
	},
	metamalgam: {
		num: 270014,
		name: "Metamalgam",
		types: ["Steel","Psychic"],
		baseStats: {hp: 95, atk: 105, def: 110, spa: 105, spd: 130, spe: 55},
		abilities: {0: "Tough Claws", H: "Analytic"},
		heightm: 2.5,
		weightkg: 942.9,
		prevo: "metang",
	},
	gabite: {
		inherit: true,
		evos: ["Garchomp", "Scawsert"],
	},
	scawsert: {
		num: 270015,
		name: "Scawsert",
		types: ["Dragon","Fighting"],
		baseStats: {hp: 90, atk: 100, def: 70, spa: 130, spd: 109, spe: 101},
		abilities: {0: "Sand Force", H: "Tough Claws"},
		heightm: 1.9,
		weightkg: 95,
		prevo: "gabite",
	},
	slowpoke: {
		inherit: true,
		evos: ["Slowbro", "Slowking", "Slowclone"],
	},
	slowclone: {
		num: 270016,
		name: "Slowclone",
		types: ["Water"],
		baseStats: {hp: 120, atk: 100, def: 100, spa: 75, spd: 75, spe: 20},
		abilities: {0: "Shell Armor", 1: "Oblivious", H: "Water Veil"},
		heightm: 2,
		weightkg: 120,
		prevo: "slowpoke",
	},
	gyarados: {
		inherit: true,
		evos: ["Lordiathan"],
	},
	lordiathan: {
		num: 270017,
		name: "Lordiathan",
		types: ["Water","Flying"],
		baseStats: {hp: 100, atk: 135, def: 100, spa: 55, spd: 90, spe: 90},
		abilities: {0: "Mold Breaker", H: "Dragon's Maw"},
		heightm: 6.5,
		weightkg: 305,
		prevo: "gyarados",
	},
	sharpedo: {
		inherit: true,
		evos: ["Gnashark"],
	},
	gnashark: {
		num: 270018,
		name: "Gnashark",
		types: ["Water","Dark"],
		baseStats: {hp: 75, atk: 124, def: 45, spa: 111, spd: 45, spe: 110},
		abilities: {0: "Strong Jaw", H: "No Guard"},
		heightm: 2.5,
		weightkg: 130.3,
		prevo: "sharpedo",
	},
	gengar: {
		inherit: true,
		evos: ["Dimster"],
	},
	dimster: {
		num: 270019,
		name: "Dimster",
		types: ["Ghost","Steel"],
		baseStats: {hp: 70, atk: 65, def: 70, spa: 130, spd: 85, spe: 110},
		abilities: {0: "Shadow Tag", H: "Emergency Exit"},
		heightm: 1.4,
		weightkg: 40.5,
		prevo: "gengar",
	},
	kangatwo: {
		num: 270020,
		name: "Kangatwo",
		types: ["Normal","Ground"],
		baseStats: {hp: 120, atk: 108, def: 81, spa: 30, spd: 90, spe: 91},
		abilities: {0: "Early Bird", 1: "Sap Sipper", H: "Parental Bond"},
		heightm: 2.2,
		weightkg: 100,
	},
	lucario: {
		inherit: true,
		evos: ["Kylario"],
	},
	kylario: {
		num: 270021,
		name: "Kylario",
		types: ["Fighting","Steel"],
		baseStats: {hp: 75, atk: 120, def: 105, spa: 105, spd: 70, spe: 80},
		abilities: {0: "Steadfast", 1: "Inner Focus", H: "Adaptability"},
		heightm: 1.3,
		weightkg: 57.5,
		prevo: "lucario",
	},
	glalie: {
		inherit: true,
		evos: ["Horrfrost"],
	},
	horrfrost: {
		num: 270022,
		name: "Horrfrost",
		types: ["Ice","Ground"],
		baseStats: {hp: 80, atk: 95, def: 75, spa: 95, spd: 65, spe: 110},
		abilities: {0: "Inner Focus", 1: "Ice Body", H: "Refrigerate"},
		heightm: 2.1,
		weightkg: 350.2,
		prevo: "glalie",
	},
	abomasnow: {
		inherit: true,
		evos: ["Blizzarex"],
	},
	blizzarex: {
		num: 270023,
		name: "Blizzarex",
		types: ["Grass","Ice"],
		baseStats: {hp: 90, atk: 130, def: 85, spa: 99, spd: 85, spe: 55},
		abilities: {0: "Snow Warning", H: "Grassy Surge"},
		heightm: 2.7,
		weightkg: 185.0,
		prevo: "abomasnow",
	},
	audino: {
		inherit: true,
		evos: ["Nurseheary"],
	},
	nurseheary: {
		num: 270024,
		name: "Nurseheary",
		types: ["Normal","Fairy"],
		baseStats: {hp: 105, atk: 75, def: 90, spa: 75, spd: 90, spe: 60},
		abilities: {0: "Healer", 1: "Regenerator", H: "Triage"},
		heightm: 1.5,
		weightkg: 32.0,
		prevo: "audino",
	},
	aggron: {
		inherit: true,
		evos: ["Pulgasaron"],
	},
	pulgasaron: {
		num: 270025,
		name: "Pulgasaron",
		types: ["Steel"],
		baseStats: {hp: 80, atk: 115, def: 185, spa: 60, spd: 60, spe: 70},
		abilities: {0: "Sturdy", 1: "Filter", H: "Heavy Metal"},
		heightm: 2.2,
		weightkg: 395.0,
		prevo: "aggron",
	},
	onix: {
		inherit: true,
		evos: ["Steelix", "Orichalix"],
	},
	orichalix: {
		num: 270026,
		name: "Orichalix",
		types: ["Steel","Dragon"],
		baseStats: {hp: 75, atk: 75, def: 160, spa: 75, spd: 65, spe: 110},
		abilities: {0: "Sand Force", 1: "Sturdy", H: "Rough Skin"},
		heightm: 10.5,
		weightkg: 740.0,
		prevo: "onix",
	},
	camerupt: {
		inherit: true,
		evos: ["Humpeii"],
	},
	humpeii: {
		num: 270027,
		name: "Humpeii",
		types: ["Fire","Ground"],
		baseStats: {hp: 100, atk: 100, def: 70, spa: 110, spd: 75, spe: 55},
		abilities: {0: "Magma Armor", 1: "Solid Rock", H: "Sheer Force"},
		heightm: 2.5,
		weightkg: 320.5,
		prevo: "camerupt",
	},
	sableye: {
		inherit: true,
		evos: ["Sabsidian"],
	},
	sabsidian: {
		num: 270028,
		name: "Sabsidian",
		types: ["Dark","Ghost"],
		baseStats: {hp: 70, atk: 85, def: 130, spa: 75, spd: 75, spe: 25},
		abilities: {0: "Keen Eye", 1: "Stall", H: "Magic Bounce"},
		heightm: 0.5,
		weightkg: 161.0,
		prevo: "sableye",
	},	
	gardevoir: {
		inherit: true,
		evos: ["Gracefuld"],
	},
	gracefuld: {
		num: 270029,
		name: "Gracefuld",
		types: ["Psychic","Fairy"],
		baseStats: {hp: 70, atk: 55, def: 78, spa: 130, spd: 125, spe: 100},
		abilities: {0: "Pixilate", 1: "Trace", H: "Queenly Majesty"},
		heightm: 1.6,
		weightkg: 48.4,
		prevo: "gardevoir",
	},	
	altaria: {
		inherit: true,
		evos: ["Baritaria"],
	},
	baritaria: {
		num: 270030,
		name: "Baritaria",
		types: ["Dragon","Fairy"],
		baseStats: {hp: 75, atk: 100, def: 95, spa: 60, spd: 130, spe: 80},
		abilities: {0: "Natural Cure", H: "Pixilate"},
		heightm: 1.5,
		weightkg: 20.6,
		prevo: "altaria",
	},
	mawile: {
		inherit: true,
		evos: ["Mawtale"],
	},
	mawtale: {
		num: 270031,
		name: "Mawtale",
		types: ["Fairy","Dark"],
		baseStats: {hp: 70, atk: 60, def: 125, spa: 110, spd: 70, spe: 25},
		abilities: {0: "Sheer Force", 1: "Intimidate", H: "Huge Power"},
		heightm: 1.0,
		weightkg: 23.5,
		prevo: "mawile",
	},
	beedrill: {
		inherit: true,
		evos: ["Abhornet"],
	},
	abhornet: {
		num: 270032,
		name: "Abhornet",
		types: ["Bug","Poison"],
		baseStats: {hp: 65, atk: 120, def: 50, spa: 15, spd: 80, spe: 135},
		abilities: {0: "Adaptability", H: "Sniper"},
		heightm: 1.4,
		weightkg: 40.5,
		prevo: "beedrill",
	},
	pidgeot: {
		inherit: true,
		evos: ["Pidgeastroph"],
	},
	pidgeastroph: {
		num: 270033,
		name: "Pidgeastroph",
		types: ["Fire","Flying"],
		baseStats: {hp: 83, atk: 75, def: 75, spa: 110, spd: 75, spe: 121},
		abilities: {0: "No Guard", 1: "Tangled Feet", H: "Gale Wings"},
		heightm: 2.2,
		weightkg: 50.5,
		prevo: "pidgeot",
	},
	alakazam: {
		inherit: true,
		evos: ["Hocusfocus"],
	},
	hocusfocus: {
		num: 270034,
		name: "Hocusfocus",
		types: ["Psychic"],
		baseStats: {hp: 66, atk: 51, def: 46, spa: 137, spd: 108, spe: 122},
		abilities: {0: "Trace", 1: "Levitate", H: "Magic Guard"},
		heightm: 1.2,
		weightkg: 48.0,
		prevo: "alakazam",
	},
	aerodactyl: {
		inherit: true,
		evos: ["Lophodactylus"],
	},
	lophodactylus: {
		num: 270035,
		name: "Lophodactylus",
		types: ["Rock","Flying"],
		baseStats: {hp: 80, atk: 105, def: 75, spa: 60, spd: 75, spe: 140},
		abilities: {0: "Rock Head", 1: "Unnerve", H: "Tough Claws"},
		heightm: 2.1,
		weightkg: 79.0,
		prevo: "aerodactyl",
	},
	manectric: {
		inherit: true,
		evos: ["Veloshock"],
	},
	veloshock: {
		num: 270036,
		name: "Veloshock",
		types: ["Electric","Fire"],
		baseStats: {hp: 70, atk: 65, def: 90, spa: 110, spd: 60, spe: 130},
		abilities: {0: "Static", 1: "Lightning Rod", H: "Intimidate"},
		heightm: 1.8,
		weightkg: 44.0,
		prevo: "manectric",
	},
	absol: {
		inherit: true,
		evos: ["Abyssoil"],
	},
	abyssoil: {
		num: 270037,
		name: "Abyssoil",
		types: ["Dark","Ground"],
		baseStats: {hp: 70, atk: 125, def: 60, spa: 100, spd: 60, spe: 110},
		abilities: {0: "Magic Bounce", 1: "Unaware", H: "Justified"},
		heightm: 1.2,
		weightkg: 49.0,
		prevo: "absol",
	},
	lopunny: {
		inherit: true,
		evos: ["Harelock"],
	},
	harelock: {
		num: 270038,
		name: "Harelock",
		types: ["Normal"],
		baseStats: {hp: 90, atk: 120, def: 55, spa: 54, spd: 96, spe: 110},
		abilities: {0: "Scrappy", 1: "Limber", H: "Fur Coat"},
		heightm: 1.3,
		weightkg: 28.3,
		prevo: "lopunny",
	},
	gallade: {
		inherit: true,
		evos: ["Valiadin"],
	},
	valiadin: {
		num: 270039,
		name: "Valiadin",
		types: ["Psychic","Fighting"],
		baseStats: {hp: 68, atk: 135, def: 75, spa: 65, spd: 115, spe: 100},
		abilities: {0: "Justified", 1: "Inner Focus", H: "Technician"},
		heightm: 1.6,
		weightkg: 56.4,
		prevo: "gallade",
	},
	celarias: {
		num: 270040,
		name: "Celarias",
		types: ["Dragon","Water"],
		baseStats: {hp: 80, atk: 80, def: 130, spa: 90, spd: 110, spe: 110},
		abilities: {0: "Levitate"},
		heightm: 1.8,
		weightkg: 52.0,
	},
	celarios: {
		num: 270041,
		name: "Celarios",
		types: ["Dragon","Electric"],
		baseStats: {hp: 80, atk: 110, def: 80, spa: 110, spd: 90, spe: 130},
		abilities: {0: "Levitate"},
		heightm: 2.3,
		weightkg: 70.0,
	},
	diachess: {
		num: 270042,
		name: "Diachess",
		types: ["Rock","Fairy"],
		baseStats: {hp: 90, atk: 100, def: 100, spa: 125, spd: 90, spe: 95},
		abilities: {0: "Magic Bounce"},
		heightm: 1.1,
		weightkg: 27.8,
	},
	sceptile: {
		inherit: true,
		evos: ["Jungyle"],
	},
	jungyle: {
		num: 270043,
		name: "Jungyle",
		types: ["Grass","Dragon"],
		baseStats: {hp: 70, atk: 110, def: 75, spa: 140, spd: 75, spe: 110},
		abilities: {0: "Overgrow", H: "Lightning Rod"},
		heightm: 1.9,
		weightkg: 55.2,
	},
	blaziken: {
		inherit: true,
		evos: ["Conflagraken"],
	},
	conflagraken: {
		num: 270044,
		name: ["Conflagraken"],
		types: ["Fire","Fighting"],
		baseStats: {hp: 80, atk: 125, def: 75, spa: 135, spd: 80, spe: 80},
		abilities: {0: "Blaze", H: "Speed Boost"},
		heightm: 1.9,
		weightkg: 52.0,
	},
	swampert: {
		inherit: true,
		evos: ["Burrowcean"],
	},
	burrowcean: {
		num: 270045,
		name: ["Burrowcean"],
		types: ["Water","Ground"],
		baseStats: {hp: 110, atk: 130, def: 95, spa: 85, spd: 95, spe: 70},
		abilities: {0: "Torrent", H: "Swift Swim"},
		heightm: 1.9,
		weightkg: 102.0,
	},
};