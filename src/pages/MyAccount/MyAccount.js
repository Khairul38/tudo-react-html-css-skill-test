import React from "react";
import ProfileImg from "../../assets/images/avatar-main.png";
// import AccountImg from "../../assets/images/My-Account.png";
import Ellipse12 from "../../assets/images/Ellipse.png";
import EditImg from "../../assets/icons/edit.png";
import "./MyAccount.css";

const MyAccount = () => {
  return (
    <div>
      {/* ----Profile Section---- */}
      <div className="flex justify-center">
        <div>
          <h1 className="font-['Gill_Sans_MT'] text-center font-normal text-[64px] leading-[74.22px] mt-[90px] mb-[45px] text-[#4D4D4D] ">
            MY{" "}
            <span className="text-[#FE5268] font-bold text-[64px] leading-[74.22px]">
              ACCOUNT
            </span>
          </h1>
          {/* <img
            className="mx-auto w-[462px] mt-[90px] mb-[45px]"
            src={AccountImg}
            alt=""
          /> */}
          <img
            className="mx-auto w-[200px] h-[200px]"
            src={ProfileImg}
            alt=""
          />
          <img
            className="relative mx-auto top-[-63px] right-[-67px] w-[63.11px] h-[63.11]"
            src={Ellipse12}
            alt=""
          />
          <img
            className="relative mx-auto top-[-236px] right-[-67px] w-[26.23px] h-[18.77px]"
            src={EditImg}
            alt=""
          />
        </div>
      </div>

      {/* ----Account Details Section---- */}
      <div id="background-Img-account">
        <div className="lg:max-w-[959px] lg:h-[908px] lg:mx-auto mx-8 mb-20">
          <div className="mb-[33px]">
            <label className="font-sans font-bold text-[26.6px] leading-[40px] text-[#000000] opacity-50 mb-[21px]">
              Name
            </label>
            <div className="flex justify-between items-center">
              <p className="font-light text-[28.83px] leading-[35px]">
                Arjun G N
              </p>
              <button className="underline font-light text-[25.6px] leading-[40px] text-[#F24397]">
                Edit
              </button>
            </div>
          </div>
          <div className="mb-[33px]">
            <label className="font-sans font-bold text-[26.6px] leading-[40px] text-[#000000] opacity-50 mb-[21px]">
              Email
            </label>
            <div className="flex justify-between items-center">
              <p className="font-light text-[28.83px] leading-[35px]">
                arjun@gmail.com
              </p>
              <button className="underline font-light text-[25.6px] leading-[40px] text-[#F24397]">
                Edit
              </button>
            </div>
          </div>
          <div className="mb-[33px]">
            <label className="font-sans font-bold text-[26.6px] leading-[40px] text-[#000000] opacity-50 mb-[21px]">
              Phone
            </label>
            <div className="flex justify-between items-center">
              <p className="font-light text-[28.83px] leading-[35px]">
                9826369270
              </p>
              <button className="underline font-light text-[25.6px] leading-[40px] text-[#F24397]">
                Edit
              </button>
            </div>
          </div>
          <div className="mb-[33px] flex justify-between items-center">
            <label className="font-sans font-bold text-[26.6px] leading-[40px] text-[#000000] opacity-50">
              Password
            </label>
            <button className="underline font-light text-[25.6px] leading-[40px] text-[#F24397]">
              Change password
            </button>
          </div>
          <div className="mb-[33px]">
            <label className="font-sans font-bold text-[26.6px] leading-[40px] text-[#000000] opacity-50">
              Subscription Details
            </label>
            <div className="flex justify-between items-center mt-[45px] mb-[5px]">
              <h1 className="font-light text-[28.83px] leading-[35px]">
                1 Year membership for 750 AED
              </h1>
              <button className="underline font-light text-[25.6px] leading-[40px] text-[#F24397]">
                Change plan
              </button>
            </div>
            <p className="font-light text-[25.63px] leading-[31px] opacity-[0.65] mb-2">
              Started on: 13-11-2020 <br /> Valid till: 13-11-2021
            </p>
            <p className="underline text-[#4D4D4D] font-light text-[25.63px] leading-[31px] cursor-pointer">
              Subscription history
            </p>
          </div>
          <div className="">
            <label className="font-sans font-bold text-[26.6px] leading-[40px] text-[#000000] opacity-50 mb-[21px]">
              Referral Details
            </label>
            <p className="font-light text-[26.6px] leading-[40px] opacity-[0.65] mb-8">
              Share your referral code and earn cash credits for each friend
              that subscribes. (1 Friend = 5 USD/16 DHRM). Also, your friend
              receives a 5 USD credit.
            </p>
            <div className="flex justify-between items-center">
              <p className="font-light text-[26.6px] leading-[40px] opacity-[0.65]">
                Referral Code: HSAGBWBDAV
              </p>
              <button className="underline font-light text-[25.6px] leading-[40px] text-[#F24397]">
                Copy
              </button>
            </div>
            <p className="underline text-[#4D4D4D] font-light text-[25.63px] leading-[31px] cursor-pointer">
              Referral History
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
