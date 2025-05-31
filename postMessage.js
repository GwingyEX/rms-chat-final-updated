const fetch = require("node-fetch");

module.exports = async (req, res) => {
  try {
    const getRes = await fetch("https://jsonblob.com/api/jsonBlob/1377781148419284992");
    const data = await getRes.json();
    const messages = [...data, req.body];
    await fetch("https://jsonblob.com/api/jsonBlob/1377781148419284992", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(messages)
    });
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to post message" });
  }
};
