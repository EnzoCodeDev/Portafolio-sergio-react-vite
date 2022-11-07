import "./hero.scss";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./use-follow-pointer";
import { WiWindy } from "react-icons/wi";
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
const Moon = () => {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);
    return (
        <motion.div
            ref={ref}
            className="box"
            animate={{
                x: -x / 15 + 80,
                y: (-y / 15) - 55,
            }}
            transition={{
                type: "spring",
                damping: 10,
                stiffness: 100,
                restDelta: 0.001
            }}
        >
            <motion.div className="crater crater1" />
            <motion.div className="crater crater2" />
            <motion.div className="crater crater3" />
        </motion.div>
    )
};
export default function Hero() {
    return (
        <div className="container-hero">
            <Start />
            <Moon />
        </div>
    );
}