import React from "react";
import BannerHome from "../components/BannerHome";
import { useSelector } from "react-redux";
import HorizontakScrollCard from "../components/HorizontalScrollCard";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const trendingData = useSelector((state) => state.movieoData.bannerData);
  const { data: nowPlayingData } = useFetch("/movie/now_playing");
  const { data: topRatedData } = useFetch("/movie/top_rated");
  const { data: popularTvShowData } = useFetch("/tv/popular");
  const { data: onTheAirData } = useFetch("/tv/on_the_air");

  return (
    <div>
      <BannerHome />
      <HorizontakScrollCard
        data={trendingData}
        heading={"Trending"}
        trendingData={true}
      />
      <HorizontakScrollCard
        data={nowPlayingData}
        heading={"Now Playing"}
        media_type={"movie"}
      />
      <HorizontakScrollCard
        data={topRatedData}
        heading={"Top Rated"}
        media_type={"movie"}
      />
      <HorizontakScrollCard
        data={popularTvShowData}
        heading={"Popular TV Show"}
        media_type={"tv"}
      />
      <HorizontakScrollCard
        data={onTheAirData}
        heading={"On The Air"}
        media_type={"tv"}
      />
    </div>
  );
};

export default Home;
