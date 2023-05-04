import React,{useState} from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik'
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

  return (
    <div className="App">
      <div className='app__signin-contain'>
        <div className='app__signin-content'>
          <h3>Logo Here</h3>
          <span>Welcome back !!!</span>

          <Formik
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
          validate={values =>{
            const errors = {}
            if(!values.email){
              errors.email = 'Required'
            } else if(
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ){
              errors.email = "Invalid email address"
            }
            if(!values.phone){
              errors.phone = 'Required'
            }else if(
              !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(values.phone)
            ){
              errors.phone = "Invalid phone number"
            }
            //if(!val)
            return errors
          }}
          onSubmit={(values)=>{
            console.log(values)
          }}
          >
            {(formik)=>(
              <Form>
                <div>
                  <label>First name</label>
                  <Field type="text" name="firstname" />
                </div>
                
                <div>
                  <label>Last name</label>
                  <Field type="text" name="lastname" />
                </div>
                
                <div>
                  <label>E-mail</label>
                  <Field type="email" name="email" />
                  <ErrorMessage name='email' component='div' />
                </div>
                
                
                <div>
                  <label>Phone</label>
                  <Field type="number" name="phone" />
                  <ErrorMessage name='phone' component='div' />
                </div>
                
                <Field type="text" name="address" />
                <div>
                  <label>Address</label>
                  <Field type="text" name="city" />
                </div>
                
                <div>
                  <label>State</label>
                  <Field type="text" name="state" />
                </div>
                
                <div>
                  <label>Zipcode</label>
                  <Field type="text" name="zipzode" />
                </div>
                
                <div>
                  <label>Website or domain</label>
                  <Field type="text" name="website" />
                </div>
                
                <div>
                  <label>Do you have hosting</label>
                  <div>
                    <label>
                      <Field type="radio" name="yes" />
                      Yes
                    </label>
                  </div>
                  <div>
                  <label>
                      <Field type="radio" name="no" />
                      No
                    </label>
                  </div>
                </div>
                
                <div>
                  <label>Description</label>
                  <Field type="text" name="descrition" />
                </div>
                
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
