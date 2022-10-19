import React from 'react';
import { motion, useViewportScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import Function1 from './Functions/Function1';
import Function2 from './Functions/Function2';
import Function3 from './Functions/Function3';
import Function4 from './Functions/Function4';
import Function5 from './Functions/Function5';


export function FunctionsDesktopHide() {
    return <React.Fragment />
}

export function FunctionsDesktop() {
    const [ref, inView] = useInView({
        threshold: 0.4
    });

    const { scrollY } = useViewportScroll();
    const screenHeight = 2550;
    const opacity0 = useTransform(scrollY, [screenHeight, (screenHeight + 500)], [1, 0]);
    const opacity1 = useTransform(scrollY, [screenHeight, (screenHeight + 500), (screenHeight + 750), (screenHeight + 1000)], [0, 1, 1, 0]);
    const opacity2 = useTransform(scrollY, [(screenHeight + 500), (screenHeight + 750), (screenHeight + 1250), (screenHeight + 1500)], [0, 1, 1, 0]);
    const opacity3 = useTransform(scrollY, [(screenHeight + 750), (screenHeight + 1000), (screenHeight + 1750), (screenHeight + 2000)], [0, 1, 1, 0]);
    const opacity4 = useTransform(scrollY, [(screenHeight + 1000), (screenHeight + 1250)], [0, 1]);

    const yTrans1_1 = useTransform(scrollY, [screenHeight, (screenHeight + 500)], [2000, 0]);
    const yTrans1_2 = useTransform(scrollY, [screenHeight, (screenHeight + 500)], [-2000, 0]);

    const yTrans2_1 = useTransform(scrollY, [(screenHeight + 500), (screenHeight + 1000)], [-2000, 0]);
    const yTrans2_2 = useTransform(scrollY, [(screenHeight + 500), (screenHeight + 1000)], [2000, 0]);

    const yTrans3_1 = useTransform(scrollY, [(screenHeight + 1000), (screenHeight + 1500)], [2000, 0]);
    const yTrans3_2 = useTransform(scrollY, [(screenHeight + 1000), (screenHeight + 1500)], [-2000, 0]);

    const yTrans4_1 = useTransform(scrollY, [(screenHeight + 1500), (screenHeight + 2000)], [-2000, 0]);
    const yTrans4_2 = useTransform(scrollY, [(screenHeight + 1500), (screenHeight + 2000)], [2000, 0]);

    return <div className="bg-white">
        <div className="relative w-full" style={{ height: 3400 }}>
            <div className="bg-white sticky w-screen h-screen top-0">
                {/* Function1 Text */}
                <motion.div
                    initial={{ opacity: 1 }}
                    style={{ opacity: opacity0, zIndex: 1 }}
                    className="absolute top-0 left-0 w-1/2 h-screen">
                    <div className="flex flex-row h-full justify-center items-center">
                        <div className="px-20 flex flex-col">
                            <Function1 />
                        </div>
                    </div>
                </motion.div>
                {/* Function1 Image */}
                <motion.div
                    initial={{ opacity: 1 }}
                    style={{ opacity: opacity0, zIndex: 1 }}
                    className="absolute top-0 right-0 w-1/2 h-screen">
                    <div className="flex flex-row h-full justify-center items-center">
                        <div ref={ref} className="px-20 flex flex-col">
                            <AnimatePresence>
                                {inView &&
                                    <picture>
                                        <source srcSet={"/images/phone.webp"} type="image/webp" />
                                        <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} src="/images/phone.png" alt="" className="object-contain" style={{ width: 400, height: 550 }} />
                                    </picture>
                                }
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>


                 {/* Function2 Text */}
                <motion.div
                    initial={{ y: -2000 }}
                    style={{ y: yTrans1_1, opacity: opacity1, zIndex: 2 }}
                    className="absolute top-0 left-0 w-1/2 h-screen">
                    <div className="hero-background flex flex-row h-full justify-center items-center">
                        <div className="px-20">
                            {inView &&
                                <picture>
                                    <source srcSet={"/images/phone2.webp"} type="image/webp" />
                                    <img src="/images/phone2.png" alt="" className="object-contain" style={{ width: 400, height: 550 }} />
                                </picture>
                            }
                        </div>
                    </div>
                </motion.div>
                 {/* Function2 Image */}
                <motion.div
                    initial={{ y: 2000, opacity: 0 }}
                    style={{ y: yTrans1_2, opacity: opacity1, zIndex: 2 }}
                    className="absolute top-0 right-0 w-1/2 h-screen">
                    <div className="bg-white flex flex-row h-full justify-center items-center">
                        <div className="px-20">
                            <Function2 />
                        </div>
                    </div>
                </motion.div>

                {/* Function3 Text */}
                <motion.div
                    initial={{ y: 2000 }}
                    style={{ y: yTrans2_1, opacity: opacity2, zIndex: 3 }}
                    className="absolute top-0 left-0 w-1/2 h-screen">
                    <div className="bg-white flex flex-row h-full justify-center items-center">
                        <div className="px-20">
                            {inView &&
                                <picture>
                                    <source srcSet={"/images/phone.webp"} type="image/webp" />
                                    <img src="/images/phone.png" alt="" className="object-contain" style={{ width: 400, height: 550 }} />
                                </picture>
                            }
                        </div>
                    </div>
                </motion.div>
                 {/* Function3 Image */}
                <motion.div
                    initial={{ y: -2000, opacity: 0 }}
                    style={{ y: yTrans2_2, opacity: opacity2, zIndex: 3 }}
                    className="absolute top-0 right-0 w-1/2 h-screen">
                    <div className="hero-background flex flex-row h-full justify-center items-center">
                        <div className="px-20">
                            <Function3 />
                        </div>
                    </div>
                </motion.div>

                  {/* Function4 Text */}
                <motion.div
                    initial={{ y: -2000 }}
                    style={{ y: yTrans3_1, opacity: opacity3, zIndex: 4 }}
                    className="absolute top-0 left-0 w-1/2 h-screen">
                    <div className="hero-background flex flex-row h-full justify-center items-center">
                        <div className="px-20">
                            {inView && <picture>
                                <source srcSet={"/images/phone2.webp"} type="image/webp" />
                                <img src="/images/phone2.png" alt="" className="object-contain" style={{ width: 400, height: 550 }} />
                            </picture>
                            }
                        </div>
                    </div>
                </motion.div>
                 {/* Function4 Image */}
                <motion.div
                    initial={{ y: 2000, opacity: 0 }}
                    style={{ y: yTrans3_2, opacity: opacity3, zIndex: 4 }}
                    className="absolute top-0 right-0 w-1/2 h-screen">
                    <div className="bg-white flex flex-row h-full justify-center items-center">
                        <div className="px-20">
                            <Function4 />
                        </div>
                    </div>
                </motion.div>

                 {/* Function5 Text */}
                <motion.div
                    initial={{ y: 2000 }}
                    style={{ y: yTrans4_1, opacity: opacity4, zIndex: 4 }}
                    className="absolute top-0 left-0 w-1/2 h-screen">
                    <div className="bg-white flex flex-row h-full justify-center items-center">
                        <div className="px-20">
                            {inView &&
                                <picture>
                                    <source srcSet={"/images/phone.webp"} type="image/webp" />
                                    <img src="/images/phone.png" alt="" className="object-contain" style={{ width: 400, height: 550 }} />
                                </picture>
                            }
                        </div>
                    </div>
                </motion.div>
                  {/* Function4 Image */}
                <motion.div
                    initial={{ y: -2000, opacity: 0 }}
                    style={{ y: yTrans4_2, opacity: opacity4, zIndex: 4 }}
                    className="absolute top-0 right-0 w-1/2 h-screen">
                    <div className="hero-background flex flex-row h-full justify-center items-center">
                        <div className="px-20">
                            <Function5 />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
}