import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { BrandGooglePlay } from '../Icons';
import CountUp from 'react-countup';
import { initialAnimationCounters, startAnimationCounters } from '../../utils/animations';
import { useInView } from 'react-intersection-observer';

export default function CountersPlayStore({ }) {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.4
    });
    React.useEffect(() => {
        if (inView) {
            controls.start("start");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            variants={{
                init: initialAnimationCounters,
                start: startAnimationCounters
            }}
            initial="init"
            transition={{ duration: 1.2 }}
            className="flex flex-col w-full sm:w-1/2 lg:w-1/4 justify-center items-center py-6 md:py-1">
            <BrandGooglePlay />
            <p className="text-white text-3xl py-2">{inView && <CountUp start={125875} end={185621} duration={1.2} />}</p>
            <p className="text-white text-base">Download</p>
        </motion.div>
    )
}