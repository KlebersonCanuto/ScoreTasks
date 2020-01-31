const Task = require('../controller/taskController')
const User = require('../controller/userController')
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

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    username: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
  })
})

const Querys = new GraphQLObjectType({
  name: 'Querys',
  fields: {
    task: {
      type: TaskType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve (_, args) {
        return Task.getById(args.id)
      }
    },
    tasks: {
      type: new GraphQLList(TaskType),
      resolve() {
        return Task.getAll()
      }
    },
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve (_, args) {
        return User.getById(args.id)
      }
    },
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.getAll()
      }
    }
  }
})

const Mutations = new GraphQLObjectType({
  name: 'Mutations',
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
      resolve(_, args) {
        const categories = ["teste"]
        return Task.create({...args, categories: categories})
      }
    },
    addUser: {
      type: UserType,
      args: {
        username: {
          type: new GraphQLNonNull(GraphQLString)
        },
        password: {
          type: new GraphQLNonNull(GraphQLString)
        },
        email: {
          type: new GraphQLNonNull(GraphQLString)
        },
      },
      resolve(_, args) {
        return User.create(args)
      }
    },
    removeTask: {
      type: TaskType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(_, args) {
        return Task.remove(args.id)
      }
    },
    removeUser: {
      type: UserType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(_, args) {
        return User.remove(args.id)
      }
    },
    updateTask: {
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
        id: {
          type: new GraphQLNonNull(GraphQLString)
        },
        categories: {
          type: new GraphQLList(GraphQLString)
        }
      },
      resolve(_, args) {
        return Task.update(args.id, args)
      }
    },
    updateUser: {
      type: UserType,
      args: {
        username: {
          type: new GraphQLNonNull(GraphQLString)
        },
        email: {
          type: new GraphQLNonNull(GraphQLString)
        },
        id: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(_, args) {
        return User.update(args.id, args)
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: Querys,
  mutation: Mutations
})