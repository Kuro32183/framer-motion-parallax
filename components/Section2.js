import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IconsStore from './IconsStore';
import { useInView } from 'react-intersection-observer'

export default function Section2() {
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
        <div className="md:container mx-auto py-12">
            <div className="flex flex-row flex-wrap py-4">
                <div className="flex flex-col w-full mb-4 py-4 md:w-1/2">
                    <h2 className="text-black text-2xl md:text-4xl py-4 px-4 font-bold">What is Lorem Ipsum?</h2>
                    <p className="mt-2 text-base text-gray-txt py-2 px-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p className="mt-2 text-base text-gray-txt py-2 px-4">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <p className="mt-2 text-base text-gray-txt py-2 px-4">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p className="mt-2 text-base text-gray-txt py-2 px-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p className="mt-2 text-base text-gray-txt py-2 px-4">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <div className="block md:hidden px-4">
                        <IconsStore class_add="" background={'bg-app'} />
                    </div>
                </div>
                <div ref={ref} className="flex flex-col w-full h-full py-4 justify-start items-center md:w-1/2 lg:mb-4">
                    <AnimatePresence>
                        {viewImage && <picture>
                            <source srcSet={"/images/phone2.webp"} type="image/webp" />
                            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} src="/images/phone2.png" alt="" className="object-contain px-4" style={{ width: 400, height: 550 }} />
                        </picture>
                        }
                    </AnimatePresence>
                </div>
            </div>
        </div>
    </div>);
}