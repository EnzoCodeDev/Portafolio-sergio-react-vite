// Photos from https://citizenofnowhe.re/lines-of-the-city
import './home.scss';
import { useRef, useState, useEffect } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion";

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }) {
    const ref = useRef(null);
    const [state, setState] = useState(false);
    useEffect(() => {
        setState(true);
    }, [state]);

    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
        <section>
            <div ref={ref}>
                <img src={`https://th.bing.com/th/id/R.de5810da599edbc55e01d69990906512?rik=bPl3yVxDO8j82w&pid=ImgRaw&r=0`} alt="A London skyscraper" />
            </div>
            <motion.h2 style={{ y }}>{`#0${id}`}</motion.h2>
        </section>
    );
}

export default function Home() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            {[1, 2, 3, 4, 5].map((image) => (
                <Image id={image} />
            ))}
            <motion.div className="progress" style={{ scaleX }} />
        </>
    );
}
