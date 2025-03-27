import {ErrorMessage,Field} from "formik";
import React from "react";
import {Form,Formik} from "formik";
import '../App.css';

function StudentRegistrationForm(){
    const initialValues={
        name:"",
        email:"",
        phone:"",
        password:"",
        confirmPassword:"",
        course:"",
        terms:"false",
    };

    const validate=(values)=>{
        const errors={};

        if(!values.name){
            errors.name="Full Name is Required";
        }
        if(!values.email){
            errors.name="E-mail is Required"; 
        }
        else if(!/^[\w.-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/){
            errors.email="Invalid email address";
        }

        if(!values.phone){
            errors.phone="Phone is Required";
        }
        else if(!/^\d{0,10}$/){
            errors.phone="Invalid phone Number";
        }

        if(!values.password){
            errors.password="Password is Required";
        }
        else if(values.password.length<6){
            errors.password="Password must be at least 6 characters";
        }

        if(!values.confirmpassword){
            errors.confirmpassword="Please confirm your password";
        }
        else if(values.confirmpassword!==values.password){
            errors.confirmpassword="Password doesn't Match";
        }

        if(!values.course){
            errors.course="Select a course";
        }
        if(!values.terms){
            errors.terms="Please agree to terms & Conditions"
        }

        return errors;
    };

    const handleSubmit=(values,{resetForm})=>{
        alert("Form Submitted Successfully!");
        resetForm();

    }

    return (
        <div className="form-container">
          <h2>Student Registration Form</h2>

        <Formik initialValues={initialValues}
          validate={validate}
          onSubmit={handleSubmit}>

          <Form>


            <div>
              <label>Full Name:</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" className="error"></ErrorMessage>
            </div>
    
            <div>
              <label>E-Mail:</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error"></ErrorMessage>
            </div>
    
            <div>
              <label>Phone:</label>
              <Field type="text" name="phone" />
              <ErrorMessage name="phone" component="div" className="error"></ErrorMessage>
            </div>
    
            <div>
              <label>Password:</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" className="error"></ErrorMessage>
            </div>
            
            <div>
              <label>Confirm Password:</label>
              <Field type="password" name="confirmpassword" />
              <ErrorMessage name="confirmpassword" component="div" className="error"></ErrorMessage>
            </div>
    
            <div>
              <label>Course:</label>
              <Field as="select" name="course">
                <option value="">Select</option>
                <option value="Web Development">Web Development</option>
                <option value="AI">AI</option>
                <option value="Data Science">Data Science</option>
              </Field>
              <ErrorMessage name="course" component="div" className="error"></ErrorMessage>
            </div>
    
            <div>
              <Field type="checkbox" name="terms" />
                I agree to the terms & conditions
              <ErrorMessage name="term" component="div" className="error"></ErrorMessage>
            </div>

            <button type="submit">Register</button>

          </Form>
          </Formik>
        </div>
      );
}
 export default StudentRegistrationForm;