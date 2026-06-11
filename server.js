const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const dataDir = path.join(__dirname, "data");
const messagesFile = path.join(dataDir, "messages.json");

if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);
if (!fs.existsSync(messagesFile)) fs.writeFileSync(messagesFile, "[]");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

function readMessages() {
  return JSON.parse(fs.readFileSync(messagesFile, "utf8"));
}

function saveMessages(messages) {
  fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2));
}

app.get("/api/messages", (req, res) => {
  res.json(readMessages());
});

app.post("/api/contact", (req, res) => {
  const { name, email, service, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Name, email aur message zaruri hai." });
  }

  const messages = readMessages();
  const newMessage = {
    id: Date.now(),
    name,
    email,
    service: service || "General",
    message,
    createdAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
  };

  messages.unshift(newMessage);
  saveMessages(messages);

  res.json({ success: true, message: "Thank you! NorthBridge team aapko jald contact karegi." });
});

app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "admin.html"));
});

app.listen(PORT, () => {
  console.log(`NorthBridge website running on port ${PORT}`);
});
