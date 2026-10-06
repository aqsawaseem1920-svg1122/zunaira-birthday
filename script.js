// =========================
// MUSIC
// =========================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");


// =========================
// OPEN SURPRISE
// =========================

function openWish() {

    // Start music after button click
    music.play().then(() => {

        musicBtn.innerHTML = "🔊";

    }).catch(() => {

        musicBtn.innerHTML = "🔇";

    });


    // Create floating hearts
    createHearts();


    // Type birthday heading
    typeBirthdayTitle();


    // Scroll to birthday section
    setTimeout(() => {

        document.querySelector(".birthday-section").scrollIntoView({
            behavior: "smooth"
        });

    }, 700);

}


// =========================
// MUSIC BUTTON
// =========================

function toggleMusic() {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML = "🔊";

    } else {

        music.pause();

        musicBtn.innerHTML = "🔇";

    }

}


// =========================
// BIRTHDAY TYPING
// =========================

function typeBirthdayTitle() {

    const title = document.getElementById("birthdayTitle");

    const text = "Happy Birthday, Zunaira! 💗";

    let index = 0;

    title.innerHTML = "";


    const typing = setInterval(() => {

        title.innerHTML += text[index];

        index++;


        if (index >= text.length) {

            clearInterval(typing);

        }

    }, 70);

}


// =========================
// FLOATING HEARTS
// =========================

function createHearts() {

    for (let i = 0; i < 15; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.className = "pop-heart";


            const hearts = [
                "💗",
                "💕",
                "💖",
                "✨",
                "🌸"
            ];


            heart.innerHTML =
                hearts[Math.floor(Math.random() * hearts.length)];


            heart.style.left =
                Math.random() * 100 + "%";


            document.body.appendChild(heart);


            setTimeout(() => {

                heart.remove();

            }, 3000);


        }, i * 150);

    }

}


// =========================
// CATCH THE HEARTS GAME
// =========================

let score = 0;

let gameRunning = false;

let heartTimer;


function startGame() {

    if (gameRunning) return;


    score = 0;

    gameRunning = true;


    document.getElementById("score").innerText = score;

    document.getElementById("startGame").style.display = "none";

    document.getElementById("secretMessage").style.display = "none";

    document.getElementById("gameMessage").innerText =
        "Catch 10 hearts! 💗";


    createGameHeart();

}


function createGameHeart() {

    if (!gameRunning) return;


    const gameArea =
        document.getElementById("gameArea");


    const heart =
        document.createElement("button");


    heart.className = "game-heart";

    heart.innerHTML = "💗";


    heart.style.left =
        Math.random() * 85 + "%";


    heart.style.top =
        Math.random() * 75 + "%";


    heart.onclick = function () {

        score++;


        document.getElementById("score").innerText =
            score;


        createSmallPop(heart);


        heart.remove();


        if (score >= 10) {

            finishGame();

        } else {

            createGameHeart();

        }

    };


    gameArea.appendChild(heart);


    heartTimer = setTimeout(() => {

        if (heart.parentElement) {

            heart.remove();

            createGameHeart();

        }

    }, 1500);

}


// =========================
// GAME POP
// =========================

function createSmallPop(heart) {

    const pop =
        document.createElement("div");


    pop.className = "click-pop";

    pop.innerText = "✨";


    pop.style.left =
        heart.style.left;


    pop.style.top =
        heart.style.top;


    document.getElementById("gameArea")
        .appendChild(pop);


    setTimeout(() => {

        pop.remove();

    }, 600);

}


// =========================
// FINISH GAME
// =========================

function finishGame() {

    gameRunning = false;


    clearTimeout(heartTimer);


    document.getElementById("gameMessage").innerText =
        "You caught them all! 🥹💗";


    document.getElementById("secretMessage").style.display =
        "block";


    createHearts();

}


// =========================
// MAKE A WISH
// =========================

function makeWish() {

    const message =
        document.getElementById("wish-message");


    message.innerHTML =
        "✨ Wish made! I hope Allah writes something even more beautiful for you. 🤲🏻💗";


    createHearts();


    setTimeout(() => {

        document.querySelector(".final-section").scrollIntoView({
            behavior: "smooth"
        });

    }, 1800);

}


// =========================
// FINAL LETTER
// =========================

function openLetter() {

    const letter =
        document.getElementById("finalLetter");


    letter.style.display = "block";


    createHearts();


    setTimeout(() => {

        letter.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 300);

}