const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

mongoose.connect(
  'mongodb://pob:test123@ds119523.mlab.com:19523/try-graphql',
  { useNewUrlParser: true }
)
mongoose.connection.once('open', () => {
  console.log('database connected')
})

app.use(cors())
app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema
}))

app.listen(4000, () => {
  console.log('Now listening for requests on port 4000')
})
