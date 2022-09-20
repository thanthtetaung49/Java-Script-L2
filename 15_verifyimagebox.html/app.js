const database = [
    {
        question: "Choose Traffic Light ?",
        a: "./img/traffic.jpg",
        b: "./img/mountain.jpg",
        c: "./img/ambulance.jpg",
        d: "./img/airport.jpg",
        corretanswer: "a",
    },
    {
        question: "Choose Mountain ?",
        a: "./img/ambulance.jpg",
        b: "./img/mountain.jpg",
        c: "./img/traffic.jpg",
        d: "./img/airport.jpg",
        corretanswer: "b"
    },
    {
        question: "Choose Ambulance Truck ?",
        a: "./img/ambulance.jpg",
        b: "./img/airport.jpg",
        c: "./img/traffic.jpg",
        d: "./img/mountain.jpg",
        corretanswer: "a",
    },
    {
        question: "Choose Airport ?",
        a: "./img/traffic.jpg",
        b: "./img/mountain.jpg",
        c: "./img/ambulance.jpg",
        d: "./img/airport.jpg",
        corretanswer: "d",
    },
];

// console.log(database);
const getcontainer = document.querySelector(".container");
const getquestion = document.querySelector(".question");
const getanswers = document.querySelectorAll(".answer");
const geta_img = document.getElementById("a_img");
const getb_img = document.getElementById("b_img");
const getc_img = document.getElementById("c_img");
const getd_img = document.getElementById("d_img");
const getbtn = document.querySelector(".btn");

let currentidx = 0;
let score = 0;

startquestion();

function startquestion() {

    removeselects();

    let currentques = database[currentidx];

    getquestion.textContent = currentques.question;
    geta_img.src = currentques.a;
    getb_img.src = currentques.b;
    getc_img.src = currentques.c;
    getd_img.src = currentques.d;
}

function getsingleanswer() {

    let answer;

    // console.log(answer);
    // console.log(getanswers);

    getanswers.forEach(function (getanswer) {
        
        // console.log(getanswer);
        // console.log(getanswer.id);

        if (getanswer.checked) {

            // console.log(getanswer.id);
            answer = getanswer.id;
        }
    });

    // console.log(answer);
    return answer;
}

getbtn.addEventListener("click", function () {
    
    // console.log("i am working");

    const myanswer = getsingleanswer();
    // console.log(myanswer);

    if (myanswer) {

        if (myanswer === database[currentidx].corretanswer) {
            
            score++;
        }

        currentidx++;
        // console.log(currentidx);

        if (currentidx < database.length) {

            startquestion();
        } else {

            getcontainer.innerHTML = `
                <h3>Total Score: ${score * 25}</h3>
                <h4>You answered correctly at ${score} / ${
              database.length
            } question.</h4>
                <!-- <button type="button" class="btn" ondblclick="reload()">Click to Reload</button> -->
                <button type="button" class="btn" onclick="dblclick();">Click to Reload</button>
            `;
        }
    } else {
        window.alert("Choose One Answer");
    }
});

function reload() {

    location.reload();
}

function removeselects() {

    getanswers.forEach(function (getanswer) {
        
        return getanswer.checked = false;
    });
}

let clicktimes = 0;

function dblclick() {

    // console.log("hey i am working");
    // console.log(clicktimes);

    if (clicktimes === 0) {

        clicktimes = new Date().getTime();
        // console.log(clicktimes);

    } else {

        if ((new Date().getTime() - clicktimes) < 800) {

            // console.log('hello');
            location.reload();

            clicktimes = 0;
            
        } else {

            clicktimes = new Date().getTime();
        }
    }
}

// 19BT

// 20DT