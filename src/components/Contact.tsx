import React from 'react';
import ContactForm from './ui/ContactForm';

const Contact = () => {
  return (
    <section className="bg-white flex w-full flex-col items-center pt-[69px] pb-[121px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5" id="contact">
      <div className="flex w-full max-w-[1261px] flex-col items-stretch -mb-6 max-md:max-w-full max-md:mb-2.5">
        <h2 className="text-[rgba(13,74,141,1)] text-6xl font-bold tracking-[-1.8px] max-md:max-w-full max-md:text-[40px]">
          Connect With Us
        </h2>
        
        <div className="bg-[rgba(217,235,255,1)] w-full ml-[19px] mt-[84px] pt-[34px] pb-[81px] px-[35px] rounded-[66px] max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div className="flex flex-col relative min-h-[378px] rounded-[32px] max-md:max-w-full">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/8043cba3ff50db00b781ba97bde8894bdb74e882?placeholderIfAbsent=true"
              className="absolute h-full w-full object-cover inset-0"
              alt="Contact background"
            />
            
            <div className="relative flex w-full flex-col items-stretch justify-center px-[65px] py-[113px] rounded-[32px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
              <div className="mb-[-23px] max-md:max-w-full max-md:mb-2.5">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  <div className="w-[39%] max-md:w-full max-md:ml-0">
                    <div className="flex flex-col self-stretch items-stretch text-white my-auto max-md:mt-10">
                      <h3 className="text-[56px] font-bold leading-none tracking-[-1.68px] text-center max-md:text-[40px]">
                        Get in touch
                      </h3>
                      <p className="text-xl font-normal leading-[26px] tracking-[-0.59px] mt-[5px]">
                        Partner with PharmaRise today and take your products to new heights.
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-[61%] ml-5 max-md:w-full max-md:ml-0">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
