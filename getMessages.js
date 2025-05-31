const fetch = require("node-fetch");

module.exports = async (req, res) => {
  try {
    const response = await fetch("https://jsonblob.com/api/jsonBlob/1377781148419284992");
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};
