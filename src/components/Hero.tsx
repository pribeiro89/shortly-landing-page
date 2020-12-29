import React from 'react';
import heroImage from '../assets/images/illustration-working.svg';

const Hero = () => {
  return (
    <section className="bg-white relative overflow-hidden">
      <img src={heroImage} alt="" className="
        h-72 object-cover object-left mt-5 ml-6
        sm:mt-14 sm:h-96 sm:absolute right-0 sm:transform sm:translate-x-28
      "
      />
      <div className="container flex flex-col pt-10 pb-44 sm:py-28">
        <div className="text-center sm:text-left sm:w-3/7">
          <h1 className="sm:text-6xl text-neutral-dark-blue mb-2 sm:mb-0">
            More than just shorter links
          </h1>
          <p className="text-neutral-violet-gray sm:text-lg leading-relaxed mb-8">
            Build your brand’s recognition and get detailed insights on how your links are performing.
          </p>
          <button className="px-8 py-2.5 bg-primary-cyan text-white rounded-full">
            Get Started
          </button>
        </div>
        <div className="
          bg-shorten-mobile sm:bg-shorten-desktop bg-primary-violet bg-cover bg-center
          absolute bottom-0 transform translate-y-1/2 p-10 rounded-lg
        ">
          <form action="">
            <input type="text" />
            <button type="submit">Shorten It!</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
