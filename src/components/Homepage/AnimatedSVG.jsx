import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSVG = () => {
  return (
    <div style={{backgroundColor: 'transparent'}}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="1500"
        height="1259"
        viewBox="0 0 1352 1115"
      >
        <motion.path
          d="M1213.45 99.8359C1322.07 335.861 1392.21 851.683 803.724 1026.77C215.241 1201.86 593.867 301.491 810.504 485.914C968.382 615.45 507.215 968.669 308.752 941.158C60.6731 906.768 -82.2495 634.496 304.355 35.8084"
          stroke="#F5FDBF"
          strokeWidth="130"
          initial={{ pathLength: .5 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 }}
          fill= "none"
        />
      </motion.svg>
    </div>
  );
};

export default AnimatedSVG;
