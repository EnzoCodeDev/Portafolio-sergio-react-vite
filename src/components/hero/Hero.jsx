import "./hero.scss";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./use-follow-pointer";
import { Clouds } from "../clouds/Clouds";
const Moon = () => {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);
    const cloudsArray = [1, 2, 3, 4];
    return (
        <React.Fragment>
            <div className="container-moon">
                <motion.div
                    ref={ref}
                    className="container-moon__moon"
                    animate={{
                        x: -x / 25 + 80,
                        y: (-y / 25) - 55,
                    }}
                    transition={{
                        type: "spring",
                        damping: 10,
                        stiffness: 100,
                        restDelta: 0.001
                    }}
                >
                    <motion.div className="container-moon__moon__crater container-moon__moon__crater1" />
                    <motion.div className="container-moon__moon__crater container-moon__moon__crater2" />
                    <motion.div className="container-moon__moon__crater container-moon__moon__crater3" />
                </motion.div>
                {cloudsArray.map((number, index) => (
                    <motion.div
                        key={index}
                        ref={ref}
                        className={`container-moon__cloud-${number}`}
                        animate={{
                            x: -x / 50 + 80,
                            y: (-y / 50) - 55,
                        }}
                        transition={{
                            type: "spring",
                            damping: 10,
                            stiffness: 100,
                            restDelta: 0.001
                        }}
                    >
                        <Clouds />
                    </motion.div>
                ))}
            </div>
        </React.Fragment>
    )
};
export const Hero = () => {
    return (
        <section>
            <div className="container-hero">
                <div className="container-hero__title">
                    <h1 className="container-hero__title__text">SERGIO<br />CANO</h1>
                    <div className="container-hero__title__span" />
                    <div className="container-hero__title__span2" />
                    <p className="container-hero__title__lead">Programador de software</p>
                </div>
                <Moon />
                <p className="container-hero__scrollDown">DESPLÁCESE HACIA ABAJO</p>
            </div>
        </section>
    );
}