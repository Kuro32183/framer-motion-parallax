import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import Function1 from './Functions/Function1';
import Function2 from './Functions/Function2';
import Function3 from './Functions/Function3';
import Function4 from './Functions/Function4';
import Function5 from './Functions/Function5';


const initialAnimation = {
    y: 150,
    opacity: 0
}

const startAnimation = {
    y: 0,
    opacity: 1
}



export function HomeFunzioniMobileHide() {
    return <React.Fragment />
}


const Component1 = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.2
    });

    React.useEffect(() => {
        if (inView) {
            controls.start("start");
        }
    }, [controls, inView]);

    return (<motion.div
        ref={ref}
        animate={controls}
        variants={{
            init: initialAnimation,
            start: startAnimation
        }}
        initial="init"
        transition={{ duration: 1 }}
        className="flex flex-col py-2">
        <div className="flex flex-col h-full justify-center">
           <Function1 />
        </div>
        <div className="flex justify-center items-center my-2">
            <picture>
                <source srcSet={"/images/phone.webp"} type="image/webp" />
                <img src="/images/phone.png" alt="" className="object-contain" style={{ width: 350, height: 500 }} />
            </picture>
        </div>
    </motion.div>)
}

const Component2 = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.2
    });
    React.useEffect(() => {
        if (inView) {
            controls.start("start");
        }
    }, [controls, inView]);

    return (<motion.div
        ref={ref}
        animate={controls}
        variants={{
            init: initialAnimation,
            start: startAnimation
        }}
        initial="init"
        transition={{ duration: 1 }}
        className="flex flex-col py-2">
        <div className="flex flex-col h-full justify-center">
        <Function2 />
        </div>
        <div className="flex justify-center items-center my-2">
            <picture>
                <source srcSet={"/images/phone2.webp"} type="image/webp" />
                <img src="/images/phone2.png" alt="" className="object-contain" style={{ width: 350, height: 500 }} />
            </picture>
        </div>
    </motion.div>)
}

const Component3 = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.2
    });
    React.useEffect(() => {
        if (inView) {
            controls.start("start");
        }
    }, [controls, inView]);

    return (<motion.div
        ref={ref}
        animate={controls}
        variants={{
            init: initialAnimation,
            start: startAnimation
        }}
        initial="init"
        transition={{ duration: 1 }}
        className="flex flex-col py-2">
        <div className="flex flex-col h-full justify-center">
        <Function3 />
        </div>
        <div className="flex justify-center items-center my-2">
            <picture>
                <source srcSet={"/images/phone.webp"} type="image/webp" />
                <img src="/images/phone.png" alt="" className="object-contain" style={{ width: 350, height: 500 }} />
            </picture>
        </div>
    </motion.div>)
}

const Component4 = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.2
    });
    React.useEffect(() => {
        if (inView) {
            controls.start("start");
        }
    }, [controls, inView]);

    return (<motion.div
        ref={ref}
        animate={controls}
        variants={{
            init: initialAnimation,
            start: startAnimation
        }}
        initial="init"
        transition={{ duration: 1 }}
        className="flex flex-col py-2">
        <div className="flex flex-col h-full justify-center">
        <Function4 />
        </div>
        <div className="flex justify-center items-center my-2">
            <picture>
                <source srcSet={"/images/phone2.webp"} type="image/webp" />
                <img src="/images/phone2.png" alt="" className="object-contain" style={{ width: 350, height: 500 }} />
            </picture>
        </div>
    </motion.div>)
}

const Component5 = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.2
    });
    React.useEffect(() => {
        if (inView) {
            controls.start("start");
        }
    }, [controls, inView]);

    return (<motion.div
        ref={ref}
        animate={controls}
        variants={{
            init: initialAnimation,
            start: startAnimation
        }}
        initial="init"
        transition={{ duration: 1 }}
        className="flex flex-col py-2">
        <div className="flex flex-col h-full justify-center">
        <Function5 />
        </div>
    </motion.div>)
}

export function HomeFunzioniMobile() {

    return <div className="px-4 bg-white py-12">
        <Component1 />
        <Component2 />
        <Component3 />
        <Component4 />
        <Component5 />
    </div>
}