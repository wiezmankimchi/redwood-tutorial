import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
  Submit,
} from '@redwoodjs/forms'

import { timeTag } from 'src/utils/timeTag'

// const formatDatetime = (value) => {
//   if (value) {
//     return value.replace(/:\d{2}\.\d{3}\w/, '')
//   }
// }

const PostForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.post?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        <TextField
          name="title"
          defaultValue={props.post?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="title" className="rw-field-error" />

        <Label
          name="body"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Body
        </Label>
        <TextAreaField
          name="body"
          defaultValue={props.post?.body}
          rows={5}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="body" className="rw-field-error" />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image URL
        </Label>
        <TextField
          name="imgURL"
          defaultValue={props.post?.imgURL}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: false }}
        />
        <FieldError name="imgURL" className="rw-field-error" />

        <Label
          name="created"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Created
        </Label>
        <Label>{timeTag(props.post?.createdAt)}</Label>
        <Label
          name="updated"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Updated
        </Label>
        <Label>{timeTag(props.post?.updatedAt)}</Label>

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PostForm
