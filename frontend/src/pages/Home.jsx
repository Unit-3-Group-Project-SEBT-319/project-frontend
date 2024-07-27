import { useEffect, useState } from "react"
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import RecommendedSongs from '../components/RecommendedSongs';
import Categories from '../components/Categories';

const Home = () => {
    
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