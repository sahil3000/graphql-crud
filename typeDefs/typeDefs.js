
export const typeDefs = `
    scalar Date
    type Todo  {
        id: ID,
        title: String,
        detail: String,
        date: Date
    }

    input todosType {
        title: String,
        detail: String,
        date: Date
    }

    type Query {
        welcome: String,
        hi(name: String): String,
        getTodos: [Todo],
        getTodo(id: String): Todo
    }

    type Mutation {
        addTodo(title: String, detail: String, date: Date): Todo,
        updateTodo(id: String, title: String, detail: String, date: Date): Todo,
        addTodos(todos: [todosType]): [Todo],
        deleteTodo(id: String): String
    }
`;