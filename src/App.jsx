import React from "react";
import { motion } from "motion/react";

const App = () => {
  return (
    <div>
      <motion.div
        animate={{
          x: [0, 800, 800, 0, 0],
          y: [0, 0, 300, 300, 0],
          rotate: [0, 360, 0, -360, 0],
        }}
        transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
        className="box"
      ></motion.div>
    </div>
  );
};

export default App;
