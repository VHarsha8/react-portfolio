import React, { useEffect } from "react";
import gsap from "gsap";
import Splitting from "splitting";
import "splitting/dist/splitting.css"; // Importing Splitting CSS for character classes

const TextAnimation = () => {
  useEffect(() => {
    // Initialize SplitType (no need to store the result in a variable)
    Splitting({ target: '#my-text', by: 'chars' });

    // GSAP animation for text reveal
    gsap.from('.char', {
      y: '100%',
      stagger: 0.05,
      delay: 0.2,
      duration: 2,
      ease: 'easeOut',
    });
  }, []);

  return (
    <header className="grid h-screen place-content-center">
      <h1 id="my-text" className="uppercase text-8xl font-bebas clip-path-polygon whitespace-nowrap">
        Harshavardhan
      </h1>
    </header>
  );
};

export default TextAnimation;
