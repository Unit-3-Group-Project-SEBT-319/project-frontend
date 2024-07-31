import React from 'react'
import {useParams } from 'react-router-dom'
import './AboutDeveloper.css'

const developerData = {
'1': {
    name: 'Spencer McGoey',
    favoriteSong: 'Praise Jah In The Moonlight',
    headshotUrl: '/developers/Spencer.jpeg',
    videoUrl: 'https://www.youtube.com/embed/Kgh9TVm4X8s'
  },
  '2': {
    name: 'Mazi Ahmed',
    favoriteSong: 'BIRDS OF A FEATHER',
    headshotUrl: '/developers/Mazi.png',
    videoUrl: 'https://www.youtube.com/embed/d5gf9dXbPi0'
  },
};

const AboutDeveloper = () => {
    const { id } = useParams()
    const developer = developerData[id]
    
    return (
        <div className="developer-info">
          <img src={developer.headshotUrl} alt={`${developer.name} headshot`} className="developer-info-headshot" />
          <h1>Hi, my name is {developer.name}</h1>
          <p>I'm currently listening to {developer.favoriteSong}</p>
          <div className="developer-video">
          <iframe
          width="560"
          height="315"
          src={developer.videoUrl}
          title={`${developer.name} Favorite Video`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          ></iframe>
          </div>
        </div>
    )
}

export default AboutDeveloper;