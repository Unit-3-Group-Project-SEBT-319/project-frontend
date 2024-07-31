import Categories from '../components/Categories/Categories';
import RandomSongs from "../components/ThreeRandomSongs/RandomSongs";
import HomePageHeader from "../components/HomePageHeader/HomePageHeader";
import './home.css';

const Home = () => {

  return (
      <div className="main-body">
        <HomePageHeader/>
        <RandomSongs />
        <Categories />
      </div>
  )
}

export default Home;
