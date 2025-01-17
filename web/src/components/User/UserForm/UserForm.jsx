import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  RadioField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const UserForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.user?.id)
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
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.user?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.user?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="hashedPassword"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Hashed password
        </Label>

        <TextField
          name="hashedPassword"
          defaultValue={props.user?.hashedPassword}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="hashedPassword" className="rw-field-error" />

        <Label
          name="salt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Salt
        </Label>

        <TextField
          name="salt"
          defaultValue={props.user?.salt}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="salt" className="rw-field-error" />

        <Label
          name="resetToken"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Reset token
        </Label>

        <TextField
          name="resetToken"
          defaultValue={props.user?.resetToken}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="resetToken" className="rw-field-error" />

        <Label
          name="resetTokenExpiresAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Reset token expires at
        </Label>

        <DatetimeLocalField
          name="resetTokenExpiresAt"
          defaultValue={formatDatetime(props.user?.resetTokenExpiresAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="resetTokenExpiresAt" className="rw-field-error" />

        <Label
          name="role"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Role
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-role-0"
            name="role"
            defaultValue="CONTRIBUTER"
            defaultChecked={props.user?.role?.includes('CONTRIBUTER')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Contributer</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-role-1"
            name="role"
            defaultValue="EDITOR"
            defaultChecked={props.user?.role?.includes('EDITOR')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Editor</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-role-2"
            name="role"
            defaultValue="USER"
            defaultChecked={props.user?.role?.includes('USER')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>User</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-role-3"
            name="role"
            defaultValue="ADMIN"
            defaultChecked={props.user?.role?.includes('ADMIN')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Admin</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-role-4"
            name="role"
            defaultValue="VIEWER"
            defaultChecked={props.user?.role?.includes('VIEWER')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Viewer</div>
        </div>

        <FieldError name="role" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserForm
