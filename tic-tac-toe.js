window.addEventListener('DOMContentLoaded', e=>{

    let playerX = true //who's turn (player X goes first)
    let count = 0;


    const cb = (imgOfInt) => {

        const gameOverCheckX = document.getElementsByClassName("winnerX")
        const gameOverCheckY = document.getElementsByClassName("winnerY")
        console.log(gameOverCheckX.length)
        if (gameOverCheckX.length || gameOverCheckY.length) return; //game already over

        if(imgOfInt.getAttribute("data-value") === 'X') return; //box already selected
        if(imgOfInt.getAttribute("data-value") === 'O') return; //box already selected

        count++;
        if (playerX) {
            imgOfInt.setAttribute("src","./player-x.svg");
            imgOfInt.setAttribute("data-value","X")
            playerX = false;

        } else {
            imgOfInt.setAttribute("src","./player-o.svg")
            imgOfInt.setAttribute("data-value","O")
            playerX = true
        }
        //WINNER?
        let B0 = imgOfInt0.getAttribute("data-value")
        let B1 = imgOfInt1.getAttribute("data-value")
        let B2 = imgOfInt2.getAttribute("data-value")
        let B3 = imgOfInt3.getAttribute("data-value")
        let B4 = imgOfInt4.getAttribute("data-value")
        let B5 = imgOfInt5.getAttribute("data-value")
        let B6 = imgOfInt6.getAttribute("data-value")
        let B7 = imgOfInt7.getAttribute("data-value")
        let B8 = imgOfInt8.getAttribute("data-value")

        console.log(`B0: ${B0} B1: ${B1} B2: ${B2}`)
        console.log(`B3: ${B3} B4: ${B4} B5: ${B5}`)
        const h2 = document.querySelector("h2")
        const h3 = document.querySelector("h3")
        const h4 = document.querySelector("h4")

        if (B0 === 'X' && B0 === B1 && B0 === B2)  return h2.classList.add("winnerX");
        if (B0 === 'O' && B0 === B1 && B0 === B2)  return h3.classList.add("winnerO");

        if (B3 === 'X' && B3 === B4 && B3 === B5)  return h2.classList.add("winnerX");
        if (B3 === 'O' && B3 === B4 && B3 === B5)  return h3.classList.add("winnerO");

        if (B6 === 'X' && B6 === B7 && B6 === B8)  return h2.classList.add("winnerX");
        if (B6 === 'O' && B6 === B7 && B6 === B8)  return h3.classList.add("winnerO");

        if (B0 === 'X' && B0 === B3 && B0 === B6)  return h2.classList.add("winnerX");
        if (B0 === 'O' && B0 === B3 && B0 === B6)  return h3.classList.add("winnerO");

        if (B1 === 'X' && B1 === B4 && B1 === B7)  return h2.classList.add("winnerX");
        if (B1 === 'O' && B1 === B4 && B1 === B7)  return h3.classList.add("winnerO");

        if (B2 === 'X' && B2 === B5 && B2 === B8)  return h2.classList.add("winnerX");
        if (B2 === 'O' && B2 === B5 && B2 === B8)  return h3.classList.add("winnerO");

        if (B0 === 'X' && B0 === B4 && B0 === B8)  return h2.classList.add("winnerX");
        if (B0 === 'O' && B0 === B4 && B0 === B8)  return h3.classList.add("winnerO");

        if (B2 === 'X' && B2 === B4 && B2 === B6)  return h2.classList.add("winnerX");
        if (B2 === 'O' && B2 === B4 && B2 === B6)  return h3.classList.add("winnerO");

        if (count === 9) h4.classList.add("tie");



    }

    let divOfInt0 = document.getElementById("G0")
    let imgOfInt0 = document.getElementById("img_0")
    divOfInt0.addEventListener("click",e=>{cb(imgOfInt0)});

    let divOfInt1 = document.getElementById("G1")
    let imgOfInt1 = document.getElementById("img_1")
    divOfInt1.addEventListener("click",e=>{cb(imgOfInt1)});

    let divOfInt2 = document.getElementById("G2")
    let imgOfInt2 = document.getElementById("img_2")
    divOfInt2.addEventListener("click",e=>{cb(imgOfInt2)});

    let divOfInt3 = document.getElementById("G3")
    let imgOfInt3 = document.getElementById("img_3")
    divOfInt3.addEventListener("click",e=>{cb(imgOfInt3)});

    let divOfInt4 = document.getElementById("G4")
    let imgOfInt4 = document.getElementById("img_4")
    divOfInt4.addEventListener("click",e=>{cb(imgOfInt4)});

    let divOfInt5 = document.getElementById("G5")
    let imgOfInt5 = document.getElementById("img_5")
    divOfInt5.addEventListener("click",e=>{cb(imgOfInt5)});

    let divOfInt6 = document.getElementById("G6")
    let imgOfInt6 = document.getElementById("img_6")
    divOfInt6.addEventListener("click",e=>{cb(imgOfInt6)});

    let divOfInt7 = document.getElementById("G7")
    let imgOfInt7 = document.getElementById("img_7")
    divOfInt7.addEventListener("click",e=>{cb(imgOfInt7)});

    let divOfInt8 = document.getElementById("G8")
    let imgOfInt8 = document.getElementById("img_8")
    divOfInt8.addEventListener("click",e=>{cb(imgOfInt8)});

    let reset = document.getElementById("new")
    reset.addEventListener("click",e=>{
        location.reload();
    })
});
