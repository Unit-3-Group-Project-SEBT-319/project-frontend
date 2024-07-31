import SearchBarContainer from "../SearchBar/SearchBarContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './homepageheader.css';

const HomePageHeader = () => {
    return (
        <div className="container-fluid">
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
