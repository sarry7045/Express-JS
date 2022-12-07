import UserModel from "../Models/Schema.js";
import bcrypt from "bcrypt";

class UserController {
  static Home = (req, res) => {
    res.render("Index");
  };
  static Registration = (req, res) => {
    res.render("Registration");
  };
  static Login = (req, res) => {
    res.render("Login");
  };
  static createDoc = async (req, res) => {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    try {
      const doc = new UserModel({
        name: req.body.name,
        email: req.body.email,
        // password: req.body.password,
        password: hashPassword,
      });
      await doc.save();
      res.redirect("./login");
    } catch (error) {
      console.log(error);
    }
  };
  static verifyLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      const result = await UserModel.findOne({
        eemail: email,
        ppassword: password,
      });
      console.log(result);

      if (result != null) {
        const isMatch = await bcrypt.compare(password, result.password);
        if (
          result.email == email &&
          // result.password == password
          isMatch
        ) {
          res.send(`<h4>Hello ${result}</h4>`);
        } else {
          res.send(`Email or Password is Invalid`);
        }
      } else {
        res.send(`<h4> You are not a Registered User</h4>`);
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export default UserController;
