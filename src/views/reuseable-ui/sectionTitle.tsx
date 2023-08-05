import { motion } from "framer-motion";

export const SectionTitle = (p: any) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className=" flex justify-between items-center mb-5">
            <div>
                <p className="text-[#F5A800] md:text-base font-[500] text-xs">
                    {p.title}
                </p>
                <h3 className="text-[#333333] font-[650] md:text-[36px] text-[25px]">
                    {p.subtitle}
                </h3>
            </div>
            {p.children}
        </motion.div>
    );
}