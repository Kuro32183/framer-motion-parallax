import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import IconsStore from './IconsStore';

const initialAnimation = {
    y: 150,
    opacity: 0
}

const startAnimation = {
    y: 0,
    opacity: 1
}

const initialAnimationVideo = {
    opacity: 0
}

const startAnimationVideo = {
    opacity: 1
}

const TitlePresentazione = ({ }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.2
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
                init: initialAnimation,
                start: startAnimation
            }}
            initial="init"
            transition={{ duration: 1 }}
            className="flex flex-col justify-center items-center px-4 sm:px-0 mb-6">
            <h2 className="text-app text-2xl sm:text-4xl pb-2 text-center font-bold">Misto, Your App</h2>
            <h2 className="text-app text-2xl sm:text-2xl py-2">Download App</h2>
            <IconsStore class_add="" background={'bg-app'} />
        </motion.div>
    )

}

const HomeVideoPresentazione = ({ }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.2
    });

    const [viewVideo, setViewVideo] = React.useState(false);

    React.useEffect(() => {
        if (inView) {
            setViewVideo(true);
            controls.start("start");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            variants={{
                init: initialAnimationVideo,
                start: startAnimationVideo
            }}
            initial="init"
            transition={{ delay: 0.2, duration: 1 }}
            className="content-iframe-video">
            {!viewVideo && <div className="iframe-video" style={{ width: '100%', height: '100%', background: '#f1f1f1' }}></div>}
            {viewVideo && <iframe className="iframe-video" title="" src={'https://www.youtube.com/embed/5QNl0RQDm5U'} frameBorder="0" width="100%" height="100%" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"></iframe>}
        </motion.div>
    )

}

export default function Presentazione() {
    return (<div className="relative bg-white">
        <div className="container mx-auto py-12">
            <div className="flex flex-col">
                <TitlePresentazione />
                <div className="flex justify-center relative">
                    <HomeVideoPresentazione />
                </div>
            </div>
        </div>
    </div>);
}