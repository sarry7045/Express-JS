class CookieController {
    static set_Cookie = (req, res) => {
        res.cookie("username", "surajyadav",{maxAge: 50000 })
        res.cookie("cart", "shoes")
        res.send("Cookie Set..")
    }
    static get_Cookie = (req, res) => {
        res.send("Cookie Get..")
    }
    static delete_Cookie = (req, res) => {
        res.clearCookie("username")
        res.send("Cookie Deleted..")
    }
}
// export default CookieController
module.exports = CookieController
