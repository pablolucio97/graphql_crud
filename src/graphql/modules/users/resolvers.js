import {userModel} from '../../../models/User'

const resolvers = {
    Query: {
        users: () => userModel.find(),
        user: (_, { id }) => userModel.findById(id)
    },
    Mutation: {
        createUser: (_, { data }) => userModel.create(data),
        updateUser: (_, { id, data }) => userModel.findOneAndUpdate(id, data, { new: true }),
        deleteUser: async (_, { id }) => !!(await userModel.findOneAndDelete(id))
    }
}

export { resolvers }