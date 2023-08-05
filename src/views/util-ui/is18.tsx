'use client'
import Image from "next/image";
import dynamic from 'next/dynamic';
import React from 'react'
const Modal = dynamic(() => import("@/components/Modals/Modal").then(x => x.Modal), {
    ssr: false,
});

type Props = {}

const Is18 = (props: Props) => {
    const [is18, setIs18] = React.useState(true)

    return (
        <Modal
            open={is18}
            handleClose={() => setIs18(false)}
            clses="w-[90%] mx-auto md:w-[936px]"
        >
            <div className=" md:p-12 flex justify-center items-center flex-col p-5">
                <div className=" md:w-[129px] md:h-[100px] w-[47px] h-[36px] relative">
                    <Image
                        src="/images/logo.png"
                        fill
                        alt=""
                        className=" object-contain"
                    />
                </div>
                <p className="md:text-2xl font-medium text-center my-5">
                    You must <span className=" font-[650] ">21</span> years of age or
                    older to enter this site
                </p>
                <div className="flex md:gap-x-5 gap-x-3 w-full">
                    <button
                        onClick={() => setIs18(false)}
                        className="w-full rounded-lg py-4 md:py-5 tracking-wider text-xs md:text-[16px] md:font-semibold uppercase"
                        style={{
                            backgroundColor: "#f5a700",
                            color: "#333333",
                        }}
                    >
                        I am over 21
                    </button>
                    <button
                        onClick={() => setIs18(false)}
                        className="w-full rounded-lg py-4 md:py-5 tracking-wider text-xs md:text-[16px] md:font-semibold uppercase"
                        style={{
                            backgroundColor: "#333333",
                            color: "#ffffff"
                        }}
                    >
                        I am under 21
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default Is18