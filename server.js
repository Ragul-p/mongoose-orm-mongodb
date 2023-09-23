const express = require("express");
const app = express();
app.use(express.json());

const db = require("./config/db")
db();

app.use("/api/user", require("./route/user.route"))

app.listen(3000, function () {
    console.log(`server is listening on port 3000`);
})