import React from "react";

const Comingsoon = () => {
  return (
    <>
      <section className="pt-64 xxs:max-w-screen-folded xs:max-w-screen-xxs sm:max-w-screen-xs md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl flex flex-col mx-auto justify-center items-center">
        <h1 className="text-6xl xxs:text-center md:text-justify uppercase font-extrabold tracking-tight leading-none md:text-6xl xl:text-8xl bg-gradient-to-br from-white from-[30%]  via-yellow-500 to-orange-500 inline-block text-transparent bg-clip-text">
          Coming Soon!
        </h1>
        <div className="pt-20 pr-20">
          <div class="absolute">
            <div class="ball">
              <div class="lines"></div>
            </div>
            <div class="shadow"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Comingsoon;
