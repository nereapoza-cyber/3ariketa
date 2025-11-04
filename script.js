// 1. Testu-Aldatzailea
function aldatuTestua() {
    const p = document.getElementById("testu_aldagarria");
    p.textContent = "GORA IKT!";
}

// 2. Kolore Txandakatzailea (Estiloak JS-tik aplikatuz)
function aldatuKolorea() {
    // 1. HTML elementua lortu (h1-a, gure adibidean)
    const p = document.getElementById("kolore_aldagarria");
    
    // 2. Elementuaren uneko kolorea egiaztatu
    const unekoKolorea = p.style.color;

    // 3. Logika aplikatu (Baldintzapeko egitura: if...else)
    if (unekoKolorea === "purple") {
        p.style.color = "black"; // edo "black", atzeko planoaren arabera
    } else {
        p.style.color = "purple";
    }
}

// 3. Elementuen Ezkutagailua (display propietatea aldatuz)
function txandakatuEzkutatzea() {
const paragrafoa = document.getElementById("ezkutatu_hau");

    if (paragrafoa.style.display === "none") {
        paragrafoa.style.display = "block";
    } else {
        paragrafoa.style.display = "none";
    }
}

// 4. Batuketa Kalkulagailua
function batuketaEgin() {
    const zenbaki1 = Number(document.getElementById("zenbaki1").value);
    const zenbaki2 = Number(document.getElementById("zenbaki2").value);

    if (isNaN(zenbaki1) || isNaN(zenbaki2)) {
        document.getElementById("emaitza4").textContent = "Mesedez, sartu bi zenbaki.";
        return;
    }

    const emaitza = zenbaki1 + zenbaki2;
    document.getElementById("emaitza4").textContent = emaitza;
}

// 5. Testu-Gehitzailea (Elementu berriak sortzea)
function gehituElementua() {
 const input = document.getElementById("elementu_berria");
    const zerrenda = document.getElementById("zerrenda_dinamikoa");
    const testua = input.value.trim(); 
    
    if (testua !== "") {
        const elementuBerria = document.createElement('li'); // <li> elementua sortu
        elementuBerria.textContent = testua;
        zerrenda.appendChild(elementuBerria); // Zerrendaren amaieran gehitu
        input.value = ""; 
    }
}

// 6. Kontagailua (aldagai globalak erabiliz)
// Oharra: klikKopurua HTML amaierako <script> blokean hasieratuta dago
function kontatuKlik() {
    klikKopurua=klikKopurua +1; //Edo klikKopurua++
    document.getElementById("kontagailu_emaitza").textContent=klikKopurua
}

// 7. Zenbaki Asmatzearen Jokoa
// Oharra: zenbakiSekretua HTML amaierako <script> blokean hasieratuta dago
function konprobatuZenbakia() {
    const asmatutakoa = parseInt(document.getElementById("asmatutako_zenbakia").value);
    const emaitzaP = document.getElementById("joko_emaitza");

    if (asmatutakoa === zenbakiSekretua) {
        emaitzaP.textContent = "ZORIONAK! Asmatu duzu! Joko berria hasi da.";
        // Jokoa berrabiarazi
        zenbakiSekretua = Math.floor(Math.random() * 5) + 1; 
    } else if (asmatutakoa < zenbakiSekretua) {
        emaitzaP.textContent = "Zenbakia handiagoa da.";
    } else if (asmatutakoa > zenbakiSekretua) {
        emaitzaP.textContent = "Zenbakia txikiagoa da.";
    } else {
         emaitzaP.textContent = "Sarrera baliogabea. Zenbaki bat sartu (1-5).";
    }
}


// 8. Atzeko Planoaren Kolore-Aldatzailea (Random)
function aldatuAtzekoPlanoarenKolorea() {
    const ramdomKolorea = "#" + Math.floor (Math.random()*16777215).toString(16);
    document.body.style.backgroundColor=ramdomKolorea
}