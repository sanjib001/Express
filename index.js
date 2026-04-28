import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import 'dotenv/config'
import serviceRoute from "./routes/sercives.js";
import aboutRoute from "./routes/about-us.js";
import portfolioRoute from "./routes/portfolios.js";
import authRoute from "./routes/auth.js";
import cors from 'cors';

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));

// app.use((req, res, next) => {
//     logger.info(`${req.method} ${req.url}`);
//     next();
// });

const { DATABASE_HOST, DATABASE_PORT, DATABASE_NAME, APPLICATION_PORT, CONNECTION_STRING } = process.env;

try {
    await mongoose.connect(CONNECTION_STRING, {
        dbName: 'antbyte'
    })
    app.listen(APPLICATION_PORT, () => {
        console.log(`Server is running on http://localhost:${APPLICATION_PORT}`)
    })
    console.log('Successfully connected with database')
} catch (e) {
    console.log("failed to connect")
}



app.get("/", (req, res) => {
    res.send("Health check okay!!")
})

app.use("/services", serviceRoute)
app.use("/about", aboutRoute)
app.use("/portfolios", portfolioRoute)
app.use("/auth", authRoute)