const RootQuery = `
  type RootQuery {
  	helloWorld: String
  }
`;

const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`;

export default [SchemaDefinition, RootQuery];
