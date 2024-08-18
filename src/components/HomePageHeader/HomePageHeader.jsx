import React from 'react';
import SearchBarContainer from "../SearchBar/SearchBarContainer";
import './homepageheader.css';

const HomePageHeader = () => {
    return (
        <div className="container-fluid main-content top-div">
            <div className="row">
                <div className="col-12">
                    <SearchBarContainer />
                </div>
            </div>
            <div className="row justify-content-center align-items-center pt-5 header-logo">
                <div className="col-lg-6 col-md-7 col-sm-12 text-center">
                    <div className="logo">
                        <h1 className="simply">Simply</h1>
                        <h1 className="music">Music.</h1>
                    </div>
                </div>
                <div className="col-lg-6 col-md-5 col-sm-12 text-center pic-div">
                    <img src="/pictures/audiy-header-logo.png" className="header-image" alt="Logo" />
                </div>
            </div>
        </div>
    );
}

export default HomePageHeader;
