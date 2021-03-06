"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const fs = require("fs");
const router = express.Router();
router.get("/example_geo3d", (req, res) => {
    fs.readFile("data/example.geo3d", "utf-8", (err, data) => {
        if (!err) {
            res.json(Object.assign({}, JSON.parse(data)));
        }
        else {
            res.sendStatus(404);
            res.json({
                status: "error"
            });
        }
    });
});
exports.default = router;
//# sourceMappingURL=v1.js.map