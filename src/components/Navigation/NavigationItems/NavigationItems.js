import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/dashboard" exact><i className='fa fa-dashboard'></i><span className={classes.Ml20}>Dashboard</span></NavigationItem>
        <NavigationItem link="/student"><i className='fa fa-user-o'></i><span className={classes.Ml20}>Student</span></NavigationItem>
        <NavigationItem link="/class"><i className='fa fa-group'></i><span className={classes.Ml20}>Class</span></NavigationItem>
        <NavigationItem link="/subject"><i className='fa fa-book'></i><span className={classes.Ml20}>Subject</span></NavigationItem>
        <NavigationItem link="/submit-fee"><i className='fa fa-usd'></i><span className={classes.Ml20}>Submit Fee</span></NavigationItem>
        <NavigationItem link="/logout"><i className='fa fa-linux'></i><span className={classes.Ml20}>Logout</span></NavigationItem>
    </ul>
);

export default navigationItems;