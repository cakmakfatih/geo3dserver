import express = require("express");

const router = express.Router();

router.get("/map", (req, res) => {
    res.json({
        name: "Fatih"
    });
});

export default router;
