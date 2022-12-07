class SessionController {
  static get_Session = (req, res) => {
    console.log(req.session);
    console.log(req.session.id);
    console.log(req.session.cookie);
    console.log(req.session.cookie.maxAge);
    console.log(req.session.cookie.originalMaxAge);
    console.log(req.sessionID);
    res.send("Session info");
  };

  static regn_Session = (req, res) => {
    req.session.regenerate(() => {
      console.log("Session Regenerated");
    });
    res.send("Session Regenerated");
  };
  static delete_Session = (req, res) => {
    req.session.destroy(() => {
      console.log("Session Deleted");
    });
    res.send("Session Deleted");
  };
  static session_example = (req, res) => {
    if (req.session.count) {
      req.session.count++;
    } else {
      req.session.count = 1;
    }
    res.send(`Count of ${req.session.count}`);
  };
}
// export default CookieController
module.exports = SessionController;
