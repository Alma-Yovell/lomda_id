var pageCounter = 0;
var arrElements = ["imgDiv", "birthDate", "date", "expiration", "numbers", "idNumbers", "chip"];
var hatCounter = 0;
var arrHats = ["הסבר1 הסבר 1 הסבר 1", "הסבר 2 הסבר 2 הסבר 2", "הסבר 3 הסבר 3 הסבר 3"];
var changCounter = 0;
const pageLocation = {};
let zi = 0;



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

// const reception = () => {
//     document.getElementById("arrow").addEventListener("click", () => {
//         // document.getElementById("reception-div").classList.add("goLeft");

//         // setTimeout(() => {
//         //     document.getElementById("reception").style.display = "none";
//         //     document.getElementById("hand-id").style.display = "block";
//         //     handId();
//         // }, 1000);

//         document.getElementById("reception").style.display = "none";
//         document.getElementById("hand-id").style.display = "block";
//         handId();
//     });
// }

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
    window[`open${currId}`]();
    console.log(currId)
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
        document.getElementById("imgDiv").innerHTML = '<div id="imgLogoDiv"> <img id="imgLogo" src="logoNoBackgrorund.png" /> </div>        ';
    }
    if (currPageId === "birthDate" && changCounter === 1) {
        changCounter++
        document.getElementById("birthDate").innerHTML += '<u>17.02.1992</u>';
        document.getElementById("lineChange").style.cssText += "display: block; left: 80vw; width: 16vw;";
    }
    if (currPageId === "date" && changCounter === 2) {
        changCounter++
        document.getElementById("date").innerHTML += '<u>010101</u>';
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






