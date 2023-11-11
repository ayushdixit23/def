"use client";
import React from "react";
import Lotties from "./Lotties";
const Bodys = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 w-full p-2 sm:p-3">
        <div className="col-span-1 pn:max-sm:order-2 flex justify-end md:p-3 items-center">
          <div className="flex sm:mx-4 flex-col gap-5 pn:max-sm:w-full">
            <div className="flex flex-col gap-3 w-full">
              <div className="md:text-3xl text-lg pn:max-sm:text-center font-bold leading-snug">
                "Unleash your passion to personalize your space and show the
                world the extraordinary things you're capable of “
              </div>
              <div className="pn:max-sm:text-center text-sm sm:text-base md:max-w-[60%]">
                Prosite : fully customizable layouts for an enhanced
                personalization experience
              </div>
            </div>
            <div className="flex items-center sm:max-w-[450px] pn:max-sm:justify-center">
              <div className="bg-[#0075FF] text-center min-w-[70%] max-w-[400px] text-white p-2 rounded-xl">
                Edit Now
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full max-h-[550px] items-center col-span-1">
          <Lotties />
        </div>
      </div>
    </>
  );
};

export default Bodys;
