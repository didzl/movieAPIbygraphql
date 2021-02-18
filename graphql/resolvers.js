// query reslove
import { getById, people }from "./db";

const resolvers = {
    Query: {
        //when graphql search name, return han

        //ask person, return Han
        people: () => people,
        person: ( _, { id }) => getById(id)
    }
};


export default resolvers;