const express = require("express");
const app = express();
const cors = require("cors");
const port = 7000;

const db = require("../personal/mysql");
const mysql = require("mysql2");

//미들웨어
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.connect((err) => {
  if (err) {
    console.error("MySQL 연결 실패:", err);
    return;
  }
  console.log("MySQL 연결 성공!");
});

app.post("/api/orders", async (req, res) => {
  const { name, price } = req.body.drink;
  const order_query = "INSERT INTO orders (user_id, total_price) VALUES (?,?)";
  const find_drink_id = "SELECT drink_id FROM drinks WHERE name=?;";
  const order_items_query =
    "INSERT INTO order_items (drink_id, quantity) VALUES (?,?)";

  let connection; // DB 연결 객체
  try {
    // 1. 주문 추가 (orders 테이블)
    const [orderResult] = await db.promise().execute(order_query, [1, price]);
    console.log("Order 테이블에 추가 완료. Order ID:", orderResult.insertId);

    // 2. drink_id 찾기
    const [drinkResult] = await db.promise().execute(find_drink_id, [name]);
    if (drinkResult.length === 0) {
      return res.status(404).json({ message: "해당 음료를 찾을 수 없습니다." });
    }
    const drink_id = drinkResult[0].drink_id;

    // 3. order_items 추가
    await db.promise().execute(order_items_query, [drink_id, 1]);
    console.log("Order_items 테이블에 추가 완료.");

    // 성공 응답 반환
    res.status(201).json({
      message: "주문 및 주문 상세가 성공적으로 추가되었습니다.",
      order_id: orderResult.insertId,
    });
  } catch (err) {
    console.error("에러 발생:", err);
    res.status(500).json({ message: "서버 오류 발생", error: err.message });
  }
});

//서버 실행
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
