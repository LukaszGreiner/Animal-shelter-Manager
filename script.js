console.log("script.js loaded");

var statusDiv = document.getElementById('statusDiv');
var statusTable = document.getElementById('statusTable');

var petNameInput = document.getElementById('petNameInput');
var petAgeInput = document.getElementById('petAgeInput');

var remPetInput = document.getElementById('remPetInput');
var selectPet = document.getElementById('selectPet');


var shelter = new Array();
var shelterLimit = 5;
var uniqueID = [0];
var tableRowNum = 1;

// buttons
document.getElementById('statusBtn').addEventListener('click', function () {
    status();
})
document.getElementById('addPetBtn').addEventListener('click', function () {
     addPet(petNameInput.value, petAgeInput.value);
})
document.getElementById('remPetBtn').addEventListener('click', function () {
    if (remPetInput.value == "") alert("Proszę podać numer identyfikacyjny zwierzaka!");
    else removePet(remPetInput.value);
})


//FUNCTIONS
function addPet(petName, petAge) {
    if (petNameInput.value == "" || petAgeInput.value == "") {
        alert("Proszę uzupełnić dane");
    } 
    // Limiting array shelter
    else if (shelter.length >= shelterLimit) {
        statusDiv.innerHTML = "<p class='red'>Schronisko jest przepełnione, nie przyjmujemy więcej zwierząt!</p><hr>";
    }
    // add new pet
    else {
        console.log("Dodano nowego zwierzaka!")
        //TODO why uniqueID[uniqueID.length] doesn't work?
         var petObj = {
            name: petName,
            age: petAge,
            id: uniqueID
        };
        
        statusDiv.innerHTML = "<b>Dodano: </b>" + petObj.name + " " + petObj.age + " lat " + "<br>";

       
        console.log(petObj)
   
        shelter.push(petObj);

        // adding pet as option to <select>
        selectPet.innerHTML += "<option value=" + shelter.length + ">" + petObj.name + " lat: " + petObj.age + "</option>";

        //increment id
        uniqueID.push(Math.floor(Math.random() * (100 - 0)));
        
        addTableRow();
    }
    status();
}

function removePet(petID) {
    statusDiv.innerHTML = "<b>Po usunięciu</b><br>";
    statusDiv.innerHTML += "<p class='red'>Usunięto: xyz</p>";
    
    removeTableRow(petID);
    status();
}

function status() {

    if (shelter.length <= 0) {
        statusDiv.innerHTML += "Schronisko jest puste! <hr>";
    } else {
        statusDiv.innerHTML += "Miejsca w shronisku: " + shelter.length + "/" + shelterLimit + "<hr>";
    }

}

function addTableRow() {
    // get the table by id
    var table = document.getElementById("statusTable");
    // create a new row and cells
    var newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3),
        // get value from input text
        name = document.getElementById("petNameInput").value,
        age = document.getElementById("petAgeInput").value,
        id = uniqueID;

    // set the values into row cell's
    cell1.innerHTML = tableRowNum;
    cell2.innerHTML = name;
    cell3.innerHTML = age;
    cell4.innerHTML = uniqueID[tableRowNum];

    //add unique class to new row
    newRow.classList = tableRowNum;
    tableRowNum++;
}

function removeTableRow(tableRow) {
//   document.getElementById("statusTable").delateRow(tableRow);
}

//select 
// https://www.youtube.com/watch?v=UliJeDbc4cw
