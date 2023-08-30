import todoMutation from "./todo/mutation.js";
import todoQuery from "./todo/query.js";

export const resolvers = {
    Query: {
        ...todoQuery
    },
    Mutation: {
        ...todoMutation        
    }
}
