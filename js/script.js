let isPlaying = false
let mexicoMusic = document.getElementById(`mxflg`)
let indiaMusic = document.getElementById(`inflg`)
let spainMusic = document.getElementById(`spflg`)
let tanzMusic = document.getElementById(`tnflg`)
let chinaMusic= document.getElementById(`cnflg`)
let brazilMusic= document.getElementById(`brflg`)
let player = document.querySelector(`.popup`)
let pausebtn = document.getElementById(`ps`)

let sfxm = new Audio(`audio/Mexico.mp3`)
let sfxi = new Audio(`audio/India.mp3`)
let sfxs = new Audio(`audio/Spain.mp3`)
let sfxt = new Audio(`audio/Tanzania.mp3`)
let sfxc = new Audio(`audio/asia.mp3`)
let sfxb = new Audio(`audio/brazilsamba.mp3`)


let pauseAll = function(){
    sfxm.pause()
    sfxi.pause()
    sfxs.pause()
    sfxt.pause()
    sfxc.pause()
    sfxb.pause()
}

let playMex = function() {
        sfxm.play()
        sfxi.pause()
        sfxs.pause()
        sfxt.pause()
        sfxc.pause()
        sfxb.pause()

}

let playInd = function() {
    sfxm.pause()
    sfxs.pause()
    sfxt.pause()
    sfxc.pause()
    sfxb.pause()
    sfxi.play()
}

let playSpn = function() {
sfxm.pause()
sfxi.pause()
sfxt.play()
sfxc.pause()
sfxb.pause()
 sfxs.play()
}
let playTnz = function() {
sfxm.pause()
sfxi.pause()
sfxs.pause()
sfxt.play()
sfxc.pause()
sfxb.pause()
}
let playCn = function() {
sfxm.pause()
sfxi.pause()
sfxs.pause()
sfxt.pause()
sfxc.play()
sfxb.pause()
}
let playBl = function() {
sfxm.pause()
sfxi.pause()
sfxs.pause()
sfxt.pause()
sfxc.pause()
sfxb.play()
 
}

mexicoMusic.addEventListener(`click`, playMex)   
indiaMusic.addEventListener(`click`, playInd)  
spainMusic.addEventListener(`click`, playSpn)
tanzMusic.addEventListener(`click`, playTnz)
chinaMusic.addEventListener(`click`, playCn)
brazilMusic.addEventListener(`click`, playBl)
pausebtn.addEventListener(`click`, pauseAll)


