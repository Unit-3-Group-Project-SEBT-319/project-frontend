import React from 'react'
import {useParams } from 'react-router-dom'
import './AboutDeveloper.css'

const developerData = {
'1': {
    name: 'Spencer McGoey',
    favoriteSong: 'Praise Jah In The Moonlight',
    headshotUrl: 'https://pbs.twimg.com/media/FucgGSvWcAEsm-q.jpg:large'
  },
  '2': {
    name: 'Mazi Ahmed',
    favoriteSong: 'BIRDS OF A FEATHER',
    headshotUrl: 'https://lh5.googleusercontent.com/proxy/hvjlPVUM0RVZuHu-iLI-1Rx7ud2JDcFXTqWHdGSIiigohfKNf4cX9EqpBMS8iKwUmz2JQybRrAxrjeci3veN_ECiGyLYJnvwtHya2IccP6Pa5LmrJf2SC8NmmfnFOi_YDHslMIa8SGoDHXo0k-jJEkKj97lfXmrEZnGPu9YFajr2pgkyNdvDYekNCbWUIHq9E04'
  },
};

const AboutDeveloper = () => {
    const { id } = useParams()
    const developer = developerData[id]
    
    return (
        <div className="developer-info">
          <img src={developer.headshotUrl} alt={`${developer.name} headshot`} className="developer-info-headshot" />
          <h1>Hi, my name is {developer.name}</h1>
          <p>My favorite song is {developer.favoriteSong}</p>
        </div>
    )
}

export default AboutDeveloper;