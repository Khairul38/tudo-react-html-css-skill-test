import React from "react";
import PhoneIcon from "../../assets/icons/whatsapp 1.png";
import EmailIcon from "../../assets/icons/email.png";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#FFF3E9]">
        <div className="max-w-[1440px] mx-auto">
          <div className="sm:h-[377px] mx-8 lg:mx-[155px] pt-[41px] pb-10 sm:pb-0">
            <div className="md:flex justify-between mb-4">
              <h3 className="font-light text-[28.83px] leading-[35px] mb-3 md:mb-0">
                Let's talk
              </h3>
              <div className="flex items-center">
                <p className="font-light text-[18px] leading-[28px]">
                  someone@example.com
                </p>
                <img className="w-6 h-6 ml-[22px]" src={EmailIcon} alt="" />
              </div>
            </div>
            <div className="md:flex justify-between mb-4">
              <h1 className="font-light text-[36.49px] leading-[44px] mb-3 md:mb-0">
                Book an appointment?
              </h1>
              <div className="flex items-center">
                <p className="font-light text-[18px] leading-[28px]">
                  +91- 385 526 5060
                </p>
                <img className="w-6 h-6 ml-[22px]" src={PhoneIcon} alt="" />
              </div>
            </div>
            <div className="border-[1px] border-[#000000]"></div>
            <p className="max-w-[521px] h-[75px] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              vitae facilisis lorem. Integer non pharetra mauris, non tincidunt
              metus. Aenean in lectus diam...
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#000000] h-28 md:h-20 text-white md:flex justify-center items-center text-center md:space-x-2 space-y-2 md:space-y-0 text-base font-light leading-[22px] pt-3 md:pt-0">
        <p>© 2021 Copyright - Artistic yoga </p>
        <p className="hidden md:block w-[5px] h-[5px] rounded-full bg-white"></p>
        <p>Privacy policy</p>
        <p className="hidden md:block w-[5px] h-[5px] rounded-full bg-white"></p>
        <p>Terms of use</p>
      </div>
    </footer>
  );
};

export default Footer;
