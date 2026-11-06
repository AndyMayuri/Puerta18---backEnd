/*
let num1 = "1"
let num2 = "1"

console.log(num1 > num2)
console.log(num1 < num2)
console.log(num1 == num2)
console.log(num1 != num2)
*/

/*
let p = true
let q = false

console.log(p && q)
console.log(p && p)
console.log(p || q)
console.log(q || q)

*/

/*
let nota = 3

if (nota >= 4 && nota < 7) {
    console.log("Felicidades Aprobaste")
} else if(nota >=7 && nota <=10) {
    console.log("Felicidades Promocionaste!!")
} else if(nota < 4){
    console.log("Desaprobaste, perdon")
} else {
    console.log("no mientaass")
}
*/

let number = Math.floor(Math.random() * 10)

let resultado = number >= 7 ? "Aprobaste felicidades" : "Lo siento desaprobaste"

console.log(resultado)
console.log(number)

let probabilidadYEstadisticaCorrelativas = ["analisisMatematicoII", "algebraII"]

let alumnoMateriasAprobadas = ["algebraII"]

let cantidadMateriasCorrelativas = 0
for(let materia of alumnoMateriasAprobadas){
    probabilidadYEstadisticaCorrelativas.includes(materia) ? cantidadMateriasCorrelativas += 1 : console.log(materia, "no es correlativa de proba")
}

console.log((cantidadMateriasCorrelativas == probabilidadYEstadisticaCorrelativas.length) ? "Podes Cursarla." : "No podes cursar Proba.")