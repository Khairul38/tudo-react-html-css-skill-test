import React from "react";
import Play from "../../assets/icons/play.png";
import Slice from "../../assets/images/slice.png";
import Ellipse from "../../assets/images/Ellipse-middle-section.png";
import Previous from "../../assets/icons/Previous.png";
import Next from "../../assets/icons/Next.png";
import Polygon from "../../assets/icons/Polygon.png";
import Ashrei from "../../assets/images/Ashrei.png";
import Rectangle from "../../assets/images/Rectangle.png";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* ----Yoga for Flat Ads section---- */}
      <div id="background-Img-main" className="flex justify-center">
        <div className="max-w-[1440px] xl:mx-[155px] mx-8 pb-[47.6px] pt-[67.21px]">
          <h1 className="font-light text-[36.49px] leading-[44px]">
            Yoga for Flat Ads
          </h1>
          <p className="font-light text-[22.78px] leading-9 text-[#4D4D4D] mt-[6.45px] mb-[25.92px]">
            90 Days program
          </p>
          <div>
            <div className="lg:flex">
              <div className="md:w-[634.48px] h-[398.07px] bg-[#C4C4C4] bg-opacity-70 rounded-2xl lg:mr-10 xl:mr-[76.74px]">
                <p className="pl-4 pt-4 font-light text-[18px] leading-[28px] text-[#000000]">
                  Introduction video
                </p>
                <div className="flex justify-center mt-[261.17px]">
                  <img src={Play} alt="" />
                </div>
              </div>
              <div className="flex justify-center mt-10 lg:mt-0">
                <div>
                  <div className="flex mb-[35.55px]">
                    <span className="mr-[65.32px]">
                      <span className="font-light text-[22.78px] leading-[27px] text-[#FE5266]">
                        Details
                      </span>
                      <p className="w-[43.19px] border-t-[3px] border-[rgba(242,67,151,1)] mt-[9.07px]"></p>
                    </span>
                    <span>
                      <span className="font-light text-[22.78px] leading-[27px] text-[#4D4D4D]">
                        Techniques
                      </span>
                    </span>
                  </div>
                  <p className="font-light text-[20.25px] leading-[32px] max-w-[355.72px] max-h-[205.98px]">
                    Choose a quiet space so that you can do the session
                    uninterrupted. Make sure there is at least 2 hours gap
                    between a meal and the class. Put all other devices aside
                    and enjoy the session.
                  </p>
                  <p className="mt-[87.12px] font-[750] text-[18px] leading-7 gradientText">
                    AED 99/-
                  </p>
                  <div className="mt-[43.69px]">
                    <button className="gradientBackground font-light text-lg leading-7 text-[#FFFFFF] w-[133.41px] h-[61.92px] rounded-[50px]">
                      Join now
                    </button>
                    <button className="gradientText font-light text-lg leading-7 text-[#FFFFFF] w-[172.44px] h-[61.92px] rounded-[50px] border border-[rgba(242,67,151,1)] ml-[18.23px]">
                      View Schedule
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----Structure of program section---- */}
      <div className="bg-[#FFF3E9] md:max-h-[442.4px] mb-[56.95px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="md:flex justify-between xl:mx-[155px] mx-8">
            <div className="pt-[48.88px] pb-[63.05px]">
              <h1 className="font-light text-[37.65px] leading-[59px] mb-3">
                Structure of program
              </h1>
              <p className="font-light text-[18px] leading-[28px] max-w-[442px] mb-[61.15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <div className="mb-[18.88px]">
                <span className="font-light text-[80.49px] leading-[96.59px] gradientText mr-4">
                  90
                </span>
                <span className="font-light text-[36.49px] leading-[43.79px] text-[#000000]">
                  Days
                </span>
              </div>
              <div className="flex items-center ">
                <span className="font-light text-2xl md:text-[32.44px] leading-[38.93px] text-[#565656] pr-[11px]">
                  Yoga
                </span>
                <p className="h-[33.86px] border-l border-[#4D4D4D] opacity-40"></p>
                <span className="font-light text-2xl md:text-[32.44px] leading-[38.93px] text-[#565656] px-[11px]">
                  Recovery
                </span>
                <p className="h-[33.86px] border-l border-[#4D4D4D] opacity-40"></p>
                <span className="font-light text-2xl md:text-[32.44px] leading-[38.93px] text-[#565656] px-[11px]">
                  Rest
                </span>
                <p className="h-[33.86px] border-l border-[#4D4D4D] opacity-40"></p>
                <span className="font-light text-2xl md:text-[32.44px] leading-[38.93px] text-[#565656] pl-[11px]">
                  Repeat
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img src={Slice} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* ----Schedule section---- */}
      <div className="max-w-[1440px] mx-auto">
        <div className="xl:mx-[155px] mx-8 mb-[145.56px]">
          <h1 className="font-light text-[30px] leading-[46.95px] mb-[87.57px]">
            Schedule
          </h1>
          <div className="lg:flex justify-between">
            <div className="flex justify-center items-center mb-10 lg:mb-0">
              <img src={Ellipse} alt="" />
            </div>
            <div className="lg:min-w-[475.67px] lg:ml-12">
              <div className="flex justify-between items-center mb-[38.37px]">
                <h1 className="font-light text-[32.44px] leading-[38.93px]">
                  Day 1 - Class
                </h1>

                {/* Previous and Next button */}
                <div className="flex space-x-[19.34px]">
                  <img
                    className="m-[11px] cursor-pointer"
                    src={Previous}
                    alt=""
                  />
                  <img className="m-[11px] cursor-pointer" src={Next} alt="" />
                </div>
              </div>
              <div className="lg:min-w-[475.67px] min-h-[283.12px] bg-[#C4C4C4]">
                <div className="flex justify-end pt-[159.15px]">
                  <div className="w-[145px] h-[61.92px] flex justify-between items-center px-[11.41px] rounded-lg bg-white border border-[rgba(77,77,77,0.6)] shadow-[0px_1px_4px_rgba(0,0,0,0.26)]">
                    <p className="font-light text-lg leading-[28.17px]">
                      Week 1
                    </p>
                    <img
                      className="w-[16px] h-[20.64px]"
                      src={Polygon}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <p className="md:w-[421px] h-[84px] mt-[42.71px] mb-[11.35px] font-light text-lg leading-[28.17px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <h1 className="font-light text-[22.78px] leading-[36.45px] gradientText cursor-pointer">
                Join Today
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* ----Our Teachers section---- */}
      <div className="max-w-[1440px] mx-auto">
        <div className="xl:mx-[155px] mx-8 mb-[78px]">
          <h1 className="font-light text-[36.49px] leading-[43.79px] mb-[84px]">
            Our Teachers
          </h1>
          <div className="lg:flex justify-between">
            <div className="mb-20 lg:mb-0">
              <p className="font-light text-[22.78px] leading-[27.34px] text-[#8C8C8C] pl-[42px] mb-[52px]">
                Ashrei Mitra
              </p>
              <div className="flex items-center mb-[52px]">
                <p className="relative bottom-[-40px] w-[16px] h-[15.9px] bg-white rounded-full mr-[26px]"></p>
                <p className="font-light text-[22.78px] leading-[27.34px] text-[#8C8C8C]">
                  Rahul
                </p>
              </div>
              <div className="flex items-center mb-[52px]">
                <p className="w-[16px] h-[15.9px] bg-[#F64C3B] rounded-full mr-[26px]"></p>
                <p className="font-light text-[28.83px] leading-[34.6px] text-[#FE5266]">
                  Ashrei Mitra
                </p>
              </div>
              <p className="font-light text-[22.78px] leading-[27.34px] text-[#8C8C8C] pl-[42px] mb-[52px]">
                Ashray
              </p>
              <p className="font-light text-[22.78px] leading-[27.34px] text-[#8C8C8C] pl-[42px] mb-[52px]">
                Ashish
              </p>
              <p className="font-light text-[22.78px] leading-[27.34px] text-[#8C8C8C] pl-[42px]">
                Zora
              </p>
            </div>
            <div className="relative md:flex items-center md:w-[739px] md:h-[423px] rounded-2xl bg-[#C4C4C4] bg-opacity-30 mx-auto lg:mx-0">
              <div>
                <img
                  className="absolute top-[30px] left-[25px]"
                  src={Rectangle}
                  alt=""
                />
                <img
                  className="absolute top-[-45px] left-[0px]"
                  src={Ashrei}
                  alt=""
                />
                <h1 className="font-light text-[25.63px] leading-[30.76px] ml-[25px] mt-[16px]">
                  Ashrei Mitra
                </h1>
              </div>
              <div>
                <p className="md:w-[465px] font-light text-4 leading-[25.04px] md:ml-[79px] text-[#4D4D4D] px-8 pb-8 mt-44 md:mt-0 md:pb-0 md:px-0">
                  Ashrei Mitra started his journey in yoga at the age of 16. He
                  was chosen by his master Dr. Bharat Thakur from a meditation
                  workshop and has worked with him closely for many years to
                  become one of the most senior teachers at Bharat Thakur
                  Artistic Yoga. Combining his love of fitness, breathwork,
                  functional training, and his deep knowledge of the human
                  anatomy and yogic knowhow, he is committed to maximizing on
                  the human potential by strengthening and opening up the body
                  so that the mind naturally falls into a deep state of
                  relaxation and meditation. He has taught yoga to people from
                  all walks of life including athletes, celebrities and several
                  top corporate organizations
                </p>
              </div>
            </div>
          </div>

          {/* Previous and Next button */}
          <div className="flex justify-end mt-[23px] space-x-[19.34px]">
            <img className="m-[11px] cursor-pointer" src={Previous} alt="" />
            <img className="m-[11px] cursor-pointer" src={Next} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
