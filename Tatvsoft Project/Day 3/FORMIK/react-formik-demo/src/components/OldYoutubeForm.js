import React from 'react';
import { useFormik } from 'formik'
import { Formik } from 'formik'
import * as Yup from 'yup'

const initialValues = {
    name: '',
    email:'',
    channel: ''
}

const onSubmit = values => {
    console.log('Form data', values)
}

const validate = values => {
    // value.name value.email value.channel
    // errors.name errors.email error.channel
    // errors.name= 'this files is required'
    let errors ={}

    if(!values.name){
        errors.name='Required'
    }

    if(!values.email) {
        errors.email='Required'
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email= 'Invalid email format'
    }

    if(!values.channel) {
        errors.channel='Required'
    }
    return errors
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
    channel: Yup.string().required('Required')
})

function OldYoutubeForm () {

    const formik = useFormik({
        initialValues,
        onSubmit,
        //validate
        validationSchema
    })

    console.log('Form errors', formik.errors)

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
            <div className='form-conteol'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />
            {formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
            </div>

            <div className='form-conteol'>
            <label htmlFor='email'>E-mail</label>
            <input type='email' id='name' name='email' onChange={formik.handleChange} value={formik.values.email}  />
            {formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
            </div>

            <div className='form-conteol'>
            <label htmlFor='channel'>channel</label>
            <input type='text' id='name' name='channel' onChange={formik.handleChange} value={formik.values.channel}  />
            {formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
            </div>

            <button type='submit'>Submit</button>
            </form>
        </div>
    )
}



export default OldYoutubeForm
