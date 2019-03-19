import React from 'react';
import { Field, reduxForm } from 'redux-from';
import submit from './contactFormSubmit';

const validate = values =>{
    let errors = {}

    if(!values.name){
        errors.name = 'Required'
    }

    if(!values.email){
        errors.email = 'Required'
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if(!values.phone){
        errors.phone = 'Required'
    }else if(typeof values.phone === 'number'){
        errors.phone = 'Invalid Phone Number'
    }

    return errors;
}

const renderField = ({
    input,
    type,
    label,
    meta: { touched, error }
})=> (
    <div>
        <label class="form-control-label mbr-fonts-style display-7">{label}</label>
        <input {...input} type={type} placeholder={label} />
        {
            touched &&
            (error && <span>{error}</span>)
        }
    </div>
)

let ContactForm = props =>{
    const { handleSubmit, pristine, submitting } = props;
    return (
        <form class="mbr-form" onSubmit={handleSubmit(submit)}>
        <div class="row row-sm-offset">
            <div class="col-md-4 multi-horizontal">
                <div class="form-group">
                    <label class="form-control-label mbr-fonts-style display-7">Name</label>
                    <Field type="text" class="form-control" name="name" component={renderField} />
                </div>
            </div>
            <div class="col-md-4 multi-horizontal" data-for="email">
                <div class="form-group">
                    <label class="form-control-label mbr-fonts-style display-7">Email</label>
                    <Field type="email" class="form-control" name="email" component={renderField} />
                </div>
            </div>
            <div class="col-md-4 multi-horizontal" data-for="phone">
                <div class="form-group">
                    <label class="form-control-label mbr-fonts-style display-7">Phone</label>
                    <Field type="tel" class="form-control" name="phone" component={renderField} />
                </div>
            </div>
        </div>
        <div class="form-group" data-for="message">
            <textarea type="text" class="form-control" name="message" label="Message" rows="7"></textarea>
        </div>

        <span class="input-group-btn">
            <button type="submit" class="btn btn-primary btn-form display-4" disabled ={ pristine || submitting}>SEND FORM</button>
        </span>
    </form>
    );
}

export default reduxForm({
    form: 'contactForm',
    validate
})(ContactForm)