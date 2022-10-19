import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import IconsStore from './IconsStore';

export function HeroDesktopHide() {
    return <React.Fragment />
}

export function HeroDesktop() {
    const { scrollY } = useViewportScroll();

    // First View
    const scale_hero = useTransform(scrollY, [0, 300], [1, 0.75]);
    const borderRadius = useTransform(scrollY, [0, 300], [0, 30]);
    const opacity_content = useTransform(scrollY, [400, 600], [1, 0]);


    const opacity_overlay = useTransform(scrollY, [400, 600], [0, 1]);
    const opacity_image = useTransform(scrollY, [500, 700], [0, 1]);
    const rotate_image = useTransform(scrollY, [900, 1150], [0, 90]);
    const scale_image = useTransform(scrollY, [1150, 1450], [1, 2]);
    const opacity_image_lr = useTransform(scrollY, [1150, 1350], [1, 0]);

    const xFirstImage = useTransform(scrollY, [600, 750], [0, -250]);
    const heightImage = useTransform(scrollY, [500, 600], [600, 500]);

    const xSecondImage = useTransform(scrollY, [600, 750], [0, 250]);

    const refContainer = React.useRef(null);
    const refOverlay = React.useRef(null);
    const refImage = React.useRef(null);
    const refLogo = React.useRef(null);

    React.useEffect(() => {
        if (refOverlay && refImage && refOverlay.current && refImage.current) {
            scrollY.onChange((e) => {
                if (refImage && refImage.current) {
                    if (e < 1000) {
                        refImage.current.style.display = 'initial';
                        refLogo.current.style.display = 'none';
                    } else if (e >= 1000) {
                        refImage.current.style.display = 'none';
                        refLogo.current.style.display = 'initial';
                    }
                }
            });
        }
    }, [])

    return (
        <div className="hero-background">

            <div className="relative w-full" style={{ height: 2400 }}>
                <div className="absolute w-full h-full top-0 left-0 z-10" style={{ height: 2400 }}>
                    <div className="sticky top-0 pt-20">
                        <motion.div
                            style={{
                                opacity: opacity_content,
                                scale: scale_hero,
                                borderRadius: borderRadius,
                                zIndex: 1,
                                height: '100vh',
                            }}
                            ref={refContainer}
                            className="absolute w-full h-full top-0 left-0 shadow-xl bg-app">
                            <div className="container mx-auto w-full h-full flex justify-center items-center">
                                <div className="flex flex-col h-full w-full lg:w-2/3 justify-center items-center">
                                    <div className="flex py-20 justify-center items-center">
                                        <img
                                            src={"/images/logo.png"}
                                            alt=""
                                            className="h-auto object-contain"
                                            style={{ width: 320 }}
                                        />
                                    </div>
                                    {/* <div className="flex justify-center items-center mb-6">
                                        <h1 className="text-white text-3xl md:text-6xl uppercase text-center font-bold">Misto App</h1>
                                    </div>
                                    <div className="flex flex-col justify-center items-center w-full mb-6">
                                        <p className="text-white text-base py-2 text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <p className="text-white text-base py-2 text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <p className="text-white text-base py-2 text-center">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </div> */}
                                    {/* <div className="flex flex-col justify-center items-center w-full">

                                        <IconsStore class_add="" background={"transparent"} />
                                    </div> */}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            style={{
                                opacity: opacity_overlay,
                                zIndex: 2,
                                perspective: 1000,
                                height: 'calc(100vh - 5rem)',
                                overflow: 'hidden'
                            }}
                            ref={refOverlay}
                            id="first_container"
                            className="w-full">
                            <motion.div
                                style={{
                                    opacity: opacity_image
                                }}
                                className="flex h-full w-full justify-center items-center">
                                {/* Left Phone */}
                                <motion.div
                                    style={{
                                        x: xFirstImage,
                                        z: 0,
                                        opacity: opacity_image_lr,
                                        zIndex: 1
                                    }}
                                    className="absolute">
                                    <picture>
                                        <source srcSet={'/images/phone.webp'} type="image/webp" />
                                        <motion.img
                                            style={{ width: 400, height: heightImage }}
                                            src={'/images/phone.png'}
                                            alt=""
                                            className="object-contain"
                                        />
                                    </picture>
                                </motion.div>

                                {/* Right Phone */}
                                <motion.div
                                    style={{
                                        x: xSecondImage,
                                        z: 0,
                                        opacity: opacity_image_lr,
                                        zIndex: 1
                                    }}
                                    className="absolute">
                                    <picture>
                                        <source srcSet="/images/phone.webp" type="image/webp" />
                                        <motion.img
                                            src="/images/phone.png"
                                            style={{ width: 400, height: heightImage }}
                                            className="object-contain"
                                            alt="" />
                                    </picture>
                                </motion.div>

                                {/* Center Phone */}
                                <motion.div
                                    style={{
                                        rotate: rotate_image,
                                        scale: scale_image,
                                        zIndex: 10
                                    }}
                                    className="absolute"
                                >
                                    <picture>
                                        <source srcSet="/images/phone.webp" type="image/webp" />
                                        <motion.img
                                            ref={refImage}
                                            src="/images/phone.png"
                                            alt=""
                                            className="object-contain"
                                            style={{ width: 400, height: 600 }} />
                                    </picture>
                                    <picture>
                                        <source srcSet="/images/phone2.webp" type="image/webp" />
                                        <motion.img
                                            ref={refLogo}
                                            src="/images/phone2.png"
                                            alt=""
                                            className="object-contain"
                                            style={{ width: 400, height: 600, display: 'none' }} />
                                    </picture>
                                </motion.div>
                            </motion.div>

                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
