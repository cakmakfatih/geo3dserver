"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get("/test", (req, res) => {
    res.json({
        test: "success"
    });
});
exports.default = router;
//# sourceMappingURL=v1.js.map