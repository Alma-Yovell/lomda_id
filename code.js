
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
    });
}

