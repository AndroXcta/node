const http = require("node:http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  if (req.url === "/") {
    res.end("<h1>Hola esta es mi primera página!</h1>");
  } else if (req.url === "/contacto") {
    res.end("<h2>Mi telefono es 12345678</h2>");
  } else {
    res.statusCode = 404;
    res.end("<p>Recurso no encontrado - 404</p>");
  }
});

server.listen(3000, () => {
  console.log("Servidor escuchando en el puerto: http://localhost:3000");
}); 