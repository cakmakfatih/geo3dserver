import express = require("express");
import fs = require("fs");
import path = require("path");

const router = express.Router();

router.get("/get_venue", (req, res) => {
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

router.get("/get_buildings", (req, res) => {
    fs.readFile("data/Buildings.geojson", 'utf-8', (err, data) => {
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
