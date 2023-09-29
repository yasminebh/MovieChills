import "./style.scss";
import HeroBanner from './heroBanner/HeroBanner';
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/topRated";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending /> 
      <Popular />
      <TopRated/>
      <div style={{height: 20}}></div>
    </div>
  );
}

export default Home