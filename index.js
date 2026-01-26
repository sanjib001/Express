import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/api', (req, res) => {
  res.json({ "messange": "Hello from MERN stack class"})
})

app.get('/contact', (req, res) => {
  res.json({ "messange": "Hello from MERN stack class"})
})

app.listen(8848, () => {
  console.log('Server is running on http://localhost:8848')
})