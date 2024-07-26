import { useEffect, useState } from "react"
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import RecommendedSongs from '../components/RecommendedSongs';
import Categories from '../components/Categories';

const Home = () => {
    const [recommendedSongs, setRecommendedSongs] = useState([])
    const [categories, setCategories] = useState([])

    const URL = "http://localhost:4000/audify/"

    const getRecommendedSongs = async () => {
            const response = await fetch(URL)
            const data = await response.json()
            setRecommendedSongs(data)
        }
    
    const getCategories = async () => {
            const response = await fetch (URL)
            const data = await response.json()
            setCategories(data)
    }
    useEffect(() => {
        getRecommendedSongs()
        getCategories()
    }, [])
    
    return (
        <div>
            <Header />
            <div className="main-content">
                <Sidebar />
                <div className="content">
                    <SearchBar />
                    <RecommendedSongs />
                    <Categories />
                </div>
            </div>
        </div>
    );
};

export default Home;