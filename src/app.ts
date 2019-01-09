import express = require("express");
import api from './api/v1';
import path = require("path");

const app = express();
app.set("port", process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "scripts")));
app.use(express.static(path.join(__dirname, "data")));
app.use(express.static(path.join(__dirname, "assets")));

app.use('/api/v1/', api);

app.all('*', function(req, res, next){
    if(!req.path.startsWith("/api")){
        res.sendFile(path.join(__dirname, "views", "index.html"));
    } else {
        next();
    }
});

export default app;