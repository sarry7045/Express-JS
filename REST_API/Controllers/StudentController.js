import studentModel from "../models/Students.js";

class StudentController {
  static createDoc = async (req, res) => {
    try {
      const { name, age, fees } = req.body;
      const doc = new studentModel({
        name: name,
        age: age,
        fees: fees,
      });
      const result = await doc.save();
      res.status(201).send(result);
    } catch (error) {
      console.log(error);
    }
    // res.send("Data Created");
  };
  static getAllDoc = async (req, res) => {
    try {
      const result = await studentModel.find();
      res.send(result);
    } catch (error) {
      console.log(error);
    }
    // res.send("All Doc");
  };
  static getSingleDocById = async (req, res) => {
    try {
      const result = await studentModel.findById(req.params.id);
      res.send(result);
    } catch (error) {
      console.log(error);
    }
    // res.send("Get Single DOC by ID");
  };
  static updateDocById = async (req, res) => {
    try {
      const result = await studentModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.send(result);
    } catch (error) {
      console.log(error);
    }
    // res.send("Get Updated DOC by ID");
  };

  static deleteDocById = async (req, res) => {
    try {
      const result = await studentModel.findByIdAndDelete(req.params.id);
      res.status(204).send(result);
    } catch (error) {
      console.log(error);
    }
    // res.send("Delete DOC by ID");
  };
}

export default StudentController;
