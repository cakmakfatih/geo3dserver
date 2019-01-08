import express = require("express");
import api from './api/v1';
import path = require("path");

const app = express();

app.use(express.static("scripts"));
app.use(express.static("views"));
app.use("data", express.static("data"));

app.use('/api/v1/', api);

app.set("port", process.env.PORT || 3000);
app.use((req, res) => res.sendFile(`index.html`));

export default app;