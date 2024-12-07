const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: () => {
        const utcDate = new Date();
        const kstDate = new Date(utcDate.getTime() + 9 * 60 * 60 * 1000); // UTC+9
        return kstDate;
      },
    },
  },
  { collection: "OrderStack", versionKey: false }
);

const OrderStack = mongoose.model("OrderStack", orderSchema);

module.exports = OrderStack;
