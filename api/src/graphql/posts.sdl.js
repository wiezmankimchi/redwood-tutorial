export const schema = gql`
  type Post {
    id: Int!
    title: String!
    body: String!
    imgURL: String
    createdAt: DateTime!
    updatedAt: DateTime
    slug: String
  }

  type Query {
    posts: [Post!]! @skipAuth
    post(id: Int!): Post @skipAuth
  }

  input CreatePostInput {
    title: String!
    body: String!
    imgURL: String
  }

  input UpdatePostInput {
    title: String
    body: String
    imgURL: String
    updatedAt: DateTime
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!, updatedAt: DateTime): Post!
      @requireAuth
    deletePost(id: Int!): Post! @requireAuth(roles: ["FOO"])
  }
`
