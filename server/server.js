const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const mongoose = require("mongoose");
const config = require("../personal/key");
const OrderStack = require("./models/OrderSchema");
mongoose
  .connect(config.mongoURI)
  .then(() => {
    console.log("DB 연결 성공");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/text", async (req, res) => {
  const { drink } = req.body; //클라이언트에서 보낸 데이터
  try {
    console.log("주문한 음료:", drink.name);
    console.log("주문한 음료의 가격:", drink.price);

    const newDrink = await OrderStack({
      name: drink.name,
      price: drink.price,
    });
    console.log(newDrink);
    await newDrink.save();
    //성공 응답
    res.status(201).json({ message: "텍스트를 성공적으로 받았습니다." });
  } catch (err) {
    console.log("DB 저장 오류", err);
    res.status(500).json({ err: "DB에 주문 저장 실패" });
  }
});

//서버 실행
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
