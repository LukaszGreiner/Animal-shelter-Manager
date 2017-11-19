var samplePet = "reksio";
var samplePet2 = "kaktus";
var shelterLimit = 3;

var shelter = new Array();



function addPet() {

    shelter.push(samplePet);
    console.log("Dodano nowego zwierzaka!");
    
    document.write("<b>Po dodaniu</b><br>")
    
    // Limiting array shelter
    if (shelter.length > shelterLimit) {
       
       shelter.length = shelterLimit; 
       document.write("Schronisko jest przepełnione, niestety nie możemy przyjąć zwierzaka <hr>")
   } 
        status();
}

function removePet() {
    shelter.shift();
    document.write("<b>Po usunięciu</b><br>")
    status();
}

function status() {
    
    if (shelter.length <= 0) {
        document.write("Schronisko jest puste! <hr>");
    }
    else {
        document.write("Stan shroniska: "+shelter.length+"/"+shelterLimit+"<br>");
        document.write("Zwierzęta w schronisku: "+shelter+"<hr>");
    }
    
}