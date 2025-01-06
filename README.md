# Mon projet Ping - HTTP natif en TypeScript

Ce projet met en place un serveur HTTP qui :
-Retourne les en-têtes d'une requête GET sur '/ping' en JSON.
-Renvoie une réponse 404 vide pour toutes autres demande

# Utilisation

Exécuter l'api puis dans un autre terminal executer un ping du genre :

curl http://127.0.0.1:3000

Attention curl doit être installer (sudo apt install curl)
