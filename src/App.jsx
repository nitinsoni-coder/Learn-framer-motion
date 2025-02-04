import React from "react";
import { motion } from "motion/react";

const App = () => {
  return (
    <div>
      <motion.div
        animate={{ x: 800, rotate: 360 }}
        transition={{ duration: 1, delay: 0.5, repeat: Infinity }}
        className="box"
      ></motion.div>
    </div>
  );
};

export default App;
