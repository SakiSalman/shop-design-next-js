import ButtonPrimary from "@/components/butttons/ButtonPrimary";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

type Props = {};

const CareerApplyForm = (p: Props) => {
  return (
    <div className="bg-white p-4 relative">
      <div className="mt-8">
        <h6 className="text-center text-xs text-[#212322]">Job Application</h6>
        <h3 className="text-center text-2xl text-[#212322] font-medium pb-2">
          Start Your Career Today
        </h3>
        <p className="text-center text-xs">
          Please fill in your information and send it to the employer.
        </p>
      </div>
      <div className="lg:w-[480px] mx-auto my-10">
        <div className="mb-4">
          <label
            htmlFor=""
            className="text-base lg:text-xl font-medium block mb-3"
          >
            Job Title
          </label>
          <select
            name=""
            id=""
            className="w-full border py-3 px-4 rounded-full text-base focus:outline-none"
          >
            <option className="text-base" value="">
              Ux/Ui Design
            </option>
            <option className="text-base" value="">
              Web Design
            </option>
            <option className="text-base" value="">
              Web Development
            </option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor=""
            className="text-base lg:text-xl font-medium block mb-3"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name=""
            id=""
            className="w-full border py-3 px-4 rounded-full text-base"
            placeholder="John Smith"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor=""
            className="text-base lg:text-xl font-medium block mb-3"
          >
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name=""
            id=""
            className="w-full border py-3 px-4 rounded-full text-base"
            placeholder="you@example.com"
          />
        </div>
        <div className="mb-10">
          <label
            htmlFor=""
            className="text-base lg:text-xl font-medium block mb-3"
          >
            Contract Number<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name=""
            id=""
            className="w-full border py-3 px-4 rounded-full text-base"
            placeholder="+88012345689"
          />
        </div>
        <div className="mb-4 ">
          <label
            htmlFor=""
            className="text-base lg:text-xl font-medium block mb-3"
          >
            Cover letter
          </label>
          <textarea
            name=""
            cols={50}
            rows={10}
            placeholder="Write here"
            className="w-full border py-3 px-4 rounded-lg text-base focus:outline-none"
          ></textarea>
        </div>
        <div className="mb-4 pr-3">
          <label
            htmlFor=""
            className="text-base lg:text-xl font-medium block mb-5"
          >
            Resume
          </label>

          <label
            htmlFor="uploadResume"
            className="border border-gray-900 rounded-full px-7 py-2 hover:bg-pc transition-all duration-500 cursor-pointer hover:border-gray-50 hover:text-white"
          >
            Choose File
          </label>
          <input type="file" name="" id="uploadResume" hidden />
          <p className="mt-4 text-sc text-xs">
            Upload your resume file.{" "}
            <span className="text-[#035F74]">File types : .pdf</span> and Max
            file size : 2mb
          </p>
        </div>
        <div className="mt-8">
          <ButtonPrimary primary tw={"rounded-full hover:text-white"}>
            Submit
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default CareerApplyForm;
