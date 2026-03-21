import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import 'dotenv/config'

import serviceRoute from "./routes/sercives.js"
import aboutRoute from "./routes/about-us.js"
import herosectionRoute from "./routes/hero-section.js"
import partnerRoute from "./routes/partner.js"
import portfolioRoute from "./routes/portfolios.js"
import authRoute from "./routes/auth.js"
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(express.static('public')); // use to serve static content(image,..) from BE to FE

const { DATABASE_HOST, DATABASE_PORT, DATABASE_NAME, APPLICATION_PORT } = process.env;

mongoose.connect(`mongodb://${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`)
  .then(() => {
    app.listen(APPLICATION_PORT, () => {
      console.log(`Server is running on http://localhost:${APPLICATION_PORT}`)
    })
    console.log('sucessfully connected with Database !')
  })
  .catch((e) => console.log("failed to connect!!"));

  app.get ("/", (req, res) =>{
    res.send("Health check okay !!")
  })

  app.use("/services", serviceRoute);
  app.use("/about", aboutRoute);
  app.use("/herosection", herosectionRoute);
  app.use("/partners", partnerRoute);
  app.use("/portfolios", portfolioRoute);
  app.use("/auth", authRoute);
