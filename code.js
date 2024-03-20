var pageCounter = 0;
var arrElements = ["imgDiv", "birthDate", "date", "expiration", "numbers", "idNumbers", "chip"];
var hatCounter = 0;
var arrHats = ["הסבר1 הסבר 1 הסבר 1", "הסבר 2 הסבר 2 הסבר 2", "הסבר 3 הסבר 3 הסבר 3"];
var changCounter = 0;
const pageLocation = {};
let zi = 0;

var quizCouner = 0;
var sucessCounter = 0;
const ArrQuestion = [
    {
        question: "שאלה 1",
        answers: [
            {
                answer: "תשובה יפה תשובה טובה",
            },
            {
                answer: "תשובה יפה תשובה טובה",
            },
            {
                answer: "תשובה יפה תשובה טובה",
            },
            {
                answer: "תשובה יפה תשובה טובה",
            }
        ],
        correct: 1
    },
    {
        question: "שאלה 2",
        answers: [
            {
                answer: "תשובה יפה תשובה טובה",
            },
            {
                answer: "תשובה יפה תשובה טובה",
            },
            {
                answer: "תשובה יפה תשובה טובה",
            },
            {
                answer: "תשובה יפה תשובה טובה",
            }
        ],
        correct: 2
    }
];


window.addEventListener("load", () => {
    openScreen();
});

const openScreen = () => {
    document.getElementById("logo").style.display = "none";
    setTimeout(() => {
        document.getElementById("logo").style.display = "block";
        document.getElementById("logo").classList.add("animationShow")
    }, 2000);
    document.getElementById("btn").addEventListener("click", () => {
        document.getElementById("open-screen").style.display = "none";
        document.getElementById("hand-id").style.display = "block";
        handId();
    });
}

const handId = () => {
    document.getElementById("idDiv").addEventListener("click", () => {
        document.getElementById("hand-id").style.display = "none";
        document.getElementById("main-page").style.display = "block";
        document.getElementById("imgDiv").addEventListener("click", whichPage);
        document.getElementById("imgDiv").classList.add("clickHere");
        for (let i = 0; i < 7; i++) {
            document.getElementById("container").innerHTML += `<div class="circle" id="circle${i + 1}"></div>`;
        }
    });
}

const whichPage = (event) => {
    const currId = event.currentTarget.id;
    console.log(currId)
    window[`open${currId}`]();
}

var openimgDiv = () => {
    pageCounter = 0;
    document.getElementById("main-page").style.display = "none";
    document.getElementById("imgDiv-page").style.display = "block";

    document.getElementById("startBtn").addEventListener("click", () => {
        document.getElementById("Instructions").style.display = "none";
        document.getElementById("hat1").addEventListener("click", showExpalntion);
    });

}

const showExpalntion = (event) => {
    const currHatNum = event.currentTarget.id.substring(3);
    document.getElementById("hatTextDiv").style.display = "block";
    document.getElementById("nextBtn").style.display = "block";

    document.getElementById("hatTextDiv").innerText = arrHats[currHatNum - 1];
    document.getElementById("nextBtn").addEventListener("click", closeExpalntion);
}

var closeExpalntion = () => {
    document.getElementById("hatTextDiv").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";

    hatCounter++;
    if (hatCounter === 1) {
        document.getElementById("hat2").setAttribute("src", "hat2.png");
        document.getElementById("hat2").addEventListener("click", showExpalntion);
    }
    if (hatCounter === 2) {
        document.getElementById("hat3").setAttribute("src", "hat3.png");
        document.getElementById("hat3").addEventListener("click", showExpalntion);
    }
    if (hatCounter === 3) {
        document.getElementById("doneBtn").style.display = "block";
        document.getElementById("doneBtn").addEventListener("click", donePage);
    }
}


