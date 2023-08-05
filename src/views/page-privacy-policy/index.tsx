import React, { Fragment } from "react";

type Props = {};

const PrivacyPolicyUI = (props: Props) => {
  return (
    <Fragment>
      <div className="_container py-10">
        <div>
          <h1 className="text-2xl md:text-4xl font-medium text-center mb-6 lg:mb-10 text-[#333]">
            Privacy Policy
          </h1>
        </div>
        <div className="mb-5 lg:mb-8">
          <h5 className="text-2xl font-medium mb-2 text-left text-[#333]">
            Collecting Personal Information
          </h5>
          <p className="text-xs lg:text-base leading-loose text-[#606060]">
            When you visit the Site, we collect certain information about your
            device, your interaction with the Site, and information necessary to
            process your purchases. We may also collect additional information
            if you contact us for customer support. In this Privacy Policy, we
            refer to any information that can uniquely identify an individual
            (including the information below) as “Personal Information”. See the
            list below for more information about what Personal Information we
            collect and why.
          </p>
        </div>
        <div className="mb-5 lg:mb-8">
          <h5 className="text-2xl font-medium mb-2 text-left text-[#333]">
            Job Responsibilities:
          </h5>
          <ul className="text-xs leading-relaxed lg:text-base list-disc ml-6 lg:ml-8 text-[#606060]">
            <li>
              Examples of Personal Information collected:version of web browser,
              IP address, time zone, cookie information, what sites or products
              you view, search terms, and how you interact with the Site.
            </li>
            <li>
              Purpose of collection: to load the Site accurately for you, and to
              perform analytics on Site usage to optimize our Site.
            </li>
            <li>
              Source of collection:Collected automatically when you access our
              Site using cookies, log files, web beacons, tags, or pixels.
            </li>
            <li>
              Disclosure for a business purpose: shared with our processor
              Shopify.
            </li>
          </ul>
        </div>
        <div className="mb-5 lg:mb-8">
          <h5 className="text-2xl font-medium mb-2 text-left capitalize text-[#333]">
            Order Information
          </h5>
          <ul className="text-xs leading-relaxed lg:text-base list-disc ml-6 lg:ml-8 text-[#606060]">
            <li>
              {" "}
              Examples of Personal Information collected: name, billing address,
              shipping address, payment information (including credit card
              numbers), email address, and phone number.
            </li>
            <li>
              Purpose of collection: to provide products or services to you to
              fulfill our contract, to process your payment information, arrange
              for shipping, and provide you with invoices and/or order
              confirmations, communicate with you, screen our orders for
              potential risk or fraud, and when in line with the preferences you
              have shared with us, provide you with information or advertising
              relating to our products or services.
            </li>
            <li>Source of collection: collected from you.</li>
            <li>
              Disclosure for a business purpose: shared with our processor
              Shopify.{" "}
            </li>
          </ul>
        </div>
        <div className="mb-5 lg:mb-8">
          <h5 className="text-2xl font-medium mb-2 text-left capitalize text-[#333]">
            Customer Support Information
          </h5>
          <ul className="text-xs leading-relaxed lg:text-base list-disc ml-6 lg:ml-8 text-[#606060]">
            <li>
              Examples of Personal Information collected: name, billing address,
              shipping address, payment information (including credit card
              numbers), email address, and phone number.
            </li>
            <li>Purpose of collection: to provide customer support.</li>
            <li>Source of collection: collected from you.</li>
            <li>
              Disclosure for a business purpose: shared with our processor
              Shopify.
            </li>
          </ul>
        </div>
        <div className="mb-5 lg:mb-8">
          <h5 className="text-2xl font-medium mb-2 text-left capitalize text-[#000]">
            DiscSharing Personal Information
          </h5>
          <p className="text-xs lg:text-base leading-loose text-[#606060]">
            We share your Personal Information with service providers to help us
            provide our services and fulfill our contracts with you, as
            described above.
          </p>
          <p className="text-xs lg:text-base leading-loose text-[#606060]">
            For example
          </p>
          <ul className="text-xs leading-relaxed lg:text-base list-disc ml-6 lg:ml-8 text-[#606060]">
            <li>
              We use Shopify to power our online store. You can read more about
              how Shopify uses your Personal Information here:
              https://www.shopify.com/legal/privacy.
            </li>
            <li>
              We may share your Personal Information to comply with applicable
              laws and regulations, to respond to a subpoena, search warrant or
              other lawful request for information we receive, or to otherwise
              protect our rights.
            </li>
          </ul>
        </div>
        <div className="mb-5 lg:mb-8">
          <h5 className="text-2xl font-medium mb-2 text-left capitalize text-[#333]">
            Section 2 - General Conditions
          </h5>
          <p className="text-xs lg:text-base leading-loose text-[#606060]">
            You understand that your content (not including credit card
            information), may be transferred unencrypted and involve (a)
            transmissions over various networks; and (b) changes to conform and
            adapt to technical requirements of connecting networks or devices.
            Credit card information is always encrypted during transfer over
            networks. You agree not to reproduce, duplicate, copy, sell, resell
            or exploit any portion of the Service, use of the Service, or access
            to the Service or any contact on the website through which the
            service is provided, without express written permission by us. The
            headings used in this agreement are included for convenience only
            and will not limit or otherwise affect these Terms.
          </p>
        </div>
        <div className="mb-5 lg:mb-8">
          <h5 className="text-2xl font-medium mb-2 text-left capitalize text-[#333]">
            Section 2 - General Conditions
          </h5>
          <p className="text-xs lg:text-base leading-loose text-[#606060]">
            You understand that your content (not including credit card
            information), may be transferred unencrypted and involve (a)
            transmissions over various networks; and (b) changes to conform and
            adapt to technical requirements of connecting networks or devices.
            Credit card information is always encrypted during transfer over
            networks. You agree not to reproduce, duplicate, copy, sell, resell
            or exploit any portion of the Service, use of the Service, or access
            to the Service or any contact on the website through which the
            service is provided, without express written permission by us. The
            headings used in this agreement are included for convenience only
            and will not limit or otherwise affect these Terms.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default PrivacyPolicyUI;
