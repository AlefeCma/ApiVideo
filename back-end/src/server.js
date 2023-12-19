const app = require('./app')
const dotenv = require('dotenv')

const port = process.env.PORT || 3333
app.listen(port, () =>console.log(`server running or port ${port}`))
