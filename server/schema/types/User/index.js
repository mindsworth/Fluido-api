export default `
  type User {
    _id: String!
    name: String!
    email: String!
  }

  type Query {
    user(id: String): User
  }

  type Mutation {
    addUser(_id: String!, name: String!, email: String!): User
  }
`;
