import React, { Fragment } from 'react'
import ContactForm from './component/ContactForm'
import Cards from './component/cards'

const Contactui = () => {
  return (
    <Fragment>
    <div className='_container'>
        <div className='mt-6 mb-12 text-center'>
            <h2 className="md:text-[36px] font-[650] md:leading-[43.2px] text-[#333] text-[25px] leading-[30px]">
                Do you have any query, contact us
            </h2>
            <p className="text-xs md:text-base font-medium text-[#333] mt-3">
            Lorem ipsum dolor sit amet consectetur. Euismod purus phasellus vulputate
            </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
            <div className='px-0 md:px-3 order-last md:order-first'>
                <p className='text-xl md:text-[36px] mb-2 md:mb-5 font-[650]'>Contact Us</p>
                <p className='text-xs md:text-2xl mb-8'>our friendly team  would love to hear from <br/>you!</p>
                <ContactForm/>
            </div>
            <div>
                <iframe
                className="w-full h-[460px] md:h-[720px] rounded-sm mb-6 md:mb-12"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114205.44485114!2d-85.31051776710208!3d40.33754850351876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8836e97ab54d8ec1%3A0xe5cd64399c9fd916!2sOhio%2C%20USA!5e0!3m2!1sen!2sbd!4v1686816428318!5m2!1sen!2sbd"
                ></iframe>
            </div>
        </div>
        <div className='mb-6 lg:mb-0'>
            <Cards/>
        </div>
    </div>
    </Fragment>
  )
}

export default Contactui