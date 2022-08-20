const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors()); //모든요청에도 다 응답되도록 함.

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/sound/:name", (req, res) => {
  const { name } = req.params; // key(name) :value 에서 value값 바로 가짐.

  if (name == "dog") {
    res.json({ sound: "멍멍" });
  } else if (name == "cat") {
    res.json({ sound: "야옹" });
  } else if (name == "pig") {
    res.json({ sound: "꿀꿀" });
  } else {
    res.json({ sound: "알수없음" });
  }
});

app.listen(3000);
