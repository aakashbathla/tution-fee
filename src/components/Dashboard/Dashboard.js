import React from 'react';
import classes from './Dashboard.css';
const dashboard = (props) => (
    <div>
        <div className={[classes.DashboardContent,'row'].join(' ')}>
            <div className='col-lg-4'>
                <div>
                    <span><i className={[classes.DataIcon,'fa fa-users'].join(' ')}></i><span className={classes.DataHeading}>Total Students</span></span>
                </div>
                <div className={classes.Data}>
                    50
                </div>
            </div>
            <div className='col-lg-4'>
                <div>
                    <span><i className={[classes.DataIcon,'fa fa-unlock'].join(' ')}></i><span className={classes.DataHeading}>Number of students whose Fee pending</span></span>
                </div>
                <div className={classes.Data}>
                    5
                </div>
            </div>
            <div className='col-lg-4'>
                <div>
                    <span><i className={[classes.DataIcon,'fa fa-usd'].join(' ')}></i><span className={classes.DataHeading}>Money Earned</span></span>
                </div>
                <div className={classes.Data}>
                    20000
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-12'>

            </div>
        </div>
    </div>
);

export default dashboard;