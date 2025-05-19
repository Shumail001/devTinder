const express = require("express")


const app = express()

app.use("/test",(req,res) => {
    res.end("Hello From Nodejs for testing")
})


app.listen(3001, () => {
    console.log("Server is Listen on port 3001")
})