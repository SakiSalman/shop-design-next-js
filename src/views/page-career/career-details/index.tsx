"use client";
import React, { Fragment, useState } from "react";
import ButtonPrimary from "@/components/butttons/ButtonPrimary";
import Icon from "@/components/logoicon/logoIcon";
import { Modal } from "@/components/Modals/Modal";
import CareerApplyForm from "./CareerApplyForm";

type Props = {};

const CareerDetailsUI = (props: Props) => {
  // modal state
  const [modalOpen, setModalOpen] = useState(false);

  // handle close Modal
  const handlerClose = () => {
    alert();
    setModalOpen(false);
  };
  return (
    <Fragment>
      <div className="_container py-10">
        <div>
          <div
            className={
              "lg:p-3 rounded-md flex gap-3 justify-between items-center lg:ml-3 mb-8 lg:mb-6"
            }
          >
            <div className="flex items-center gap-4 md:gap-8">
              <Icon width="w-16" height="h-16" iw="50" ih="50" />
              <div className="mb-">
                <h3 className="text-base md:text-3xl font-medium text-sc">
                  UI UX Designer & Product Designer
                </h3>
                <p className="text-sc text-xl font-medium">Hymanlife</p>
              </div>
            </div>
          </div>
          {/* description */}
          <div className="mb-7 lg:mb-10">
            <h5 className="text-2xl font-medium mb-2">Job Context :</h5>
            <p className="text-xs leading-relaxed lg:text-base">
              Looking for a skilled Full Stack WordPress Developer to design and
              implement attractive and functional websites for our clients.
            </p>
          </div>
          <div className="mb-7 lg:mb-10">
            <h5 className="text-2xl font-medium mb-2">Job Responsibilities:</h5>
            <ul className="text-xs leading-relaxed lg:text-base list-disc ml-6 lg:ml-8">
              <li>Develop new Themes & Plugins</li>
              <li>Design, implement and manage websites using WordPress</li>
              <li>
                Create Mockups & Wireframes for pre-production demonstration and
                product design purposes.
              </li>
              <li>Troubleshooting content issues.</li>
              <li>Conducting WordPress training with the client.</li>
              <li>Monitoring the performance of the live website.</li>
            </ul>
          </div>
          <div className="mb-7 lg:mb-10">
            <h5 className="text-2xl font-medium mb-2">
              Educational Requirements:
            </h5>
            <ul className="text-xs leading-relaxed lg:text-base list-disc ml-6 lg:ml-8">
              <li>
                B.Sc in Computer Science and Engineering from any reputed public
                or private university.
              </li>
            </ul>
          </div>
          <div className="mb-7 lg:mb-10">
            <h5 className="text-2xl font-medium mb-2">
              Additional Requirements:
            </h5>
            <ul className="text-xs leading-relaxed lg:text-base list-disc ml-6 lg:ml-8">
              <li>1-3 years of experience in the related field.</li>
              <li>
                Professional experience with WordPress Plugin & Theme developmen
              </li>
              <li>
                Must have a theme published on ThemeForest and still live.
              </li>
              <li>
                Must have strong knowledge of Object-Oriented PHP Programming
                (OOP)
              </li>
              <li>
                Must have strong knowledge of Object-Oriented PHP Programming
                (OOP)
              </li>
              <li>
                Must have strong knowledge of Object-Oriented PHP Programming
                (OOP)
              </li>
              <li>
                Must have strong knowledge of Object-Oriented PHP Programming
                (OOP)
              </li>
            </ul>
          </div>
          <div className="mb-7 lg:mb-10">
            <h5 className="text-2xl font-medium mb-2">Workplace:</h5>
            <ul className="text-xs leading-relaxed lg:text-base list-disc ml-6 lg:ml-8">
              <li>On-site</li>
            </ul>
          </div>
          <div className="mb-7 lg:mb-10">
            <h5 className="text-2xl font-medium  mb-2">Salary:</h5>
            <ul className="text-xs leading-relaxed lg:text-base list-disc ml-6 lg:ml-8">
              <li>50k- 85k ( Based on Exprience)</li>
            </ul>
          </div>
          <div className="mb-7 lg:mb-10">
            <h5 className="text-2xl font-medium mb-2">
              The Application Process:
            </h5>
            <ul className="text-xs leading-relaxed lg:text-base list-disc ml-6 lg:ml-8">
              <li>Telephone Round.</li>
              <li>Interview with the Tech Team & Talent Acquisition Team.</li>
              <li>An assignment/test to complete (if required).</li>
              <li>Matchmaking session 1.</li>
              <li>Job offer.</li>
            </ul>
          </div>
          <div className="">
            <ButtonPrimary primary onClick={() => setModalOpen(true)}>
              Apply Now
            </ButtonPrimary>
          </div>
        </div>
        <Modal
          open={modalOpen}
          handleClose={() => setModalOpen(false)}
          clses="lg:w-[60%] rounded-[15px]"
        >
          <CareerApplyForm />
        </Modal>
      </div>
    </Fragment>
  );
};

export default CareerDetailsUI;
