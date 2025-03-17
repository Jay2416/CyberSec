const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello, this is a simple Node.js web service!");
});

app.get("/greet", (req, res) => {
    res.send("How are you?");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
