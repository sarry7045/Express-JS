import StudentModel from "../models/Student.js";

class studentController {
  static createDoc = (req, res) => {
    res.redirect("/student");
  };
  static getAllDoc = async (req, res) => {
    try {
      const result = await StudentModel.find();
      console.log(result);
      res.render("index", { data:result });
    } catch (error) {
      console.log(error);
    }
    res.render("index");
  };

  static editDoc = (req, res) => {
    res.render("edit");
  };

  static updateDoc = (req, res) => {
    res.redirect("/student");
  };

  static deleteDoc = (req, res) => {
    res.redirect("/student");
  };
}

export default studentController;
