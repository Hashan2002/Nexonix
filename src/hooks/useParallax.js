import { useEffect, useState } from "react";

export function useParallax(speed = 0.05) {
  const [offsetX, setOffsetX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetX(window.scrollY * speed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return offsetX;
}
