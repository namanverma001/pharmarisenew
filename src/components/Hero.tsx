import React from 'react';

const Hero = () => {
  return (
    <section className="w-full -mt-3 max-md:max-w-full" id="home">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex flex-col relative z-10 min-h-[738px] mr-[-397px] w-full px-[51px] py-[84px] max-md:max-w-full max-md:px-5">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d41fa14ccfc64fe94dbfca0b21df9d4154356bd5?placeholderIfAbsent=true"
              className="absolute h-full w-full object-cover inset-0"
              alt="Hero background"
            />
            <h1 className="relative text-white text-[67px] font-bold leading-[0.9] tracking-[-2.01px] max-md:max-w-full max-md:text-[40px]">
              PharmaRise Inovations
            </h1>
            <p className="relative text-white text-[35px] font-normal leading-none mt-[15px] max-md:max-w-full">
              Innovations for a healthy life
            </p>
            
            <div className="relative w-[545px] max-w-full mt-[63px] max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-6/12 max-md:w-full max-md:ml-0">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/3a9aa7e720b916e2c95a8e26d8582c60706c0776?placeholderIfAbsent=true"
                    className="aspect-[2.45] object-contain w-full grow rounded-xl max-md:mt-10"
                    alt="Product showcase 1"
                  />
                </div>
                <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/2b69e68f76a88613d5692e5a933b6ca47f11d67a?placeholderIfAbsent=true"
                    className="aspect-[2.45] object-contain w-full grow rounded-xl max-md:mt-10"
                    alt="Product showcase 2"
                  />
                </div>
              </div>
            </div>
            
            <p className="relative text-white text-[23px] font-normal leading-[37px] w-[625px] mt-14 max-md:max-w-full max-md:mt-10">
              For the first time in India, PharmaRise proudly introduces two unique & innovative products, set to redefine healthcare possibilities, improve patient outcomes, & establish benchmarks of excellence in the industry.
            </p>
            
            <button className="relative bg-[rgba(190,38,35,1)] flex flex-col items-stretch text-[15px] text-white font-medium text-center leading-none justify-center mt-14 px-[22px] py-[15px] rounded-md max-md:mt-10 max-md:px-5 hover:bg-opacity-90 transition-all w-fit">
              About Us
            </button>
          </div>
        </div>
        
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col relative min-h-[738px] grow pt-[188px] pb-[49px] px-20 max-md:max-w-full max-md:pt-[100px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/251773bffd1da40a339c1af85564e3fa38eece49?placeholderIfAbsent=true"
              className="absolute h-full w-full object-cover inset-0"
              alt="Hero side background"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/3de432c56267e293738e7ab10b6212f85a58458c?placeholderIfAbsent=true"
              className="aspect-[1.38] object-contain w-[689px] max-w-full relative z-10"
              alt="Product display"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
