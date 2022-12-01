import React, { useEffect } from 'react';
import CustomAccordion from '../CustomAccordion/CustomAccordion';
import Title from '../Title/Title';
import classes from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../redux/FooterSlice/API";


function CareerContent () {

    const dispatch = useDispatch();
    const { footerPagesData } = useSelector((state) => state.footer);
    useEffect(() => {
      dispatch(API.getFooterPages());
    }, []);
    console.log(footerPagesData)
  return (
    <div>
        <Title text="Vacancies"/>
            <div className='flex j-center'>
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
                                Deadline: <span className={classes.career_texts}>{item.deadline}</span>
                            </div>
                        </div>
                    </CustomAccordion>)
                )}
            </div>
        </div>
    </div>
  )
}
export default CareerContent
