import React, { useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";


export default function Card(props) {

  const [open, setOpen] = useState(false);
  //const [navHidden, setNavHidden] = useState(false);

  return (
    <AnimateSharedLayout>
      {open ? (
        <motion.div
          onClick={() => setOpen(false)}
          className={props.classexpandedCard}
          layoutId="expandable-card"
        >
          <img
            src={props.expandedImg}
            alt="projectImg"
            className={props.classExpandedImg}
          />
          <motion.div className={props.info}>
            <motion.h2 className="expanded-card-h" layoutId="expandable-card-h">
              {props.expandedH2}
            </motion.h2>

            <a href={props.anchor} target="_blank" rel="noopener noreferrer">
              {props.anchorText}
            </a>

            <p>{props.expandedP}</p>
          </motion.div>
        </motion.div>
      ) : (

        <motion.div
          onClick={() => setOpen(true)}
          className={props.normalCard}
          layoutId="expandable-card"
          style={{
            backgroundImage: "url('" + props.imagesm + "')"
          }}
          whileHover={{
        scale: 1.1,
      }}
        >
          <motion.h1 layoutId="expandable-card-h">{props.titleh1}</motion.h1>
        </motion.div>
      )}
    </AnimateSharedLayout>
  );
}
