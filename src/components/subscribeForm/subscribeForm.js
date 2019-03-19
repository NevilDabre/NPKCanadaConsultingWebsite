import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values =>{
    const errors = {}

    if(!values.email){
        errors.email = 'Require'
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    return errors;
}

const renderField = ({
    input,
    type,
    placeholder,
    meta: { touched, error }
  })=> (
      <div>
      <input {...input}  type={type} placeholder={placeholder} />
      {
        touched &&
        (error && <span>{error}</span>)
        }
      </div>
  )

let SubscribeForm = props => {
    const { handleSubmit, pristine, submitting } = props;
    return (
        <form class="form-inline" onSubmit={handleSubmit}>
        <div class="form-group">
            <Field class="form-control input-sm input-inverse my-2" name="email" component={renderField} type="email" placeholder="Enter email" />
        </div>
        <div class="input-group-btn m-2">
        <button href="" class="btn btn-primary display-4" disabled ={pristine || submitting} type="submit">Subscribe</button></div>
        </form>
    );
}

export default reduxForm({
    form: 'subscribeList',
    validate
  })(SubscribeForm)