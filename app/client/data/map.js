export const weapons = require('./items/weapons.json');

const map = {
  location: {row:1,col:1},
  // "http://bit.ly/2d4jS28"  http://bit.ly/2dcQUM4
  //http://wallpapercave.com/sci-fi-background
  images:[[ "http://wallpapercave.com/wp/565sgAQ.jpg","http://bit.ly/2d4k9lv", "http://bit.ly/2cGimRX",],
  ["http://bit.ly/2cUn5lV","http://bit.ly/2crqNnU", "http://bit.ly/2cGiroJ"],
  ["http://bit.ly/2dxWrl2", "http://bit.ly/2d4jS28", "http://bit.ly/2dcQUM4"],
  ["https://hikemtshasta.files.wordpress.com/2013/04/cascades-plutos-cave-feb2013-047-copy-custom.jpg","http://bit.ly/2dcQUM4"]
  ],

  items: [[{name: "god-tier Sword", type: "meele", dmg: 12, stat: "str", equip: "rightHand"},{},{},{},{},{},{},{},{}],
  [],
  [],
  []],
  descriptions: [["description1", "description2", "description3", "description4", "description5", "description6", "description7", "description8", "description9"],
  [],
  [],
  []],
  enemyIds: [["3", "2", "1"],
  ["0"],
  ["1"],
  []],
  features: [["", "healthBar", "actions"],
  [],
  ["spells", "inventory", "items"],
  []],


  easterEggs:[[ [{image:"http://i.imgur.com/5kyJyll.png", sound:"https://a.clyp.it/cn4un2pr.mp3"}],""],

  [[{image:"http://i.imgur.com/f2rt3Zy.png", sound:"https://a.clyp.it/mq5rd1d1.mp3"}]],
  [[{image: "http://bestanimations.com/Fantasy/Dragons/dragon-animated-gif-40.gif"},{image: "http://bestanimations.com/Fantasy/Monsters/animated-balrog-gif.gif", className: 'monster'}]],
  [[{image:'http://bestanimations.com/Fantasy/knight-fighting-diablo-deamon-animation.gif'},{image: "http://bestanimations.com/Fantasy/Dragons/dragon-animated-gif-40.gif"}]]],

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

["This is a cave!!!!"]],

  riddles:[[{question:" Solve this riddle and get that fancy space gun: the last man on the earth is locked in a room, he hears a knock on the door, who could it be?", answer:"woman", reward:weapons["LAZER_GUN"]}],
  [],
  [],
  []
  ]

}

export default map;