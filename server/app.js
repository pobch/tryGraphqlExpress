const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')

const app = express()

// mongodb://pob:test123@ds119523.mlab.com:19523/try-graphql

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema
}))

app.listen(4000, () => {
  console.log('Now listening for requests on port 4000')
})