import { useState, useEffect } from "react";

function useWindowResize() {
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    const getWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    getWidth();

    window.addEventListener("resize", getWidth);
    return () => window.removeEventListener("resize", getWidth);
  }, []);
  return windowWidth;
}

export default useWindowResize;
