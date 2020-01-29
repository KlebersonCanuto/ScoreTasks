const Task = require('../controller/taskController')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLID,
  GraphQLFloat,
  GraphQLList,
  GraphQLNonNull
} = require('graphql')


const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    points: {
      type: GraphQLFloat
    },
    positive: {
      type: GraphQLBoolean
    },
    categories: {
      type: GraphQLList(GraphQLString)
    }
  })
})

const TaskQuery = new GraphQLObjectType({
  name: 'TaskQuery',
  fields: {
    task: {
      type: TaskType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve (parent, args) {
        return Task.getById(args.id)
      }
    },
    tasks: {
      type: new GraphQLList(TaskType),
      resolve(parent, args) {
        return Task.getAll()
      }
    }
  }
})

const TaskMutation = new GraphQLObjectType({
  name: 'TaskMutation',
  fields: {
    addTask: {
      type: TaskType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString)
        },
        description: {
          type: new GraphQLNonNull(GraphQLString)
        },
        points: {
          type: new GraphQLNonNull(GraphQLFloat)
        },
        positive: {
          type: new GraphQLNonNull(GraphQLBoolean)
        },
      },
      resolve(parent, args) {
        const categories = ["teste"]
        return Task.create({...args, categories: categories})
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: TaskQuery,
  mutation: TaskMutation
})