import React from 'react';

const About = () => {
  return (
    <section className="bg-white w-full pl-20 max-md:max-w-full max-md:pl-5" id="about">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[58%] max-md:w-full max-md:ml-0">
          <div className="flex flex-col self-stretch items-stretch text-[23px] text-[rgba(13,74,141,1)] font-medium my-auto max-md:max-w-full max-md:mt-10">
            <p className="text-center">About Us</p>
            
            <h2 className="text-[42px] text-center mt-[18px] max-md:max-w-full">
              <span className="font-bold text-6xl leading-[90px] tracking-[-1.8px] text-[rgba(13,74,141,1)]">
                PharmaRise
              </span>{" "}
              <span className="font-bold text-6xl leading-[90px] tracking-[-1.8px] text-[rgba(13,74,141,1)]">
                Innovations LLP
              </span>
            </h2>
            
            <p className="font-normal leading-[35px] tracking-[-0.69px] mt-[101px] max-md:max-w-full max-md:mt-10">
              He has launched many innovative products and has headed top pharma companies like Wockhardt, Jb Chemicals, & RPG where, he led major brand innovations. He has a vision to deliver innovative brands that lead to better patient outcomes. Many of the brands are first time in India showing that small companies can deliver big Innovations. We always keep in mind the better patient outcomes in all our Innovations.
            </p>
            
            <button className="bg-[rgba(13,74,141,1)] flex flex-col items-stretch text-[19px] text-white text-center leading-none justify-center mt-11 px-[26px] py-5 rounded-lg max-md:mt-10 max-md:px-5 hover:bg-opacity-90 transition-all w-fit">
              Our Story
            </button>
          </div>
        </div>
        
        <div className="w-[42%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col relative min-h-[632px] grow px-[74px] max-md:max-w-full max-md:mt-[7px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/9f45af84efa43a344f3a7e7840a88dfbf6bf1578?placeholderIfAbsent=true"
              className="absolute h-full w-full object-cover inset-0"
              alt="About us background"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/006e2e9899288218c5c4328489f6c2a1c7a90679?placeholderIfAbsent=true"
              className="aspect-[0.68] object-contain w-full z-10 mt-[-120px] max-md:max-w-full"
              alt="Company representative"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
