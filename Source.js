var MoreTopics = {};
(function () {
        MoreTopics.addTopic = function () {
        GDT.addTopics([
                {
                        id: "Incremental",
                        name: "Incremental".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
				},  {
                        id: "Tactical",
                        name: "Tactical".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                },  {
                        id: "Bullet Hell",
                        name: "Bullet Hell".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
				},  {
                        id: "Samurai",
                        name: "Samurai".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
				},  {
                        id: "MOBA",
                        name: "MOBA".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
				},  {
                        id: "Creation",
                        name: "Creation".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
				},  {
                        id: "Sandbox",
                        name: "Sandbox".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
				},  {
                        id: "Wrestling",
                        name: "Wrestling".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
				},  {
                        id: "Jigsaw",
                        name: "Jigsaw".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
				},  {		
                        id: "Bacon",
                        name: "Bacon".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
				},  { 
                        id: "Chicken",
                        name: "Chicken".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
				},  { 
                        id: "Steam Punk",
                        name: "Steam Punk".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
				},  { 
                        id: "Prehistoric",
                        name: "Prehistoric".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]			
				},  { 
                        id: "Magic",
                        name: "Magic".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]	
				},  { 
                        id: "Love Craft",
                        name: "Love Craft".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
				},  { 
                        id: "Alchemy",
                        name: "Alchemy".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
				},  { 
                        id: "Music",
                        name: "Music".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
				},  { 
                        id: "Platformer",
                        name: "Platformer".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
				},  { 
                        id: "Super Hero",
                        name: "Super Hero".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
				},  { 
                        id: "Conquest",
                        name: "Conquest".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]				
				},  { 
                        id: "Turn Based",
                        name: "Turn Based".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
				},  { 
                        id: "Mythology",
                        name: "Mythology".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
				},  { 
                        id: "Trading Cards",
                        name: "Trading Cards".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
				},  { 
                        id: "Super Villain",
                        name: "Super Villain".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
				},  { 
                        id: "Rhythm",
                        name: "Rhythm".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]		
				},  { 
                        id: "Party Game",
                        name: "Party Game".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                },  { 
                        id: "Point and click",
                        name: "Point and click".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                },  { 
                        id: "Wasteland",
                        name: "Wasteland".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]			
                },  { 
                        id: "Bike",
                        name: "Bike".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]	
                },  { 
                        id: "Ragdoll",
                        name: "Ragdoll".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]		
                },  { 
                        id: "Launcher",
                        name: "Launcher".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                },  { 
                        id: "Virus",
                        name: "Virus".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                },  { 
                        id: "Elephant",
                        name: "Elephant".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                },  { 
                        id: "Point and click",
                        name: "Point and click".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                },  { 
                        id: "Zombie",
                        name: "Zombie".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                },  { 
                        id: "Tower Defense",
                        name: "Tower Defense".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                },  { 
                        id: "Business",
                        name: "Business".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                },  { 
                        id: "Retro",
                        name: "Retro".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                 },  { 
                        id: "War",
                        name: "War".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                 },  { 
                        id: "Gravity",
                        name: "Gravity".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                },  { 
                        id: "Fairy Tail",
                        name: "Point and click".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                },  { 
                        id: "Economics",
                        name: "Economics".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                },  { 
                        id: "Tanks",
                        name: "Tanks".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                },  { 
                        id: "Gladiator",
                        name: "Gladiator".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
               },  { 
                        id: "Halloween",
                        name: "Halloween".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
               },  { 
                        id: "Christmas",
                        name: "Christmas".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
               },  { 
                        id: "Easter",
                        name: "Easter".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
               },  { 
                        id: "April Fools",
                        name: "April Fools".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
               },  { 
                        id: "Valentines Day",
                        name: "Valentines Day".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
               },  { 
                        id: "Barbarians",
                        name: "Barbarians".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]	
               },  { 
                        id: "Dragons",
                        name: "Dragons".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]		
               },  { 
                        id: "Mining",
                        name: "Mining".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
               },  { 
                        id: "Hunting",
                        name: "Hunting".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]			
                },  { 
                        id: "Farming",
                        name: "Farming".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                },  { 
                        id: "Exploration",
                        name: "Exploration".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                },  { 
                        id: "Cars",
                        name: "Cars".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                },  { 
                        id: "Motor Cycles",
                        name: "Motor Cycles".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                },  { 
                        id: "Weapons",
                        name: "Weapons".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]								
                }
				},  { 
                        id: "Jousting",
                        name: "Jousting".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
               },  { 
                        id: "Gold",
                        name: "Gold".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
               },  { 
                        id: "Building",
                        name: "Building".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                },  { 
                        id: "Brawler",
                        name: "Brawler".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                },  { 
                        id: "Robbery",
                        name: "Robbery".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                },  { 
                        id: "Genetics",
                        name: "Genetics".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                },  { 
                        id: "Kitty Cats",
                        name: "Kitty Cats".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                },  { 
                        id: "Candy",
                        name: "Candy".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                },  { 
                        id: "Cyborgs",
                        name: "Cyborgs".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                 },  { 
                        id: "Daleks",
                        name: "Daleks".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                 },  { 
                        id: "Vampire",
                        name: "Vampire".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                },  { 
                        id: "Werewolves",
                        name: "Werewolves".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                },  { 
                        id: "Darts",
                        name: "Darts".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                },  { 
                        id: "Dinosaurs",
                        name: "Dinosaurs".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                },  { 
                        id: "Loot",
                        name: "Loot".localize("game topic"),
                        genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
                        audienceWeightings: [0.8, 1, 0.8]
                },  { 
                        id: "Cave Men",
                        name: "Cave Men".localize("game topic"),
						genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
						audienceWeightings: [0.6, 1, 1]
				}
			]);
		};

	})();
