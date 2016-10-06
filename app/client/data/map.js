export const weapons = require('./items/weapons.json');

const map = {
  location: {row:1,col:1},
  // "http://bit.ly/2d4jS28"  http://bit.ly/2dcQUM4
  //http://wallpapercave.com/sci-fi-background
  //http://bit.ly/2d4jS28
  //http://bit.ly/2dcQUM4


  images:[[ "https://s-media-cache-ak0.pinimg.com/originals/e8/15/87/e81587a6b72b12019e3f65450070a6c4.jpg", "http://i.imgur.com/gOqnUMH.png", "https://wallpaperscraft.com/image/canyon_desert_horseback_rider_wild_west_cowboy_45538_2048x2048.jpg"],
  ["http://i.imgur.com/kocWoDf.png", "http://wallpapercave.com/wp/565sgAQ.jpg", "https://media.giphy.com/media/12gpW8LFqujYlO/giphy.gif"],
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
  ["0","2","2"],
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


  [[{image: "http://bestanimations.com/Fantasy/Dragons/dragon-animated-gif-40.gif",className: 'dragon', mapSend:[3,0]},{image: 'http://bestanimations.com/Fantasy/bow-warrior-medieval-animation.gif', className: 'archer'},{image:'http://bestanimations.com/Fantasy/knights-fighting-medieval-animation.gif',className: 'knights'}],[],[{className:"flappy",image:"http://bestanimations.com/Animals/Reptiles/Dinosaurs/Dinosaur-10-june.gif"},{sound:"https://a.clyp.it/o2x1rwjo.mp3", className:"thriller", image:"http://bestanimations.com/Animals/Reptiles/Dinosaurs/dinosaur-animated-gif-8.gif"},{image:'http://bestanimations.com/Animals/Reptiles/Dinosaurs/Dinosaur-01-june.gif',className: 'rawr',sound:"https://a.clyp.it/sspvhmed.mp3"},{className:"trice",image:"http://bestanimations.com/Animals/Reptiles/Dinosaurs/dinosaur-animated-gif-1.gif", sound:"https://a.clyp.it/hblpp0cn.mp3"}]],


  [[{image:'http://bestanimations.com/Fantasy/knight-fighting-diablo-deamon-animation.gif',className:'caveFight'}]],
  [],
  [[],[{image:"http://i.imgur.com/A2DDh3m.png"},{image:"http://i.imgur.com/xrOJYnr.png"}],[{image:"http://i.imgur.com/PBaKOvT.png"}]]
  ],

  messages:[["FILL THIS OUT",
  "[Selim]: What is the point of our stand up meetings every morning?! Developing this page was your job Alex! [Alex]: It's too early to stand up, if we had more sit down meetings maybe more would get done around here [Harp]: Guys, our users are listening to you bicker. We apologize Mr. or Mrs. User, click around our code for some extra health and battle one of the Talking Mime's henchmen.",
"[Selim] Looks like you have travelled to our Western theme. The Talking Mime's henchmen are hot on your trail, defeating them is your mane concern, don't disturb the niegh-bors as you make spur of the moment decisions to fight them off. [Answer the riddle to get your Pistol, and click on the gun to hear our beta testers contribution to our game]"],

["[Talking Mime]: Talking Mime here, I'm busy working on a monologue for my next show, but I have sent one of my henchman to wreak havoc on your pathetic game. Try to stop him if you can. [Instructions] Click on the Talking Mime's henchman to battle him!",
"[Alex]Hmm, so we made progress on our maps, but our game features aren't done.. Quick, we need a storyline to cover this up! [Harp] I got it!...The year is 3058 according to a select few record keepers. New age hipsters and Talking Mimes have taken over the world and declared time as relative, banning the recording of time and erasing history as we know it. Use your time travel ability to click around our map to different era's to prove history happened, and collect items to battle the Talking Mime and his henchmen.",
"OH NO! Your time travelling has got you caught up in a time warp. Answer the riddle to escape and to stop your head from spinning. If the time warp causes you any type of medical distress, read the fine print on our sign up page, we are not liable for any damages :D "],

["[Talking Mime] My army of Talking Mime's has set upon your castle! We all watched a Charlie Chaplin flick to drive us into a rage!! We are the voice for the voiceless!! I dare you to stop my attack. [Instruction] Click around the map to find the best way to escape the attack on your castle and battle the Talking Mime!",
"[Alex]: I feel like we're missing something. Executive decision - travel West for Dinosaurs! [Selim]: Oh dearlord, is this what we've come too..",
"Watch out!! You travelled to an era full of dinosaurs. Remember all the tips you have learned from dinosaur movies over the years. Raptors are smart, T-rex's are the top of the food chain, giant electric cages cannot hold dinosaurs, and always say something quirky before and after a near death experience. Looks like the Talking Mime's henchman followed you through time, they are lurking at every corner. Don't be a coward, go to battle! [Click on the dinosaurs to see what they do!]"
],

["This is a cave!!!!"],
[],
["Hello! We've updated our map recently, I hope you like it. Unfortunately, we forgot to finish the battle page, maybe you could find the missing pieces in here?","Harp: Great news! I convinced the development team to make this a fantasy themed game. I was outnumbered, but like any hobbit knows, size doesn't matter!", "Alex: PFT! Fantasy? Get a grip on reality man! As 'Lead Engineer' I declare this a Sci Fi game. Welcome to the future! "]],

  riddles:[["","",{question: "How many horse puns are used in the story line for this map?", answer: "four", reward: weapons["ANTIMATTER_GUN"],className:"sciRiddle",solved:false}],
  ["",{question:" Solve this riddle and get that fancy space gun: the last man on the earth is locked in a room, he hears a knock on the door, who could it be?", answer:"woman", reward:weapons["LAZER_GUN"], className:"sciRiddle", solved:false},{question: "What is blue and smells like red paint?", answer: "blue paint",className: 'sciRiddle',solved: false}],
  [],
  [],
  [],
  []
  ]
}


export default map;