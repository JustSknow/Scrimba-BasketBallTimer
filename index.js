let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let hScore = 0
let gScore = 0

function homePlus1() {
    hScore += 1
    homeScore.textContent = hScore
}

function homePlus2() {
    hScore += 2
    homeScore.textContent = hScore
}

function homePlus3() {
    hScore += 3
    homeScore.textContent = hScore
}


function guestPlus1() {
    gScore += 1
    guestScore.textContent = gScore    
}

function guestPlus2() {
    gScore += 2
    guestScore.textContent = gScore 
}

function guestPlus3() {
    gScore += 3
    guestScore.textContent = gScore  
}

function reset() {
    hScore = 0
    gScore = 0
    guestScore.textContent = gScore
    homeScore.textContent = hScore
}