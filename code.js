var pageCounter = 0;
var arrElements = ["imgDiv", "birthDate", "date", "expiration", "numbers", "idNumbers", "chip"];
var hatCounter = 0;
var arrHats = ["הסבר1 הסבר 1 הסבר 1", "הסבר 2 הסבר 2 הסבר 2", "הסבר 3 הסבר 3 הסבר 3"]

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
        document.getElementById("reception").style.display = "block";
        reception();
    });
}

const reception = () => {
    document.getElementById("arrow").addEventListener("click", () => {
        // document.getElementById("reception-div").classList.add("goLeft");

        // setTimeout(() => {
        //     document.getElementById("reception").style.display = "none";
        //     document.getElementById("hand-id").style.display = "block";
        //     handId();
        // }, 1000);

        document.getElementById("reception").style.display = "none";
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
    });
}

const whichPage = (event) => {
    const currId = event.currentTarget.id;
    console.log(currId);

    window[`open${currId}`]();
}

var openimgDiv = () => {
    document.getElementById("main-page").style.display = "none";
    document.getElementById("imgDiv-page").style.display = "block";

    document.getElementById("startBtn").addEventListener("click", () => {
        document.getElementById("Instructions").style.display = "none";
        document.getElementById("hat1").addEventListener("click", showExpalntion);
    });

}

const showExpalntion = () => {
    document.getElementById("hatTextDiv").style.display = "block";
    document.getElementById("nextBtn").style.display = "block";

    document.getElementById("hatTextDiv").innerText = arrHats[hatCounter];
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
    if(hatCounter === 3){
        document.getElementById("doneBtn").style.display = "block";
        document.getElementById("doneBtn").addEventListener("click", donePage);
    }
}


const donePage = () => {
    const currPageId = arrElements[pageCounter];
    // document.getElementById("currPageId").classList.remove("clickHere");
    document.getElementById(`${currPageId}-page`).style.display = "none";
    document.getElementById("main-page").style.display = "block";

    pageCounter++;
    const nextId = arrElements[pageCounter];
    // document.getElementById("nextId").classList.add("clickHere");
    // document.getElementById("nextId").addEventListener("click", whichPage);
}



