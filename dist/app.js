"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const v1_1 = require("./api/v1");
const app = express();
app.use(express.static("scripts"));
app.use(express.static("views"));
app.use('/api/v1/', v1_1.default);
app.set("port", process.env.PORT || 3000);
app.use((req, res) => res.sendFile(`index.html`));
exports.default = app;
//# sourceMappingURL=app.js.map