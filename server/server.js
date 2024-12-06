const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/text", (req, res) => {
  const { todo } = req.body; //클라이언트에서 보낸 데이터
  console.log("받은 텍스트:", todo);

  //성공 응답
  res.status(200).json({ message: "텍스트를 성공적으로 받았습니다." });
});

//서버 실행
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
