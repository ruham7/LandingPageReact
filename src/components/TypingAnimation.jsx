import Typed from "typed.js";
import { useEffect, useRef } from "react";

const TypingAnimation = () => {
  const typingRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: ["^2000 Hello World", "^2000 Bye Bye", "^2000 Ruhama"],
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
      className="md:text-5xl sm:text-4xl text-xl font-base text-gray-400"
      ref={typingRef}
    />
  );
};

export default TypingAnimation;
