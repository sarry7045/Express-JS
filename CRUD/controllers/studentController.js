class studentController {
  static createDoc = (req, res) => {
    res.redirect("/student");
  };
  static getAllDoc = (req, res) => {
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
