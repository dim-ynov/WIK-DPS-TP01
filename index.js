"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
// Récupération du port depuis la variable d'environnement
const PORT = process.env.PING_LISTEN_PORT || 3000;
// traitement des requête HTTP entrante
function requestListener(req, res) {
    //verifications
    if (req.method === 'GET' && req.url === '/ping') {
        //rédaction réponse JSON
        res.writeHead(200, { 'Content-type': 'application/json' });
        // headers access req.headers
        const responseData = req.headers;
        // Conversion en JSON et envoi
        res.end(JSON.stringify(responseData));
    }
    else {
        //Pour ttes autres routes ou méthodes : 404 corps vide
        res.writeHead(404);
        res.end();
    }
}
// Création d'un serveur HTTP
const server = (0, http_1.createServer)(requestListener);
// Démarage de l'écoute sur le port choisi
server.listen(PORT, () => {
    console.log('Serveur lancé sur le port ${PORT}');
});
