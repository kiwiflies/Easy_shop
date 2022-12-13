import React, { useState, useEffect } from 'react';
import classes from './styles.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ButtonBlack from '../Buttons/ButtonBlack/ButtonBlack';
import ButtonWhite from '../Buttons/ButtonWhite/ButtonWhite';
import { useDispatch, useSelector } from 'react-redux';
import { API } from '../redux/LogIn/API';
import { useRouter } from 'next/router';

const data = {
    email: "blabla@mail.ru",
    name: "Loren",
    last_name: "Ipsum",
    password: "44444444",
    birth_date: "2000-11-11",
    phone_number: "44662422",
    city_code: "Yerevan"
}

function EditSettings({handleSwitch}) { 
    const router = useRouter();
    const dispatch = useDispatch();

    const {registerData, registerRejected} = useSelector(state => state.login);
    useEffect (() => {
      registerData && router.push('/login')
    },[registerData])

    useEffect(() =>{
    formik.setValues(data)
        },[data])

    const phoneRegExp = /^[^<>]+$/

    const formik = useFormik({
        initialValues: {
            name: '',
            last_name: '',
            email: '',
            password: '',
            phone_number: '',
            city_code: '',
            birth_date: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('No name provided.'),
            last_name: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('No last name provided.'),
            email: Yup.string()
            .email('Invalid email address')
            .required('No password provided.'),
            password: Yup.string()
            .required('No password provided.') 
            .min(6, 'Password is too short - should be 6 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password must contain Latin letters.'),
            birth_date: Yup.date()
            .required('Please enter a date of birth.'),
            phone_number: Yup.string().matches(phoneRegExp, 'Phone number is not valid.')
            .max(8, 'Phone number is too long.'),
            city_code: Yup.string()
            .required('No city provided.'),
        }),
        onSubmit: values => dispatch(API.postSignUp(values))
        });

        
        const [passwordShown, setPasswordShown] = useState(true);
        const togglePassword = () => setPasswordShown(!passwordShown);
        return (
            <form onSubmit={formik.handleSubmit}>
                <div className={classes.input_label}>
                <label htmlFor="name">First Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                </div>
                {formik.touched.name && formik.errors.name ? (
                    <div className={classes.error_message}>{formik.errors.name}</div>
                ) : null}

                {formik.touched.last_name && formik.errors.last_name ? (
                    <div className={classes.error_message}>{formik.errors.last_name}</div>
                ) : null}
                <div className={classes.input_label}>
                <label htmlFor="last_name">Last Name</label>
                <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.last_name}
                />
                </div>

                {formik.touched.email && formik.errors.email ? (
                        <div className={classes.error_message}>{formik.errors.email}</div>
                    ) : null}
                <div className={classes.input_label}>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                </div>

                {formik.touched.password && formik.errors.password ? (
                    <div className={classes.error_message}>{formik.errors.password}</div>
                    ) : null}
                <div className={classes.input_label}>
                <label htmlFor="password">Password</label>
                    <div className={classes.pass_input}>
                    <input
                        id="password"
                        name="password"
                        type={passwordShown ? "password" : "text"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        />
                    <span className={classes.show_pass} 
                        onClick={togglePassword}>
                        {passwordShown ? "Show Password" : "Hide Password"}
                    </span>
                    </div>
                </div>
                

                {formik.touched.birth_date && formik.errors.birth_date ? (
                    <div className={classes.error_message}>{formik.errors.birth_date}</div>
                    ) : null}
                <div className={classes.input_label}>
                <label htmlFor="birth_date">Date of Birth</label>
                <input
                    id="birth_date"
                    name="birth_date"
                    type="date"
                    max="2004-12-12"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.birth_date}
                />
                </div>

                {formik.touched.phone_number && formik.errors.phone_number ? (
                    <div className={classes.error_message}>{formik.errors.phone_number}</div>
                    ) : null}
                <div className={classes.input_label}>
                <label htmlFor="phone_number">Phone number</label>
                <input
                    id="phone_number"
                    name="phone_number"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone_number}
                />
                </div>

                {formik.touched.city_code && formik.errors.city_code ? (
                    <div className={classes.error_message}>{formik.errors.city_code}</div>
                ) : null}
                <div className={classes.input_label}>
                <label htmlFor="city_code">City</label>
                <input
                    id="city_code"
                    name="city_code"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city_code}
                />
                </div>
                {registerRejected ? <div className={classes.error_message}>Something went wrong</div> : null}
                <div className='flex j-center'>
                    <ButtonBlack text="Save" type="submit"/>
                    <ButtonWhite text="Cancel" type="reset" onClick={handleSwitch}/>
                </div>
            </form>
    )
}
export default EditSettings 