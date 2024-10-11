const readline = require('readline-sync');

let time = readline.question ("Qual o seu time? ")

console.log()

if (time.toLowerCase() === "internacional" || time.toLowerCase() === "inter") {console.log("Colorado.")}
else if (time.toLowerCase() === "gremio") {console.log("Gremista.")}
else if (time.toLowerCase() === "juventude") {console.log("Juvenudensce.")}
else if (time.toLowerCase() === "corinthians") {console.log("Corinthiano.")}
else {console.log("Time não existente ainda.")}

console.log()