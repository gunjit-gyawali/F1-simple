function showFact(){
    const facts = [
        "F1 cars can accelerate from 0 to 100 mph and back to 0 in under 5 seconds!",
        "An F1 steering wheel can cost up to $50,000.",
        "F1 cars generate so much downforce they could drive upside down on a tunnel ceiling.",
        "A pit stop can be completed in under 2 seconds.",
        "F1 drivers can lose up to 3kg in weight during a single race from sweating.",
        "The Monaco Grand Prix has been held since 1929.",
        "F1 engines rev up to 15,000 RPM.",
        "There are around 80,000 components in an F1 car."
    ];

    let index = Math.floor(Math.random() * facts.length); 
    document.getElementById("fact-text").textContent = facts[index];
    }

showFact();

function teams(){
    let team = document.getElementById("team").value;
    if ( team == 11){
        alert("Yay its correct! There are 11 teams.");
    } else {
        alert("Nope its wrong! There are 11 teams.");
    }
}

function drivers(){
    let driver = document.getElementById("driver").value;
    if ( driver == 22){
        alert("Yay its correct! There are 22 drivers.");
    } else {
        alert("Nope its wrong! There are 22 drivers.");
    }
}
 
function max(){
    let champion = document.getElementById("max").value;
    if ( champion == 4){
        alert("Yay its correct! He won from 2021 to 2024.");
    } else {
        alert("Nope its wrong! He won from 2021 to 2024. Which means 4 times champion.");
    }
}


function lewis(){
    let champion = document.getElementById("lewis").value;
    if ( champion == 7){
        alert("Yay its correct! He is 7 times world champion.");
    } else {
        alert("Nope its wrong! He is 7 times world champion.");
    }
}
