import React, { useEffect } from 'react';
import classes from './styles.module.scss';
import Title from '../Title/Title';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ButtonBlack from '../Buttons/ButtonBlack/ButtonBlack';
import InputMain from '../InputMain/InputMain';
import { useDispatch, useSelector } from 'react-redux';
import { API } from '../redux/LogIn/API';
import { useRouter } from 'next/router';
import NavLink from '../NavLink/NavLink';

 
function LoginPageContent() {
  const dispatch = useDispatch();
  const router = useRouter();
  const {loginData, loginRejected} = useSelector(state => state.login);
  useEffect (() => {
    if (loginData) {
      localStorage.setItem('user', loginData.data.token)
      router.push('/')
    }
    
  },[loginData])

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('No email provided.'),
          password: Yup.string()
          .required('No password provided.') 
          .min(6, 'Password is too short - should be 6 chars minimum.')
          .matches(/[a-zA-Z]/, 'Password must contain Latin letters.')
        }),
        onSubmit: values => dispatch(API.postLogIn(values))
      });


   return (
    <div>
        <Title text="Log In"/>
        <div className={classes.login_part}>
            <form onSubmit={formik.handleSubmit}>
                {formik.touched.email && formik.errors.email ? (
                    <div className={classes.error_message}>{formik.errors.email}</div>
                ) : null}
                <InputMain
                    id="email"
                    placeholder="Username / E-mail"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />

                {formik.touched.password && formik.errors.password ? (
                    <div className={classes.error_message}>{formik.errors.password}</div>
                ) : null}
                <InputMain
                    id="password"
                    placeholder="Password" 
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    />


                <div className={classes.forgot}>Forgotten Password</div>
                <div className={classes.loggedin}>
                    <input type="checkbox"/>
                    <label>Keep me logged in - applies to all log in options below.</label>
                </div>
                {loginRejected ? <div className={classes.error_message}>Invalid email or password.</div> : null}
                <ButtonBlack text="Sign In" type="submit"/>
                <NavLink href="signup">
                  <span className={classes.signup}>
                    <span>Dont have an account? </span>
                    <span>Sign up</span>
                  </span>
                </NavLink>
            </form>
        </div>
    </div>
   )
 }
 export default LoginPageContent