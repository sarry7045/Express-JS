const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 50 },
  mobile: { type: Number, required: true },
  address: { type: String },
//   fees: {
//     type: mongoose.Decimal128m,
//     required: true,
//     validate: (v) => v >= 5000,
//   },
  hobbies: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],
  join: { type: Date, default: Date.now },
});

const studentModal = mongoose.model("student", studentSchema);
