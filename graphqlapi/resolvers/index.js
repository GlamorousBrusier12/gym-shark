const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: {
    books: () => {
      return books;
    },
  },
  Mutation: {
    addBook: (parentArgs, { input }, ctx) => {
      books.push({
        title: input.title,
        author: input.author,
      });
      return true;
    },
  },
};
