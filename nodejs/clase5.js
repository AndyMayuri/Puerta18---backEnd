function contadorRaro(){
    console.log("1")
    
    setTimeout(()=>{
        console.log("2")
    }, 2000)
    
    console.log("3")
}

//setTimeout(()=>{}, )

function sayHelloLater(name, callback){
    console.log("Esperando")
    //asincrono
    setTimeout(()=>{
        callback("Hola " + name)
    }, 1000)
}


// ============================================
// CHALLENGE: “Callback Hell”
// ============================================
// Mostrar tres mensajes, uno después del otro, usando setTimeout:
//
// 1️⃣ "Preparando..."
// 2️⃣ "Cargando datos..."
// 3️⃣ "Listo!"

function muestraProceso(){
    setTimeout(()=>{
        console.log("Preparando...")
        setTimeout(()=>{
            console.log("Cargando datos...")
            setTimeout(()=>{
                console.log("Listo!")
            }, 1000)
        }, 1000)
    }, 1000)
}



//
// 👉 Pista: cada mensaje debe mostrarse *después* del anterior.
// (Sugerencia: usá callbacks anidados.)
// ============================================
// SPOILER:
// ============================================
// function showMessages() {
//   setTimeout(() => {
//     console.log("¿1, 2 o 3?");
//     setTimeout(() => {
//       console.log("¿1, 2 o 3?");
//       setTimeout(() => {
//         console.log("¿1, 2 o 3?");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }
// showMessages();

// Reflexión:
// ¿Qué pasaría si tuviéramos 5 o 10 pasos más?
// Este tipo de código anidado se llama “callback hell” (infierno de callbacks).
// En el próximo archivo, veremos cómo las PROMESAS lo simplifican.


function callbacks(){
    sayHelloLater("Andy", (mensaje)=>{
        console.log(mensaje)
    })
    muestraProceso()
}

function getNumberAsync(){
    return new Promise((resolver, rechazar) => {
        const numero = Math.floor(Math.random()*10)

        setTimeout(()=>{
            if(numero > 5){
                resolver(numero)
            } else {
                rechazar(numero)
            }
        }, 1000)
    })
}


// CHALLENGE: crear una función que salude con una promesa
// Extensión opcional: agregar un caso de reject() si name está vacío. 
// Pista: usar if(name === "") ... en el setTimeout()

function saludar(nombre){
    return new Promise((resolver, rechazar) => {
        setTimeout(()=>{
            if(nombre === ""){
                rechazar("Nombre vacio")
            } else {
                resolver(nombre)
            }
        }, 1000)
    })
}

function promesas(){
    //Metodo para consumo de Promesas
    getNumberAsync()
        .then((num)=>{
            console.log("El numero es: " + num)
        })
        .catch((err)=>{
            console.log("Error: " + err)
        })
        .finally(()=>{
            console.log("Esto pasa si o si")
        })
    saludar("")
        .then((nombre)=>{
            console.log("Hola " + nombre + " bienvenido!")
        })
        .catch((err)=>{
            console.log("Error: " + err)
        })

}

promesas()