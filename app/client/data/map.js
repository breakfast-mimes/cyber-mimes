export const weapons = require('./items/weapons.json');

const map = {
  location: {row:5,col:0},
  // "http://bit.ly/2d4jS28"  http://bit.ly/2dcQUM4
  //http://wallpapercave.com/sci-fi-background

  images:[[ "http://wallpapercave.com/wp/565sgAQ.jpg","http://free.wallpaperbackgrounds.com/sci%20fi/steampunk/217481-43110.jpg", "http://i.imgur.com/kocWoDf.png"],
  ["https://wallpaperscraft.com/image/canyon_desert_horseback_rider_wild_west_cowboy_45538_2048x2048.jpg","http://bit.ly/2crqNnU", "http://bit.ly/2cGiroJ"],
  ["http://bit.ly/2dxWrl2", "http://bit.ly/2d4jS28", "http://bit.ly/2dcQUM4"],
  ["https://hikemtshasta.files.wordpress.com/2013/04/cascades-plutos-cave-feb2013-047-copy-custom.jpg"],
  [],
  ["http://i.imgur.com/l2PuKhs.png", "http://i.imgur.com/cxwjt5j.png", "http://i.imgur.com/j9hi3HQ.png"]
  ],

  items: [[{name: "god-tier Sword", type: "meele", dmg: 12, stat: "str", equip: "rightHand"},{},{},{},{},{},{},{},{}],
  [],
  [],
  [],
  [],
  ['']],
  descriptions: [["description1", "description2", "description3", "description4", "description5", "description6", "description7", "description8", "description9"],
  [],
  [],
  [],
  [],
  []],
  enemyIds: [["3", "2", "1"],
  ["0","2"],
  ["1"],
  [],
  [],
  ["0"]],

  features: [["", "", "spells"],
  [],
  ["", "inventory", ""],
  [],
  [],
  ["","health","actions"]],


  easterEggs:[[ [{image:"http://i.imgur.com/5kyJyll.png", sound:"https://a.clyp.it/cn4un2pr.mp3"},{image:'http://bestanimations.com/Sci-Fi/UFOs/ufo-flying-saucer-animated-gif-14.gif', className: 'spaceship'},{image: 'http://bestanimations.com/Sci-Fi/UFOs/UFO-12-june.gif', className: 'spaceship2'},{image: 'http://bestanimations.com/Sci-Fi/UFOs/UFO-08-june.gif',className: 'spaceship3'}],""],

  [[{image:"http://i.imgur.com/f2rt3Zy.png", sound:"https://a.clyp.it/mq5rd1d1.mp3"}]],
  [[{image: "http://bestanimations.com/Fantasy/Dragons/dragon-animated-gif-40.gif",className: 'dragon', mapSend:[3,0]},{image: "http://bestanimations.com/Fantasy/Monsters/animated-balrog-gif.gif", className: 'monster'},{image: 'http://bestanimations.com/Fantasy/bow-warrior-medieval-animation.gif', className: 'archer'},{image:  'http://bestanimations.com/Fantasy/knights-fighting-medieval-animation.gif',className: 'knights'}]],
  [[{image:'http://bestanimations.com/Fantasy/knight-fighting-diablo-deamon-animation.gif',className:'caveFight'}]],
  [],
  [[]]
  ],

  messages:[["Lazers and space ships, oh my!",
  "My my, you don't look fancy enough to be in the steam punch genre! Take the corset, won't you?",
"Woah! Cowboy steampunk? Will will smith smith a giant robot spider? Yes, I think Will smith will smith a giant robot spider[giant robot spider item] "],

["Skip this page, possibly in the map, so that they cant move forward to it, but it sets them on the page after this after they battle on the previous page",
"Welcome! I'm fondly known as the Talking Mime! Pleased to meet you. Do you like riddles? You better! Cause in order to finish the lazy programmers jobs, you need to solve riddles to get the features for the battle screen :D",
"Howdy pardner, them high-fulutin software developers don't know how to decide on a theme! Why don't you click on that gun over there?[easter egg, picutre of gun that has yueh saying 'BANG BANG]'"],

["[Talking Mime] My army of Talking Mime's has set upon your castle! We all watched a Charlie Chaplin flick to drive us into a rage!! We are the voice for the voiceless!! I dare you to stop my attack. [Instruction] Find the best way to escape the attack on your castle and battle the talking mime!",
"[Alex]: I needed an outlet for my bad jokes, I'm gonna add in a Jester character! [Harp]: Oh dear god, please no [Alex]: Too late (add Jester sound effect, alex talking)",
""
],

["This is a cave!!!!"],
[],
["Hello! We've updated our map recently, I hope you like it. Ufortunately, we forgot to finish the battle page, maybe you could find the missing pieces in here?"]],

  riddles:[[{question:" Solve this riddle and get that fancy space gun: the last man on the earth is locked in a room, he hears a knock on the door, who could it be?", answer:"woman", reward:weapons["LAZER_GUN"], className:"sciRiddle", solved:false}],
  [],
  [],
  [],
  [],
  []
  ]

}

export default map;