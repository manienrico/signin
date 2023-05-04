import React from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik'

function signin() {
  return (
    <div>
        <div className='app__signin-contain'>
        <div className='app__signin-content'>
          <h3>Logo Here</h3>
          <span>Welcome back !!!</span>

          
          <div>
            <h2>Log In</h2>
            <Formik
            initialValues={{ email: "", password: ""}}
            validate={values => {
              const errors = {}
              if(!values.email){
                errors.email = 'Required'
              } else if(
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ){
                errors.email = "Invalid email address"
              }
              return errors
            }}
            onSubmit={(values, {setSubmitting}) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
              }, 400)
            }}
            >
              {({ isSubmitting })=>(
              <Form>
                <Field type="email" name="email" />
                <ErrorMessage name='email' component="div" />
                <Field type="password" name="password" />
                <ErrorMessage name='password' component="div" />
                <button type='submit' disabled={isSubmitting} >
                  Submit
                </button>
              </Form>
              )}
            </Formik>
            
          </div>
        </div>
        <div className='app__signin-div'></div>
      </div>
    </div>
  )
}

export default signin