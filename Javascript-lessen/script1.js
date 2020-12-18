'use strict';
    let mijnButton = document.getElementById('mijnButton');
    let optellen = document.getElementById('optellen');
    let vermenigvuldigen = document.getElementById('vermenigvuldigen');
    let delen = document.getElementById('delen');
    let aftrekken = document.getElementById('aftrekken');

    mijnButton.addEventListener('click', function(){
        let getal1 = document.getElementById('getal1').value;        
        let getal2 = document.getElementById('getal2').value;      

        getal1 = parseFloat(getal1);
        getal2 = parseFloat(getal2);

        telOp(getal1,getal2);
        vermenigvuldig(getal1,getal2);
        dele(getal1,getal2);
        aftrek(getal1,getal2);
    })

    function telOp(getal1, getal2){
        let antwoord = getal1 + getal2;// doe de bewerking
        console.log("optellen " + antwoord); // laat ook in de console zien
        optellen.innerHTML = antwoord; // schrijf naar HTML
    }
    function vermenigvuldig(getal1, getal2){
        let antwoord = getal1 * getal2;// doe de bewerking
        console.log("vermenigvuldigen " + antwoord); // laat ook in de console zien
        vermenigvuldigen.innerHTML = antwoord; // schrijf naar HTML
    }
    function dele(getal1, getal2){
        let antwoord = getal1 / getal2;// doe de bewerking
        console.log("delen " + antwoord); // laat ook in de console zien
        delen.innerHTML = antwoord; // schrijf naar HTML
        
    }
    function aftrek(getal1, getal2){
        let antwoord = getal1 / getal2;// doe de bewerking
        console.log("aftrekken " + antwoord); // laat ook in de console zien
        aftrekken.innerHTML = antwoord; // schrijf naar HTML
    }