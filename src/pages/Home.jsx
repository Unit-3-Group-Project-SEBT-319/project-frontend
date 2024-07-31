import Categories from '../components/Categories/Categories';
import RandomSongs from "../components/ThreeRandomSongs/RandomSongs";
import HomePageHeader from "../components/HomePageHeader/HomePageHeader";
import './home.css';

const Home = () => {

  return (
      <div className="main-body">
        <HomePageHeader/>
        <h1 className='recommended-songs ps-5 ms-3 mb-4 mt-4'>Recommended songs</h1>
        <RandomSongs />
        <h1 className='genres-title ps-5 ms-3'>Genres</h1>
        <Categories />
      </div>
  )
}

export default Home;
