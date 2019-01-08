import express = require("express");
import fs = require("fs");
import path = require("path");

const router = express.Router();

router.get("/get_test_data", (req, res) => {
    fs.readFile("data/Venue.geojson", 'utf-8', (err, data) => {
        if(!err) {
            res.json({
                status: "success",
                ...JSON.parse(data)
            });
        } else {
            res.sendStatus(404);
            res.json({
                status: "error"
            });
        }
    });
});

export default router;
