import React, { useEffect, useState } from "react";
import Play from "../../assets/icons/play.png";
import Slice from "../../assets/images/slice.png";
import Ellipse from "../../assets/images/Ellipse-middle-section-1.png";
import Ellipse27 from "../../assets/images/Ellipse-27.png";
// import Ellipse20 from "../../assets/images/Ellipse-20.png";
import Ellipse24 from "../../assets/images/Ellipse-24.png";
import Ellipse25 from "../../assets/images/Ellipse-25.png";
import Ellipse26 from "../../assets/images/Ellipse-26.png";
import Previous from "../../assets/icons/Previous.png";
import Next from "../../assets/icons/Next.png";
import Polygon from "../../assets/icons/Polygon.png";
import Ashrei from "../../assets/images/Ashrei.png";
import Rectangle from "../../assets/images/Rectangle.png";
import "./Home.css";

const schedules = [
  {
    id: 1,
    day: 1,
    title: "Day 1 - Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    day: 2,
    title: "Day 2 - Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    day: 3,
    title: "Day 3 - Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    day: 4,
    title: "Day 4 - Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    day: 5,
    title: "Day 5 - Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    day: 6,
    title: "Day 6 - Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 7,
    day: 7,
    title: "Day 7 - Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const teachers = [
  {
    id: 1,
    name: "Ashrei Mitra",
    description: "This is description",
  },
  {
    id: 2,
    name: "Rahul",
    description: "This is description",
  },
  {
    id: 3,
    name: "Ashrei Mitra",
    description:
      "Ashrei Mitra started his journey in yoga at the age of 16. He was chosen by his master Dr. Bharat Thakur from a meditation workshop and has worked with him closely for many years to become one of the most senior teachers at Bharat Thakur Artistic Yoga. Combining his love of fitness, breathwork, functional training, and his deep knowledge of the human anatomy and yogic knowhow, he is committed to maximizing on the human potential by strengthening and opening up the body so that the mind naturally falls into a deep state of relaxation and meditation. He has taught yoga to people from all walks of life including athletes, celebrities and several top corporate organizations",
  },
  {
    id: 4,
    name: "Ashray",
    description: "This is description",
  },
  {
    id: 5,
    name: "Ashish",
    description: "This is description",
  },
  {
    id: 6,
    name: "Zora",
    description: "This is description",
  },
];

const Home = () => {
  const [selectedTeacher, setSelectedTeacher] = useState({
    ...teachers[2],
    index: 2,
  });
  const [selectedSchedule, setSelectedSchedule] = useState({
    ...schedules[0],
    index: 0,
  });

  // Schedule section
  const handleScheduleClick = (index) => {
    setSelectedSchedule({
      ...schedules[index],
      index: index,
    });
  };

  const handlePreviousSchedule = () => {
    if (selectedSchedule.index > 0) {
      setSelectedSchedule({
        ...schedules[selectedSchedule.index - 1],
        index: selectedSchedule.index - 1,
      });
    }
  };
  const handleNextSchedule = () => {
    if (selectedSchedule.index < 6) {
      setSelectedSchedule({
        ...schedules[selectedSchedule.index + 1],
        index: selectedSchedule.index + 1,
      });
    }
  };

  // Teacher section
  const handleClick = (teacher, index) => {
    setSelectedTeacher({ ...teacher, index });
  };

  const handlePrevious = () => {
    if (selectedTeacher.index > 0) {
      setSelectedTeacher({
        ...teachers[selectedTeacher.index - 1],
        index: selectedTeacher.index - 1,
      });
    }
  };
  const handleNext = () => {
    if (selectedTeacher.index < 5) {
      setSelectedTeacher({
        ...teachers[selectedTeacher.index + 1],
        index: selectedTeacher.index + 1,
      });
    }
  };

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
              <div className="md:w-[634.48px] h-[398.07px] bg-[#C4C4C4] bg-opacity-70 rounded-2xl lg:mr-10 xl:mr-[65px]">
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
              <div className="relative">
                <img className="p-12 w-[424px]" src={Ellipse} alt="" />
                <img
                  className="absolute left-[0px] bottom-[0px] w-[370px]"
                  src={Ellipse27}
                  alt=""
                />
                {selectedSchedule.day !== 1 ? (
                  <img
                    onClick={() => handleScheduleClick(0)}
                    className="absolute left-[-7px] bottom-[215px] cursor-pointer"
                    src={Ellipse26}
                    alt="1"
                  />
                ) : (
                  <p className="absolute left-[-20px] bottom-[210px] gradientBackground w-[50px] h-[50px] rounded-full text-white flex items-center justify-center">
                    {selectedSchedule.day}
                  </p>
                )}
                {selectedSchedule.day !== 2 ? (
                  <img
                    onClick={() => handleScheduleClick(1)}
                    className="absolute right-[402px] bottom-[135px] cursor-pointer"
                    src={Ellipse24}
                    alt="2"
                  />
                ) : (
                  <p className="absolute right-[388px] bottom-[125px] gradientBackground w-[50px] h-[50px] rounded-full text-white flex items-center justify-center">
                    {selectedSchedule.day}
                  </p>
                )}
                {selectedSchedule.day !== 3 ? (
                  <img
                    onClick={() => handleScheduleClick(2)}
                    className="absolute right-[365px] bottom-[70px] cursor-pointer"
                    src={Ellipse25}
                    alt="3"
                  />
                ) : (
                  <p className="absolute right-[345px] bottom-[50px] gradientBackground w-[50px] h-[50px] rounded-full text-white flex items-center justify-center">
                    {selectedSchedule.day}
                  </p>
                )}
                {selectedSchedule.day !== 4 ? (
                  <img
                    onClick={() => handleScheduleClick(3)}
                    className="absolute right-[300px] bottom-[17px] cursor-pointer"
                    src={Ellipse26}
                    alt="4"
                  />
                ) : (
                  <p className="absolute right-[280px] bottom-[0px] gradientBackground w-[50px] h-[50px] rounded-full text-white flex items-center justify-center">
                    {selectedSchedule.day}
                  </p>
                )}
                {selectedSchedule.day !== 5 ? (
                  <img
                    onClick={() => handleScheduleClick(4)}
                    className="absolute right-[209px] bottom-[-8px] cursor-pointer"
                    src={Ellipse25}
                    alt="5"
                  />
                ) : (
                  <p className="absolute right-[195px] bottom-[-23px] gradientBackground w-[50px] h-[50px] rounded-full text-white flex items-center justify-center">
                    {selectedSchedule.day}
                  </p>
                )}
                {selectedSchedule.day !== 6 ? (
                  <img
                    onClick={() => handleScheduleClick(5)}
                    className="absolute right-[115px] bottom-[10px] cursor-pointer"
                    src={Ellipse24}
                    alt="6"
                  />
                ) : (
                  <p className="absolute right-[100px] bottom-[-10px] gradientBackground w-[50px] h-[50px] rounded-full text-white flex items-center justify-center">
                    {selectedSchedule.day}
                  </p>
                )}
                {selectedSchedule.day !== 7 ? (
                  <img
                    onClick={() => handleScheduleClick(6)}
                    className="absolute right-[45px] bottom-[60px] cursor-pointer"
                    src={Ellipse26}
                    alt="7"
                  />
                ) : (
                  <p className="absolute right-[30px] bottom-[40px] gradientBackground w-[50px] h-[50px] rounded-full text-white flex items-center justify-center">
                    {selectedSchedule.day}
                  </p>
                )}
              </div>
            </div>
            <div className="lg:min-w-[475.67px] lg:ml-12">
              <div className="flex justify-between items-center mb-[38.37px]">
                <h1 className="font-light text-[32.44px] leading-[38.93px]">
                  {selectedSchedule.title}
                </h1>

                {/* Previous and Next button */}
                <div className="flex space-x-[19.34px]">
                  <img
                    onClick={handlePreviousSchedule}
                    className={`m-[11px]  ${
                      selectedSchedule.index === 0
                        ? "cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                    src={Previous}
                    alt=""
                  />
                  <img
                    onClick={handleNextSchedule}
                    className={`m-[11px]  ${
                      selectedSchedule.index === 6
                        ? "cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                    src={Next}
                    alt=""
                  />
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
                {selectedSchedule.description}
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
            <div className="mb-20 lg:mb-0 space-y-[52px]">
              {teachers.map((teacher, index) => (
                <div
                  key={teacher.id}
                  onClick={() => handleClick(teacher, index)}
                  className="flex items-center mb-[52px] cursor-pointer"
                >
                  <p
                    className={`w-[16px] h-[15.9px] rounded-full mr-[26px] ${
                      teacher.id === selectedTeacher.id
                        ? "bg-[#F64C3B]"
                        : "bg-white"
                    }`}
                  ></p>
                  <p
                    className={`font-light ${
                      teacher.id === selectedTeacher.id
                        ? "text-[28.83px] leading-[34.6px] text-[#FE5266]"
                        : "text-[22.78px] leading-[27.34px] text-[#8C8C8C]"
                    }`}
                  >
                    {teacher.name}
                  </p>
                </div>
              ))}
            </div>
            <div className="relative md:grid grid-cols-3 items-center md:w-[739px] md:h-[423px] rounded-2xl bg-[#C4C4C4] bg-opacity-30 mx-auto lg:mx-0">
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
                  {selectedTeacher.name}
                </h1>
              </div>
              <div>
                <p className="md:w-[465px] font-light text-4 leading-[25.04px] text-[#4D4D4D] px-8 pb-8 mt-44 md:mt-0 md:pb-0 md:px-0">
                  {selectedTeacher.description}
                </p>
              </div>
            </div>
          </div>

          {/* Previous and Next button */}
          <div className="flex justify-end mt-[23px] space-x-[19.34px]">
            <img
              onClick={handlePrevious}
              className={`m-[11px] cursor-pointer ${
                selectedTeacher.index === 0
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              }`}
              src={Previous}
              alt=""
            />
            <img
              onClick={handleNext}
              className={`m-[11px] cursor-pointer ${
                selectedTeacher.index === 5
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              }`}
              src={Next}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
