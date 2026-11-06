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


function main(){
    sayHelloLater("Andy", (mensaje)=>{
        console.log(mensaje)
    })
    muestraProceso()
}

main()