const donePage = () => {
    const currPageId = arrElements[pageCounter];
    document.getElementById(currPageId).classList.remove("clickHere");
    document.getElementById(`${currPageId}-page`).style.display = "none";
    document.getElementById("main-page").style.display = "block";
    document.getElementById(`circle${pageCounter + 1}`).style.backgroundColor = "#105984";

    if (currPageId === "imgDiv" && changCounter === 0) {
        changCounter++;
        document.getElementById("imgDiv").innerHTML = '<div id="imgLogoDiv"> <img id="imgLogo" src="logoNoBackgrorund.png" /> </div>';
    }
    if (currPageId === "birthDate" && changCounter === 1) {
        changCounter++
        document.getElementById("birthDate").innerHTML += '<u>17.02.1992</u>';
        // document.getElementById("lineChange").style.cssText += "display: block; left: 80vw; width: 16vw;";
    }
    if (currPageId === "date" && changCounter === 2) {
        changCounter++
        document.getElementById("date").innerHTML += '<u>010101</u>';
    }
    if (currPageId === "expiration" && changCounter === 3) {
        changCounter++
        document.getElementById("expiration").innerHTML += '<u>235.365.4</u>';
    }
    if (currPageId === "numbers" && changCounter === 4) {
        changCounter++
        document.getElementById("numbers").style.color = "rgb(58, 56, 56)"
        document.getElementById("numbers").innerHTML = '456765445654';
    }
    if (currPageId === "idNumbers" && changCounter === 5) {
        changCounter++
        document.getElementById("idNumbers").style.color = "rgb(58, 56, 56)"
        document.getElementById("idNumbers").innerHTML = '112233999';
    }
    if (currPageId === "chip" && changCounter === 6) {
        changCounter++
        document.getElementById("chip").innerHTML += '<img id="imgChip" src="imgChip.png" />';
    }



    pageCounter++;
    const nextId = arrElements[pageCounter];
    document.getElementById(nextId).classList.add("clickHere");
    document.getElementById(nextId).addEventListener("click", whichPage);
}

const flipBook = () => {
    let pageLocation = [];
    let zIndexCounter = 0;

    document.querySelector(".centerClass").style.transform = "translate(-50%, -50%)";
    document.querySelector(".pageWrapper").style.left = "327px";
    document.querySelector(".pageWrapper").style.perspective = "1000px";

    document.querySelectorAll(".page").forEach(page => {
        page.style.transformStyle = "preserve-3d";
        const backFace = page.querySelector(".back");
        if (backFace) backFace.style.transform = "rotateY(-180deg)";
        const pageFaces = page.querySelectorAll(".front, .back");
        pageFaces.forEach(face => face.style.backfaceVisibility = "hidden");

        page.addEventListener("click", function () {
            const isLeft = pageLocation[this.id] === "left" || false;
            this.style.zIndex = ++zIndexCounter;
            if (!isLeft) {
                this.style.transformOrigin = "-1px top";
                this.style.transition = "transform 1s";
                this.style.transform = "rotateY(-180deg)";
                this.classList.add("left");
                this.classList.remove("right");
                pageLocation[this.id] = "left";
            } else {
                this.style.transformOrigin = "left top";
                this.style.transition = "transform 1s";
                this.style.transform = "rotateY(0deg)";
                this.classList.add("right");
                this.classList.remove("left");
                pageLocation[this.id] = "right";
            }
        });
    });

    document.querySelectorAll(".front").forEach(front => {
        const pageFoldRight = front.querySelector(".pageFoldRight");
        front.addEventListener("mouseenter", function () {
            pageFoldRight.style.width = "50px";
            pageFoldRight.style.height = "50px";
            pageFoldRight.style.backgroundImage = "linear-gradient(45deg,  #fefefe 0%,#f2f2f2 49%,#ffffff 50%,#ffffff 100%)";
        });
        front.addEventListener("mouseleave", function () {
            pageFoldRight.style.width = "0px";
            pageFoldRight.style.height = "0px";
        });
    });

    document.querySelectorAll(".back").forEach(back => {
        const pageFoldLeft = back.querySelector(".pageFoldLeft");
        back.addEventListener("mouseenter", function () {
            pageFoldLeft.style.width = "50px";
            pageFoldLeft.style.height = "50px";
            pageFoldLeft.style.backgroundImage = "linear-gradient(135deg,  #ffffff 0%,#ffffff 50%,#f2f2f2 51%,#fefefe 100%)";
        });
        back.addEventListener("mouseleave", function () {
            pageFoldLeft.style.width = "0px";
            pageFoldLeft.style.height = "0px";
        });
    });
}


var openbirthDate = () => {
    pageCounter = 1;
    document.getElementById("main-page").style.display = "none";
    document.getElementById("birthDate-page").style.display = "block";

    flipBook();

    document.getElementById("doneBookBtn").addEventListener("click", donePage);
};

var opendate = () => {
    pageCounter = 2;
    document.getElementById("main-page").style.display = "none";
    document.getElementById("date-page").style.display = "block";

    document.getElementById("btnTree1").addEventListener("click", openTreeOne);
    document.getElementById("btnTree2").addEventListener("click", openTreeTwo);

    document.getElementById("doneTreeBtn").addEventListener("click", donePage);

}

var openTreeOne = () => {
    document.getElementById("tree1-page").style.display = "block";
    document.getElementById("date-page").style.display = "none";

    document.getElementById("backBtn1").addEventListener("click", () => {
        document.getElementById("tree1-page").style.display = "none";
        document.getElementById("date-page").style.display = "block";
    });

}

