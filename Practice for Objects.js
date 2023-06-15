// Making Objects 
const House = {
    "Doors" : 10, "Rooms" : 7, "Beds" : 5, "Garden" : "Normal", "TV" : {"Type1" : "Samsung", "Type2" : "Changong"}
}

Prop = "Doors";
var answer = House.hasOwnProperty(Prop);
console.log(answer);

if (answer == true) {
    let answer1 = House.Doors;
    let answer2 = House["Rooms"];
    let answer3 = House.Beds;
    let answer4 = House["Garden"];
    let answer5 = House.TV["Type1"];
    let answer6 = House.TV["Type2"]; 

    console.log("The house is called \"King Abdullah's house \" and has " + answer1 + " doors and " + answer2 + " rooms ");
    console.log(answer5 + " " + answer6);
} 