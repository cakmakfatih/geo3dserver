"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const v1_1 = require("./api/v1");
const path = require("path");
const app = express();
console.log(__dirname);
console.log(path.join(__dirname, "views"));
app.use(express.static("scripts"));
app.use(express.static(path.join(__dirname, "./../views")));
app.use("data", express.static("data"));
app.use('/api/v1/', v1_1.default);
app.set("port", process.env.PORT || 3000);
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});
exports.default = app;
//# sourceMappingURL=app.js.map