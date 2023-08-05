"use client";
import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

export const Modal = (props: ModalProps) => {
  const { open, children, handleClose, clses } = props;

  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (e.target.classList.contains("modal")) {
        handleClose();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } fixed top-0 bottom-0 left-0 right-0 z-50 grid items-center modal bg-[rgba(0,0,0,0.7)]`}
    >
      <div
        className={`bg-white overflow-auto mx-auto rounded w-11/12 lg:w-[500px] max-h-[90vh] relative ${clses}`}
      >
        <span
          className="absolute top-4 right-5 text-xl lg:text-2xl z-10 ml-auto cursor-pointer"
          onClick={handleClose}
        >
          <AiOutlineClose />
        </span>

        {/* <AiOutlineClose
          size={25}
          className="text-gray-500 cursor-pointer border border-dotted border-gray-400 absolute right-4 top-2"
          onClick={handleClose}
        /> */}
        {children}
      </div>
    </div>
  );
};

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  clses?: string;
}
