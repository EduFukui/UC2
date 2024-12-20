
/*function saudacao (oi) {
    if (oi === "oi") {console.log(`${oi} amigo!`)}
    else  {console.log(`${oi} amigo!`)}
    console.log()

}*/
// arrumar dps



console.log()

function temperatura (graus) {
    let fahrenheit = (graus * 1.8) + 32
    return {fahrenheit, graus}
 
}

let {fahrenheit,graus} = temperatura (30)



//let fahr = temperatura (30)
console.log(`A conversão de ${graus} graus para fahrenheit é igual a ${fahrenheit}`) 

console.log()