
function main(){
    szamok();
}

function szamok(){
    const KIJELZO = document.querySelector(".kijelzo");
    const SZAMOK_ELEM = document.querySelector(".szamok");
    let kiiras = ``;
    const SZAMOK = []

    //GOMBOK DEKLARÁLÁSA
    const TORLES_BTN = document.getElementById("torles");
    const OSSZEADAS_BTN = document.getElementById("osszeadas");


    // szám gombok kiirasa
    for (let index = 0; index < 10; index++) {
        kiiras += `<div class="szam">`;
        kiiras += `<button>${index}</button>`;
        kiiras += `</div>`;
        SZAMOK.push(index);
    }
    
    console.log(SZAMOK);
    SZAMOK_ELEM.innerHTML += kiiras;
    

    // szamok gombok gombra való esemény megjelenitese
    const SZAMElem=document.querySelectorAll(".szam")
    for (let index = 0; index < SZAMOK.length; index++) {
        SZAMElem[index].addEventListener("click", function() {
            KIJELZO.innerHTML += SZAMOK[index];
        });
    }


    // torles gomb
    TORLES_BTN.addEventListener("click", function() {
        KIJELZO.innerHTML = ``;
    });
    
    
        
    

    
    
    
}

main();