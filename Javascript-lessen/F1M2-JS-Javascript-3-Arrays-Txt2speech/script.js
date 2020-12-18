    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        /* hier komt jouw code */
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let index = randomizer(arrayLength);
        let woord1 = onderwerp[index];
        let index2 = randomizer(arrayLength);
        let woord2 = werkwoord[index2];
        let index3 = randomizer(arrayLength);
        let woord3 = restwoord[index3];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        // let outputString = woord2 + " " + woord3 + " " + woord1;
        // let outputString = woord3 + " " + woord2 + " " + woord1;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["He", "The", "They"];
    const werkwoord = ["is", "monkey's", "are"];
    const restwoord = ["a monkey", "are vibing", "chonke monkey's"];
        
    let plaatjes = ["https://steamuserimages-a.akamaihd.net/ugc/961983704502817971/208D31DD5B4581652BF5D3B428EF69EA34DAA7B4/", "http://archive-media-2.nyafuu.org/bant/image/1511/19/1511190627556.jpg", "https://i.redd.it/lw8ba3kwudf51.png"]
    let arrayLength = onderwerp.length;
