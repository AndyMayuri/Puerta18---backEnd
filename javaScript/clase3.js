//STRINGS

// ===============================
// 💥 MINI CHALLENGES
// ===============================

// Challenge 1:
// Dado un nombre completo, mostralo en mayúsculas y sin espacios extras.
let fullName = "  juan perez  ";
console.log(fullName.toUpperCase().trim())
// 👉 "JUAN PEREZ"

// Challenge 2:
// Dado un email, verificá si contiene "@" y termina con ".com".
let email = "usuario@mail.com";
console.log(email.includes("@") && email.endsWith(".com"))
// 👉 true

// Challenge 3:
// Escribí una función que reciba un string y devuelva cuántas vocales tiene.
let word = "Programación";
function cantidadVocales(palabra){
    let vocales = "aeiouáéíóú"
    let cantVocales = 0
    for (let i = 0; i < palabra.length; i++){
        if(vocales.includes(palabra[i])){
            cantVocales += 1
        }
    }
    return cantVocales
}

console.log(cantidadVocales("Programacion"))
// 👉 5

// Challenge 4:
// Usá template literals para mostrar un mensaje con variables.
let user = "Lucía";
let language = "JavaScript";

console.log(`Hi ${user}! Welcome to the ${language} world.`)
// 👉 "Hi Lucía! Welcome to the JavaScript world."


// ===============================
// 🧠 CHALLENGE FINAL: PASSWORD VALIDATOR
// ===============================

// Crea una función llamada isValidPassword() que reciba un string
// y devuelva true si cumple con las siguientes condiciones:
// - Al menos 8 caracteres
// - Contiene una mayúscula
// - Contiene una minúscula
// - Contiene un número
// - Contiene un símbolo (!@#$%^&*)

function condicionNoCumplida(cantCaracteres, cantSimbolos, cantMinusculas, cantMayusculas, cantNumeros){
    if (cantCaracteres < 8){
        console.log("Cantidad de caracteres tiene que ser mayor o igual a 8")
    }
    if(cantSimbolos === 0){
        console.log("Te falta incluir algun simbolo (!@#$%^&*)")
    }
    if (cantMinusculas === 0){
        console.log("Te falto incluir minusculas")
    }
    if (cantMayusculas === 0){
        console.log("Te falto incluir mayusculas")
    }
    if (cantNumeros === 0){
        console.log("Te falto incluir números")
    }
}

function isValidPassword(contraseña){
    let contraseñaEsValida = false
    let simbolosPermitidos = "!@#$%^&*"
    let numerosPermitidos = "0123456789"
    let abecedario = "abcdefghijklmnñopqrstuvwxyzáéíóú"
    if(contraseña.length >= 8){
        let cantSimbolos = 0
        let cantMinusculas = 0
        let cantMayusculas = 0
        let cantNumeros = 0
        for (let i = 0; i < contraseña.length; i++){
            if(simbolosPermitidos.includes(contraseña[i])){
                cantSimbolos += 1
            }
            if(abecedario.includes(contraseña[i])){
                cantMinusculas += 1
            }
            if((abecedario.toUpperCase()).includes(contraseña[i])){
                cantMayusculas += 1
            }
            if(numerosPermitidos.includes(contraseña[i])){
                cantNumeros += 1
            }
        }
        condicionNoCumplida(contraseña.length ,cantSimbolos, cantMinusculas, cantMayusculas, cantNumeros)
        contraseñaEsValida = (cantSimbolos > 0 && cantMinusculas > 0 && cantMayusculas > 0 && cantNumeros > 0)
        return contraseñaEsValida
    }
    condicionNoCumplida(contraseña.length, 0, 0, 0, 0)

    return contraseñaEsValida
}

console.log(isValidPassword("mypassword"))

//Object and JSON
// ===============================
// 💥 MINI CHALLENGES
// ===============================

// Challenge 1:
// Crear un objeto "car" con propiedades brand, model y year.
// Mostrar "Mi auto es un Toyota Corolla del 2020."

const car = {
    brand: "Toyota",
    model: "Corola",
    year: 2020
}

console.log(`Mi auto es un ${car.brand} ${car.model} del ${car.year}`)
// Challenge 2:
// Crear una función getOlder(person) que reciba un objeto persona y
// devuelva un nuevo objeto con la edad incrementada en 1.
const person = {
  name: "Diego",
  age: 27,
  country: "Argentina"
};

function getOlder(persona){
    persona.age = persona.age + 1
}

// Challenge 3:
// Crear una función cloneObject(obj) que retorne una copia exacta del objeto
// sin afectar al original (¡probarlo con console.log!).

function cloneObject(obj){
    const objetoClonado = { ...obj};
    return objetoClonado
}

const objeto = cloneObject(person)
console.log(objeto)
getOlder(person)
console.log(person)
console.log(person.age)





// ===============================
// 🧠 CHALLENGE FINAL: USER DATABASE SIMULATION
// ===============================

// Crea un array llamado users que contenga varios objetos usuario,
// cada uno con name, email, isAdmin y age.
// Luego hacé lo siguiente:

// 1️⃣ Mostrar todos los nombres.
// 2️⃣ Filtrar los usuarios mayores de 18.
// 3️⃣ Obtener solo los emails.
// 4️⃣ Convertir el array a JSON (string).
// 5️⃣ Parsear nuevamente ese JSON a un array de objetos.
// 6️⃣ BONUS: Usar map/filter/reduce combinados para contar cuántos son admin.

const users = [
  { name: "Ana", email: "ana@mail.com", isAdmin: false, age: 22 },
  { name: "Luis", email: "luis@mail.com", isAdmin: true, age: 30 },
  { name: "Carla", email: "carla@mail.com", isAdmin: false, age: 17 }
]

// 👉 ejemplos:
// Mostrar todos los nombres → ["Ana", "Luis", "Carla"]
// Filtrar mayores de edad → ["Ana", "Luis"]
// Contar admins → 1


function mostrarDatos(users, indiceDato){
    let datos = []
    for(let i = 0; i < users.length; i++){
        datos.push((users[i])[indiceDato])
    }
    return datos
}

function mayoresDeEdad(users){
    let mayores
    mayores = users.filter(n => n[3] >= 18)
    return mostrarDatos(mayores, 0)
}

function cantidadDeAdminds(users){
    let cantAdminds = 0
    cantAdminds = users.filter(n => n[2] == true)
    return cantAdminds.length
}

function recorrerUsuarios(users){
    let personas = []
    for(let i = 0; i < users.length; i++){
        personas.push(Object.values(users[i]))
    }
    return personas
}


function conversorJson(users){
    const json = JSON.stringify(users)
    return json
}

function parsearJson(users){
    let array = JSON.parse(users)
    return array
}


function main(){
    let personas = recorrerUsuarios(users)
    
    console.log(mostrarDatos(personas, 0))
    console.log(mayoresDeEdad(personas))
    console.log(cantidadDeAdminds(personas))
    console.log(`Mails: ${mostrarDatos(personas, 1)}`)
    
    const json = conversorJson(users)
    let array = parsearJson(json)
    
    console.log(json)
    console.log(array)
}


main()