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

const { CONNECTION_STRING } = process.env;

const PORT = process.env.PORT || process.env.APPLICATION_PORT || 8848;

const startServer = async () => {
    try {
        await mongoose.connect(CONNECTION_STRING, {
            dbName: 'antbyte'
        })
        console.log('Successfully connected with database')

        app.listen(PORT, '0.0.0.0', () => {
            console.log(`Server is running on http://localhost:${PORT}`)
        })

    } catch (e) {
        console.log("failed to connect", e.message)
    }
}

startServer()

// Routes
app.get("/", (req, res) => {
    res.send("Health check okay!!")
})

app.use("/services", serviceRoute)
app.use("/about", aboutRoute)
app.use("/portfolios", portfolioRoute)
app.use("/auth", authRoute)