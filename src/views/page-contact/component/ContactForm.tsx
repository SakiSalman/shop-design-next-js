"use client";
import React from "react";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import ButtonPrimary from "@/components/butttons/ButtonPrimary";

const ContactForm = () => {
  const [phone, setPhone] = useState("");
  return (
    <div>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-4 md:mt-3">
          <div className="flex flex-col">
            <label className="text-sm md:text-base mb-2">First name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="px-3 py-3 border focus:outline-none rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm md:text-base mb-2">Last name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="px-3 py-3 border focus:outline-none rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col mb-4 mt-6">
          <label className="text-sm md:text-base mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="px-3 py-3 border focus:outline-none rounded-md"
          />
        </div>
        <div className="flex flex-col mb-4 mt-6">
          <label className="text-sm md:text-base mb-2">Phone number</label>
          <PhoneInput
            className=""
            defaultCountry="us"
            value={phone}
            onChange={phone => setPhone(phone)}
          />
        </div>
        <div className="flex flex-col mb-5 md:mb-8 mt-6">
          <label className="text-sm md:text-base mb-2">Message</label>
          <textarea
            name="Write a message"
            rows={6}
            cols={40}
            className={`w-full px-3 py-3 border focus:outline-none rounded-md`}
            placeholder="Type Your Message"
          />
        </div>
        <ButtonPrimary primary tw={"w-full flex justify-center py-4 md:py-3"}>
          Send Message
        </ButtonPrimary>
      </form>
    </div>
  );
};

export default ContactForm;
