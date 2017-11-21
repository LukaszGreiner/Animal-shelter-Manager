var statusDiv = document.getElementById('statusDiv');
var addPetInput = document.getElementById('addPetInput');
var remPetInput = document.getElementById('remPetInput');
var selectPet = document.getElementById('selectPet');


var shelter = new Array();
var shelterLimit = 3;

// buttons
document.getElementById('statusBtn').addEventListener('click', function () {
    status();
})
document.getElementById('addPetBtn').addEventListener('click', function () {
    // check if there is any empty place

    addPet(addPetInput.value);
//    status();
})
document.getElementById('remPetBtn').addEventListener('click', function () {
    removePet(remPetInput.value);
//    status();
})





function addPet(petName) {
    // Limiting array shelter
    if (shelter.length >= shelterLimit) {
        statusDiv.innerHTML = "<p class='red'></p>Schronisko jest przepełnione, nie przyjmujemy już więcej zwierząt!<hr>"   
    } 
    else {
        statusDiv.innerHTML = "<b>Dodano: </b>" + petName + "<br>";
        shelter.push(petName); //    console.log("Dodano nowego zwierzaka!");
        selectPet.innerHTML += "<option value="+shelter.length+">"+petName+"</option>";
    }
    status();
}

function removePet(petName) {
    shelter.shift(petName);
    statusDiv.innerHTML = "<b>Po usunięciu</b><br>";
}

function status() {

    if (shelter.length <= 0) {
        statusDiv.innerHTML = "Schronisko jest puste! <hr>";
    } else {
        statusDiv.innerHTML = "Miejsca w shronisku: " + shelter.length + "/" + shelterLimit + "<br>" + "Zwierzęta w schronisku: " + shelter + "<hr>";
    }

}
