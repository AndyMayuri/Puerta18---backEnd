// En este ejemplo:
// - Creamos un pequeño servidor HTTP nativo (sin frameworks).
// - Manejamos rutas simples con "if".
// - Enviamos respuestas en texto y JSON.

import { createServer } from 'http';

const users = [
  { id: 1, name: 'Ana', email: 'ana@mail.com' },
  { id: 2, name: 'Luis', email: 'luis@mail.com' },
  { id: 3, name: 'Carla', email: 'carla@mail.com' },
];

// Creamos el servidor con createServer()
// ----------------------------------------
// Esta función recibe un "callback" con los argumentos "req" y "res",
// que se ejecuta cada vez que llega una solicitud HTTP.
//
// Los parámetros "req" y "res" son objetos:
// - req (request): lo que el cliente envía (método, URL, headers, body, etc.)
// - res (response): lo que el servidor responde (estado, headers, body, etc.)
const server = createServer((req, res) => {
    const {method, url} = req;
    // También podría hacerse así:
    // const method = req.method;
    // const url = req.url;

    // Ruta raíz "/"
    if (method === 'GET' && url === '/') {
    // Escribimos encabezado (status + tipo de contenido)
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // Enviamos la respuesta final (cierra la conexión)
    res.end('Welcome to Node Intro! Visit /users to get a JSON list.');
    return;
    }

    // Ruta "/users" -> devolvemos JSON con la lista de usuarios
    if (method === 'GET' && url === '/users') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        // res.end(users); // Si lo enviamos así corremos el riesgo de que no se convierta a JSON correctamente
        res.end(JSON.stringify(users, null, 2)); // Convertimos el array a JSON
        return;
    }

    // Si la ruta no existe -> devolvemos 404
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('❌ 404 - Route not found');
})

// Puerto donde el servidor va a "escuchar" solicitudes
const PORT = 3000;

// Iniciamos el servidor
server.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

