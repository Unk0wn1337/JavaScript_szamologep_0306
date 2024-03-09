
function main(){
    szamok();
}

function szamok(){
    const KIJELZO = document.querySelector(".kijelzo");
    const SZAMOK_ELEM = document.querySelector(".szamok");
    let kiiras = ``;
    const SZAMOK = [];
    const MUVELEK = [];

    //GOMBOK DEKLARÁLÁSA
    const TORLES_BTN = document.getElementById("torles");
    const OSSZEADAS_BTN = document.getElementById("osszeadas");
    const KIVONAS_BTN = document.getElementById("kivonas");
    const SZORZAS_BTN = document.getElementById("szorzas");
    const OSZTAS_BTN = document.getElementById("osztas");
    const LEBEGO_PONTOS_BTN = document.getElementById(".");
    const EGYENLO_BTN = document.getElementById("egyenlo");


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
        SZAMElem[index].addEventListener("click", function(event) {
            KIJELZO.innerHTML += SZAMOK[index];
            console.log("Kattintott elem", event.target)
        });
    }


    // torles gomb
    TORLES_BTN.addEventListener("click", function() {
        KIJELZO.innerHTML = ``;
    });
    
    
    // osszeadas
    OSSZEADAS_BTN.addEventListener("click",function() {
        KIJELZO.innerHTML += "+"; 
    });
    KIVONAS_BTN.addEventListener("click",function() {
        KIJELZO.innerHTML += "-"; 
    });
    SZORZAS_BTN.addEventListener("click",function() {
        KIJELZO.innerHTML += "*"; 
    });
    OSZTAS_BTN.addEventListener("click",function() {
        KIJELZO.innerHTML += "/"; 
    });

    LEBEGO_PONTOS_BTN.addEventListener("click",function() {
        KIJELZO.innerHTML += "."; 
    });
    EGYENLO_BTN.addEventListener("click",function() {
        let szamokMuvelet = "";
        for (let index = 0; index < KIJELZO.innerHTML.length; index++) {
            const karakter = KIJELZO.innerHTML[index];
            if(karakter !== "."){
                szamokMuvelet += karakter;
            } else {
                szamokMuvelet += "."
            }
        }
        let eredmeny = eval(szamokMuvelet);
        KIJELZO.innerHTML = eredmeny;
    });
    
    

    
    
    
}

main();