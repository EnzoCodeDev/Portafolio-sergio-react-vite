import * as React from "react";
import { motion } from "framer-motion";

const variantsLi = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const variantsUl = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};


const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
let listItems = [
    {
        title: 'Inicio'
    },
    {
        title: 'Inicio'
    },
    {
        title: 'Inicio'
    },
    {
        title: 'Inicio'
    },
    {
        title: 'Inicio'
    },
];

export const MenuItem = () => {
    const style = { border: `2px solid ${colors[0]}` };
    return (
        <motion.ul variants={variantsUl}>
            {listItems.map((item, index) => (
                <motion.li
                    key={index}
                    variants={variantsLi}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="container-title">
                        <span>{item['title']}</span>
                        <div className="raya"></div>
                    </div>
                </motion.li>
            ))}
        </motion.ul>
    );
};
