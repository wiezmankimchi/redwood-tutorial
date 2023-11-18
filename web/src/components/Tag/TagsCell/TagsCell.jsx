import { Link, routes } from '@redwoodjs/router'

import Tags from 'src/components/Tag/Tags'

export const QUERY = gql`
  query FindTags {
    tags {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No tags yet. '}
      <Link to={routes.newTag()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ tags }) => {
  return <Tags tags={tags} />
}
