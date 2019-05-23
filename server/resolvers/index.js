const { ApolloServer, gql } = require('apollo-server');
const models = require("../models")



const resolvers = {
  Query: {
    getAllTasks: async () => await models.getAllTasks(),
    getTask: async (parent, args) => await models.getTask(args._id, args.name)
  },
  Mutation: {
    deleteAllTasks: async () => await models.deleteAllTasks(),
    addTask: async (parent, args) => await models.addTask(args.name, args.status)
  }
};

module.exports = resolvers;
