import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CategoryHeader from '../components/Category/CategoryHeader';
import SongList from '../components/Category/SongList';

const Category = () => {
    return (
        <div>
            <Header />
            <div className="main-content">
                <Sidebar />
                <div className="content">
                    <CategoryHeader />
                    <SongList />
                </div>
            </div>
        </div>
    );
};

export default Category;