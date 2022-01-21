const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

//쿼리만들기
const schema = buildSchema(`
  type Query {
    hello: String,
    nodejs: Int
  }
`);

const root = {
  hello: () => "Hello world!",
  nodejs: () => 20,
};

const app = express();
//url graphql로 통일
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, //http://localhost:3000/graphql gui제공
  })
);

app.listen(3000, () => {
  console.log("서버 오픈!");
});
