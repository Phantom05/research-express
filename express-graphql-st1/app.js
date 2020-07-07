
var express = require("express");
var graphqlHTTP = require("express-graphql");
var Graphql = require("graphql");
var fakeDatabase = require("./fakedata.js");

const geoType = new Graphql.GraphQLObjectType({ // Object 타입을 정의합니다.
  name: "geo",
  fields: {
    lat: { type: Graphql.GraphQLFloat },
    lng: { type: Graphql.GraphQLFloat }
  }
});
const companyType = new Graphql.GraphQLObjectType({
  name: "company",
  fields: {
    name: { type: Graphql.GraphQLString },
    catchPhrase: { type: Graphql.GraphQLString },
    bs: { type: Graphql.GraphQLString }
  }
});
const addressType = new Graphql.GraphQLObjectType({
  name: "address",
  fields: {
    street: { type: Graphql.GraphQLString },
    suite: { type: Graphql.GraphQLString },
    city: { type: Graphql.GraphQLString },
    zipcode: { type: Graphql.GraphQLString },
    geo: { type: geoType } // Object 형태일 경우 새로 GrapgQLObject를 만들어서 지정해 줍니다.
  }
});
const userType = new Graphql.GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: Graphql.GraphQLInt },
    name: { type: Graphql.GraphQLString },
    username: { type: Graphql.GraphQLString },
    email: { type: Graphql.GraphQLString },
    address: { type: addressType }, // Object 형태일 경우 새로 GrapgQLObject를 만들어서 지정해 줍니다.
    phone: { type: Graphql.GraphQLString },
    website: { type: Graphql.GraphQLString },
    company: { type: companyType } // Object 형태일 경우 새로 GrapgQLObject를 만들어서 지정해 줍니다.
  }
});

var queryType = new Graphql.GraphQLObjectType({
  name: "Query",
  fields: {
    user: {
      type: userType,
      args: { // 쿼리문 중 인자를 정의하는 곳
        id: { type: Graphql.GraphQLInt }
      },
      resolve: function(_, { id },_,_) {// 실제로 쿼리 될때 호출되는 메소드
        const data = Object.keys(fakeDatabase).filter(element => {
          if (fakeDatabase[element].id == id) {
            return element;
          }
        });
        return fakeDatabase[data];
      }
    },
    allUser: {
      type: new Graphql.GraphQLList(userType),
      resolve: function(_,_,_,_) {
        return fakeDatabase;
      }
    }
  }
});

var schema = new Graphql.GraphQLSchema({ query: queryType });

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

// Run Server
const port = 7000;
app.listen(port, () => {
  console.log(`Running a GraphQL server ${port}`);
}).on('error', (err) => {
  console.error(err);
});



const geoType = new Graphql.GraphQLObjectType({
  name: "geo",
  fields: {
  lat: { type: Graphql.GraphQLFloat },
  lng: { type: Graphql.GraphQLFloat }
  }
  });