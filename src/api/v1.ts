import express = require("express");
import fs = require("fs");

const router = express.Router();

router.get("/example_data", (req, res) => {
    fs.readFile("data/example.geo3d", "utf-8", (err, data) => {
        if(!err) {
            res.json({
                status: "success",
                data: JSON.parse(data)
            });
        } else {
            res.sendStatus(404);
            res.json({
                status: "error"
            });
        }
    })
});

export default router;
