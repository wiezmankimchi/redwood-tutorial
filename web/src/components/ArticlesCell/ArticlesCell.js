import Article from 'src/components/Article'

export const QUERY = gql`
  query BlogPostsQuery {
    articles: posts {
      id
      title
      body
      imgURL
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ articles }) => {
  return (
    // <div className="space-y-10">
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-wrap -m-4">
          {articles.map((article) => (
            <Article article={article} key={article.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
