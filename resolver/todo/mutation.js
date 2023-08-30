import TodoService from "../../services/todoService.js";

const todoMutation = {
    addTodo: async (_, args) => {
        const newTodo = await TodoService.create({
            title: args.title,
            detail: args.detail,
            date: args.date
        });
        return newTodo;
    },
    updateTodo: async (_, args) => {
        const updateData = await TodoService.updateByid(args.id,{
            title: args.title,
            detail: args.detail,
            date: args.date
        });
        
        if (!updateData) {
            throw new Error("Invalid todo id");
        }
        return updateData;
    },
    addTodos: async (_, args) => {
        const newTodos = await TodoService.createBulk(args.todos);
        return newTodos;
    },
    deleteTodo: async (_, args) => {
        const deletedTodo = await TodoService.removeById(args.id);
        
        if (!deletedTodo) {
            return `${args.id} invalid id. Deletion Failed!`;
        }
        return `${deletedTodo._id} successfully deleted`;            
    }
}
export default todoMutation;