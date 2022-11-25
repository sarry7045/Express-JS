const Page3Controller = (req, res) => {
    console.log(req.params)
    const { id } = req.params
    if (id === 10) {
        res.send("Not Allowed")
    } else {
        res.send("Allow")
    }
}

module.exports = Page3Controller