import React from 'react'
import classes from './page.module.css'
const Page = (props) => {


    return (
        <div className={classes.page}><span>{props.pageNo}</span></div>
    )
}


export default Page