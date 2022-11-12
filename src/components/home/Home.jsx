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
import { Hero } from '../hero/Hero';
const Start = () => {
    let w = window.innerWidth;
    let h = window.innerHeight;
    let stars = [];
    for (let i = 0; i < 250; i++) {
        let wRan = Math.floor(Math.random() * w);
        let hRan = Math.floor(Math.random() * h);
        stars.push((
            <div key={i} className="star" style={{
                bottom: `${hRan}px`,
                right: `${wRan}px`,
            }} />
        ));
    };
    return stars;
};

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
            <Start />
            <div ref={ref}>
                <img src={`https://th.bing.com/th/id/R.de5810da599edbc55e01d69990906512?rik=bPl3yVxDO8j82w&pid=ImgRaw&r=0`} alt="A London skyscraper" />
            </div>
            <motion.h2 style={{ y }}>{`#0${id}`}</motion.h2>
        </section>
    );
}
const NavList = () => {
    return (
        <div className="fp-nav">
            <ul className="fp-nav__ul">
                <li className="fp-nav__ul__li">
                    <div className="indi active" />
                </li>
                <li className="fp-nav__ul__li">
                    <div className="indi" />
                </li>
                <li className="fp-nav__ul__li">
                    <div className="indi" />
                </li>
                <li className="fp-nav__ul__li">
                    <div className="indi" />
                </li>
            </ul>
        </div>
    )
}

export default function Home() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className='container-section-home'>
            <Start />
            <Hero />
            {[1, 2, 3, 4, 5].map((image) => (
                <Image id={image} />
            ))}
            <NavList />
            <motion.div className="progress" style={{ scaleX }} />
        </div>
    );
}
