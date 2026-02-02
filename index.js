import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import serviceRoute from "./routes/sercives.js"
import aboutRoute from "./routes/about-us.js"
import herosectionRoute from "./routes/hero-section.js"
import partnerRoute from "./routes/partner.js"
import protfolioRoute from "./routes/protfolios.js"

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

mongoose.connect('mongodb://127.0.0.1:27017/Anbyte')
  .then(() => {
    app.listen(8848, () => {
      console.log('Server is running on http://localhost:8848')
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
  app.use("/partner", partnerRoute);
  app.use("/protfolio", protfolioRoute);
