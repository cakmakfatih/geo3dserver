"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get("/map", (req, res) => {
    res.json({
        name: "Fatih"
    });
});
exports.default = router;
//# sourceMappingURL=v1.js.map