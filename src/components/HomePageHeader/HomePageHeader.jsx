import SearchBarContainer from "../SearchBar/SearchBarContainer";
import './homepageheader.css';

const HomePageHeader = () => {
    return (
        <div className="container-fluid main-content">
            <div className="row">
                <div className="col-12">
                    <SearchBarContainer />
                </div>
            </div>
            <div className="row justify-content-center align-items-center pt-5">
                <div className="col-auto text-center">
                    <div className="logo">
                        <h1 className="simplymusic">Simply</h1><span className="music">Music</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePageHeader;
