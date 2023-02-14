const mongoose = require("mongoose");

  mongoose.connect("mongodb://localhost:27017/testDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family:4
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });

// const infoSchema = new mongoose.Schema(
// {
//   name:{
//     type: String,
//     required: true
//   },
//   address:{
//     type: String,
//     required: true
//   },
//   assets:[{
//     Stocks:{
//       type: mongoose.Schema.ObjectId,
//       ref: "Stock",
//       required: true,
//   },
// Crypto:{type: mongoose.Schema.ObjectId,
//   ref: "Crypto",
//   required: true,}}],

// }
// );
const moneySchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true
    },
    balance: {
      type: Number,
      required: true
    }

  },
  { timestamps: true }
);
const stockSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }

  },
  { timestamps: true }
);
const cryptoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }

  },
  { timestamps: true }
);

const Deposit = mongoose.model("deposit", moneySchema);
module.exports=Deposit