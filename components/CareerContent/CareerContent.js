import React, { useEffect, useState } from 'react';
import CustomAccordion from '../CustomAccordion/CustomAccordion';
import Title from '../Title/Title';
import classes from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../redux/FooterSlice/API";
import ButtonBlue from '../Buttons/ButtonBlue/ButtonBlue';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import dynamic from 'next/dynamic';
import { AttachIcon } from '../Icons';


const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  })
  
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['image'],
    ],
    clipboard: {
      matchVisual: false,
    },
  }
  const formats = [
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ]
  
function CareerContent () {

    const dispatch = useDispatch();
    const { footerPagesData } = useSelector((state) => state.footer);
    useEffect(() => {
      dispatch(API.getFooterPages());
    }, []);


  const router = useRouter();
  const {applyData, applyRejected} = useSelector(state => state.login);
  
  const phoneRegExp = /^[^<>]+$/

  useEffect (() => {
    applyData && router.push('/login')
  },[applyData, router]);

  const formik = useFormik({
    initialValues: {
      name: '',
      last_name: '',
      email: '',
      phone_number: '',
      cv: ''
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
    phone_number: Yup.string().matches(phoneRegExp, 'Phone number is not valid.')
        .max(8, 'Phone number is too long.')
        .required('No phone number provided.'),
    cv: Yup.mixed()
        .required('No CV attached.'),
    }),
    // onSubmit: values => dispatch(API.postSignUp(values))
    onSubmit: values => console.log(values)
    
  });

  const [onApply, setOnApply] = useState(true);
  const toggleApply = () => {
    window.scrollTo(0, 0);
    setOnApply();
  };

console.log(<QuillNoSSRWrapper/>);
  return (
    <div className={classes.career}>
        <Title text={onApply ? "Vacancies" : "Join our team"}/>
        {onApply ? (<div className='flex j-center'>
            <div className={classes.career_main}>
                {footerPagesData?.map(
                    (item, id) => (
                        <CustomAccordion header={item?.translation.name} key={id} className={classes.career_accordion}>
                        <div className='flex column'>
                            <div className={classes.career_small_headers}>
                                Skills and Qualifications
                            </div>
                            <div className={classes.career_texts}>
                                {item.translation.skill}
                            </div>
                        </div>
                        <div className='flex column'>
                            <div className={classes.career_small_headers}>
                                Responsibilities
                            </div>
                            <div className={classes.career_texts}>
                                {item?.translation.responsibility}
                            </div>
                            <div className={classes.career_small_headers}>
                                Deadline: <span className={classes.career_texts}>{new Date(item.deadline).toLocaleDateString('en-Ca')}</span>
                            </div>
                        </div>
                        <ButtonBlue text="Apply" onClick={toggleApply}/>
                    </CustomAccordion>)
                )}
            </div>
        </div>) : (
        <div className={classes.apply_part}>
            <form onSubmit={formik.handleSubmit}>
                
                <div className={classes.input_label}>
                  <label htmlFor="name">First Name *</label>
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

                
                <div className={classes.input_label}>
                  <label htmlFor="last_name">Last Name *</label>
                  <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.last_name}
                  />
                </div>
                {formik.touched.last_name && formik.errors.last_name ? (
                    <div className={classes.error_message}>{formik.errors.last_name}</div>
                ) : null}

                
                <div className={classes.input_label}>
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                </div>
                {formik.touched.email && formik.errors.email ? (
                        <div className={classes.error_message}>{formik.errors.email}</div>
                ) : null}
                
                
                <div className={classes.input_label}>
                  <label htmlFor="phone_number">Phone number *</label>
                  <input
                    id="phone_number"
                    name="phone_number"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone_number}
                  />
                </div>
                {formik.touched.phone_number && formik.errors.phone_number ? (
                    <div className={classes.error_message}>{formik.errors.phone_number}</div>
                ) : null}

                <div className={classes.input_label}>
                  <label htmlFor="motivation_letter">Motivation letter</label>
                    <QuillNoSSRWrapper
                    modules={modules} 
                    formats={formats}
                    placeholder='Type something... (12 from 640 symbols)' 
                    theme="snow" />
                </div>

                <div className={classes.attach_input}>
                    <label onChange={formik.handleChange} htmlFor="attachInput">
                        <span>{!formik.values.cv ? 'Attach CV' : 'Attached !'}</span>
                        <input name="cv" 
                                type="file" 
                                id="attachInput" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.cv}
                                hidden />
                        <AttachIcon/>
                        
                    </label>
                    {formik.touched.cv && formik.errors.cv ? (
                    <div className={classes.error_message}>{formik.errors.cv}</div>
                    ) : null}
                </div>

                {applyRejected ? <div className={classes.error_message}>Something went wrong</div> : null}
                <div className='flex j-center'>
                  <ButtonBlue text="Send" type="submit"/>
                </div>
            </form>
        </div>)}
    </div>
  )
}
export default CareerContent
