import React from 'react'
import { Link } from 'react-router-dom'
import './DeveloperHeadShot.css'


const DeveloperHeadShot = ({ developer }) => {
    return (
        <Link to={`/about-developer/${developer.id}`} className='developer-headshot-link'>
            <div className='developer-headshot-container'>
                <img
                src={developer.headshotUrl}
                alt={`${developer.name} headshot`}
                className='developer-headshot'
                />
            </div>
        </Link>
    )
}

export default DeveloperHeadShot;