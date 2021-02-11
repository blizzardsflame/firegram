import React from "react";
import { motion } from "framer-motion";

const Title = () => {
  return (
    <div className="title">
      <h1>FireGram</h1>
      <h2>
        Gallery
        <motion.div
          className="underline-title"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        ></motion.div>
      </h2>
      <p>Here's all of your pictures.</p>
    </div>
  );
};

export default Title;
