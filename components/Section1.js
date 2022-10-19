import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IconsStore from './IconsStore';
import { useInView } from 'react-intersection-observer'


export default function Section1() {
    const [viewImage, setViewImage] = React.useState(false);
    const [ref, inView] = useInView({
        threshold: 0.2
    });

    React.useEffect(() => {
        if (inView && !viewImage) {
            setViewImage(true);
        }
    }, [inView]);

    return (<div className="bg-white">
        <div className="container mx-auto py-12">
            <div className="flex flex-col justify-center items-center mb-2">
                <h2 className="text-app text-2xl md:text-4xl text-center font-bold">Where does it come from?</h2>
                <h2 className="text-2xl md:text-3xl text-yellow-900 italic pt-3 text-center px-4 font-bold">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h2>
            </div>
            <div className="flex flex-row flex-wrap py-4">
                <div ref={ref} className="flex w-full order-2 py-4 justify-center items-center md:w-1/2 md:order-1 md:mb-4">
                    <AnimatePresence>
                        {viewImage && <picture>
                            <source srcSet={"/images/phone.webp"} type="image/webp" />
                            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} src="/images/phone.png" alt="" className="px-4 object-contain" style={{ width: 400, height: 550 }} />
                        </picture>}

                    </AnimatePresence>
                </div>
                <div className="flex flex-col w-full order-1 mb-4 py-4 md:w-1/2 lg:order-2">
                    <h2 className="text-black text-2xl md:text-4xl py-4 px-4 font-bold">There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...</h2>
                    <p className="mt-2 text-base text-gray-txt py-2 px-4">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    <p className="mt-2 text-base text-gray-txt py-2 px-4">Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                    <p className="mt-2 text-base text-gray-txt py-2 px-4">Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</p>
                    <p className="mt-2 text-base text-gray-txt py-2 px-4">The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    <p className="mt-2 text-base text-gray-txt py-2 px-4">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    <div className="px-4">
                        <IconsStore class_add="" background={'bg-app'} />
                    </div>
                </div>
            </div>
        </div>
    </div>);
}