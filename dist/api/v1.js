"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const fs = require("fs");
const router = express.Router();
router.get("/get_test_data", (req, res) => {
    fs.readFile("data/Venue.geojson", 'utf-8', (err, data) => {
        if (!err) {
            res.json(Object.assign({ status: "success" }, JSON.parse(data)));
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