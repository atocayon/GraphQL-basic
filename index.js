const { graphql, buildSchema } = require('graphql');

// define schema
const schema = buildSchema(`
    type Query {
        message: String
    }
`);

const resolvers = () => {
    const message = () => {
        return 'Hello world!'
    }

    return { message };
}


// Excecute the query
const executeQuery = async () => {
    const result = await graphql(schema, '{message}', resolvers());
    console.log(result.data);
};


executeQuery();
