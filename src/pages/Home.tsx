import ArrowRight from "@/components/ArrowRight";
import { Button } from "@/components/ui/button";
import { ApplicationsCard } from "./ApplicationsCard";
import ScrollToTop from "@/components/ScrollToTop";

export const HomePage = () => {
  return (
    <>
      <ScrollToTop />
      <div className="relative overflow-hidden min-h-screen">
        <img
          src="/src/assets/industry-new.png"
          alt=""
          className="absolute inset-0 w-screen h-full object-cover "
        />
        <div className="relative min-h-screen md:px-[135px] 2xl:top-9 max-w-[1920px] w-full mx-auto flex items-center justify-start z-10">
          <div className="ml-2 md:ml-0 max-w-[831px] flex flex-col gap-7 text-left">
            <h2 className="uppercase text-[50.76px] md:text-[89.76px] font-extrabold text-white">
              We are GTG Engineering
            </h2>
            <h3 className="font-roboto text-white font-normal text-2xl md:text-3xl">
              For over two decades, GTG Engineering has been striving to ensure
              our LLFA ® products are well-designed, scientifically
              manufactured, and comprehensively tested to meet or exceed
              industry standards.
            </h3>
            <Button className="flex gap-2 justify-center items-center w-fit">
              Know More <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
      <div className="ml-2 md:ml-auto mx-auto max-w-[1920px] md:px-[135px] my-24 flex flex-col flex-wrap 2xl:flex-row 2xl:justify-between items-center gap-16 lg:gap-8">
        <div className="mx-auto lg:w-[709px] min-h-[817px] space-y-8">
          <h2 className="uppercase text-primary font-extrabold text-3xl md:text-[40px]">
            applications
          </h2>
          <hr className="w-[113px] h-[3px] bg-[#DA2023]" />
          <h3 className="font-extrabold text:3xl md:text-[50.52px] md:leading-[65.68px] lg:w-[570px] lg:h-[171px]">
            NEVER BEFORE HAS ONE PRODUCT DONE SO MANY THINGS!
          </h3>
          <p className="font-normal text-[22px] leading-[37.4px] font-roboto text-[#333333CC]">
            From the “DIY” home handyman, to the professionally-trained industry
            technician, LLFA ® is an essential commodity in any repairman’s
            toolbox! It is an extremely versatile product with many different
            uses and functionalities. The strength of LLFA ® makes it both a
            competent insulation solution and an invaluable puncture repair
            product. A punctured hose or pipe tightly wrapped with LLFA ® Tape
            will immediately withstand internal pressure because the fusing
            action takes place so quickly. It can stop nasty leaks without
            having to turn off the water source. (*For more information on how
            LLFA ® Tape works, click on the “Product” link).
          </p>
          <Button className="flex gap-2 justify-center items-center w-fit">
            Know More <ArrowRight />
          </Button>
        </div>
        <div className="flex flex-col lg:flex-row mx-auto gap-10 md:gap-8">
          <div className="space-y-8 mx-auto">
            <ApplicationsCard
              img="/src/assets/application-1.png"
              title="Electrical"
              description="LLFA ® is tough enough to repair damaged and leaking pipes subject to pressure and temperature variants, without having to turn off the water source. It will seal leaks up to 150 PSI (water, air and steam). A punctured hose or pipe tightly wrapped with LLFA will immediately withstand internal pressure because the fusing action takes place so quickly."
              className="md:-ml-20 lg:ml-0"
            />
            <ApplicationsCard
              img="/src/assets/application-2.png"
              title="Plumbing / Hvac"
              description="LLFA ® forms an enduring seal that is suitable for low, medium and high voltage applications, for up to 69,000 volts and has been used to insulate jumpers on high voltage transmission lines. Just two layers of LLFA Tape has a dielectric value of up to 32 KV, and is suitable for many electrical applications including: insulating motor leads, joints, terminations and cable jacket repairs."
              className="lg:ml-0 md:ml-20"
            />
          </div>
          <div className="space-y-8 mx-auto lg:mt-12 mt-0">
            <ApplicationsCard
              img="/src/assets/application-3.png"
              title="Natural Gas"
              description="LLFA ® Tape was designed to seal leaks in harsh weather conditions and is currently used as a permanent repair for natural gas leaks by leading natural gas companies, both locally and internationally. LLFA can also be used as an emergency temporary repair by first responders."
              className="md:-ml-20 lg:ml-0"
            />
            <ApplicationsCard
              img="/src/assets/application-4.png"
              title="Telecom"
              description="LLFA ® is waterproof. LLFA’s specified water absorption is less than 0.5% (the requirement for most silicone based products is <3.0%). Based on the extremely low water absorption characteristic and its high tensile strength, water or moisture will not absorb through the tape or migrate along the cable jacket."
              className="lg:ml-0 md:ml-20"
            />
          </div>
        </div>
      </div>
      <div className="relative overflow-x-hidden overflow-y-visible h-[824px]">
        <div className="bg-[#171717] absolute inset-0 w-screen h-full ml-2 md:ml-auto mx-auto md:px-[135px] my-24">
          <div className="pt-8 relative md:px-[135px] max-w-[1920px] w-full mx-auto flex flex-wrap items-center gap-20 justify-start">
            <div className="flex gap-9 relative z-20">
              <span className="w-[391px] h-[184px] bg-primary absolute top-28 left-20"></span>
              <img
                src="/src/assets/about-1.jpeg"
                className="w-[456px] h-[661px] mt-32 relative z-10 object-cover"
                alt=""
              />
              <div className="space-y-9 flex flex-col z-10">
                <img
                  src="/src/assets/about-2.jpeg"
                  className="w-[434px] h-[341px] z-10"
                  alt=""
                />
                <img
                  src="/src/assets/about-3.jpeg"
                  className="w-[365px] h-[342px] z-10"
                  alt=""
                />
              </div>
            </div>
            <div className="about-us relative w-[587px] space-y-8">
              <h3 className=" text-white uppercase font-extrabold text-3xl md:text-[50.52px] md:leading-[65.68px] mx-auto">
                About US
              </h3>
              <p className="font-normal text-[22px] leading-[37.4px] font-roboto text-[#F4F4F4]">
                For over two decades, GTG Engineering has been striving to
                ensure our LLFA® products are well-designed, scientifically
                manufactured, and comprehensively tested to meet or exceed
                industry standards. Our company’s primary goal is to establish
                product solutions that are safe and durable for practical
                application, while maintaining their long-term functionality and
                structural integrity.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden h-[725px]">
        <div className="bg-[#F2F2F2] absolute inset-0 w-screen h-full ml-2 md:ml-auto mx-auto md:px-[135px] mb-24">
          <div className="uppercase font-extrabold text:3xl md:text-[50.52px] md:leading-[65.68px] relative md:px-[135px] max-w-[1920px] w-full mx-auto flex justify-start">
            Our Products
          </div>
        </div>
      </div>
    </>
  );
};
