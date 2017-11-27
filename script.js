console.log("script.js loaded");

var statusDiv = document.getElementById('statusDiv');
var statusTable = document.getElementById('statusTable');

var petNameInput = document.getElementById('petNameInput');
var petAgeInput = document.getElementById('petAgeInput');

var remPetInput = document.getElementById('remPetInput');
var selectPet = document.getElementById('selectPet');


var shelter = new Array();
var shelterLimit = 5;
var uniqueID = 0;
var tableRowNum = 1;



// buttons
document.getElementById('statusBtn').addEventListener('click', status());

document.getElementById('addPetBtn').addEventListener('click', function () {
    var result = checkInputs();
    if (result == true) addPet(petNameInput.value, petAgeInput.value);
    //console.log(result);
})
document.getElementById('remPetBtn').addEventListener('click', function () {
    if (remPetInput.value == "") alert("Proszę wprowadzić dane!");
    else remPetInputPet(remPetInput.value);
})




//FUNCTIONS
function checkInputs() {
    // check wether inputs are empty
    if (petNameInput.value == "" || petAgeInput.value == "") {
        alert("Proszę uzupełnić dane");
        return false;

    } else return true;
}
// function checking is pet in shelter table
//function isPetInBase(name, age) {
//    if () alert(name+" "age+" lat Jest w naszej bazie!");
//    else alert(name+" "age+" Nie mamy podanego zwierzaka w bazie, proszę sprawdzć podane dane!")
//}

function creatPetObj(name, age) {
    uniqueID++;
    return pet = {
        name: name,
        age: age,
        id: (Math.floor(Math.random() * (100 - 0))),
    }
}

function addPet(petName, petAge) {

    // Limiting array shelter
    if (shelter.length >= shelterLimit) {
        statusDiv.innerHTML = "<p class='red'>Schronisko jest przepełnione, nie przyjmujemy więcej zwierząt!</p><hr>";
    }
    // add new pet
    else {

        var petObj = creatPetObj(petName, petAge);
        shelter.push(petObj)


        statusDiv.innerHTML = "<b>Dodano: </b>" + petObj.name + " " + petObj.age + " lat " + "<br>";



        // adding pet as option to <select>
        selectPet.innerHTML += "<option value=" + shelter.length + ">" + petObj.name + " lat: " + petObj.age + "</option>";


        addTableRow();
    }
    status();
}

function removePet(name, age, id) {
    statusDiv.innerHTML = "<b>Po usunięciu</b><br>";
    statusDiv.innerHTML += "<p class='red'>Usunięto:"+pet.name+"</p>";
    
    // removing petObj from shelter table
    // removing row containing given pet
    
    status();
}

// Changes HTML statusDiv WHEN shelter is empty or full
function status() {

    if (shelter.length <= 0) {
        statusDiv.innerHTML += "Schronisko jest puste!<br> Dostępne miejsca: <b>" + shelterLimit + "</b><hr>";
    } else {
        statusDiv.innerHTML += "Miejsca w shronisku: " + shelter.length + "/" + shelterLimit + "<hr>";
    }

}

function addTableRow() {
    // get the table by id
    var table = document.getElementById("animalsTable");
    // create a new row and cells
    var newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3);


    // set the values form pet obj into row cell's
    cell1.innerHTML = tableRowNum;
    cell2.innerHTML = pet.name;
    cell3.innerHTML = pet.age;
    cell4.innerHTML = pet.id;

    //add unique class to new row
    newRow.classList = tableRowNum;
    tableRowNum++;
}

//function removeTableRow(rowNum) {
//   doesn't work    document.getElementById("animalsTable").delateRow(0);
//        document.querySelectorAll("#statusTab ."+tableRowNum).style.display = "none";
//}

//select 
// https://www.youtube.com/watch?v=UliJeDbc4cw
