const express = require("express");
const app = express();
const getMessages = require("./getMessages");
const postMessage = require("./postMessage");
const resetMessages = require("./resetMessages");

app.use(express.static(__dirname));
app.use(express.json());

app.get("/api/getMessages", getMessages);
app.post("/api/postMessage", postMessage);
app.post("/api/resetMessages", resetMessages);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
