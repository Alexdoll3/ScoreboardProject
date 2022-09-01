// home section
let homeBtnOne = document.getElementById("home+1")
let homeBtnTwo = document.getElementById("home+2")
let homeBtnThree = document.getElementById("home+3")
let resetHome = document.getElementById("resetBtnHome")
let homeStoreEl = document.getElementById("home-score")
let homeScore = 0

function add1Home() {
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

function add2Home() {
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

function add3Home() {
    homeScore += 3
    homeStoreEl.textContent = homeScore
}
   
function resetBtnHome() {
    homeScore = 0
    homeStoreEl.textContent = homeScore
}

// away section
let awayBtnOne = document.getElementById("away+1")
let awayBtnTwo = document.getElementById("away+2")
let awayBtnThree = document.getElementById("away+3")
let resetAway = document.getElementById("resetBtnAway")
let awayStoreEl = document.getElementById("away-score")
let awayScore = 0

function add1Away() {
    awayScore += 1
    awayStoreEl.textContent = awayScore
}

function add2Away() {
    awayScore += 2
    awayStoreEl.textContent = awayScore
}

function add3Away() {
    awayScore += 3
    awayStoreEl.textContent = awayScore
}

function resetBtnAway() {
    awayScore = 0
    awayStoreEl.textContent = awayScore
}