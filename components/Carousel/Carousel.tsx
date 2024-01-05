"use client";

import React from "react";
import "@/styles/components/_carousel.scss";
import Slider from "./Slider";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

const Carousel = () => {
  return (
    <div className="container__carousel">
      <LeftPanel />
      <Slider />
      <RightPanel />
    </div>
  );
};

export default Carousel;