var openTreeTwo = () => {
    document.getElementById("tree2-page").style.display = "block";
    document.getElementById("date-page").style.display = "none";

    document.getElementById("backBtn2").addEventListener("click", () => {
        document.getElementById("tree2-page").style.display = "none";
        document.getElementById("date-page").style.display = "block";
    });
}

var openexpiration = () => {
    pageCounter = 3;
    document.getElementById("main-page").style.display = "none";
    document.getElementById("expiration-page").style.display = "block";

    document.getElementById("doneExpirationBtn").addEventListener("click", donePage);
};

var opennumbers = () => {
    pageCounter = 4;
    document.getElementById("main-page").style.display = "none";
    document.getElementById("numbers-page").style.display = "block";

    document.getElementById("donenumbersBtn").addEventListener("click", donePage);
};

var openidNumbers = () => {
    pageCounter = 5;
    document.getElementById("main-page").style.display = "none";
    document.getElementById("idNumbers-page").style.display = "block";

    document.getElementById("doneidNumbersBtn").addEventListener("click", donePage);
};

var openchip = () => {
    pageCounter = 6;
    document.getElementById("main-page").style.display = "none";
    document.getElementById("chip-page").style.display = "block";

    document.getElementById("btn-back").addEventListener("click", () => {
        document.getElementById("main-page").style.display = "block";
        document.getElementById("chip-page").style.display = "none";
    });

    document.getElementById("btn-start").addEventListener("click", () => {
        document.getElementById("intro").style.display = "none";
        document.getElementById("btn-start").style.display = "none";
        document.getElementById("btn-back").style.display = "none";
        quizCouner = 0;
        showQuiz();
    });
};

var showQuiz = () => {
    document.getElementById("counter").style.display = "block";
    document.getElementById("question").style.display = "block";
    document.getElementById("answer-div").style.display = "block";

    document.getElementById("question").innerText = ArrQuestion[quizCouner].question;
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`answer${i}`).innerText = ArrQuestion[quizCouner].answers[i - 1].answer;
        document.getElementById(`answer${i}`).addEventListener("click", checkAns);
    }
};

var checkAns = (event) => {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`answer${i}`).removeEventListener("click", checkAns);
    }
    let currAnsNum = (event.currentTarget.id).substring(6);
    if (currAnsNum == ArrQuestion[quizCouner].correct) {
        event.currentTarget.style.backgroundColor = "#a3e0a5";
        sucessCounter++;
    } else {
        event.currentTarget.style.backgroundColor = "#f8b1ac";
    }

    setTimeout(() => {
        document.getElementById(`answer${currAnsNum}`).style.backgroundColor = "#ffe3b3";
        quizCouner++;
        if (quizCouner === 2) {
            document.getElementById("counter").innerText = `${quizCouner}/10`;
            doneQuiz()
        } else {
            document.getElementById("counter").innerText = `${quizCouner}/10`;
            showQuiz();
        }
    }, 4000);
};

var doneQuiz = () => {
    document.getElementById("counter").style.display = "none";
    document.getElementById("question").style.display = "none";
    document.getElementById("answer-div").style.display = "none";

    document.getElementById("done-text").style.display = "block";
    document.getElementById("sucess-counter").style.display = "block";
    document.getElementById("sucess-counter").innerText = `ענית על ${sucessCounter} תשובות נכונות מתוך 10`
    document.getElementById("quiz-again").style.display = "block";
    // document.getElementById("quiz-again").addEventListener("click", () => {
    //     document.getElementById("done-text").style.display = "none";
    //     document.getElementById("sucess-counter").style.display = "none";
    //     document.getElementById("quiz-again").style.display = "none";
    //     document.getElementById("done-lomda").style.display = "none";
    //     sucessCounter = 0;

    //     document.getElementById("chip-page").style.display = "block";

    //     document.getElementById("btn-back").addEventListener("click", () => {
    //         document.getElementById("main-page").style.display = "block";
    //         document.getElementById("chip-page").style.display = "none";
    //     });

    //     document.getElementById("btn-start").addEventListener("click", () => {
    //         document.getElementById("intro").style.display = "none";
    //         document.getElementById("btn-start").style.display = "none";
    //         document.getElementById("btn-back").style.display = "none";
    //         quizCouner = 0;
    //         showQuiz();
    //     });
    // });
    document.getElementById("done-lomda").style.display = "block";
    document.getElementById("done-lomda").addEventListener("click", donePage);
};






