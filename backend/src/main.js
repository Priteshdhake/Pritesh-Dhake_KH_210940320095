const express = require("express");
const app = express();
app.use(express, json());
const cors = require("cors");
app.use(cor());

const { createmsg, readmsg } = require("./user");
app.get("./read", async (req, res) => {
  const list1 = await readmsg();
  res.json(list1);
});

app.post("/create", async (req, res) => {
  let user = req.body;
  await createmsg(user);
  res.json({ mess: "done" });
});

app.listen(4000, () => {
  console.log("start");
});
