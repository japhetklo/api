const express= require('express'); //importation de la librerie express
const app = express();// je viens initialiser express

app.listen(2000, function(){
    console.log("le serveur est bien demare");
})

app.get('/subnet', function(req, res){
    res.send("Nous sommes la solution a vos entreprises en terme de la solution solide");
});