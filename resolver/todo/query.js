import TodoService from "../../services/todoService.js";

const todoQuery = {
    welcome: () => {
        return "Welcome to crud app";
    },
    hi: (_, {name}) => {
        return `Hi ${name}`
    },
    
    getTodos: async () => {
        const todos = await TodoService.findAll();
        return todos;
    },
    getTodo: async (_, args) => {
        const todo = await TodoService.findById(args.id);
        return todo;
    }
};

export default todoQuery;