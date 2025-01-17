import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/utils/timeTag'

const DELETE_POST_MUTATION = gql`
  mutation DeletePostMutation($id: Int!) {
    deletePost(id: $id) {
      id
    }
  }
`

// const jsonDisplay = (obj) => {
//   return (
//     <pre>
//       <code>{JSON.stringify(obj, null, 2)}</code>
//     </pre>
//   )
// }

// const timeTag = (datetime) => {
//   return (
//     <time dateTime={datetime} title={datetime}>
//       {new Date(datetime).toUTCString()}
//     </time>
//   )
// }

// const checkboxInputTag = (checked) => {
//   return <input type="checkbox" checked={checked} disabled />
// }

const Post = ({ post }) => {
  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    onCompleted: () => {
      toast.success('Post deleted')
      navigate(routes.posts())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete post ' + id + '?')) {
      deletePost({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Post {post.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{post.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{post.title}</td>
            </tr>
            <tr>
              <th>Body</th>
              <td className="">{post.body}</td>
            </tr>
            <tr>
              <th>Image URL</th>
              <td>{post.imgURL}</td>
            </tr>
            <tr>
              <th>Created</th>
              <td>{timeTag(post.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated</th>
              <td>{post.updatedAt ? timeTag(post.updatedAt) : ''}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <nav className="rw-button-group">
        <Link
          to={routes.editPost({ id: post.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(post.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Post
