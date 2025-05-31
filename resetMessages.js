const fetch = require("node-fetch");

module.exports = async (req, res) => {
  try {
    const systemMsg = [{ name: "System", text: "Chat reset by admin." }];
    await fetch("https://jsonblob.com/api/jsonBlob/1377781148419284992", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(systemMsg)
    });
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to reset messages" });
  }
};
