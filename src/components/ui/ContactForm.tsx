import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  serviceInterest: z.string().min(1, 'Please select a service interest'),
  address: z.string().min(5, 'Address must be at least 5 characters'),
  companyName: z.string().min(2, 'Company name must be at least 2 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  newsletter: z.boolean().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      {/* Message field */}
      <div className="bg-[rgba(255,255,255,0.36)] border flex grow flex-col items-stretch text-sm text-[rgba(108,108,108,1)] font-normal leading-none justify-center w-full p-[19px] rounded-[26px] border-[rgba(255,255,255,0.1)] border-solid mb-[67px]">
        <div className="bg-white flex flex-col pt-[11px] pb-[82px] px-[13px] rounded-[15px]">
          <textarea
            {...register('message')}
            placeholder="Message....."
            className="w-full h-20 resize-none border-none outline-none bg-transparent text-[rgba(108,108,108,1)]"
          />
          {errors.message && (
            <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>
          )}
        </div>
      </div>

      {/* Form fields */}
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[31%] max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col items-stretch text-xl text-[rgba(108,108,108,1)] font-normal leading-none max-md:mt-10">
            <div>
              <input
                {...register('fullName')}
                placeholder="Full Name"
                className="w-full bg-transparent border-none outline-none pb-1"
              />
              <div className="shrink-0 h-0.5 mt-1 border-[rgba(108,108,108,1)] border-solid border-2" />
              {errors.fullName && (
                <span className="text-red-500 text-xs mt-1">{errors.fullName.message}</span>
              )}
            </div>
            
            <div className="mt-[54px] max-md:mt-10">
              <select
                {...register('serviceInterest')}
                className="w-full bg-transparent border-none outline-none pb-1 appearance-none"
              >
                <option value="">Service Interest</option>
                <option value="product-development">Product Development</option>
                <option value="marketing">Marketing</option>
                <option value="consultation">Consultation</option>
                <option value="partnership">Partnership</option>
              </select>
              <div className="shrink-0 h-0.5 mt-1 border-[rgba(108,108,108,1)] border-solid border-2" />
              {errors.serviceInterest && (
                <span className="text-red-500 text-xs mt-1">{errors.serviceInterest.message}</span>
              )}
            </div>
          </div>
        </div>
        
        <div className="w-[69%] ml-5 max-md:w-full max-md:ml-0">
          <div className="w-full max-md:max-w-full max-md:mt-10">
            <div className="flex items-stretch gap-[40px_75px] text-xl text-[rgba(108,108,108,1)] font-normal leading-none flex-wrap max-md:max-w-full">
              <div className="flex flex-col items-stretch flex-1 grow shrink-0 basis-0 w-fit">
                <input
                  {...register('email')}
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border-none outline-none pb-1"
                />
                <div className="shrink-0 h-0.5 mt-1 border-[rgba(108,108,108,1)] border-solid border-2" />
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>
                )}
              </div>
              
              <div className="flex flex-col items-stretch flex-1 grow shrink-0 basis-0 w-fit">
                <input
                  {...register('phone')}
                  type="tel"
                  placeholder="Phone No."
                  className="w-full bg-transparent border-none outline-none pb-1"
                />
                <div className="shrink-0 h-0.5 mt-1 border-[rgba(108,108,108,1)] border-solid border-2" />
                {errors.phone && (
                  <span className="text-red-500 text-xs mt-1">{errors.phone.message}</span>
                )}
              </div>
            </div>
            
            <div className="mt-[54px] max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-6/12 max-md:w-full max-md:ml-0">
                  <div className="flex w-full flex-col items-stretch text-xl text-[rgba(108,108,108,1)] font-semibold leading-none max-md:mt-10">
                    <div className="font-normal">
                      <input
                        {...register('address')}
                        placeholder="Address"
                        className="w-full bg-transparent border-none outline-none pb-1"
                      />
                      <div className="shrink-0 h-0.5 mt-1 border-[rgba(108,108,108,1)] border-solid border-2" />
                      {errors.address && (
                        <span className="text-red-500 text-xs mt-1">{errors.address.message}</span>
                      )}
                    </div>
                    
                    <div className="self-center flex w-[212px] max-w-full items-stretch gap-[11px] mt-[89px] max-md:mt-10">
                      <input
                        {...register('newsletter')}
                        type="checkbox"
                        className="aspect-[0.97] w-[29px] rounded bg-[rgba(13,74,141,1)] shrink-0 h-[29px]"
                      />
                      <label className="grow shrink w-[167px]">
                        Newsletter Signup
                      </label>
                    </div>
                    
                    <button
                      type="submit"
                      className="bg-white self-center flex w-[153px] max-w-full flex-col items-stretch text-[rgba(13,74,141,1)] whitespace-nowrap text-center justify-center mt-3.5 px-[52px] py-[13px] rounded-xl max-md:px-5 hover:bg-opacity-90 transition-all"
                    >
                      Send
                    </button>
                  </div>
                </div>
                
                <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex flex-col items-stretch text-xl text-[rgba(108,108,108,1)] font-normal leading-none max-md:mt-10">
                    <input
                      {...register('companyName')}
                      placeholder="Company Name"
                      className="w-full bg-transparent border-none outline-none pb-1"
                    />
                    <div className="shrink-0 h-0.5 mt-1 border-[rgba(108,108,108,1)] border-solid border-2" />
                    {errors.companyName && (
                      <span className="text-red-500 text-xs mt-1">{errors.companyName.message}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
