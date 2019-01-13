"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const v1_1 = require("./api/v1");
const path = require("path");
const app = express();
app.set("port", process.env.PORT || 3000);
app.set('json spaces', 2);
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "scripts")));
app.use(express.static(path.join(__dirname, "data")));
app.use(express.static(path.join(__dirname, "assets")));
app.use('/api/v1/', v1_1.default);
app.all('*', function (req, res, next) {
    if (!req.path.startsWith("/api")) {
        res.sendFile(path.join(__dirname, "views", "index.html"));
    }
    else {
        next();
    }
});
exports.default = app;
//# sourceMappingURL=app.js.map