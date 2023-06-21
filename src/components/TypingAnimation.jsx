import Typed from "typed.js";
import { useEffect, useRef } from "react";

const TypingAnimation = () => {
  const typingRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: ["^2000 Hello World", "^3000 Bye Bye"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 3000,
      loop: true,
      showCursor: true,
    };
    const typingInstance = new Typed(typingRef.current, options);
    return () => {
      typingInstance.destroy();
    };
  }, []);
  return (
    <span
      className="md:text-5xl sm:text-4xl text-xl font-base"
      ref={typingRef}
    />
  );
};

export default TypingAnimation;
