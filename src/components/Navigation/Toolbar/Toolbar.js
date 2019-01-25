import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = ( props ) => (
    <header className={classes.Toolbar}>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <div className={[classes.Content,'row'].join(' ')}>
            <div className={[classes.Menubar,'col-lg-2'].join(' ')}>
                <nav className={[classes.DesktopOnly,classes.MenuItems].join(' ')}>
                    <NavigationItems isAuthenticated={props.isAuth} />
                </nav>
            </div>
            <div className='col-lg-10'>
                {props.children}
            </div>
        </div>
    </header>
);

export default toolbar;