import express from 'express'
import mongoose from 'mongoose';

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/Anbyte')
  .then(() => {
    app.listen(8848, () => {
      console.log('Server is running on http://localhost:8848')
    })
    console.log('sucessfully connected with Database !')
  })
  .catch((e) => console.log("failed to connect!!"));

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/api', (req, res) => {
  res.json({ "messange": "Hello from MERN stack class" })
})

app.get('/contact', (req, res) => {
  res.json({ "messange": "Hello from MERN stack class" })
})
