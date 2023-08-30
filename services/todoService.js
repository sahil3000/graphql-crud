import Todo from "../models/Todo.js";

class TodoService {
    static create(payload) {
        return Todo.create(payload);
    }

    static createBulk(payload) {
        return Todo.insertMany(payload);
    }

    static findAll() {
        return Todo.find({});
    }

    static findById(id) {
        return Todo.findById(id);
    }

    static removeById(id) {
        return Todo.findByIdAndRemove(id)
    }

    static updateByid(id, payload) {
        return Todo.findByIdAndUpdate(id, payload, {
            new: true
        });
    }
}

export default TodoService;
