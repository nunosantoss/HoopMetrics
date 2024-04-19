import React from "react";

const Breakpoints = () => {
  return (
    <>
      <div className="fixed z-[99999999]">
        <h1 className="xxs:block xs:hidden xxs:text-red-800 2xl:max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none uppercase md:text-md">
          xxs
        </h1>
        <h1 className="xs:block sm:hidden xxs:hidden xs:text-red-800 2xl:max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none uppercase md:text-md">
          xs
        </h1>
        <h1 className="xs:hidden sm:block md:hidden xxs:hidden sm:text-red-800 2xl:max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none uppercase md:text-md">
          sm
        </h1>
        <h1 className="xs:hidden md:block xxs:hidden md:text-red-800 sm:text-red-800 lg:hidden 2xl:max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none uppercase md:text-md">
          md
        </h1>
        <h1 className="xs:hidden xxs:hidden md:text-red-800 sm:text-red-800 lg:block xl:hidden lg:text-red-800 2xl:max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none uppercase md:text-md">
          lg
        </h1>
        <h1 className="xs:hidden xxs:hidden xl:block xl:text-red-800  2xl:hidden 2xl:max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none uppercase md:text-md">
          xl
        </h1>
        <h1 className="xs:hidden xxs:hidden 2xl:block 2xl:text-red-800 2xl:max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none uppercase md:text-md">
          2xl
        </h1>
      </div>
    </>
  );
};

export default Breakpoints;
