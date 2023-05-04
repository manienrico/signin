import React,{useState} from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik} from 'formik'
import * as Yup from 'yup'
import './App.css';


function App() {
  // const [values, setValues] = useState({
  //   email: '',
  //   password: ''
  // })

  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  // const handleChange =(e)=>{
  //   setValues({...prev, [e.target.name]:[e.target.value]})
  // }

  // const handleChange =(e)=>{
  //   setEmail(e.target.value)
  //   setPassword(e.target.value)
  // }

  // const handleSubmit =(e)=>{
  //   console.log(setEmail)
  //   console.log(setPassword)
  // }
  
const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
  .min(2, 'Too short!')
  .max(50, 'Too long!')
  .required('Required'),
  lastname: Yup.string()
  .min(2, 'Too short!')
  .max(50, 'Too long!')
  .required('Required'),
  email: Yup.string()
  .required('Required').email('Invalid email'),
            phone: Yup.number()
            .min(9, 'Invalid phone number')
            .required('Required'),
            address: Yup.string()
            .min(2, 'Too short!')
            .max(35, 'Too long!')
            .required('Required'),
            city: Yup.string()
            .min(2, 'Too short!')
            .required('Required'),
            state: Yup.string()
            .max(10, 'Too long!')
            .required('Required'),
            zipzode: Yup.string()
            .min(2, 'Too short!')
            .max(6, 'Too long!')
            .required('Required'),
            website: Yup.string()
            .required('Required'),
            hosting: Yup.string()
            .required('Required'),
            descrition: Yup.string()
            .min(10, 'Too short!')
            .max(200, 'Too long!')
            .required('Required')
})


  return (
    <div className="App">
      <div className='app__signin-contain'>
        <div className='app__signin-content'>
          <h3>Logo Here</h3>
          <span>Welcome back !!!</span>

          <Formik
          validationSchema={SignupSchema}
          onSubmit={(values)=>{
            console.log(values)
          }}

          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            zipzode: "",
            website: "",
            hosting: "",
            descrition: ""
          }}
          // validate={values =>{
          //   const errors = {}
          //   if(!values.email){
          //     errors.email = 'Required'
          //   } else if(
          //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          //   ){
          //     errors.email = "Invalid email address"
          //   }
          //   if(!values.phone){
          //     errors.phone = 'Required'
          //   }else if(
          //     !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(values.phone)
          //   ){
          //     errors.phone = "Invalid phone number"
          //   }
          //   //if(!val)
          //   return errors
          // }}
          
          >
            {(errors,touched)=>(
              <Form>
                <div>
                  <label>First name</label>
                  <Field type="text" name="firstname">
                  {({
                      field, // { name, value, onChange, onBlur }
                      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      meta,
                    }) => (
                      <div>
                        <input type="text" {...field} />
                        {meta.touched && meta.error && (
                          <div className="error">{meta.error}</div>
                        )}
                      </div>
                  )}
                  </Field>
                </div>
                <div>
                  <label>Last name</label>
                  <Field type="text" name="lastname">
                  {({
                      field, // { name, value, onChange, onBlur }
                      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      meta,
                    }) => (
                      <div>
                        <input type="text" {...field} />
                        {meta.touched && meta.error && (
                          <div className="error">{meta.error}</div>
                        )}
                      </div>
                  )}
                  </Field>
                </div>
                <div>
                  <label>Email</label>
                  <Field type="email" name="email">
                  {({
                      field, // { name, value, onChange, onBlur }
                      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      meta,
                    }) => (
                      <div>
                        <input type="text" {...field} />
                        {meta.touched && meta.error && (
                          <div className="error">{meta.error}</div>
                        )}
                      </div>
                  )}
                  </Field>
                </div>
                <div>
                  <label>Phone</label>
                  <Field type="number" name="phone">
                  {({
                      field, // { name, value, onChange, onBlur }
                      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      meta,
                    }) => (
                      <div>
                        <input type="text" {...field} />
                        {meta.touched && meta.error && (
                          <div className="error">{meta.error}</div>
                        )}
                      </div>
                  )}
                  </Field>
                </div>
                <div>
                  <label>Address</label>
                  <Field type="text" name="address">
                  {({
                      field, // { name, value, onChange, onBlur }
                      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      meta,
                    }) => (
                      <div>
                        <input type="text" {...field} />
                        {meta.touched && meta.error && (
                          <div className="error">{meta.error}</div>
                        )}
                      </div>
                  )}
                  </Field>
                </div>
                <div>
                  <label>City</label>
                  <Field type="text" name="city">
                  {({
                      field, // { name, value, onChange, onBlur }
                      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      meta,
                    }) => (
                      <div>
                        <input type="text" {...field} />
                        {meta.touched && meta.error && (
                          <div className="error">{meta.error}</div>
                        )}
                      </div>
                  )}
                  </Field>
                </div>
                <div>
                  <label>State</label>
                  <Field type="text" name="state">
                  {({
                      field, // { name, value, onChange, onBlur }
                      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      meta,
                    }) => (
                      <div>
                        <input type="text" {...field} />
                        {meta.touched && meta.error && (
                          <div className="error">{meta.error}</div>
                        )}
                      </div>
                  )}
                  </Field>
                </div>
                <div>
                  <label>Zipcode</label>
                  <Field type="text" name="zipzode">
                  {({
                      field, // { name, value, onChange, onBlur }
                      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      meta,
                    }) => (
                      <div>
                        <input type="text" {...field} />
                        {meta.touched && meta.error && (
                          <div className="error">{meta.error}</div>
                        )}
                      </div>
                  )}
                  </Field>
                </div>
                <div>
                  <label>Website</label>
                  <Field type="text" name="website">
                  {({
                      field, // { name, value, onChange, onBlur }
                      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      meta,
                    }) => (
                      <div>
                        <input type="text" {...field} />
                        {meta.touched && meta.error && (
                          <div className="error">{meta.error}</div>
                        )}
                      </div>
                  )}
                  </Field>
                </div>
                <div>
                  <label>Do you have hosting.</label>
                  <label>
                  <Field type="radio" name="hosting" value="yes">
                  {({
                      field, // { name, value, onChange, onBlur }
                      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      meta,
                    }) => (
                      <div>
                        <input type="radio" {...field} />
                        {meta.touched && meta.error && (
                          <div className="error">{meta.error}</div>
                        )}
                      </div>
                  )}
                  </Field>
                  Yes
                  </label>
                  <label>
                  <Field type="radio" name="hosting" value="no">
                  {({
                      field, // { name, value, onChange, onBlur }
                      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      meta,
                    }) => (
                      <div>
                        <input type="radio" {...field} />
                        {meta.touched && meta.error && (
                          <div className="error">{meta.error}</div>
                        )}
                      </div>
                  )}
                  </Field>
                  No
                  </label>
                </div>
                <div>
                  <label>Description</label>
                  <Field type="text" name="descrition">
                  {({
                      field, // { name, value, onChange, onBlur }
                      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      meta,
                    }) => (
                      <div>
                        <input type="text" {...field} />
                        {meta.touched && meta.error && (
                          <div className="error">{meta.error}</div>
                        )}
                      </div>
                  )}
                  </Field>
                </div>
                {/* <div>
                  <label>Last name</label>
                  <Field type="text" name="lastname" />
                  {errors.lastname && touched.lastname ? (
                    <div>{errors.lastname}</div>
                  ): null}
                </div>
                
                <div>
                  <label>E-mail</label>
                  <Field type="email" name="email" />
                  {/* <ErrorMessage name='email' component='div' /> 
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ): null}
                </div>

                 <div>
                  <label>Phone</label>
                  <Field type="number" name="phone" />
                  {/* <ErrorMessage name='phone' component='div' /> 
                  {errors.phone && touched.phone ? (
                    <div>{errors.phone}</div>
                  ): null}
                </div>
                <div>
                  <label>address</label>
                  <Field type="text" name="address" />
                  {errors.address && touched.address ? (
                    <div>{errors.address}</div>
                  ): null}
                </div>
                
                <div>
                  <label>City</label>
                  <Field type="text" name="city" />
                  {errors.city && touched.city ? (
                    <div>{errors.city}</div>
                  ): null}
                </div>
                
                <div>
                  <label>State</label>
                  <Field type="text" name="state" />
                  {errors.state && touched.state ? (
                    <div>{errors.state}</div>
                  ): null}
                </div>
                
                <div>
                  <label>Zipcode</label>
                  <Field type="text" name="zipzode" />
                  {errors.zipzode && touched.zipzode ? (
                    <div>{errors.zipzode}</div>
                  ): null}
                </div>
                
                <div>
                  <label>Website or domain</label>
                  <Field type="text" name="website" />
                  {errors.website && touched.website ? (
                    <div>{errors.website}</div>
                  ): null}
                </div>
                
                <div>
                  <label>Do you have hosting</label>
                  <div>
                    <div>
                      <label>
                        <Field type="radio" name="hosting" value="yes" />
                        Yes
                      </label>
                    </div>
                    <div>
                      <label>
                          <Field type="radio" name="hosting" value="no" />
                          No
                        </label>
                    </div>
                    {errors.hosting && touched.hosting ? (
                    <div>{errors.hosting}</div>
                  ): null}
                  </div>
                </div>
                <div>
                  <label>Description</label>
                  <Field type="text" name="descrition" />
                  {errors.descrition && touched.descrition ? (
                    <div>{errors.descrition}</div>
                  ): null}
                </div> */}
                <button type='submit'>Send</button>
              </Form>
            )}
          </Formik>
          {/* <div>
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
            // onChange={handleChange}
            onSubmit={(values) => {
              // setTimeout(() => {
              //   alert(JSON.stringify(values, null, 2))
              //   setSubmitting(false)
              // }, 400)
              console.log(values, "the value of the form");
            }}
            >
              {(formik)=>(
              <Form>
                <div>
                  <label>Email</label>
                  <Field type="email" name="email" />
                  <ErrorMessage name='email' component="div" />
                </div>
                <div>
                  
                  <label>Password</label>
                  <Field type="password" name="password" />
                  <ErrorMessage name='password' component="div" />
                </div>
                
                <button type='submit' >
                  Submit
                </button>
              </Form>
              )}
            </Formik>
          </div> */}
        </div>
        <div className='app__signin-div'></div>
      </div>
    </div>
  );
}

export default App;
