export const weapons = require('./items/weapons.json');

const map = {
  location: {row:1,col:1},
  // "http://bit.ly/2d4jS28"  http://bit.ly/2dcQUM4
  //http://wallpapercave.com/sci-fi-background
  //http://bit.ly/2d4jS28
  //http://bit.ly/2dcQUM4
//https://s-media-cache-ak0.pinimg.com/originals/e8/15/87/e81587a6b72b12019e3f65450070a6c4.jpg

  images:[[ "photos/artHere.png", "http://i.imgur.com/gOqnUMH.png", "https://wallpaperscraft.com/image/canyon_desert_horseback_rider_wild_west_cowboy_45538_2048x2048.jpg"],
  ["http://i.imgur.com/kocWoDf.png", "http://wallpapercave.com/wp/565sgAQ.jpg", "http://bit.ly/2cGiroJ"],
  ["https://images5.alphacoders.com/374/374820.jpg", "http://i.imgur.com/YhZqhgN.png", "http://cdn.wallpapersafari.com/16/58/qDXKtC.jpg"],
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
  ["0","",""]],

  features: [["", "spells", ""],
  [],
  ["", "inventory", ""],
  [],
  [],
  ["","health","actions"]],



  easterEggs:[[[{className:"clippy", image:"https://media.giphy.com/media/XbPoIsyy9xqjS/200.gif"}] ,"",[{image:"http://i.imgur.com/f2rt3Zy.png", sound:"https://a.clyp.it/mq5rd1d1.mp3", className:"bang"}]],


  [[],[{image:"http://i.imgur.com/5kyJyll.png", sound:"https://a.clyp.it/cn4un2pr.mp3"},{image:'http://bestanimations.com/Sci-Fi/UFOs/ufo-flying-saucer-animated-gif-14.gif', className: 'spaceship'},{image: 'http://bestanimations.com/Sci-Fi/UFOs/UFO-12-june.gif', className: 'spaceship2'},{image: 'http://bestanimations.com/Sci-Fi/UFOs/UFO-08-june.gif',className: 'spaceship3'}]],


  [[],[{image:"http://i.imgur.com/5kyJyll.png", sound:"https://a.clyp.it/cn4un2pr.mp3", className:"pew"},{image:'http://bestanimations.com/Sci-Fi/UFOs/ufo-flying-saucer-animated-gif-14.gif', className: 'spaceship'},{image: 'http://bestanimations.com/Sci-Fi/UFOs/UFO-12-june.gif', className: 'spaceship2'},{image: 'http://bestanimations.com/Sci-Fi/UFOs/UFO-08-june.gif',className: 'spaceship3'}]],
  [[{image: "http://bestanimations.com/Fantasy/Dragons/dragon-animated-gif-40.gif",className: 'dragon', mapSend:[3,0]},{image: 'http://bestanimations.com/Fantasy/bow-warrior-medieval-animation.gif', className: 'archer'},{image:'http://bestanimations.com/Fantasy/knights-fighting-medieval-animation.gif',className: 'knights'}],[],[{className:"flappy",image:"http://bestanimations.com/Animals/Reptiles/Dinosaurs/Dinosaur-10-june.gif"},{sound:"https://a.clyp.it/o2x1rwjo.mp3", className:"thriller", image:"http://bestanimations.com/Animals/Reptiles/Dinosaurs/dinosaur-animated-gif-8.gif"},{image:'http://bestanimations.com/Animals/Reptiles/Dinosaurs/Dinosaur-01-june.gif',className: 'rawr',sound:"https://a.clyp.it/sspvhmed.mp3"},{className:"trice",image:"http://bestanimations.com/Animals/Reptiles/Dinosaurs/dinosaur-animated-gif-1.gif", sound:"https://a.clyp.it/hblpp0cn.mp3"}]],


  [[{image:'http://bestanimations.com/Fantasy/knight-fighting-diablo-deamon-animation.gif',className:'caveFight'}]],
  [],
  [[],[{image:"http://i.imgur.com/A2DDh3m.png"},{image:"http://i.imgur.com/xrOJYnr.png"}],[{image:"http://i.imgur.com/PBaKOvT.png"}]]
  ],

  messages:[["The year is 3058 according to a select few record keepers. New age hipsters and Talking Mimes have taken over the world and declared time as relative, banning the recording of time and erasing history as we know it. Use your time travel ability to click around our map to different era's and prove that history did happen!",
  "[Selim]: What if we tried an old western theme instead? [Alex]: That makes no sense with magic in the game [Selim]: Oh, and steampunk does?? [Alex]: But steampunk is so coooooool!!!",
"Woah! Cowboy steampunk? Will will smith smith a giant robot spider? Yes, I think Will smith will smith a giant robot spider[giant robot spider item] "],

["[Alex]:Oooo ya Know what would be cooler than fantasy? STEAMPUNK!!! [Harp]: What?! That doesn't make any sense with magic in the game! [Alex]: Fine then, you just don't have to visit steampunk-theme then ",
"[Alex]Hmm, so we made progress on our maps, but our game features aren't done.. Quick, we need a storyline to cover this up! [Harp] I got it!...The year is 3058 according to a select few record keepers. New age hipsters and Talking Mimes have taken over the world and declared time as relative, banning the recording of time and erasing history as we know it. Use your time travel ability to click around our map to different era's to prove history happened, and collect items to battle the Talking Mime and his henchmen.",
"Howdy pardner, them high-fulutin software developers don't know how to decide on a theme! Why don't you click on that gun over there?"],

["[Talking Mime] My army of Talking Mime's has set upon your castle! We all watched a Charlie Chaplin flick to drive us into a rage!! We are the voice for the voiceless!! I dare you to stop my attack. [Instruction] Find the best way to escape the attack on your castle and battle the talking mime!",
"[Alex]:Fantasy sucks so much man, might as well make a game that has DINOSAURS in it.  [Harp]: Please tell me your not making this game have dinosaurs in it... ",
""
],

["This is a cave!!!!"],
[],
["Hello! We've updated our map recently, I hope you like it. Ufortunately, we forgot to finish the battle page, maybe you could find the missing pieces in here?","Harp: Great news! I convinced the development team to make this a fantasy themed game. I was outnumbered, but like any hobbit knows, size doesn't matter!", "Alex: PFT! Fantasy? Get a grip on reality man! As 'Lead Engineer' I declare this a Sci Fi game. Welcome to the future! "]],

  riddles:[[],
  ["",{question:" Solve this riddle and get that fancy space gun: the last man on the earth is locked in a room, he hears a knock on the door, who could it be?", answer:"woman", reward:weapons["LAZER_GUN"], className:"sciRiddle", solved:false}],
  [],
  [],
  [],
  []
  ]
}


export default map;