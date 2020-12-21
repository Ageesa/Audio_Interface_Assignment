//* Assigning variable to the clickable Flag Svg , to assign click event and call play audio  function later 
let mexicoMusic = document.getElementById(`mxflg`)
let indiaMusic = document.getElementById(`inflg`)
let spainMusic = document.getElementById(`spflg`)
let tanzMusic = document.getElementById(`tnflg`)
let chinaMusic= document.getElementById(`cnflg`)
let brazilMusic= document.getElementById(`brflg`)
let player = document.querySelector(`.popup`)
let pausebtn = document.getElementById(`ps`)
let elePics = document.querySelector(`.destinations`)

let sfxm = new Audio(`audio/Mexico.mp3`)// Audio files for each country
let sfxi = new Audio(`audio/India.mp3`)
let sfxs = new Audio(`audio/Spain.mp3`)
let sfxt = new Audio(`audio/Tanzania.mp3`)
let sfxc = new Audio(`audio/asia.mp3`)
let sfxb = new Audio(`audio/brazilsamba.mp3`)

/* pause the music if playing*/
let pauseAll = function(){
    sfxm.pause()
    sfxi.pause()
    sfxs.pause()
    sfxt.pause()
    sfxc.pause()
    sfxb.pause()
    player.style.display="none";
}

// Function to Play a music for a country 
let playMex = function() { //Music for Mexico
        sfxm.play()
        sfxi.pause()
        sfxs.pause()
        sfxt.pause()
        sfxc.pause()
        sfxb.pause()
        elePics.src="images/mexico.jpg";
        player.style.display="block";
}

let playInd = function() { //Music for India
    sfxm.pause()
    sfxs.pause()
    sfxt.pause()
    sfxc.pause()
    sfxb.pause()
    sfxi.play()
    elePics.src="images/india.jpg";
    player.style.display="block";
}

let playSpn = function() { //Music for Spain
sfxm.pause()
sfxi.pause()
sfxt.play()
sfxc.pause()
sfxb.pause()
 sfxs.play()
 elePics.src="images/spain.jpg";
 player.style.display="block";
}
let playTnz = function() { //Music for Tanzania
sfxm.pause()
sfxi.pause()
sfxs.pause()
sfxt.play()
sfxc.pause()
sfxb.pause()
elePics.src="images/africa.jpg";
player.style.display="block";
}

let playCn = function() { // Music for China
sfxm.pause()
sfxi.pause()
sfxs.pause()
sfxt.pause()
sfxc.play()
sfxb.pause()
elePics.src="images/china.jpg";
player.style.display="block";
}

let playBl = function() { // Music for Brazil
sfxm.pause()
sfxi.pause()
sfxs.pause()
sfxt.pause()
sfxc.pause()
sfxb.play()
elePics.src="images/samba.jpg";
player.style.display="block";
 
}

//Adding the Event  :that is play music funtion on click
mexicoMusic.addEventListener(`click`, playMex)   
indiaMusic.addEventListener(`click`, playInd)  
spainMusic.addEventListener(`click`, playSpn)
tanzMusic.addEventListener(`click`, playTnz)
chinaMusic.addEventListener(`click`, playCn)
brazilMusic.addEventListener(`click`, playBl)
pausebtn.addEventListener(`click`, pauseAll)


