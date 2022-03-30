const { Users } = require("../models");

const typeDefs = gql`
type User {
    _id: ID
    firstName: String
    lastName: String
    fullName: String
}

type Query {
    user(id: String!): User
    users: [User]
}

type Mutation {
    createUser(firstName: String!, lastName: String!, password: String!)
}
`;

module.exports = typeDefs;