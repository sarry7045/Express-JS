import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true },
  fees: {
    type: mongoose.Decimal128,
    required: true,
    validate: (value) => value >= 5000,
  },
});

const studentModel = mongoose.model("rest", studentSchema);

export default studentModel;
