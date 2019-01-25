import React from 'react';

import TutionIcon from '../../assets/Images/tution-icon.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={TutionIcon} alt="MyTution" />
    </div>
);

export default logo;