/*
function add(a, b){
    return a + b
}
*/

/*
function evaluarNumero(numero){
    let resultado = numero < 0 ? "El numero es menor a cero" : "El numer es mayor o igual a cero"
    return resultado
}
function palindromo(palabra){
    let reversa = ""
    for (let i = palabra.length - 1; i >= 0; i--){
        reversa += palabra[i]
    }
    return reversa
}

let palabraPalindromo = "osa"

let numero = -5
console.log(evaluarNumero(numero))

console.log(palindromo(palabraPalindromo))
*/


/*
// CHALLENGE ARROW!!

// Escriban una función llamada isValid que reciba dos argumentos de tipo string, username y password.
// La función devuelve true si el username y password son válidos en el sistema, de lo contrario false.
// Nuestro sistema contiene solo dos nombres de usuario válidos - "admin" y "user".
// La contraseña válida para el nombre de usuario "user" es "qweasd".
// Para el nombre de usuario "admin" cualquier contraseña es válida!

function validarContraseña(usuarioIngresado, usuarioValidado){
    return usuarioIngresado == usuarioValidado
}

function isValid(username, password){
    let usuariosValidos = {admin: "", user: "qweasd"}
    let ingresoValido = false

    if(username == "admin"){
        ingresoValido = true
        return ingresoValido
    }

    for (key in usuariosValidos){
        if(username == key){
            ingresoValido = validarContraseña(password, usuariosValidos[key])
        }
    }
    return ingresoValido
}

console.log(isValid("user", "qweasd"))
*/



let validarContraseña = (contraseña, contraseñaValidada) => {
    if(contraseña == contraseñaValidada){
        return true
    }
}

let isValid = (username, password) => {
    let usuariosValidos = {admin: "", user: "qweasd"}
    if(username == "admin"){
        return true
    }
    if(username in usuariosValidos){
        validarContraseña = (password, usuariosValidos[username])
    }
    return false
}
console.log(isValid("hacker", "cualquiercosa"))


// CHALLENGE!!
// Escriban una función llamada sigma con un argumento que representa el número n.
// La función tiene que devolver la suma de todos los números desde 1 hasta n (inclusive).
// Por ejemplo, para sigma(5), la función devuelve 15, porque 15 = 1 + 2 + 3 + 4 + 5.

// En JavaScript, una expresión de función es una forma de definir una función como parte de una expresión.
// A diferencia de las declaraciones de función, las expresiones de función no son elevadas (hoisted), lo que significa que no pueden ser llamadas antes de ser definidas en el código.
// Recuerden.. el hoisting significa que el código ejecuta de arriba hacia abajo!! 
// Por lo tanto, si una expresión de función se declara despues de su llamada, el navegador lo interpretaría como una variable sin valor.
// Sintaxis básica de una expresión de función:
/*
function sigma(n){
    let resultado = 0
    for (let i = 0; i <= n; i++){
        resultado += i
    }
    return resultado
}

console.log(sigma(5))
*/

/*
// ===============================
// 💥 MINI CHALLENGES
// ===============================

// Challenge 1:
// Usá map() para crear un nuevo array con los cuadrados de los números.
let nums = [1, 2, 3, 4, 5];

console.log(nums.map(n => n**2))

// 👉 [1, 4, 9, 16, 25]

// Challenge 2:
// Usá filter() para quedarte solo con los mayores de edad.
let people = [15, 22, 18, 10, 30];

console.log(people.filter(n => n >= 18))
// 👉 [22, 18, 30]

// Challenge 3:
// Usá reduce() para calcular el total de ventas de una tienda.
let sales = [120, 85, 400, 150];
console.log(sales.reduce( (inc, n) => inc + n, 0 ))
// 👉 Total: 755

// Challenge 4:
// Usá sort() para ordenar un array de nombres alfabéticamente.
let names = ['Juan', 'Ana', 'Zoe', 'Carlos'];

console.log(names.sort())
// 👉 ['Ana', 'Carlos', 'Juan', 'Zoe']
*/


/*
// ===============================
// 🧠 CHALLENGE FINAL: EXPENSE SPLITTER
// ===============================

// Crea una función llamada expenseSplitter() que reciba un array de objetos,
// donde cada objeto representa a una persona y sus gastos en una juntada.
// La función debe calcular cuánto gastó cada uno y dividir equitativamente
// el total, devolviendo cuánto debe pagar o recibir cada persona.

function dividirGastos(gastoTotal, cantidadPersonas){
    return gastoTotal / cantidadPersonas
}

function expenseSplitter(objetos){
    let gastoTotal = 0
    let personasTotales = objetos.length
    for(let i = 0; i < personasTotales; i++){
        let persona = objetos[i]
        gastoTotal += persona["spent"]
    }
    let gastoDividido =  dividirGastos(gastoTotal, personasTotales)

    return gastoDividido
}

const expenses = [
  { name: 'Ana', spent: 120 },
  { name: 'Luis', spent: 80 },
  { name: 'Carla', spent: 100 }
];

console.log(expenseSplitter(expenses))

*/