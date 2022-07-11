import React from 'react';
//import { Field, useFormik } from 'formik'
//import { Formik } from 'formik'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const initialValues = {
    name: '',
    email:'',
    channel: ''
}

const onSubmit = values => {
    console.log('Form data', values)
}

// const validate = values => {
//     // value.name value.email value.channel
//     // errors.name errors.email error.channel
//     // errors.name= 'this files is required'
//     let errors ={}

//     if(!values.name){
//         errors.name='Required'
//     }

//     if(!values.email) {
//         errors.email='Required'
//     }
//     else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email= 'Invalid email format'
//     }

//     if(!values.channel) {
//         errors.channel='Required'
//     }
//     return errors
// }

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
    channel: Yup.string().required('Required')
})

function YoutubeForm () {

    // const formik = useFormik({
    //     initialValues,
    //     onSubmit,
    //     //validate
    //     validationSchema
    // })

    // console.log('Form errors', formik.errors)

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>

            <Form>
            <div className='form-control'>
            <label htmlFor='name'>Name</label>
            <Field type='text' id='name' name='name' />
            <ErrorMessage name='name' />
            </div>

            <div className='form-control'>
            <label htmlFor='email'>E-mail</label>
            <Field type='email' id='name' name='email' />
            <ErrorMessage name='email' />
            </div>

            <div className='form-control'>
            <label htmlFor='channel'>channel</label>
            <Field type='text' id='name' name='channel' />
            <ErrorMessage name='channel' />
            </div>

            <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}



export default YoutubeForm
