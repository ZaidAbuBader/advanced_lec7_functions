
let mystudents = ["zaid", "naya", "tuta", "yara"]
let mymarks = [44, 88, 33, 85]

function markcalculate() {
for (let i = 0; i < mymarks.length; i++) {
    if (mymarks[i] >50) {
    console.log("Congratulation " +"ya " + mystudents[i] + " , you success and your grade is  " + mymarks[i])}

  else {
    console.log("Sorry " +"ya " + mystudents[i] + " ,  you failed and your grade is  " + mymarks[i])}

  }
    }


markcalculate()