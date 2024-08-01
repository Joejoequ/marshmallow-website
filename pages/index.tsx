import type { NextPage } from "next";
import Navbar from "../components/navbar"
import Explore from "../components/explore";
import Connect from "../components/connect";
import Create from "../components/create";
import Inspire from "../components/inspire";
import UserReview from "../components/userreview";
import Footer from "../components/footer";
import HeroImage from "../components/heroimage";
import {useEffect} from "react";
const Desktop: NextPage = () => {




  return (
      <div
          className="w-full relative bg-white h-[5238px] overflow-hidden text-left text-5xl text-gray-200 font-dm-sans">

         
        <Navbar/>

        <HeroImage/>
        <Explore/>

        <Connect/>

        <Create/>

        <Inspire/>

        <UserReview/>

        <Footer/>







      </div>
  );
};

export default Desktop;
