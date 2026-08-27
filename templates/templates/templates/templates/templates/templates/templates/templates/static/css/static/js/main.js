let audioCtx = null;

let musicOn = false;

let musicTimer = null;


// -----------------------------
// STAR ANIMATION
// -----------------------------

function makeStars() {

    const box =
        document.getElementById("stars");

    if (!box) return;

    for (let i = 0; i < 85; i++) {

        const star =
            document.createElement("span");

        star.className = "star";

        star.style.left =
            Math.random() * 100 + "vw";

        star.style.top =
            Math.random() * 100 + "vh";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        box.appendChild(star);
    }
}


// -----------------------------
// HOME COUNTDOWN
// -----------------------------

function intro() {

    const introBox =
        document.getElementById("intro");

    const content =
        document.getElementById("homeContent");

    if (!introBox || !content) return;

    let number = 3;

    const counter =
        introBox.querySelector(".count");

    const timer =
        setInterval(function () {

            number--;

            if (number > 0) {

                counter.textContent =
                    number;

            } else {

                clearInterval(timer);

                introBox.style.opacity = "0";

                setTimeout(function () {

                    introBox.style.display =
                        "none";

                    content.classList.remove(
                        "hidden"
                    );

                    typeText();

                }, 600);
            }

        }, 850);
}


// -----------------------------
// TYPING EFFECT
// -----------------------------

function typeText() {

    const element =
        document.getElementById("typing");

    if (!element) return;

    const text =
        "Hey, Bestie! 💗";

    let index = 0;

    function type() {

        if (index < text.length) {

            element.textContent +=
                text[index];

            index++;

            setTimeout(type, 90);
        }
    }

    type();
}


// -----------------------------
// CANDLE
// -----------------------------

function blowCandles() {

    const scene =
        document.querySelector(".cake-scene");

    const flame =
        document.getElementById("flame");

    if (scene) {

        scene.classList.add(
            "cake-blown"
        );
    }

    if (flame) {

        flame.textContent = "💨";
    }

    confetti();
}


// -----------------------------
// LETTER
// -----------------------------

function openLetter() {

    const letter =
        document.getElementById("letter");

    if (!letter) return;

    letter.classList.toggle("open");
}


// -----------------------------
// LIGHTS
// -----------------------------

function turnOnLights() {

    document.body.classList.add(
        "lit"
    );

    const bulbs =
        document.querySelectorAll(
            ".bulbs span"
        );

    bulbs.forEach(function (bulb, index) {

        bulb.style.transitionDelay =
            index * 35 + "ms";

    });

    const gift =
        document.getElementById("gift");

    if (gift) {

        gift.textContent =
            "🎁✨";
    }

    confetti();
}


// -----------------------------
// WISH
// -----------------------------

function makeWish() {

    const heart =
        document.getElementById(
            "wishHeart"
        );

    const message =
        document.getElementById(
            "wishMessage"
        );

    if (heart) {

        heart.classList.add(
            "wished"
        );
    }

    if (message) {

        message.textContent =
            "✨ Your wish has been sent to the stars. May it come true, Bestie! 💖";
    }

    confetti();
}


// -----------------------------
// CONFETTI
// -----------------------------

function confetti() {

    const symbols = [
        "✦",
        "♥",
        "●",
        "✧",
        "◆"
    ];

    for (let i = 0; i < 70; i++) {

        const piece =
            document.createElement("span");

        piece.className =
            "confetti";

        piece.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.color =
            [
                "#ff4d9a",
                "#ffd34e",
                "#8e6cff",
                "#54d8c0",
                "#ffffff"
            ][
                Math.floor(
                    Math.random() * 5
                )
            ];

        piece.style.fontSize =
            10 +
            Math.random() * 12 +
            "px";

        piece.style.animationDelay =
            Math.random() * 1.2 +
            "s";

        piece.style.animationDuration =
            3 +
            Math.random() * 2 +
            "s";

        document.body.appendChild(
            piece
        );

        setTimeout(function () {

            piece.remove();

        }, 6000);
    }
}


// -----------------------------
// SIMPLE BIRTHDAY MUSIC
// -----------------------------

function tone(
    frequency,
    duration
) {

    if (!audioCtx) return;

    const oscillator =
        audioCtx.createOscillator();

    const gain =
        audioCtx.createGain();

    oscillator.frequency.value =
        frequency;

    oscillator.type =
        "sine";

    gain.gain.setValueAtTime(
        0.0001,
        audioCtx.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
        0.07,
        audioCtx.currentTime + 0.03
    );

    gain.gain.exponentialRampToValueAtTime(
        0.0001,
        audioCtx.currentTime + duration
    );

    oscillator.connect(gain);

    gain.connect(
        audioCtx.destination
    );

    oscillator.start();

    oscillator.stop(
        audioCtx.currentTime +
        duration +
        0.05
    );
}


function toggleMusic() {

    if (!audioCtx) {

        audioCtx =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();
    }

    const button =
        document.getElementById(
            "musicBtn"
        );

    musicOn = !musicOn;

    if (musicOn) {

        const notes = [
            523.25,
            659.25,
            783.99,
            659.25,
            587.33,
            698.46,
            880,
            698.46
        ];

        let index = 0;

        musicTimer =
            setInterval(function () {

                tone(
                    notes[
                        index %
                        notes.length
                    ],
                    0.35
                );

                index++;

            }, 430);

        button.textContent =
            "🔊";

    } else {

        clearInterval(
            musicTimer
        );

        button.textContent =
            "🎵";
    }
}


// -----------------------------
// SEPTEMBER 1 COUNTDOWN
// -----------------------------

function countdown() {

    const element =
        document.getElementById(
            "countdown"
        );

    if (!element) return;

    const now =
        new Date();

    let year =
        now.getFullYear();

    let target =
        new Date(
            year,
            8,
            1,
            0,
            0,
            0
        );

    if (now >= target) {

        target =
            new Date(
                year + 1,
                8,
                1,
                0,
                0,
                0
            );
    }

    const difference =
        target - now;

    const days =
        Math.floor(
            difference /
            86400000
        );

    const hours =
        Math.floor(
            difference /
            3600000
        ) % 24;

    const minutes =
        Math.floor(
            difference /
            60000
        ) % 60;

    const seconds =
        Math.floor(
            difference /
            1000
        ) % 60;

    element.textContent =
        days +
        " days • " +

        String(hours)
            .padStart(2, "0") +

        "h " +

        String(minutes)
            .padStart(2, "0") +

        "m " +

        String(seconds)
            .padStart(2, "0") +

        "s";
}


// -----------------------------
// FINAL FIREWORKS
// -----------------------------

function finalFireworks() {

    confetti();

    setTimeout(
        confetti,
        500
    );

    setTimeout(
        confetti,
        1000
    );
}


// -----------------------------
// START
// -----------------------------

makeStars();

intro();

countdown();

setInterval(
    countdown,
    1000
);
