
// crie uma funcao que calcula horas
console.log()
function horas (hora) {let segundos = hora * 3600
    console.log(`dentro de ${hora} hora tem ${segundos} segundos. `)
}
horas (2)

console.log()

function media (media1,media2,media3) {
const med = media1 + media2 + media3
const result = med / 3
console.log(`A media de ${media1},${media2} e ${media3} é ${result}`)
}
media (3,6,9)

console.log()

function parImpar (number1) {
    const resto = number1%2
    if (resto === 1) {console.log(`${number1} é Impar`)}
    else {console.log(`${number1} é Par`)}
}
parImpar (391)

console.log()


