const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()





app.listen(PORT, () => {
    console.log(`Serving up delicious fruits on port ${PORT}`)
})



app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!!')
})

app.get('/greet/:name', (req, res) => {
    res.send(`Why hello there, ${req.params.name}`)
})

app.get('/five', (req, res) => {
    res.send({
        five: [1, 2, 3, 4, 5]
        })
})

const fruits = {
    name: ['mango', 'banana', 'apple', 'watermelon']
}
app.get('/fruits', (req, res) => {
    // res.send(
    //     {
    //         name: ['mango', 'banana', 'apple', 'watermelon']
    //     }
    // ) OR...
    // define a 'fruits' variable above, outside the GET
    // res.send(`${fruits.name}`) OR...
    res.send(fruits)
})

app.get('/fruits/:name', (req, res) => {
    res.send(`${req.params.name}`)
})

const veggies = [`zucchini`, `broccoli`, `asparagus`]
app.get('/veggies', (req, res) => {
    res.send(veggies)
})

app.get(`/veggies/:name`, (req, res) => {
    res.send(`${req.params.name}`)
})

app.get('/fruits/pretty/sort', (req, res) => {
    const fruits = ['mango', 'banana', 'apple', 'watermelon']
    res.send(fruits.sort())
})









