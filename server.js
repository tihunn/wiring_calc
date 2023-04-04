const express = require("express")
const path = require("path")


const PORT = process.env.REACT_APP_PORT || 80

const app = express()

app.use(express.static(__dirname))


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.listen( PORT, () => {
    console.log(`Server listens PORT: ${PORT}`)
})
