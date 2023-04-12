import React from "react";
import Typewriter from "typewriter-effect";
const TypeWriter = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Frontend Developer",
          "Self-Learner",
          "Content Creator",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default TypeWriter;
