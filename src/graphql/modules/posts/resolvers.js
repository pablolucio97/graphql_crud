import {postModel} from '../../../models/Post'

const resolvers = {
    Query: {
        posts: () => postModel.find(),
        post: (_, { id }) => postModel.findById(id)
    },
    Mutation: {
        createPost: (_, { data }) => postModel.create(data),
        updatePost: (_, { id, data }) => postModel.findOneAndUpdate(id, data, { new: true }),
        deletePost: async (_, { id }) => !!(await postModel.findOneAndDelete(id))
    }
}

export { resolvers }