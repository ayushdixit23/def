"use client";
import Lottie from "lottie-react";
import React from "react";
import animation from "../assets/animation.json";

const Lotties = () => {
  return (
    <div>
      <Lottie
        animationData={animation}
        loop={true}
        autoplay={true}
        size={120}
      />
    </div>
  );
};

export default Lotties;
