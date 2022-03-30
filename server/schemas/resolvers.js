const { User } = require('../models');

const resolvers = {
    Query: {
        user: async (root, inputs, ) => {
            return await User.findById(inputs.id);
        },
        users: async () => {
            return await User.find({});
        },
    },
    Mutation: {
        createUser: async (_root,) => {

        }
    },
};

module.exports = resolvers;