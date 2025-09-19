import React from 'react';

const Innovations = () => {
  return (
    <section className="bg-[rgba(217,235,255,1)] flex w-full flex-col items-stretch text-[rgba(13,74,141,1)] font-bold text-center pt-[33px] pb-[122px] max-md:max-w-full max-md:pb-[100px]" id="innovations">
      <h2 className="text-6xl tracking-[-1.8px] ml-[122px] max-md:max-w-full max-md:text-[40px]">
        Our Innovations
      </h2>
      
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/420731d26f3e0fbadf9a13d76ea0778fc9923344?placeholderIfAbsent=true"
        className="aspect-[6.9] object-contain w-full mt-[63px] rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:mt-10"
        alt="Product innovation showcase"
      />
      
      <h3 className="text-[rgba(190,38,35,1)] text-[28px] leading-[50px] self-center mt-[102px] max-md:mt-10">
        Description
      </h3>
      
      <p className="text-[22px] font-medium leading-[39px] self-center mt-[5px] -mb-6 max-md:max-w-full max-md:mb-2.5 max-w-4xl px-4">
        A unique natural nutritional supplement for the first-time in India containing Garcinia Cambogia with added advantage of Salacia Reticulata as compared to other marketed Garcinia products. Salacia along with Garcinia in GarciBIO offers significant synergistic effects in overweight patients. Multiple pathways of action make GarciBIO preferred choice for weight reduction. Indian vegetarian population can take it without any hesitation as it available in Veg capsules.
      </p>
    </section>
  );
};

export default Innovations;
