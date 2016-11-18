import casual from 'casual';

const mocks = {
  RootQuery: (root, args) => {
    return {
      helloWorld: () => "Hello world :)",    
    }
  }
};

export default mocks;