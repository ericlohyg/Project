const { gql } = require("apollo-server-express");

const task = gql`
    type Task {
        _id: String!
        name: String
        status: String
    }
    extend type Query {
        getAllTasks: [Task]!
        getTask(name: String, _id: String): [Task]!
    }
    extend type Mutation {
        deleteAllTasks: String
        addTask(name: String!, status: String!): String
    }
`;

module.exports = task;
