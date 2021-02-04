const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8888

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/api/thiden', (request, response) => {
    response.json({ info: 'welcome to thi den api!' })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})