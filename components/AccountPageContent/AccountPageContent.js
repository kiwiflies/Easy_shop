import React, { useState, useEffect } from 'react';
import classes from './styles.module.scss';
import Title from '../Title/Title';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {SettingsIcon, OrdersIcon, ContactsIcon, PaymentsIcon, FaqIcon, LogoutIcon, AccArrow, PencilIcon} from '../Icons';
import ButtonWhite from '../Buttons/ButtonWhite/ButtonWhite';
import { useRouter } from 'next/router';
import { API } from '../redux/LogIn/API';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import EditSettings from './EditSettings';

const data = {
    email: "blabla@mail.ru",
    name: "Loren",
    last_name: "Ipsum",
    password: "44444444",
    birth_date: "19/04/87",
    phone_number: "44662422",
    city_code: "Yerevan"
}

 
function AccountPageContent() {

    const router = useRouter();
    const handleClick = () => {
        localStorage.removeItem('user')
        router.push('/')
    }

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    const [change, setChange] = useState(false);
    const handleSwitch = () => setChange(!change);

   let password = '';
   data.password.split('').forEach(_ => password += '*');

   return (
    <div>
        <Title text="My Account"/>
        <div className={classes.settings}>
            <Title text="Settings"/>
        </div>
        <div className='acc_settings_tabs'>
            <Tabs>
                <div className={classes.tab_left}>
                    <TabList>
                        <Tab>
                            <div className={classes.tabs}>
                                <div className='flex a-center'>
                                    <SettingsIcon/>
                                    <span>Personal data</span>
                                </div>
                                <AccArrow/>
                            </div>
                        </Tab>
                        <Tab>
                            <div className={classes.tabs}>
                                <div className='flex a-center'>
                                    <OrdersIcon/>
                                    <span>My Orders</span>
                                </div>
                                <AccArrow/>
                            </div>
                        </Tab>
                        <Tab>
                            <div className={classes.tabs}>
                                <div className='flex a-center'>
                                    <ContactsIcon/>
                                    <span>Contacts</span>
                                </div>
                                <AccArrow/>
                            </div>
                        </Tab>
                        <Tab>
                            <div className={classes.tabs}>
                                <div className='flex a-center'>
                                    <PaymentsIcon/>
                                    <span>Payments</span>
                                </div>
                                <AccArrow/>
                            </div>
                        </Tab>
                        <Tab>
                            <div className={classes.tabs}>
                                <div className='flex a-center'>
                                    <FaqIcon/>
                                    <span>FAQ</span>
                                </div>
                                <AccArrow/>
                            </div>
                        </Tab>
                        <div className={classes.logout_tab} onClick={handleShow}>
                            <div className='flex a-center'>
                                <LogoutIcon />
                                <span>Log out</span>
                            </div>
                            <AccArrow/>
                        </div>
                    </TabList>
                </div>
                <div className={classes.tab_right}>
                    <TabPanel>
                        <div className={classes.personal_data}>
                            <div className='flex between'>
                                <div>
                                    <h3>My details</h3>
                                </div>
                                <div className={classes.edit} onClick={handleSwitch}>
                                    <PencilIcon/>
                                    <span>Edit</span>
                                </div>
                            </div>
                            <div style={{display: change ? "none" : "block"}}>
                                <h4>First name</h4>
                                <div>{data.name}</div>
                                <h4>Last name</h4>
                                <div>{data.last_name}</div>
                                <h4>Email</h4>
                                <div>{data.email}</div>
                                <h4>Password</h4>
                                <div>{password}</div>
                                <h4>Date of birth</h4>
                                <div>{data.birth_date}</div>
                                <h4>Phone number</h4>
                                <div>{data.phone_number}</div>
                                <h4>City</h4>
                                <div>{data.city_code}</div>
                            </div>
                            <div  className={classes.change_part} style={{display: change ? "block" : "none"}}>
                                <EditSettings handleSwitch={handleSwitch}/>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        My Orders content
                    </TabPanel>
                    <TabPanel>
                        My Orders content
                    </TabPanel>
                    <TabPanel>
                        My Orders content
                    </TabPanel>
                    <TabPanel>
                        Faq content
                    </TabPanel>
                </div>
            </Tabs>
            
        </div>
        <div className={classes.logout_modal} style={{display: show ? "block" : "none"}}>
            <div className={classes.logout_modal_div}>
                <h4>Are you sure you want to log out?</h4>
                <div className='flex'>
                    <ButtonWhite text="Yes" onClick={handleClick} type="submit"/>
                    <ButtonWhite text="No" onClick={()=>setShow(false)}/>
                </div>
            </div>
        </div>
    </div>
   )
 }
 export default AccountPageContent 