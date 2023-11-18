import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Post/PostsCell'
import { timeTag } from 'src/utils/timeTag'

const DELETE_POST_MUTATION = gql`
  mutation DeletePostMutation($id: Int!) {
    deletePost(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

// const jsonTruncate = (obj) => {
//   return truncate(JSON.stringify(obj, null, 2))
// }

// const checkboxInputTag = (checked) => {
//   return <input type="checkbox" checked={checked} disabled />
// }

const PostsList = ({ posts }) => {
  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    onCompleted: () => {
      toast.success('Post deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete post ' + id + '?')) {
      deletePost({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Title</th>
            <th className="hidden md:table-cell">Body</th>
            <th>Image</th>
            <th className="hidden lg:table-cell">Created</th>
            <th className="hidden lg:table-cell">Updated</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{truncate(post.title)}</td>
              <td className="hidden md:table-cell">{truncate(post.body)}</td>
              {/* <td>{truncate(post.imgURL)}</td> */}
              <td className="w-32 h-32">
                {post.imgURL ? (
                  <img
                    src={post.imgURL}
                    alt={post.title}
                    className=" w-30 h-30 rounded-md"
                  />
                ) : (
                  ''
                )}
              </td>
              <td className="hidden lg:table-cell">
                {timeTag(post.createdAt, true)}
              </td>
              <td className="hidden lg:table-cell">
                {post.updatedAt ? timeTag(post.updatedAt, true) : ''}
              </td>
              <td>
                <nav className="rw-table-actions flex-col justify-center lg:flex-row">
                  <Link
                    to={routes.post({ id: post.id })}
                    title={'Show post ' + post.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPost({ id: post.id })}
                    title={'Edit post ' + post.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(post.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PostsList
